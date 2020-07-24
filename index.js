const axios = require('axios');

axios
    .get('https://jsonplaceholder.typicode.com/todos')
    .then(result => alert('say hello'));