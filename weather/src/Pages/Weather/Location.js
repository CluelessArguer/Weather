import styles from '../../CSS/Weather.module.css';
import {phases} from '../../constants';

const Location=({weatherData})=>{
    return (
    <div className={styles.weatherInner}>
        <div>
            <h1 className={styles.heading}>{weatherData.location.name}, <span className={styles.fontMed}>{weatherData.location.region}</span></h1>
            <h2 className={styles.fontMed}>{weatherData.location.country}</h2>
            <h3 className={styles.fontSmall}>{weatherData.location.localtime}</h3>
        </div>
        <div className={styles.temperature}>
            <div className={styles.currentConditions}>
                <span className={styles.fontLarge}>{weatherData.current.temp_c}<sup>&#176;C</sup></span>
                <span>FEELS like {weatherData.current.feelslike_c}<sup>&#176;C</sup></span>
            </div>
            <div>
                <img className={styles.conditionImage} src={weatherData.current.condition.icon} alt='condition'/>
                
            </div>
        </div>
        <div className={styles.phases}>
            {
                phases.map((phase)=>{
                    return(
                    <div key={phase.alt}>
                        <img src={phase.src} alt={phase.alt}/>
                        <span>{weatherData.forecast.forecastday[0].astro[phase.alt]}</span>
                    </div>
                    )
                })
            }
        </div>
    </div>
    );
}

export default Location;