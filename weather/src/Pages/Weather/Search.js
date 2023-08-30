import Input from '../../Components/Input';
import {useMemo, useEffect} from 'react';
import styles from '../../CSS/Search.module.css';
import { City }  from 'country-state-city';
import {useReducer } from 'react';
import {reducer, initialValues} from '../../constants';
import { searchHandlers } from '../../handlers';
import Searchbar from '../../Components/Searchbar';
import Cityscroll from './Cityscroll';

const Search=({retrievecity})=>{

    const [cityInfo,dispatch]=useReducer(reducer, initialValues);
    const callHandlers=useMemo(()=>({
        currentInputCity:(event)=>searchHandlers.currentInputCity(event,dispatch),
        city:(event)=>searchHandlers.city(event, dispatch),
        listEvents:(event)=>searchHandlers.listEvents(event, cityInfo, dispatch),
        inputEvents:(event)=>searchHandlers.inputEvents(event, cityInfo, retrievecity, dispatch),
        findLocation:()=>searchHandlers.location(cityInfo, retrievecity, dispatch)
    }),[cityInfo, dispatch]);
    const cityValidation=cityInfo.name!=='' && cityInfo.suggestions;
    const cities= useMemo(()=>City.getAllCities(),[]);

    useEffect(()=>{
        if(cityInfo.name!=='' && cityInfo.suggestions===false){
            retrievecity(cityInfo);
        }
        
    },[cityInfo])

    if(cityValidation){
        var result=cities.filter(city=>{
            const cityValue=city.name+' '+city.stateCode+' '+city.countryCode;
            const cityName=cityValue.toLowerCase();
            const inputCity=cityInfo.name.toLowerCase().replace(/[\W_]+/g,' ');

            return inputCity.length<5?cityName.startsWith(inputCity):cityName.includes(inputCity);
        }).slice(0,19);     
    }

    return(
        <div className={styles.searchBar}>
            <div>
                <Searchbar
                    className={styles.search}
                    placeholder="Enter city..."
                    onChange={callHandlers.currentInputCity}
                    onKeyDown={callHandlers.inputEvents}
                    value={cityInfo.name}
                />
                {
                cityValidation && result.length>0 && 
                <Cityscroll
                    result={result}
                    listEvents={callHandlers.listEvents}
                    cityHandler={callHandlers.city}
                    spanClass={styles.stateCountry}
                />
                }
            </div>
            <Input 
                className={styles.submit}
                type='button'
                value='Find'
                onClick={callHandlers.findLocation}         
            />
        </div>
    );
}

export default Search;