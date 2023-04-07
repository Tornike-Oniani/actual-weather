class SendWeatherInfo {
  constructor({ emailService, weatherAPI }) {
    this.emailService = emailService;
    this.weatherAPI = weatherAPI;
  }

  async execute({ email, city }) {
    const response = await this.weatherAPI.getWeatherByCity(city);
    const weatherInfo = WeatherMapper.mapResponseToWeatherInfo(response);
    const message = `The current temperature in ${city} is ${weatherInfo.main.temp}°C`;
    await this.emailService.sendEmail(email, message);
    return `Weather information sent to ${email}`;
  }
}

module.exports = SendWeatherInfo;
