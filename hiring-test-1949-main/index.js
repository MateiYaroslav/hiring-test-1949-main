const axios = require('axios');

var zones = [];
var records = [];

const getDomain = async () => {
    const option = {
        method: 'get',
        url: `https://api.recruitment.shq.nz/domains/100?api_key=h523hDtETbkJ3nSJL323hjYLXbCyDaRZ`,
        headers: {
            'Content-Type': 'application/json'
        }
    };
    
    const res = await axios(option);
    res.data.forEach(item => {
        item.zones.forEach(zone => {
            zones.push(zone.uri);
        });
    });
};

const getRecord = async () => {
    for (const zone of zones) {
        const option = {
            url: `https://api.recruitment.shq.nz${zone}?api_key=h523hDtETbkJ3nSJL323hjYLXbCyDaRZ`,
            headers: {
                'Content-Type': 'application/json'
            }
        };
        
        const res = await axios(option);
        res.data.records.forEach(record => {
            records.push(record);
        });
    }
    
    console.log(records);
};

const fetchData = async () => {
    await getDomain();
    await getRecord();
};

fetchData();