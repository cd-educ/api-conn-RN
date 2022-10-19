const axios = require('axios');

axios.get("http://dog-api.kinduff.com/api/facts")
    .then(function (resp){
        console.log(resp.data.facts[0]);
    })
    .catch(function (err){
        console.log(err);
    })