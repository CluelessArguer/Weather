import Carousel from 'react-multi-carousel';
import {responsive} from '../../constants';
import styles from '../../CSS/Weather.module.css';
import 'react-multi-carousel/lib/styles.css';

const Hourlyforecast=({weatherData})=>{
    return (
    <Carousel
        responsive={responsive}
        removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
        containerClass={styles.carouselContainer}
        sliderClass={styles.sliderContainer}
        infinite={true}            
        arrows={false}
        >
        {
            weatherData.forecast.forecastday[0].hour.map((hourly, index)=>{
                return (
                <div  key={index} className={styles.hourlyWeather}>
                    <span className={`${styles.alignCenter} ${styles.conditionText}`}>{hourly.condition.text}</span>
                    <span className={styles.alignCenter}>{hourly.time}</span>
                    <span className={styles.alignCenter}><img src={hourly.condition.icon} alt='condition'/></span>
                    <span>{hourly.temp_c}<sup>&#176;C</sup> feels like {hourly.feelslike_c}<sup>&#176;C</sup></span>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>POP</th>  
                                <th>Precipitation</th>                              
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {
                                    hourly.will_it_rain?
                                    <td>{hourly.chance_of_rain}%</td>:
                                    hourly.will_it_snow?<td>{hourly.chance_of_snow}%</td>:
                                    <td>0%</td>
                                }
                                <td>{hourly.precip_mm} mm</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                );
            })
        }
    </Carousel>

    );
}

export default Hourlyforecast;