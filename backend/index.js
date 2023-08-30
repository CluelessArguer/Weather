const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

require('dotenv').config();

const app = express();

app.use(cors());

app.get('/weather', (req,res) => {
    const q=req.query.q;
    const days=req.query.days;
    const aqi=req.query.aqi;
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${q}&days=${days}&aqi=${aqi}`)
        .then(response=>{
            if(!response.ok)
                throw new Error("Invalid Response!");
            else
                return response.json()
        })
        .then(data=>res.json(data))
        .catch((error)=>{
            console.error(error);
        });

});

app.listen(8000, ()=>console.log('running'));