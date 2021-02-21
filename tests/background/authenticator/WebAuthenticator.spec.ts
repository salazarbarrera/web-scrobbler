import { expect } from 'chai';

import { WebSessionProviderStub } from '#/stub/WebSessionProviderStub';
import { describeModuleTest } from '#/helpers/util';
import { dummySession } from '#/stub/DummySession';
import { tabOpenerStub } from '#/stub/TabOpenerStub';

import { WebAuthenticator } from '@/background/authenticator/WebAuthenticator';
import type { WebSessionProvider } from '@/background/scrobbler/session-provider/WebSessionProvider';

describeModuleTest(__filename, () => {
	it('should return session', async () => {
		const authenticator = createWebAuthenticator(
			new WebSessionProviderStub()
		);
		const session = await authenticator.requestSession();

		expect(session.getId()).to.be.deep.equal(dummySession.getId());
		expect(session.getName()).to.be.deep.equal(dummySession.getName());
	});

	it('should throw an error if requesting session is failed', () => {
		const authenticator = createWebAuthenticator(
			new WebSessionProviderStub({ failRequestSession: true })
		);

		return expect(
			authenticator.requestSession()
		).to.eventually.rejectedWith('Unable to request session');
	});
});

function createWebAuthenticator(
	sessionProvider: WebSessionProvider
): WebAuthenticator {
	return new WebAuthenticator(tabOpenerStub, sessionProvider);
}