import Carousel from 'react-multi-carousel';
import {responsive} from '../../constants';
import styles from '../../CSS/Weather.module.css';
import 'react-multi-carousel/lib/styles.css';

const Forecast = ({weatherData})=>{
    return (
    <Carousel
        responsive={responsive}
        draggable={false}
        infinite={true}
        removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
        containerClass={styles.carouselContainer}
        sliderClass={styles.sliderContainer}
    >
    {
            weatherData.forecast.forecastday.map((forecast,index)=>{
                return (
                    <div key={index} className={styles.forecastWeather}>
                    <span className={styles.conditionText}>{forecast.day.condition.text}</span>
                    <span>{forecast.date}</span>    
                    <span><img src={forecast.day.condition.icon} alt='condition'/></span>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Temp</th>  
                                <th>Wind Speed</th>  
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{forecast.day.avgtemp_c}<sup>&#176;C</sup></td>
                                <td>{forecast.day.maxwind_kph} km/h</td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                                <th>POP</th>  
                                <th>Precipitation</th>                         
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {
                                    forecast.day.daily_will_it_rain?
                                    <td>{forecast.day.daily_chance_of_rain}%</td>:
                                    forecast.day.daily_will_it_snow?<td>{forecast.day.daily_chance_of_snow}%</td>:
                                    <td>0%</td>
                                }     
                                <td colSpan='2'>{forecast.day.totalprecip_mm} mm (rain)</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>{forecast.day.totalsnow_cm} cm (snow)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )
            })
        }
    </Carousel>

    );
}

export default Forecast;