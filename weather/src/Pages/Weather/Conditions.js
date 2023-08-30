import styles from '../../CSS/Weather.module.css';
import {conditions} from '../../constants';

const Conditions=({weatherData})=>{
    return (
    <div className={styles.weatherConditions}>
        <div className={styles.condition}>
            <span className={styles.bold}>Wind</span>
            <span>{weatherData.current.wind_kph} km/h, {weatherData.current.wind_dir}</span>
        </div>
        {
            conditions.map((item)=>{
                return(
                <div key={item.condition} className={styles.condition}>
                    <span className={styles.bold}>{item.condition}</span>
                    <span>{weatherData.current[item.access]} {item.unit}</span>
                </div>
                )
            })
        }
    </div>
    );
}

export default Conditions;