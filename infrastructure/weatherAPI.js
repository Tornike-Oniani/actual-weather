const axios = require("axios");

class WeatherAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://api.openweathermap.org/data/2.5/weather";
  }

  async getWeatherByCity(city) {
    let url = `${this.baseUrl}?q=${city}&appid=${this.apiKey}`;
    let response = await axios.get(url);
    if (response.status !== 200) {
      throw new Error(
        `Failed to retrieve weather data: ${response.statusText}`
      );
    }

    return response.data;
  }
}

module.exports = WeatherAPI;
