import displayWeather from "./js/displayWeather";
import "./style.css";

const inputEl = document.querySelector("#location");
const weatherCont = document.querySelector(".weather");
const loaderEl = document.querySelector(".loader-container");

let loading = true;

const fetchData = async (location) => {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=8ZXRXLKBPUBK6RCH7RVQLRA5B&contentType=json`
    );
    if (!response) {
      throw new Error("Error fetching weather");
    }

    const data = await response.json();

    const weatherInfo = {
      address: data.address,
      condition: data.currentConditions,
    };
    loading = false;
    displayWeather(weatherInfo, loading);
  } catch (error) {
    handleError(error);
  }
};

const handleError = (err) => {
  if (err) {
    console.log(err);
    console.log("Error");
  }
};

inputEl.addEventListener("change", ({ target }) => {
  loaderEl.style.display = "flex";
  weatherCont.innerHTML = "";
  fetchData(target.value);
});
