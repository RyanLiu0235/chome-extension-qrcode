var tabUrl = 'defalut';

var checkForValidUrl = function(tabId, changeInfo, tab) {
    tabUrl = tab.url;
    console.log(tabUrl)
    chrome.tabs.executeScript(tabId, {file: "content_script.js", allFrames: true})
}

chrome.tabs.onUpdated.addListener(checkForValidUrl);
chrome.tabs.onSelectionChanged.addListener(function(tabId, selectInfo) {
	console.log(chrome.rnutime.getUrl)
	chrome.tabs.executeScript(tabId, {file: "content_script.js", allFrames: true});
})
