import {useEffect,useState} from "react";

const useFetch=(url,info)=>{
    const [jsonData, setJSONData]=useState(null);
    const [isLoading, setLoading]=useState(true);

    useEffect(()=>{
            const weatherData=JSON.parse(localStorage.getItem(`${info.lat},${info.lon}`))
            if(!weatherData){
            const abortController=new AbortController();
            setLoading(true);
            fetch(`${process.env.REACT_APP_URL}${url}`,{
                signal:abortController.signal,
            })
                .then(response=>{
                    if(!response.ok)
                        throw new Error("Invalid Response!");
                    else
                        return response.json();
                })
                .then(data=>{
                   localStorage.setItem(`${data.location.lat},${data.location.lon}`, JSON.stringify(data));
                   setJSONData(data);
                })
                .catch((error)=>{
                    console.warn(error)
                })
                .finally(()=>setLoading(false))
            
                return ()=>abortController.abort();
            }else{
                setJSONData(weatherData);
            }
    },[url, info.lat, info.lon]);

    return {jsonData, isLoading};
}

export default useFetch;