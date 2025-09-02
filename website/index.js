const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://jqozzmgl7anqil5hvbraanr2kq0fhdvx.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = `Views: ${data.views}`;
}

updateCounter();