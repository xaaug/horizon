const loaderEl = document.querySelector(".loader-container");
const weatherCont = document.querySelector(".weather");

const displayWeather = (data, loading) => {
  if (!loading) {
    loaderEl.style.display = "none";
    weatherCont.innerHTML = ` 
        <h2 class="temp">${data.condition.temp} °C</h2>
        <h4 class="condition">${data.condition.conditions}</h4>
        <p class="location">${data.address}</p>`;
  }
};

export default displayWeather;
