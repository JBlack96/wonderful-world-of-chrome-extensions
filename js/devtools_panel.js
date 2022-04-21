console.log('connected and ran script');

const element = document.getElementById("devtool-app");

chrome.devtools.network.onRequestFinished.addListener((request) => {
    console.log(request);

    // append request element to ui
    const impressionEl = document.createElement('div');
    impressionEl.innerHTML = JSON.stringify(request);
    element.appendChild(impressionEl);
});

document.querySelector('#clearBtn').addEventListener('click', (e) => {
    e.preventDefault();
    element.innerHTML = '';
});