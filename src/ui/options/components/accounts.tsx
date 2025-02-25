import { t } from '@/util/i18n';
import ScrobbleService, {
	Scrobbler,
	ScrobblerLabel,
} from '@/core/object/scrobble-service';
import {
	For,
	Show,
	createMemo,
	Match,
	Switch,
	createResource,
	createSignal,
	onCleanup,
} from 'solid-js';
import styles from './components.module.scss';
import browser from 'webextension-polyfill';
import Delete from '@suid/icons-material/DeleteOutlined';
import Save from '@suid/icons-material/SaveOutlined';
import AutoRenew from '@suid/icons-material/AutorenewOutlined';
import Check from '@suid/icons-material/CheckOutlined';
import { debugLog } from '@/util/util';
import { sendContentMessage } from '@/util/communication';
import { Dynamic } from 'solid-js/web';

/**
 * Properties associated with each scrobbler, and the input type to use for the user to edit them.
 */
const scrobblerPropertiesMap = {
	ListenBrainz: {
		userApiUrl: {
			type: 'text',
			title: 'accountsUserApiUrl',
			placeholder: 'accountsUserApiUrlPlaceholder',
		},
		userToken: {
			type: 'password',
			title: 'accountsUserToken',
			placeholder: 'accountsUserTokenPlaceholder',
		},
	},
	Maloja: {
		userApiUrl: {
			type: 'text',
			title: 'accountsUserApiUrl',
			placeholder: 'accountsUserApiUrlPlaceholder',
		},
		userToken: {
			type: 'password',
			title: 'accountsUserToken',
			placeholder: 'accountsUserTokenPlaceholder',
		},
	},
};

/**
 * Properties associated with each scrobbler that are stored as an array with items add-and-removable, and the type of input to use to edit them.
 */
const scrobblerArrayPropertiesMap = {
	Webhook: {
		applicationName: {
			type: 'text',
			title: 'accountsApplicationName',
			placeholder: 'accountsApplicationNamePlaceholder',
		},
		userApiUrl: {
			type: 'text',
			title: 'accountsUserApiUrl',
			placeholder: 'accountsUserApiUrlPlaceholder',
		},
	},
};

/**
 * Component that allows the user to sign in and out of their scrobbler accounts
 */
export default function Accounts() {
	return (
		<>
			<h1>{t('optionsAccounts')}</h1>
			<ScrobblerDisplay label="Last.fm" />
			<ScrobblerDisplay label="Libre.fm" />
			<ScrobblerDisplay label="ListenBrainz" />
			<ScrobblerDisplay label="Maloja" />
			<ScrobblerDisplay label="Webhook" />
		</>
	);
}

/**
 * Component that allows the user to sign in and out of a specific scrobbler
 */
function ScrobblerDisplay(props: { label: ScrobblerLabel }) {
	const rawScrobbler = createMemo(() =>
		ScrobbleService.getScrobblerByLabel(props.label),
	);
	const [session, setSession] = createResource(() => {
		const scrobbler = rawScrobbler();
		if (scrobbler) {
			return scrobbler.getSession();
		}
	});
	const [profileUrl, setProfileUrl] = createResource(() => {
		const scrobbler = rawScrobbler();
		if (scrobbler) {
			return scrobbler.getProfileUrl();
		}
	});

	const onFocus = async () => {
		try {
			if (await rawScrobbler()?.isReadyForGrantAccess()) {
				await rawScrobbler()?.getSession();
				setSession.refetch();
				setProfileUrl.refetch();
			}
		} catch (err) {
			debugLog(
				`${rawScrobbler()?.getLabel()}: Error while fetching session`,
				'warn',
			);
			debugLog(err, 'warn');
		}
	};
	const onFocusWrapper = () => {
		void onFocus();
	};
	window.addEventListener('focus', onFocusWrapper);
	onCleanup(() => window.removeEventListener('focus', onFocusWrapper));

	return (
		<>
			<h2>{rawScrobbler()?.getLabel()}</h2>
			<Switch fallback={<SignedOut scrobbler={rawScrobbler()} />}>
				<Match when={rawScrobbler()?.isLocalOnly}>
					<Show when={!session.error && session()}>
						<p>
							{t(
								'accountsSignedInAs',
								session()?.sessionName || 'anonymous',
							)}
						</p>
					</Show>
				</Match>
				<Match when={!session.error && session()}>
					<p>
						{t(
							'accountsSignedInAs',
							session()?.sessionName || 'anonymous',
						)}
					</p>
					<div class={styles.buttonContainer}>
						<a
							class={styles.linkButton}
							href={profileUrl.error ? '#' : profileUrl()}
							target="_blank"
							rel="noopener noreferrer"
						>
							{t('accountsProfile')}
						</a>
						<button
							class={styles.resetButton}
							onClick={() =>
								void (async () => {
									await rawScrobbler()?.signOut();
									setSession.refetch();
									setProfileUrl.refetch();
								})()
							}
						>
							{t('accountsSignOut')}
						</button>
					</div>
				</Match>
			</Switch>
			<Properties scrobbler={rawScrobbler()} />
			<ArrayProperties scrobbler={rawScrobbler()} />
		</>
	);
}

/**
 * Text to show when a user is not signed into a scrobbler.
 */
function SignedOut(props: { scrobbler: Scrobbler | null }) {
	return (
		<>
			<p>{t('accountsNotSignedIn')}</p>
			<button
				class={styles.resetButton}
				onClick={() =>
					void (async () => {
						const url = await props.scrobbler?.getAuthUrl();
						if (!url) {
							return new Error('No auth URL');
						}
						await browser.tabs.create({ url });
					})()
				}
			>
				{t('accountsSignIn')}
			</button>
		</>
	);
}

enum SaveState {
	BASE = 'base',
	SAVING = 'saving',
	SAVED = 'saved',
}

/**
 * Save button component.
 * This button doesn't actually do anything as the extension autosaves, but better user feedback :)
 */
function SaveButton() {
	const [state, setState] = createSignal(SaveState.BASE);

	const icons = {
		[SaveState.BASE]: Save,
		[SaveState.SAVING]: AutoRenew,
		[SaveState.SAVED]: Check,
	};

	return (
		<button
			class={styles.resetButton}
			onClick={() => {
				if (state() !== SaveState.SAVING) {
					setState(SaveState.SAVING);
					setTimeout(() => {
						setState(SaveState.SAVED);
					}, 850);
				}
			}}
		>
			<div class={`${styles[`${state()}SaveIcon`]} ${styles.saveIcon}`}>
				<Dynamic component={icons[state()]} />
			</div>
			Save
		</button>
	);
}

/**
 * Component that allows the user to edit scrobbler properties for the scrobblers that support them.
 */
function Properties(props: { scrobbler: Scrobbler | null }) {
	const [properties, setProperties] = createResource(() => {
		if (props.scrobbler) {
			return props.scrobbler.getUserProperties();
		}
	});
	const narrowedLabel = createMemo(() => {
		const label = props.scrobbler?.getLabel();
		if (labelHasProperties(label)) {
			return label;
		}
	});
	return (
		<Show when={narrowedLabel()}>
			{(label) => (
				<>
					<h3>{t('accountsScrobblerProps')}</h3>
					<For each={Object.entries(scrobblerPropertiesMap[label()])}>
						{([key, { type, title, placeholder }]) => {
							const typedKey =
								key as keyof (typeof scrobblerPropertiesMap)[ReturnType<
									typeof label
								>];
							return (
								<label class={styles.propLabel}>
									{t(title)}
									<input
										class={styles.propInput}
										type={type}
										value={properties()?.[typedKey] || ''}
										placeholder={t(placeholder)}
										onInput={(e) => {
											const scrobbler = props.scrobbler;
											setProperties.mutate((o) => {
												let data = o;
												if (!data) {
													data = {};
												}
												data[typedKey] =
													e.currentTarget.value;
												scrobbler
													?.applyUserProperties(data)
													.then(() => {
														sendContentMessage({
															type: 'updateScrobblerProperties',
															payload: void 0,
														});
													});
												return data;
											});
										}}
									/>
								</label>
							);
						}}
					</For>
					<SaveButton />
				</>
			)}
		</Show>
	);
}

function ArrayProperties(props: { scrobbler: Scrobbler | null }) {
	const [properties, setProperties] = createResource(() => {
		if (props.scrobbler) {
			return props.scrobbler.getArrayProperties();
		}
	});
	const narrowedLabel = createMemo(() => {
		const label = props.scrobbler?.getLabel();
		if (labelHasArrayProperties(label)) {
			return label;
		}
	});
	const newProps = {
		applicationName: '',
		userApiUrl: '',
	};
	return (
		<Show when={narrowedLabel()}>
			{(label) => (
				<>
					<h3>{t('accountsScrobblerProps')}</h3>
					<div class={styles.arrayPropWrapper}>
						<For each={properties()}>
							{(item, index) => (
								<div class={styles.arrayProps}>
									<button
										class={styles.deleteEditButton}
										onClick={() => {
											const scrobbler = props.scrobbler;
											const curIndex = index();
											setProperties.mutate((o) => {
												let data = o;
												if (!data) {
													data = [];
												}
												if (data.length <= curIndex) {
													return data;
												}
												data = [
													...data.slice(0, curIndex),
													...data.slice(curIndex + 1),
												];
												scrobbler
													?.applyUserArrayProperties(
														data,
													)
													.then(() => {
														sendContentMessage({
															type: 'updateScrobblerProperties',
															payload: void 0,
														});
													});
												return data;
											});
										}}
									>
										<Delete />
									</button>
									<For each={Object.values(item)}>
										{(val) => (
											<span class={styles.arrayProp}>
												{val}
											</span>
										)}
									</For>
								</div>
							)}
						</For>
					</div>
					<For
						each={Object.entries(
							scrobblerArrayPropertiesMap[label()],
						)}
					>
						{([key, { type, title, placeholder }]) => {
							const typedKey =
								key as keyof (typeof scrobblerArrayPropertiesMap)[ReturnType<
									typeof label
								>];
							return (
								<label class={styles.propLabel}>
									{t(title)}
									<input
										class={styles.propInput}
										type={type}
										placeholder={t(placeholder)}
										onInput={(e) => {
											newProps[typedKey] =
												e.currentTarget.value;
										}}
									/>
								</label>
							);
						}}
					</For>
					<button
						class={styles.resetButton}
						onClick={() => {
							const scrobbler = props.scrobbler;
							setProperties.mutate((o) => {
								let data = o;
								if (!data) {
									data = [];
								}
								scrobbler
									?.addUserArrayProperties(newProps)
									.then(() => {
										sendContentMessage({
											type: 'updateScrobblerProperties',
											payload: void 0,
										});
									});
								return [...data, newProps];
							});
						}}
					>
						{t('accountsAddWebhook')}
					</button>
				</>
			)}
		</Show>
	);
}

/**
 * Check if a scrobbler has user-set properties associated with it.
 *
 * @param label - scrobbler to check if has properties
 * @returns true if scrobbler has properties, false if not
 */
function labelHasProperties(
	label: string | undefined,
): label is keyof typeof scrobblerPropertiesMap {
	if (!label) {
		return false;
	}
	return label in scrobblerPropertiesMap;
}

/**
 * Check if a scrobbler has user-set array properties associated with it.
 *
 * @param label - scrobbler to check if has array properties
 * @returns true if scrobbler has array properties, false if not
 */
function labelHasArrayProperties(
	label: string | undefined,
): label is keyof typeof scrobblerArrayPropertiesMap {
	if (!label) {
		return false;
	}
	return label in scrobblerArrayPropertiesMap;
}
