console.log('connected and ran script');

chrome.devtools.network.onRequestFinished.addListener((request) => {
    console.log(request);
});