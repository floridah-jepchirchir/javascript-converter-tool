function showTool(toolId) {
    document.querySelectorAll('.tool').forEach(tool => tool.classList.remove('active'));
    document.getElementById(toolId).classList.add('active');
}

function convertTemperature() {
    let value = parseFloat(document.getElementById('tempInput').value);
    let unit = document.getElementById('tempUnit').value;
    let result;
    if (isNaN(value)) {
        result = "Please enter a valid number.";
    } else {
        if (unit === "C") {
            result = `${value}°C is ${(value * 9/5 + 32).toFixed(2)}°F or ${(value + 273.15).toFixed(2)}K`;
        } else if (unit === "F") {
            result = `${value}°F is ${((value - 32) * 5/9).toFixed(2)}°C or ${(((value - 32) * 5/9) + 273.15).toFixed(2)}K`;
        } else {
            result = `${value}K is ${(value - 273.15).toFixed(2)}°C or ${((value - 273.15) * 9/5 + 32).toFixed(2)}°F`;
        }
    }
    document.getElementById('tempResult').innerText = result;
}

function convertCurrency() {
    let value = parseFloat(document.getElementById('currencyInput').value);
    let from = document.getElementById('currencyFrom').value;
    let to = document.getElementById('currencyTo').value;
    let rates = { USD: 1, EUR: 0.92, GBP: 0.78, JPY: 110 };
    let result;
    if (isNaN(value)) {
        result = "Please enter a valid amount.";
    } else {
        result = `${value} ${from} is ${(value * rates[to] / rates[from]).toFixed(2)} ${to}`;
    }
    document.getElementById('currencyResult').innerText = result;
}

function convertSpeed() {
    let value = parseFloat(document.getElementById('speedInput').value);
    let unit = document.getElementById('speedUnit').value;
    let result;
    if (isNaN(value)) {
        result = "Please enter a valid number.";
    } else {
        result = unit === "kph" ? `${value} kph is ${(value / 1.609).toFixed(2)} mph` : `${value} mph is ${(value * 1.609).toFixed(2)} kph`;
    }
    document.getElementById('speedResult').innerText = result;
}