import Airquality from './Airquality';
import useFetch from '../../Hooks/useFetch';
import Location from './Location';
import Conditions from './Conditions';
import Forecast from './Forecast';
import Hourlyforecast from './Hourlyforecast';
import styles from '../../CSS/Weather.module.css';


const Weather=({info})=>{
    const url=(info.lat===-1 || info.lon===-1)?`q=${info.name}&days=3&aqi=yes`:`q=${info.lat},${info.lon}&days=3&aqi=yes`;
    const pollution={
        pollutants:''
    };
    const {jsonData, isLoading}=useFetch(url,info);
    const weatherData=jsonData;

    if(weatherData){
        const airQuality=weatherData.current.air_quality;
        pollution.pollutants={
                no2:airQuality.no2,
                o3:airQuality.o3,
                pm10:airQuality.pm10,
                pm2_5:airQuality.pm2_5,
                so2:airQuality.so2
            };
    }

    return(
        <>
        {weatherData?
            <div className={styles.weather}>
                <div className={styles.weatherSection1}>
                    <Location weatherData={weatherData}/>
                    <Airquality quality={pollution.pollutants} />
                </div>
                <Conditions weatherData={weatherData}/>
                <h3 className={styles.headingForecast}>Hourly Forecast</h3>
                <Hourlyforecast weatherData={weatherData}/>
                <h3 className={styles.headingForecast}>3-Day Forecast</h3>
                <Forecast weatherData={weatherData}/>
            </div>:
            <div className={styles.unavailable}>
                <div className={styles.unavailableInner}>
                    <span className={styles.unavailableText}>{isLoading? 'Loading...':'No data available at this time'}</span>
                </div>
            </div>
        }

        </>
    );
}

export default Weather;