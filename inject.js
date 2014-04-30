/**
 * All connectors are defined here, instead of manifest.
 *
 * Matching connector is injected to the page after document_end event.
 *
 * Do not include jQuery - it is included by default.
 *
 *
 * Supported fields:
 *
 *    label
 *          - label to be shown in options to enable/disable the connector
 *          - be careful with renaming, as connector disable state depends on the label
 *
 *    matches
 *          - array of positive matches in format described in Chrome Ext. Dev. guide
 *          - connectors are processed in order and the first match is used; you can use
 *            this behaviour to emulate exclude matches
 *
 *    js
 *          - array of paths of files to be executed
 *          - all executions happen on or after 'document_end'
 *
 *    allFrames (optional)
 *          - boolean value representing InjectDetails.allFrames
 *          - FALSE by default
 *
 */
var connectors = [
    {
        label: "Baidu Music",
        matches: ["*://play.baidu.com/*"],
        js: ["connectors/baidu.js"]
    },

    {
        label: "YouTube",
        matches: ["*://www.youtube.com/watch*", "*://www.youtube.com/user/*"],
        js: ["connectors/youtube.js"]
    },

    {
        label: "TTNET Müzik",
        matches: ["*://www.ttnetmuzik.com.tr/*"],
        js: ["connectors/ttnet.js"]
    },

    {
        label: "Thesixtyone",
        matches: ["*://www.thesixtyone.com/*"],
        js: ["connectors/61.js"]
    },

    {
        label: "Google Play Music",
        matches: ["*://play.google.com/music/*"],
        js: ["connectors/googlemusic.js"]
    },

    {
        label: "MySpace",
        matches: ["*://myspace.com/*"],
        js: ["connectors/myspace.js"]
    },

    {
        label: "Pitchfork",
        matches: ["*://pitchfork.com/*", "*://www.pitchfork.com/*"],
        js: ["connectors/pitchfork.js"]
    },

    {
        label: "Fizy",
        matches: ["*://fizy.com/*", "*://fizy.org/*"],
        js: ["connectors/fizy.js"]
    },

    {
        label: "Virgin Radio Turkiye",
        matches: ["*://*.virginradioturkiye.com/*", "*://*.radioeksen.com/*"],
        js: ["connectors/virginradiotr.js"]
    },

    {
        label: "Ghostly Discovery",
        matches: ["http://ghostly.com/discovery/play"],
        js: ["connectors/ghostly.js"]
    },

    {
        label: "Bandcamp",
        matches: ["*://*.bandcamp.com/*"],
        js: ["connectors/bandcamp.js"]
    },

    {
        label: "Jango",
        matches: ["*://www.jango.com/*"],
        js: ["connectors/jango.js", "connectors/jango-dom-inject.js"]
    },

    {
        label: "Pandora",
        matches: ["*://www.pandora.com/*"],
        js: ["connectors/pandora.js"]
    },

    {
        label: "Deezer",
        matches: ["*://www.deezer.com/*"],
        js: ["connectors/deezer.js"]
    },

    {
        label: "SoundCloud",
        matches: ["*://soundcloud.com/*"],
        js: ["connectors/soundcloud.js"]
    },

    {
        label: "Amazon",
        matches: ["*://www.amazon.com/gp/dmusic/mp3/player*", "*://www.amazon.de/gp/dmusic/mp3/player*", "*://www.amazon.es/gp/dmusic/mp3/player*", "*://www.amazon.co.uk/gp/dmusic/mp3/player*"],
        js: ["connectors/amazon.js"]
    },

    { // DEAD?
        label: "Z-Music",
        matches: ["*://z-music.org/*"],
        js: ["connectors/zmusic.js"]
    },

    {
        label: "VK",
        matches: ["*://vk.com/*"],
        js: ["connectors/vk.js"]
    },

    {
        label: "Zvooq",
        matches: ["*://zvooq.ru/*"],
        js: ["connectors/zvooq.js"]
    },

    {
        label: "Weborama",
        matches: ["*://www.weborama.fm/*"],
        js: ["connectors/weborama.js"],
        allFrames: true
    },

    {
        label: "22 Tracks",
        matches: ["*://22tracks.com/*"],
        js: ["connectors/22tracks.js"]
    },

    {
        label: "Megalyrics",
        matches: ["*://megalyrics.ru/*"],
        js: ["connectors/megalyrics.js"],
        allFrames: true
    },

    {
        label: "iHeart",
        matches: ["*://*.iheart.com/*"],
        js: ["connectors/iheart.js"]
    },

    {
        label: "Indie Shuffle",
        matches: ["*://www.indieshuffle.com/*"],
        js: ["connectors/indieshuffle.js"]
    },

    {
        label: "Tuba.FM",
        matches: ["*://fm.tuba.pl/*"],
        js: ["connectors/tubafm.js"]
    },

    {
        label: "Spotify",
        matches: ["https://play.spotify.com/*"],
        js: ["connectors/spotify.js"]
    },

    {
        label: "Grooveshark",
        matches: ["*://grooveshark.com/*"],
        js: ["connectors/grooveshark.js"]
    },

    {
        label: "Plug.dj",
        matches: ["http://plug.dj/*"],
        js: ["connectors/plugdj.js"]
    },

    {
        label: "Turntable",
        matches: ["*://turntable.fm/*"],
        js: ["connectors/turntable.js"]
    },

    {
        label: "Slacker (iframe)",
        matches: ["*://www.slacker.com/webplayer/index_embed.vm"],
        js: ["connectors/slacker.js"]
    },

    {
        label: "Slacker (main page)",
        matches: ["*://www.slacker.com/*"],
        js: ["connectors/slacker2.js"]
    },

    {
        label: "Daytrotter",
        matches: ["*://www.daytrotter.com/*"],
        js: ["connectors/daytrotter.js"]
    },

    {
        label: "AOL Radio",
        matches: ["*://aolradio.slacker.com/*"],
        js: ["connectors/aolradio.js"]
    },

    {
        label: "HillyDilly",
        matches: ["*://www.hillydilly.com/*"],
        js: ["connectors/hillydilly.js"]
    },

    {
        label: "Xbox Music",
        matches: ["*://music.xbox.com/*"],
        js: ["connectors/xboxmusic.js"]
    },

    {
        label: "8tracks",
        matches: ["*://8tracks.com/*"],
        js: ["connectors/8tracks.js"]
    },

    {
        label: "Moje Polskie Radio",
        matches: ["*://moje.polskieradio.pl/station/*"],
        js: ["connectors/mojepolskieradio.js"]
    },

    {
        label: "Nova Planet",
        matches: ['*://www.novaplanet.com/radionova/player'],
        js: ["connectors/novaplanet.js"]
    },

    {
        label: "Radio+ Belgium",
        matches: ["*://www.radioplus.be/*"],
        js: ["connectors/radioplusbe.js"]
    },

    {
        label: "Songza",
        matches: ["*://songza.com/*"],
        js: ["connectors/songza.js"]
    },

    {
        label: "Douban Programme",
        matches: ["http://music.douban.com/programme/*"],
        js: ["connectors/douban-programme.js"]
    },

    {
        label: "Focus@Will",
        matches: ["*://www.focusatwill.com/*"],
        js: ["connectors/focusatwill.js"]
    },

    {
        label: "Le Tourne Disque",
        matches: ["*://www.letournedisque.com/*"],
        js: ["connectors/letournedisque.js"]
    },

    {
        label: "Rdio",
        matches: ["*://www.rdio.com/*"],
        js: ["connectors/rdio.js"]
    },

    {
        label: "Reddit Playlister",
        matches: ["*://redditplayer.phoenixforgotten.com/*"],
        js: ["connectors/redditplayer.js"]
    },

    {
        label: "Sullen-Ural",
        matches: ["*://sullen-ural.ru/*", "*://*.sullen-ural.ru/*"],
        js: ["connectors/sullen-ural.js"]
    },

    {
        label: "Digitally Imported and Sky.FM",
        matches: ["*://www.di.fm/*", "*://www.sky.fm/*"],
        js: ["connectors/difm.js"]
    },

    {
        label: "Beats Music",
        matches: ["*://*.beatsmusic.com/*"],
        js: ["jquery.cookie.js", "connectors/beats.js"]
    },

    {
        label: "RadioPlayer",
        matches: ["*://www.thisisstar.co.uk/*", "*://live.thebridgeradio.net/*", "*://www.chorley.fm/*", "*://www.sun-fm.com/*", "*://www.minsterfm.com/*", "*://www.uckfieldfm.co.uk/*", "*://radioplayer.bishopfm.com/*", "*://player.jackbristol.com/*", "*://player.106jack.com/*", "*://player.jackradio.com/*", "*://www.tcrfm.co.uk/*", "*://sparksunderland.com/*", "*://player.juicefm.com/*", "*://rp.xrad.io/*", "*://www.radiojackie.com/*", "*://people.bath.ac.uk/*", "*://www.2br.co.uk/*", "*://player.three.fm/*", "*://player.therevolution962.com/*", "*://player.thewave.co.uk/*", "*://www.kcclive.com/*", "*://player.absoluteradio.co.uk/*", "*://aliveradio.net/*", "*://allfm.org/*", "*://www.amazingradio.com/*", "*://www.ambersoundfm.com/*", "*://player.bailriggfm.co.uk/*", "*://player.thebay.co.uk/*", "*://www.bbc.co.uk/*", "*://www.bcbradio.co.uk/*", "*://www.thebeach.co.uk/*", "*://www.thebee.co.uk/*", "*://www.bfbs.com/*", "*://player.boltonfm.com/*", "*://andoverplayer.thebreeze.com/*", "*://basingstokeplayer.thebreeze.com/*", "*://bristolplayer.thebreeze.com/*", "*://cheltenhamplayer.thebreeze.com/*", "*://easthampshireplayer.thebreeze.com/*", "*://westwiltsplayer.thebreeze.com/*", "*://newburyplayer.thebreeze.com/*", "*://northdorsetplayer.thebreeze.com/*", "*://northsomersetplayer.thebreeze.com/*", "*://southplayer.thebreeze.com/*", "*://southamptonplayer.thebreeze.com/*", "*://winchesterplayer.thebreeze.com/*", "*://southsomersetplayer.thebreeze.com/*", "*://bridge.fm/*", "*://www.capitalfm.com/*", "*://www.capitalxtra.com/*", "*://www.thecatradio.co.uk/*", "*://ukradioplayer.cfmradio.com/*", "*://www.southendandchelmsfordradio.com/*", "*://www.silk1069.com/*", "*://www.dee1063.com/*", "*://app.musicradio.com/*", "*://ukradioplayer.citytalk.fm/*", "*://www.classicfm.com/*", "*://ukradioplayer.clyde1.com/*", "*://ukradioplayer.clyde2.com/*", "*://player.compassfm.co.uk/*", "*://northamptonshire.connectfm.com/*", "*://peterborough.connectfm.com/*", "*://ukradioplayer.coolfm.co.uk/*", "*://www.crossrhythms.co.uk/*", "*://crushradio.co.uk/*", "*://player.dearnefm.co.uk/*", "*://diversefm.com/*", "*://ukradioplayer.downtown.co.uk/*", "*://www.dream100.com/*", "*://www.drystoneradio.co.uk/*", "*://www.eagleextra.co.uk/*", "*://www.964eagle.co.uk/*", "*://www.eagle3.co.uk/*", "*://www.energyfm.net/*", "*://ondemand.georgeandfire.co.uk/*", "*://www.forestfm.co.uk/*", "*://ukradioplayer.forth2.com/*", "*://ukradioplayer.forthone.com/*", "*://www.frenchradiolondon.com/*", "*://www.funkidslive.com/*", "*://www.futureradio.co.uk/*", "*://www.gateway978.com/*", "*://nwplayer.gaydio.co.uk/*", "*://player.gaydio.co.uk/*", "*://ukradioplayer.hallamfm.co.uk/*", "*://ukrp.musicradio.com/*", "*://www.heart.co.uk/*", "*://ukradioplayer.heatradio.com/*", "*://ukradioplayer.thehitsradio.com/*", "*://player.hot1028.com/*", "*://www.hubradio.co.uk/*", "*://imaginefm.net/*", "*://www.indigofm.co.uk/*", "*://www.iwradio.co.uk/*", "*://player.jackfmswindon.com/*", "*://www.jazzfm.co/*", "*://player.juicebrighton.com/*", "*://kanefm.com/*", "*://player.kcfm.co.uk/*", "*://ukradioplayer.kerrangradio.co.uk/*", "*://ukradioplayer.key103.co.uk/*", "*://player.kingdomfm.co.uk/*", "*://kiss101.ukradioplayer.kissfmuk.com/*", "*://kiss105.ukradioplayer.kissfmuk.com/*", "*://kiss100.ukradioplayer.kissfmuk.com/*", "*://ukradioplayer.kissfresh.kissfmuk.com/*", "*://ukradioplayer.kisstory.kissfmuk.com/*", "*://www.klfm967.co.uk/*", "*://streaming.kentonline.co.uk/*", "*://player.lincsfm.co.uk/*", "*://ukradioplayer.magic.co.uk/*", "*://ukradioplayer.manchestersmagic.co.uk/*", "*://ukradioplayer.magic1152.co.uk/*", "*://ukradioplayer.magic1161.co.uk/*", "*://ukradioplayer.magic1170.co.uk/*", "*://ukradioplayer.magic1548.co.uk/*", "*://ukradioplayer.magic828.co.uk/*", "*://ukradioplayer.magic999.co.uk/*", "*://ukradioplayer.magicam.co.uk/*", "*://player.manxradio.com/*", "*://ukradioplayer.metroradio.co.uk/*", "*://ukradioplayerone.mfr.co.uk/*", "*://ukradioplayertwo.mfr.co.uk/*", "*://www.ministryofsound.com/*", "*://www.mix96.co.uk/*", "*://www.mkfm.com/*", "*://nationhits.com/*", "*://www.nationradio.com/*", "*://www.northnorfolkradio.com/*", "*://ukradioplayer.northsound1.com/*", "*://ukradioplayer.northsound2.com/*", "*://www.999radionorwich.com/*", "*://player.oakfm.co.uk/*", "*://www.originalfm.com/*", "*://palm105.co.uk/*", "*://player.peakfm.net/*", "*://www.piratefm.co.uk/*", "*://player.planetrock.com/*", "*://www.premierradio.org.uk/*", "*://player.pulse2.net/*", "*://player.pulse.co.uk/*", "*://ukradioplayer.radioaire.co.uk/*", "*://ukradioplayer.radioborders.com/*", "*://radiocarmarthenshire.com/*", "*://www.radiocaroline.co.uk/*", "*://radioceredigion.com/*", "*://ukradioplayer.radiocity.co.uk/*", "*://www.radioessex.com/*", "*://player.radioexe.co.uk/*", "*://radiolab.beds.ac.uk/*", "*://radiopembrokeshire.com/*", "*://radioplus.org.uk/*", "*://www.radiotyneside.co.uk/*", "*://www.radioverulam.com/*", "*://player.wave965.com/*", "*://radioreverb.com/*", "*://www.realradionortheast.co.uk/*", "*://www.realradionorthwest.co.uk/*", "*://www.realradio-scotland.co.uk/*", "*://www.realradiowales.co.uk/*", "*://www.realradioxs.co.uk/*", "*://www.realradioyorkshire.co.uk/*", "*://www.reprezent.org.uk/*", "*://radioplayer.resonancefm.com/*", "*://player.ridingsfm.co.uk/*", "*://rinse.fm/*", "*://listen.insightradio.co.uk/*", "*://ukradioplayer.rockfm.co.uk/*", "*://player.rotherfm.co.uk/*", "*://player.rutlandradio.co.uk/*", "*://scarletfm.com/*", "*://www.sfmradio.com/*", "*://www.toxicflames.co.uk/*", "*://player.signal1.co.uk/*", "*://player.signal107.co.uk/*", "*://player.signal2.co.uk/*", "*://smilesussex.com/*", "*://www.smoothradio.co.uk/*", "*://www.solarradio.com/*", "*://www.somervalleyfm.co.uk/*", "*://player.soundartradio.org.uk/*", "*://www.thesourcefm.co.uk/*", "*://www.spectrumradio.net/*", "*://www.spirefm.co.uk/*", "*://www.spiritfm.net/*", "*://www.star107.co.uk/*", "*://www.strayfm.com/*", "*://www.susyradio.com/*", "*://player.swanseasound.co.uk/*", "*://www.switchradio.co.uk/*", "*://talksport.com/*", "*://tonefm.co.uk/*", "*://ukradioplayer.tayam.co.uk/*", "*://ukradioplayer.tayfm.co.uk/*", "*://www.teamrockradio.com/*", "*://ukradioplayer.tfmradio.com/*", "*://player.towerfm.co.uk/*", "*://www.town102.com/*", "*://player.traxfm.co.uk/*", "*://player.2lr.co.uk/*", "*://www.u105.com/*", "*://www.ucb.co.uk/*", "*://ury.org.uk/*", "*://urn1350.net/*", "*://ukradioplayer.vikingfm.co.uk/*", "*://www.thevoicefm.co.uk/*", "*://ruvr.co.uk/*", "*://ukradioplayer.wave105.com/*", "*://www.wessexfm.com/*", "*://ukradioplayer.westfm.co.uk/*", "*://ukradioplayer.westsound.co.uk/*", "*://ukradioplayer.westsoundradio.com/*", "*://player.wirefm.com/*", "*://player.wishfm.net/*", "*://www.xfm.co.uk/*", "*://www.yorkshirecoastradio.com/*"],
        js: ["connectors/radioplayer.js"]
    },

    {
        label: "Gaana.com",
        matches: ["*://gaana.com/*"],
        js: ["connectors/gaana.js"]
    },

    {
        label: "Music Unlimited",
        matches: ["*://music.sonyentertainmentnetwork.com/*"],
        js: ["connectors/musicunlimited.js"]
    },

    {
        label: "Yandex.Music",
        matches: ["*://music.yandex.ru/*"],
        js: ["connectors/yandex.js"]
    },
    
    {
      label: "PLEX",
      matches: ["*://*32400/web/*"],
      js: ["connectors/plex.js"]
    },
    
    {
        label: "Pleer.Com (Prostopleer)",
        matches: ["*://pleer.com/*", "*://prostopleer.com/*"],
        js: ["connectors/pleer.js"]
    },

	{
		label: "TuneIn",
		matches: ["*://tunein.com/*"],
		js: ["connectors/tunein.js"]
	},

	{
        label: "MixCloud (Timestamped mixes only)",
        matches: ["*://mixcloud.com/*", "*://*.mixcloud.com/*"],
        js: ["connectors/mixcloud.js"]
    },

    {
        label: "Xiami.com",
        matches: ["http://www.xiami.com/play*"],
        js: ["connectors/xiami.js"]
    }
];

/**
 * Creates regex from single match pattern
 *
 * @author lacivert
 * @param {String} input
 * @returns RegExp
 */
function createPattern(input) {
    if (typeof input !== 'string') return null;
    var match_pattern = '^'
        , regEscape = function (s) {
            return s.replace(/[[^$.|?*+(){}\\]/g, '\\$&');
        }
        , result = /^(\*|https?|file|ftp|chrome-extension):\/\//.exec(input);

    // Parse scheme
    if (!result) return null;
    input = input.substr(result[0].length);
    match_pattern += result[1] === '*' ? 'https?://' : result[1] + '://';

    // Parse host if scheme is not `file`
    if (result[1] !== 'file') {
        if (!(result = /^(?:\*|(\*\.)?([^\/*]+))/.exec(input))) return null;
        input = input.substr(result[0].length);
        if (result[0] === '*') {    // host is '*'
            match_pattern += '[^/]+';
        } else {
            if (result[1]) {         // Subdomain wildcard exists
                match_pattern += '(?:[^/]+\.)?';
            }
            // Append host (escape special regex characters)
            match_pattern += regEscape(result[2]);// + '/';
        }
    }
    // Add remainder (path)
    match_pattern += input.split('*').map(regEscape).join('.*');
    match_pattern += '$';

    return new RegExp(match_pattern);
}


/**
 * @param {String} label
 * @returns boolean
 */
function isConnectorEnabled(label) {
    var disabledArray = JSON.parse(localStorage.disabledConnectors);
    return (disabledArray.indexOf(label) === -1);
}


/**
 * Injects connectors to tabs upon page loading
 */
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    // wait for the Loaded event
    if (changeInfo.status !== 'complete')
        return;

    // run first available connector
    var anyMatch = !connectors.every(function (connector) {
        var matchOk = false;

        connector.matches.forEach(function (match) {
            matchOk = matchOk || createPattern(match).test(tab.url);
        });

        if (matchOk === true) {
            console.log('connector ' + connector.label + ' matched for ' + tab.url);
            setActionIcon(ACTION_SITE_RECOGNIZED, tabId);

            if (!isConnectorEnabled(connector.label)) {
                setActionIcon(ACTION_SITE_DISABLED, tabId);
                return false; // break forEach
            }

            // Ping the content page to see if the script is already in place.
            // In the future, connectors will have unified interface, so they will all support
            // the 'ping' request. Right now only YouTube supports this, because it
            // is the only site that uses ajax navigation via History API (which is quite hard to catch).
            // Other connectors will work as usual.
            //
            // Sadly there is no way to silently check if the script has been already injected
            // so we will see an error in the background console on load of every supported page
            chrome.tabs.sendMessage(tabId, { type: 'ping' }, function (response) {
                // if the message was sent to a non existing script or the script
                // does not implement the 'ping' message, we get response==undefined;
                if (!response) {
                    console.log('-- loaded for the first time, injecting the scripts');

                    // inject all scripts and jQuery, use slice to avoid mutating
                    var scripts = connector.js.slice(0);
                    scripts.unshift(JQUERY_PATH);

                    scripts.forEach(function (jsFile) {
                        var injectDetails = {
                            file: jsFile,
                            allFrames: connector.allFrames ? connector.allFrames : false
                        };
                        chrome.tabs.executeScript(tabId, injectDetails);
                    });
                }
                else {
                    console.log('-- subsequent ajax navigation, the scripts are already injected');
                }
            });

        }

        return !matchOk;
    });

    // hide page action if there is no match
    if (!anyMatch) {
        chrome.pageAction.hide(tabId);
    }
});
