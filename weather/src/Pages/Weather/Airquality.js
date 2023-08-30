import {pollutants, messages} from '../../constants';
import styles from '../../CSS/Weather.module.css';

const Airquality=({quality})=>{
    const highestIndex={
        index:1,
        messageGeneral:'',
        risk:''
    };
    const pollutantContainer=Object.entries(quality).map(([pollutant,concentration])=>{
        return pollutants[pollutant]
        .filter((boundary)=>concentration>=boundary.low&&concentration<=boundary.high)
        .map(({index})=>{
            const pollutantHTML=[
                <span key={`${pollutant}1`} className={`${styles.uppercase} ${styles.bold}`}>{pollutant}</span>,
                <span key={`${pollutant}2`}>{concentration.toFixed(2)} &#181;g/m<sup>3</sup></span>
            ];
            highestIndex.index=(index>highestIndex.index)?index:highestIndex.index;
            if(index>=1&&index<=3){
                highestIndex.risk='Low Risk';
                highestIndex.messageGeneral=messages[0].messageGeneral
            }else if(index>=4&&index<=6){
                highestIndex.risk='Moderate Risk';
                highestIndex.messageGeneral=messages[1].messageGeneral
            }else if(index>=7&&index<=9){
                highestIndex.risk='High Risk';
                highestIndex.messageGeneral=messages[2].messageGeneral
            }else{
                highestIndex.risk='Very High Risk';
                highestIndex.messageGeneral=messages[3].messageGeneral
            }
            return <div key={pollutant} className={styles.pollutantContainer}>
                        {pollutantHTML}
                    </div>;
        })

    });

    return (
        <div className={styles.airQuality}>
            {
                <>
                    <div className={styles.messages}>
                        <div className={styles.airQualityHeading}>
                            <h3 className={styles.aqHeading}>Daily Air Quality Index</h3>
                            <div className={styles.messageChild}>
                                <span className={styles.index}>{highestIndex.index}</span>
                                <span>{highestIndex.risk}</span>
                            </div>
                        </div>
                        <div className={styles.airQualityMessages}>
                            <div className={styles.messageChild}>
                                <span>General Population: </span>
                                <span>{highestIndex.messageGeneral}</span>
                            </div>
                        </div>
                    </div>
                        <div className={styles.pollutants}>
                            {pollutantContainer}
                        </div>
                </>
            }
        </div>
    );
}


export default Airquality;