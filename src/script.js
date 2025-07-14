
import "./style.css"; 
import gifClearDay from "./gifs/gif.gif";
import gifClearNight from "./gifs/clear-night.gif";
import gifCloudyDay from "./gifs/cloudy.gif";
import gifCloudyNight from "./gifs/cloudy_night.gif";
import gifClouds from "./gifs/clouds.gif";
import gifRain from "./gifs/rain.gif";
import gifSnow from "./gifs/snow.gif";
import gifWind from "./gifs/wind.gif";
import gifFog from "./gifs/fog.gif";
import gifHail from "./gifs/hail.gif";
import gifThunder from "./gifs/thunder.gif";
import gifTornado from "./gifs/tornado.gif";
import gifHaze from "./gifs/haze.gif";
const n=10; // Number of days to display
const city = document.getElementById("city");

function showcity(country) {
  switch (country) {
    case "US":
      city.innerHTML =
        '<option value="null">--Select a city--</option><option value="new_york">New York</option><option value="los_angeles">Los Angeles</option><option value="chicago">Chicago</option><option value="houston">Houston</option><option value="phoenix">Phoenix</option><option value="philadelphia">Philadelphia</option><option value="san_antonio">San Antonio</option> <option value="san_diego">San Diego</option><option value="dallas">Dallas</option><option value="san_jose">San Jose</option>';
      break;
    case "In":
      city.innerHTML =
        ' <option value="null">--Select a city--</option><option value="mumbai">Mumbai</option><option value="delhi">Delhi</option><option value="bengaluru">Bengaluru</option><option value="hyderabad">Hyderabad</option><option value="ahmedabad">Ahmedabad</option><option value="chennai">Chennai</option><option value="kolkata">Kolkata</option><option value="pune">Pune</option><option value="jaipur">Jaipur</option><option value="surat">Surat</option>';
      break;
    case "Ca":
      city.innerHTML =
        '<option value="null">--Select a city--</option><option value="toronto">Toronto</option><option value="montreal">Montreal</option><option value="vancouver">Vancouver</option><option value="calgary">Calgary</option><option value="edmonton">Edmonton</option><option value="ottawa">Ottawa</option><option value="winnipeg">Winnipeg</option><option value="hamilton">Hamilton</option><option value="kitchener">Kitchener</option><option value="london">London</option>';
      break;
    case "Uk":
      city.innerHTML =
        '<option value="null">--Select a city--</option><option value="london">London</option><option value="birmingham">Birmingham</option><option value="manchester">Manchester</option><option value="glasgow">Glasgow</option><option value="liverpool">Liverpool</option><option value="leeds">Leeds</option><option value="sheffield">Sheffield</option><option value="edinburgh">Edinburgh</option><option value="bristol">Bristol</option><option value="cardiff">Cardiff</option>';
      break;
    case "au":
      city.innerHTML = `
      <option value="null">--Select a city--</option>
      <option value="sydney">Sydney</option>
      <option value="melbourne">Melbourne</option>
      <option value="brisbane">Brisbane</option>
      <option value="perth">Perth</option>
      <option value="adelaide">Adelaide</option>
      <option value="canberra">Canberra</option>
      <option value="gold_coast">Gold Coast</option>
      <option value="newcastle">Newcastle</option>
      <option value="hobart">Hobart</option>
      <option value="wollongong">Wollongong</option>`;

      break;
    case "de":
      city.innerHTML = `
      <option value="null">--Select a city--</option>
      <option value="berlin">Berlin</option>
      <option value="hamburg">Hamburg</option>
      <option value="munich">Munich</option>
      <option value="cologne">Cologne</option>
      <option value="frankfurt">Frankfurt</option>
      <option value="stuttgart">Stuttgart</option>
      <option value="dusseldorf">Düsseldorf</option>
      <option value="dortmund">Dortmund</option>
      <option value="essen">Essen</option>
      <option value="leipzig">Leipzig</option>
    `;
      break;

    case "fr":
      city.innerHTML = `
      <option value="null">--Select a city--</option>
      <option value="paris">Paris</option>
      <option value="marseille">Marseille</option>
      <option value="lyon">Lyon</option>
      <option value="toulouse">Toulouse</option>
      <option value="nice">Nice</option>
      <option value="nantes">Nantes</option>
      <option value="strasbourg">Strasbourg</option>
      <option value="montpellier">Montpellier</option>
      <option value="bordeaux">Bordeaux</option>
      <option value="lille">Lille</option>
    `;
      break;

    case "jp":
      city.innerHTML = `
      <option value="null">--Select a city--</option>
      <option value="tokyo">Tokyo</option>
      <option value="yokohama">Yokohama</option>
      <option value="osaka">Osaka</option>
      <option value="nagoya">Nagoya</option>
      <option value="sapporo">Sapporo</option>
      <option value="fukuoka">Fukuoka</option>
      <option value="kobe">Kobe</option>
      <option value="kyoto">Kyoto</option>
      <option value="hiroshima">Hiroshima</option>
      <option value="sendai">Sendai</option>
    `;
      break;

    case "cn":
      city.innerHTML = `
      <option value="null">--Select a city--</option>
      <option value="shanghai">Shanghai</option>
      <option value="beijing">Beijing</option>
      <option value="guangzhou">Guangzhou</option>
      <option value="shenzhen">Shenzhen</option>
      <option value="chengdu">Chengdu</option>
      <option value="nanjing">Nanjing</option>
      <option value="wuhan">Wuhan</option>
      <option value="hangzhou">Hangzhou</option>
      <option value="chongqing">Chongqing</option>
      <option value="tianjin">Tianjin</option>
    `;
      break;
    case "br":
      city.innerHTML = `
      <option value="null">--Select a city--</option>
      <option value="sao_paulo">São Paulo</option>
      <option value="rio_de_janeiro">Rio de Janeiro</option>
      <option value="brasilia">Brasília</option>
      <option value="salvador">Salvador</option>
      <option value="fortaleza">Fortaleza</option>
      <option value="belo_horizonte">Belo Horizonte</option>
      <option value="manaus">Manaus</option>
      <option value="curitiba">Curitiba</option>
      <option value="recife">Recife</option>
      <option value="goiania">Goiânia</option>`;
      break;

    case "za":
      city.innerHTML = `
      <option value="null">--Select a city--</option>
      <option value="johannesburg">Johannesburg</option>
      <option value="cape_town">Cape Town</option>
      <option value="durban">Durban</option>
      <option value="pretoria">Pretoria</option>
      <option value="port_elizabeth">Port Elizabeth</option>
      <option value="bloemfontein">Bloemfontein</option>
      <option value="east_london">East London</option>
      <option value="kimberley">Kimberley</option>
      <option value="nelspruit">Nelspruit</option>
      <option value="polokwane">Polokwane</option>`;
      break;

    case "ng":
      city.innerHTML = `
      <option value="null">--Select a city--</option>
      <option value="lagos">Lagos</option>
      <option value="abuja">Abuja</option>
      <option value="kano">Kano</option>
      <option value="ibadan">Ibadan</option>
      <option value="port_harcourt">Port Harcourt</option>
      <option value="benin_city">Benin City</option>
      <option value="maiduguri">Maiduguri</option>
      <option value="zaria">Zaria</option>
      <option value="aba">Aba</option>
      <option value="jos">Jos</option>`;
      break;

    case "mx":
      city.innerHTML = `
      <option value="null">--Select a city--</option>
      <option value="mexico_city">Mexico City</option>
      <option value="guadalajara">Guadalajara</option>
      <option value="monterrey">Monterrey</option>
      <option value="puebla">Puebla</option>
      <option value="tijuana">Tijuana</option>
      <option value="leon">León</option>
      <option value="cd_juarez">Ciudad Juárez</option>
      <option value="torreon">Torreón</option>
      <option value="queretaro">Querétaro</option>
      <option value="merida">Mérida</option>`;
      break;

    case "ru":
      city.innerHTML = `
      <option value="null">--Select a city--</option>
      <option value="moscow">Moscow</option>
      <option value="saint_petersburg">Saint Petersburg</option>
      <option value="novosibirsk">Novosibirsk</option>
      <option value="yekaterinburg">Yekaterinburg</option>
      <option value="nizhny_novgorod">Nizhny Novgorod</option>
      <option value="kazan">Kazan</option>
      <option value="chelyabinsk">Chelyabinsk</option>
      <option value="omsk">Omsk</option>
      <option value="samara">Samara</option>
      <option value="rostov">Rostov-on-Don</option>`;
      break;

    case "it":
      city.innerHTML = `
      <option value="null">--Select a city--</option>
      <option value="rome">Rome</option>
      <option value="milan">Milan</option>
      <option value="naples">Naples</option>
      <option value="turin">Turin</option>
      <option value="palermo">Palermo</option>
      <option value="genoa">Genoa</option>
      <option value="bologna">Bologna</option>
      <option value="florence">Florence</option>
      <option value="bari">Bari</option>
      <option value="catania">Catania</option>`;
      break;

    case "es":
      city.innerHTML = `
      <option value="null">--Select a city--</option>
      <option value="madrid">Madrid</option>
      <option value="barcelona">Barcelona</option>
      <option value="valencia">Valencia</option>
      <option value="seville">Seville</option>
      <option value="zaragoza">Zaragoza</option>
      <option value="malaga">Málaga</option>
      <option value="murcia">Murcia</option>
      <option value="palma">Palma</option>
      <option value="bilbao">Bilbao</option>
      <option value="alicante">Alicante</option>`;
      break;

    case "kr":
      city.innerHTML = `
      <option value="null">--Select a city--</option>
      <option value="seoul">Seoul</option>
      <option value="busan">Busan</option>
      <option value="incheon">Incheon</option>
      <option value="daegu">Daegu</option>
      <option value="daejeon">Daejeon</option>
      <option value="gwangju">Gwangju</option>
      <option value="suwon">Suwon</option>
      <option value="ulsan">Ulsan</option>
      <option value="changwon">Changwon</option>
      <option value="jeonju">Jeonju</option>`;
      break;

    case "sa":
      city.innerHTML = `
      <option value=null"">--Select a city--</option>
      <option value="riyadh">Riyadh</option>
      <option value="jeddah">Jeddah</option>
      <option value="mecca">Mecca</option>
      <option value="medina">Medina</option>
      <option value="dammam">Dammam</option>
      <option value="khobar">Khobar</option>
      <option value="tabuk">Tabuk</option>
      <option value="taif">Taif</option>
      <option value="al_ahsa">Al Ahsa</option>
      <option value="abha">Abha</option>`;
      break;

    case "ae":
      city.innerHTML = `
      <option value="null">--Select a city--</option>
      <option value="dubai">Dubai</option>
      <option value="abu_dhabi">Abu Dhabi</option>
      <option value="sharjah">Sharjah</option>
      <option value="al_ain">Al Ain</option>
      <option value="ajman">Ajman</option>
      <option value="ras_al_khaimah">Ras Al Khaimah</option>
      <option value="fujairah">Fujairah</option>
      <option value="umm_al_quwain">Umm Al-Quwain</option>
      <option value="dibba">Dibba</option>
      <option value="kalba">Kalba</option>`;
      break;

    case "ar":
      city.innerHTML = `
      <option value="null">--Select a city--</option>
      <option value="buenos_aires">Buenos Aires</option>
      <option value="cordoba">Córdoba</option>
      <option value="rosario">Rosario</option>
      <option value="mendoza">Mendoza</option>
      <option value="la_plata">La Plata</option>
      <option value="tucuman">San Miguel de Tucumán</option>
      <option value="salta">Salta</option>
      <option value="santa_fe">Santa Fe</option>
      <option value="san_juan">San Juan</option>
      <option value="resistencia">Resistencia</option>`;
      break;

    default:
      city.innerHTML = `<option value="">--Select a city--</option>`;
  }
  //    const select_city=()=>city.value;
  //    return {select_city};
}

const date_paridy = (date) => {
  console.log("In date_paridy " + date);
  const nedate = Math.floor(date / 1000);
  const timestart = nedate - 345600;
  const timeEnd = nedate + 518400;
  return { timestart, timeEnd };
};

const date_set = (time, date) => {
  time.value = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, 0)}-${String(date.getDate()).padStart(2, "0")}`;
};


const location_time = () => {
  const country = document.getElementById("locate");
  const time = document.getElementById("date_");

  const date = new Date();
  date_set(time, date);
  let datenew = new Date(time.value);
  let timestamp = datenew.getTime();
  let dates=datenew.getDate();

  time.addEventListener("change", () => {
    datenew = new Date(time.value);
    timestamp = datenew.getTime();
    dates=datenew.getDate();
    console.log(timestamp);
  });
  const time_stamp = () => timestamp;
  const get_date=()=>dates;
  let city_ = "null";
  if (country != null) {
    showcity(country.value); // Populate city dropdown
    city_ = city.value;
  }

  country.addEventListener("change", function () {
    if (country.value != "null") {
      showcity(country.value); // Update city dropdown
      city_ = city.value;
      console.log("string city " + city_);
    }
  });

  city.addEventListener("change", () => {
    city_ = city.value;
    console.log("string city " + city_);
  });
  const country_select = () => country.value;
  const city_select = () => city.value;
  console.log("country: city " + city_select());
  return { country_select, city_select, time_stamp ,get_date};
};

const clear = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

const gif_manager = (show_data, gifdiv, data, i) => {
  const icon = data.days[i].icon.split(", ")[0];
  const img = document.createElement("img");
  gifdiv.className = "gif";
  console.log("in gif fun");
  switch (icon) {
    case "clear-day":
      img.src = gifClearDay;
      img.alt = "clear-day";
      break;
    case "clear-night":
      img.src = gifClearNight;
      img.alt = "Clear sky at night.";
      break;
    case "partly-cloudy-day":
      img.src = gifCloudyDay;
      img.alt = "cloudy days";
      break;
    case "partly-cloudy-night":
      img.src = gifCloudyNight;
      img.alt = "Partly cloudy at night.";
      break;
    case "cloudy":
      img.src = gifClouds;
      img.alt = "It's cloudy.";
      break;
    case "rain":
    case "showers-night":
    case "showers-day":
      img.src = gifRain;
      img.alt = "It's raining.";
      break;
    case "snow":
    case "flurries":
    case "sleet":
      img.src = gifSnow;
      img.alt = "It's snowing.";
      break;
    case "wind":
      img.src = gifWind;
      img.alt = "Windy.";
      break;
    case "fog":
      img.src = gifFog;
      img.alt = "Foggy.";
      break;
    case "hail":
      img.src = gifHail;
      img.alt = "Hail.";
      break;
    case "thunderstorm":
      img.src = gifThunder;
      img.alt = "Thunderstorm.";
      break;
    case "tornado":
      img.src = gifTornado;
      img.alt = "Tornado.";
      break;
    case "haze":
      img.src = gifHaze;
      img.alt = "Hazy.";
      break;
    case "smoke":
      console.log("Smoky air.");
      break;
    case "dust":
      console.log("Dusty conditions.");
      break;
    default:
      console.log("Unknown weather condition.");
      break;
  }
  gifdiv.appendChild(img);
  show_data.appendChild(gifdiv);
};
const display_weather_data=(show_data,div,data,i)=>{
    div.innerHTML = `<h3>${data.days[i].datetime}</h3>
        <p>Conditions: ${data.days[i].conditions}</p>
        <p>Sunrise: ${data.days[i].sunrise}</p>
        <p>Sunset: ${data.days[i].sunset}</p>
        <p>Temprature Max: ${data.days[i].tempmax}°F </p>
        <p>Humidity: ${data.days[i].humidity}%</p>
        <p>Wind Speed: ${data.days[i].windspeed} mph</p>
        <p>Temprature : ${data.days[i].temp}°F</p>
        <p>Temprature Min: ${data.days[i].tempmin}°F</p>
        <p>Description :${data.days[i].description}</p>
        <p>Moon Phase: ${data.days[i].moonphase}</p>`;
      show_data.appendChild(div);
}
const locTime = location_time();

const shownData = (data) => {
  const row = document.getElementById("row");
  const show_data=document.getElementById("show_data");
   const div=document.createElement("div");
   div.className = "data";
   const gifdiv=document.createElement("div");
   div.className="gifs";
    
   clear(row);
   

  for (let i = 0; i < n; i++) {
    const btn = document.createElement("button");
    btn.className = "btn";
    const date = new Date(data.days[i].datetime);
    btn.innerHTML = `${date.getDate()}`;
    row.appendChild(btn);
    }

    const btns = document.querySelectorAll(".btn");
    //initially screen 
    for(let i=0;i<n;i++){
      const time=locTime.get_date();
      const date = new Date(data.days[i].datetime);
      console.log("date " + date.getDate() + " time " + time);
      if (date.getDate() == time) {
        clear(show_data);
        clear(gifdiv);
        gif_manager(show_data,gifdiv,data,i)
        display_weather_data(show_data,div,data,i);
    break;
    }
  }
    let i=-1;
    btns.forEach((btn,i=i+1) => {
      btn.addEventListener("click", () => {
        const alert_data = data.alerts[0];
        
        clear(show_data);
        clear(gifdiv);
        // alert_data(show_data,alert_data);  
        gif_manager(show_data,gifdiv,data,i);
        display_weather_data(show_data,div,data,i);
    });
    });
};



async function weather(st_date, endate) {
  const country = locTime.country_select();
  const city = locTime.city_select();
  if (city != "null") {
    try {
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city},${country}/${st_date}/${endate}?key=UDE3KC334B58VEKYXEZ3AMNDC`
      );
      console.log("raw response", response);
      const data = await response.json();
      //   const weatherData = ()=>data;
      console.log(data);
      shownData(data);
      
      if (response.status != 200) {
        console.log("error in server " + response.status);
      }
    } catch (err) {
      console.log("Fetching err " + err);
    }
  } else {
    console.log("city is null");
  }
}

const submit = document.getElementById("btn");
submit.addEventListener("click", () => {
  const dates = date_paridy(locTime.time_stamp());
  weather(dates.timestart, dates.timeEnd);
});
