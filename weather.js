// List of languages supported by Openweather.com
let language_list = [{"code":"af","id":1,"language":"Afrikaans"},
{"code":"ar","id":2,"language":"Arabic"},
{"code":"az","id":3,"language":"Azerbaijani"},
{"code":"bg","id":4,"language":"Bulgarian"},
{"code":"ca","id":5,"language":"Catalan"},
{"code":"cz","id":6,"language":"Czech"},
{"code":"da","id":7,"language":"Danish"},
{"code":"de","id":8,"language":"German"},
{"code":"el","id":9,"language":"Greek"},
{"code":"en","id":10,"language":"English"},
{"code":"eu","id":11,"language":"Basque"},
{"code":"fa","id":12,"language":"Persian (Farsi)"},
{"code":"fi","id":13,"language":"Finnish"},
{"code":"fr","id":14,"language":"French"},
{"code":"gl","id":15,"language":"Galician"},
{"code":"he","id":16,"language":"Hebrew"},
{"code":"hi","id":17,"language":"Hindi"},
{"code":"hr","id":18,"language":"Croatian"},
{"code":"hu","id":19,"language":"Hungarian"},
{"code":"id","id":20,"language":"Indonesian"},
{"code":"it","id":21,"language":"Italian"},
{"code":"ja","id":22,"language":"Japanese"},
{"code":"kr","id":23,"language":"Korean"},
{"code":"la","id":24,"language":"Latvian"},
{"code":"lt","id":25,"language":"Lithuanian"},
{"code":"mk","id":26,"language":"Macedonian"},
{"code":"no","id":27,"language":"Norwegian"},
{"code":"nl","id":28,"language":"Dutch"},
{"code":"pl","id":29,"language":"Polish"},
{"code":"pt","id":30,"language":"Portuguese"},
{"code":"pt_br","id":31,"language":"Português Brasil"},
{"code":"ro","id":32,"language":"Romanian"},
{"code":"ru","id":33,"language":"Russian"},
{"code":"se","id":34,"language":"Swedish"},
{"code":"sk","id":35,"language":"Slovak"},
{"code":"sl","id":36,"language":"Slovenian"},
{"code":"sp, es","id":37,"language":"Spanish"},
{"code":"sr","id":38,"language":"Serbian"},
{"code":"th","id":39,"language":"Thai"},
{"code":"tr","id":40,"language":"Turkish"},
{"code":"ua, uk","id":41,"language":"Ukrainian"},
{"code":"vi","id":42,"language":"Vietnamese"},
{"code":"zh_cn","id":43,"language":"Chinese Simplified"},
{"code":"zh_tw","id":44,"language":"Chinese Traditional"},
{"code":"zu","id":45,"language":"Zulu"}];

// List of weather codes by Openweather.com and corresponding icons
let weather_codes = [{"weather_id":200, "weather_icon":"icon_thundery_showers"},
{"weather_id":201, "weather_icon":"icon_thundery_showers"},
{"weather_id":202, "weather_icon":"icon_thundery_showers"},
{"weather_id":210, "weather_icon":"icon_thunderstorms"},
{"weather_id":211, "weather_icon":"icon_thunderstorms"},
{"weather_id":212, "weather_icon":"icon_thunderstorms"},
{"weather_id":221, "weather_icon":"icon_thunderstorms"},
{"weather_id":230, "weather_icon":"icon_thunderstorms"},
{"weather_id":231, "weather_icon":"icon_thunderstorms"},
{"weather_id":232, "weather_icon":"icon_thunderstorms"},
{"weather_id":300, "weather_icon":"icon_light_rain_showers"},
{"weather_id":301, "weather_icon":"icon_light_rain_showers"},
{"weather_id":302, "weather_icon":"icon_light_rain_showers"},
{"weather_id":310, "weather_icon":"icon_light_rain_showers"},
{"weather_id":311, "weather_icon":"icon_light_rain_showers"},
{"weather_id":312, "weather_icon":"icon_light_rain_showers"},
{"weather_id":313, "weather_icon":"icon_light_rain_showers"},
{"weather_id":314, "weather_icon":"icon_light_rain_showers"},
{"weather_id":321, "weather_icon":"icon_light_rain_showers"},
{"weather_id":500, "weather_icon":"icon_cloudy_with_light_rain"},
{"weather_id":501, "weather_icon":"icon_cloudy_with_light_rain"},
{"weather_id":502, "weather_icon":"icon_cloudy_with_heavy_rain"},
{"weather_id":503, "weather_icon":"icon_cloudy_with_heavy_rain"},
{"weather_id":504, "weather_icon":"icon_cloudy_with_heavy_rain"},
{"weather_id":511, "weather_icon":"icon_cloudy_with_sleet"},
{"weather_id":520, "weather_icon":"icon_light_rain_showers"},
{"weather_id":521, "weather_icon":"icon_light_rain_showers"},
{"weather_id":522, "weather_icon":"icon_heavy_rain_showers"},
{"weather_id":531, "weather_icon":"icon_heavy_rain_showers"},
{"weather_id":600, "weather_icon":"icon_cloudy_with_light_snow"},
{"weather_id":601, "weather_icon":"icon_cloudy_with_light_snow"},
{"weather_id":602, "weather_icon":"icon_cloudy_with_heavy_snow"},
{"weather_id":611, "weather_icon":"icon_cloudy_with_sleet"},
{"weather_id":612, "weather_icon":"icon_sleet_showers"},
{"weather_id":613, "weather_icon":"icon_sleet_showers"},
{"weather_id":615, "weather_icon":"icon_sleet_showers"},
{"weather_id":616, "weather_icon":"icon_sleet_showers"},
{"weather_id":620, "weather_icon":"icon_light_snow_showers"},
{"weather_id":621, "weather_icon":"icon_light_snow_showers"},
{"weather_id":622, "weather_icon":"icon_heavy_snow_showers"},
{"weather_id":701, "weather_icon":"icon_mist"},
{"weather_id":711, "weather_icon":"icon_mist"},
{"weather_id":721, "weather_icon":"icon_mist"},
{"weather_id":731, "weather_icon":"icon_mist"},
{"weather_id":741, "weather_icon":"icon_mist"},
{"weather_id":751, "weather_icon":"icon_mist"},
{"weather_id":761, "weather_icon":"icon_mist"},
{"weather_id":762, "weather_icon":"icon_mist"},
{"weather_id":771, "weather_icon":"icon_mist"},
{"weather_id":781, "weather_icon":"icon_mist"},
{"weather_id":800, "weather_icon":"icon_sunny"},
{"weather_id":801, "weather_icon":"icon_sunny_intervals"},
{"weather_id":802, "weather_icon":"icon_sunny_intervals"},
{"weather_id":803, "weather_icon":"icon_white_cloud"},
{"weather_id":804, "weather_icon":"icon_black_low_cloud"}];

let json;

function get_weather(city_id, api_id, language = "en") {

  let url = `http://api.openweathermap.org/data/2.5/weather?id=${city_id}&lang=${language}&appid=${api_id}`;
  fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    json = data;
  })
}

function update(arg) {
  let ids = JSON.parse(arg);
  if (ids.city_id && ids.api_id && ids.language) {
    let language = language_list.find(obj => {
      return obj.language === ids.language;
    });
    get_weather(ids.city_id, ids.api_id, language?.code);
  };
};

function play() {
  $(".weather_container").fadeTo("slow", 0, () => {
    if (json?.cod == "200") {
      let city = json.name;
      let temperature = json.main.temp - 273.15;
      let weather_id = json.weather[0].id;
      let result = weather_codes.find(obj => {
        return obj.weather_id === weather_id
      });
      $(".city").html(city);
      $(".temperature").html(`${temperature >  0 ? "+" + temperature.toFixed(0) : temperature.toFixed(0)}&#176`);
      $("#weather_image>use").attr('href', "#" + result.weather_icon);
      $(".weather_container").fadeTo(1500, 1)
    };
  });
}

function stop() {
  $(".weather_container").fadeTo("slow", 0)
}
