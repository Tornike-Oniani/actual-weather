const WeatherMapper = require('../services/weatherMapper');

class SendWeatherInfo {
  constructor({ emailService, weatherAPI }) {
    this.emailService = emailService;
    this.weatherAPI = weatherAPI;
  }

  async execute({ email, city }) {
    const response = await this.weatherAPI.getWeatherByCity(city);
    const weatherInfo = WeatherMapper.mapResponseToWeatherInfo(response);
    const message = `<p>The current temperature in ${city} is ${weatherInfo.temperature}°C</p>`;
    await this.emailService.sendEmail({
      to: email,
      subject: 'Weather report',
      body: message,
    });
    return `Weather information sent to ${email}`;
  }
}

module.exports = SendWeatherInfo;
