/// <reference types="chrome-types" />

chrome.runtime.onInstalled.addListener(() => {
  // disable by default
  chrome.action.disable();

  chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true });
});

chrome.tabs.onUpdated.addListener((tabId, _, tab) => {
  if (tab.url && tab.url === "https://open.spotify.com/") {
    console.log({ tabId, tab });
    chrome.sidePanel.setOptions({ tabId, path: "sidebar.html" });
    chrome.action.enable(tabId);
  }
});