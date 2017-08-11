const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ hi: 'there'});
});

//Use process.env.PORT . If it is not defined, use 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);