const temperature = 10; // degrees Celsius
const windSpeed = 5; // km/h

function calculateWindChill(temp, speed) {
  // Wind chill formula in Celsius (Canada standard for metric):
  // 13.12 + 0.6215*T - 11.37*V^0.16 + 0.3965*T*V^0.16
  return (
    13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)
  ).toFixed(1);
}

function displayWindChill() {
  const chillElement = document.querySelector("#windchill");
  let windChill = "N/A";

  if (temperature <= 10 && windSpeed > 4.8) {
    windChill = `${calculateWindChill(temperature, windSpeed)} °C`;
  }

  if (chillElement) {
    chillElement.textContent = windChill;
  }
}

displayWindChill();

// Footer update
const yearSpan = document.querySelector("#currentyear");
const modifiedSpan = document.querySelector("#lastmodified");

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
if (modifiedSpan) {
  modifiedSpan.textContent = document.lastModified;
}