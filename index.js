var axios   = require('axios');

axios.get('http://aerial-valor-93012.appspot.com/challenge')
     .then(function(res){
      var sum = res.data.values.reduce(function(a,b){
        return a+b;
      });
        axios.get('http://aerial-valor-93012.appspot.com/challenge/' + res.data.token + '/' + sum)
             .then(function(res){
                console.log(res);
             });
   });