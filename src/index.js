const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

app = express();

mongoose.connect('mongodb+srv://animarubr:combus003@cluster0-kopwg.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);


app.listen(3333);