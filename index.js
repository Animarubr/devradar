const express = require('express');

app = express();

app.get('/', (request, response) => {
    return response.json({ message: 'Hellow world' });
});

app.listen(3333);