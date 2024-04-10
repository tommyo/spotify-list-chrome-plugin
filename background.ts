/// <reference types="chrome-types" />

chrome.runtime.onInstalled.addListener(() => {
  // disable by default
  chrome.action.disable();

  chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
    const onSpotify = {
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {
            hostEquals: "open.spotify.com",
            schemes: ["https"],
            pathPrefix: "/playlist/",
          },
        }),
      ],
      actions: [new chrome.declarativeContent.ShowAction({})],
    };
    chrome.declarativeContent.onPageChanged.addRules([ onSpotify ]);
  });
});
