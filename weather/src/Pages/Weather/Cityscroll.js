import styles from '../../CSS/Search.module.css';

const Cityscroll=({result,listEvents,cityHandler,spanClass})=>{
    return(
        <ul className={styles.cityList}>
        {    
            result.map((city,index)=>{ 
                const cityString=city.name+', '+city.stateCode+', '+city.countryCode;
                return (
                <li 
                    tabIndex={0} 
                    className={styles.cityItem} 
                    onKeyDown={listEvents} 
                    key={index} 
                    cityitem={cityString} 
                    lat={parseFloat(city.latitude).toFixed(2)} 
                    lon={parseFloat(city.longitude).toFixed(2)} 
                    onClick={cityHandler}
                >
                    {city.name} 
                    <span className={spanClass}> {city.stateCode+', '+city.countryCode}</span>
                </li>)
            })  
        }  
        </ul>  
    );
}

export default Cityscroll;