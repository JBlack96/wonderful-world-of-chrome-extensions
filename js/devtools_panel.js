console.log('connected and ran script');

const element = document.getElementById("devtool-app");

chrome.devtools.network.onRequestFinished.addListener((request) => {
    // check for an impression
    if (request.request.url.includes('i.salecycle.com')) {
        if (!request.request.postData || !request.request.postData.text) {
            return;
        }

        // append request element to ui
        const impressionEl = document.createElement('div');
        impressionEl.innerHTML = unescape(request.request.postData.text);
        impressionEl.style = "border: 2px solid; margin: 5px; padding: 5px;";
        element.appendChild(impressionEl);
    }
});

document.querySelector('#clearBtn').addEventListener('click', (e) => {
    e.preventDefault();
    element.innerHTML = '';
});