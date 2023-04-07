const WeatherInfo = require("../../domain/weatherInfo");

class WeatherMapper {
  static mapResponseToWeatherInfo(response) {
    const weatherInfo = new WeatherInfo(
      response.name,
      response.main.temp,
      response.weather[0].description
    );
    return weatherInfo;
  }
}

module.exports = WeatherMapper;
