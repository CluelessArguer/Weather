import sunrise from './Assets/sunrise.png';
import sunset from './Assets/sunset.png';
import moonrise from './Assets/moonrise.png';
import moonset from './Assets/moonset.png';
import moonphase from './Assets/moonphase.png';

export const initialValues={
    name:'',
    suggestions:false,
    lat:-1,
    lon:-1
};

export const reducer=(state,action)=>{
    if(action.type==='EMPTY'){
        return {
            name:'',
            suggestions:false,
            lat:-1,
            lon:-1
        };
    }else if(action.type==='TYPING'){
        return {
            name:action.currentCity,
            suggestions:true,
            lat:-1,
            lon:-1
        }
    }else{
        return {
            name:action.click===true?state.name:action.completedCity,
            suggestions:false,
            lat:action.lat,
            lon:action.lon
        }
    }
};

export const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1
    }
  };
  
export const pollutants={
    no2:[
        {   
            index:1,
            low:0,
            high:67
        },
        {
            index:2,
            low:68,
            high:134
        },
        {
            index:3,
            low:135,
            high:200
        },
        {
            index:4,
            low:201,
            high:267
        },
        {
            index:5,
            low:268,
            high:334
        },
        {
            index:6,
            low:335,
            high:400
        },
        {
            index:7,
            low:401,
            high:467
        },
        {
            index:8,
            low:468,
            high:534
        },
        {
            index:9,
            low:535,
            high:600
        },
        {
            index:10,
            low:601,
            high:1000
        }
    ],
    o3:[
        {
            index:1,
            low:0,
            high:33
        },
        {
            index:2,
            low:34,
            high:66
        },
        {
            index:3,
            low:67,
            high:100
        },
        {
            index:4,
            low:101,
            high:120
        },
        {
            index:5,
            low:121,
            high:140
        },
        {
            index:6,
            low:141,
            high:160
        },
        {
            index:7,
            low:161,
            high:187
        },
        {
            index:8,
            low:188,
            high:213
        },
        {
            index:9,
            low:214,
            high:240
        },
        {
            index:10,
            low:241,
            high:1000
        }
    ],
    so2:[
        {
            index:1,
            low:0,
            high:88
        },
        {
            index:2,
            low:89,
            high:177
        },
        {
            index:3,
            low:178,
            high:266
        },
        {
            index:4,
            low:267,
            high:354
        },
        {
            index:5,
            low:355,
            high:443
        },
        {
            index:6,
            low:444,
            high:532
        },
        {
            index:7,
            low:533,
            high:710
        },
        {
            index:8,
            low:711,
            high:887
        },
        {
            index:9,
            low:888,
            high:1064
        },
        {
            index:10,
            low:1065,
            high:2000
        }
    ],
    pm2_5:[
        {
            index:1,
            low:0,
            high:11
        },
        {
            index:2,
            low:12,
            high:23
        },
        {
            index:3,
            low:24,
            high:35
        },
        {
            index:4,
            low:36,
            high:41
        },
        {
            index:5,
            low:42,
            high:47
        },
        {
            index:6,
            low:48,
            high:53
        },
        {
            index:7,
            low:54,
            high:58
        },
        {
            index:8,
            low:59,
            high:64
        },
        {
            index:9,
            low:65,
            high:70
        },
        {
            index:10,
            low:71,
            high:1000
        }
    ],
    pm10:[
        {
            index:1,
            low:0,
            high:16
        },
        {
            index:2,
            low:17,
            high:33
        },
        {
            index:3,
            low:34,
            high:50
        },
        {
            index:4,
            low:51,
            high:58
        },
        {
            index:5,
            low:59,
            high:66
        },
        {
            index:6,
            low:67,
            high:75
        },
        {
            index:7,
            low:76,
            high:83
        },
        {
            index:8,
            low:84,
            high:91
        },
        {
            index:9,
            low:92,
            high:100
        },
        {
            index:10,
            low:101,
            high:1000
        }
    ]
}

export const messages=[
    {
        index:[1,2,3],
        messageGeneral:'Enjoy your usual outdoor activities.'
    },
    {
        index:[4,5,6],
        messageGeneral:'Enjoy your usual outdoor activities.'
    },
    {
        index:[7,8,9],
        messageGeneral:'Anyone experiencing discomfort such as sore eyes, cough or sore throat should consider reducing activity, particularly outdoors.'
    },
    {
        index:10,
        messageGeneral:'Reduce physical exertion, particularly outdoors, especially if you experience symptoms such as cough or sore throat.'
    }
]

export const phases=[
    {
        src:sunrise,
        alt:'sunrise'
    },
    {
        src:sunset,
        alt:'sunset'
    },
    {
        src:moonrise,
        alt:'moonrise'
    },
    {
        src:moonset,
        alt:'moonset'
    },
    {
        src:moonphase,
        alt:'moon_phase'
    }
];

export const conditions=[
    {
        condition:'Gust',
        unit:'km/h',
        access:'gust_kph'
    },
    {
        condition:'Visibility',
        unit:'km',
        access:'vis_km'
    },
    {
        condition:'Humidity',
        unit:'%',
        access:'humidity'
    },
    {
        condition:'Pressure',
        unit:'mbar',
        access:'pressure_mb'
    },
    {
        condition:'UV Index',
        unit:'',
        access:'uv'
    },
    {
        condition:'Precipitation',
        unit:'mm',
        access:'precip_mm'
    }
];