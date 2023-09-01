import Search from './Search';
import Weather from './Weather';
import {useState, useCallback} from 'react';

const Home=()=>{
    const [cityInfo,setCityInfo]=useState({
        name:'London',
        lat:51.52,
        lon:-0.11
    });

    const retrieveCityInfo=useCallback((info)=>{
            setCityInfo((prev)=>{
                if(prev.name===info.name)
                    return {...prev}
                else
                    return { 
                        name:info.name,
                        lat:info.lat,
                        lon:info.lon
                    }
                    
            }
        )
    },[]);

    return(
        <div className='main'>
            <Search retrievecity={retrieveCityInfo} />
            <Weather info={cityInfo}/>
        </div>
    );
}

export default Home;