const WeatherMapper = require("../services/weatherMapper");

class LogWeatherInfo {
  constructor({ weatherAPI }) {
    this.weatherAPI = weatherAPI;
  }

  async execute({ city }) {
    const response = await this.weatherAPI.getWeatherByCity(city);
    const weatherInfo = WeatherMapper.mapResponseToWeatherInfo(response);
    return weatherInfo;
  }
}

module.exports = LogWeatherInfo;
