async function getWeather() {
  // گرفتن مختصات تهران
  const geoRes = await fetch('https://geocoding-api.open-meteo.com/v1/search?name=Tehran&count=1&language=fa');
  const geoData = await geoRes.json();
  
  if (!geoData.results) return null;
  
  const { latitude, longitude, name } = geoData.results[0];
  
  // گرفتن آب‌وهوا
  const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
  const weatherData = await weatherRes.json();
  
  return {
    city: name,
    temp: weatherData.current_weather.temperature,
    wind: weatherData.current_weather.windspeed,
  };
}

export default async function Weather() {
  const weather = await getWeather();

  return (
    <main className="min-h-[80vh] bg-gradient-to-br from-blue-400 to-blue-600 p-10 flex justify-center items-center">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">آب‌وهوای تهران</h1>
        
        {weather ? (
          <div>
            <p className="text-4xl font-bold text-blue-600 mb-4">{weather.temp}°C</p>
            <p className="text-gray-600 mb-2">شهر: {weather.city}</p>
            <p className="text-gray-600">سرعت باد: {weather.wind} km/h</p>
          </div>
        ) : (
          <p className="text-red-500">خطا در دریافت اطلاعات</p>
        )}
      </div>
    </main>
  );
}