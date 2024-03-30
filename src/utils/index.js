const processWeatherData = (data) => {
    // Implement logic to process and return necessary weather information
    // e.g., current weather, temperature category, and alerts

    const { current, alerts } = data;
    const weather = {
        temperature: current.temp,
        condition: current.weather[0].main,
        temperatureStatus: getTemperatureStatus(current.temp),
        alerts: alerts ? alerts.map(alert => ({ event: alert.event, description: alert.description})) : [] 
    };

    return weather;
  };

  const getTemperatureStatus = (temp) => {
    if (temp <= 10) return 'cold';
    if (temp > 10 && temp < 23) return 'moderate';
    return 'hot';
  }
  
  module.exports = {
    processWeatherData,
  };
  