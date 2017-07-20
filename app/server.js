/**
 * Created by wizard on 7/20/17.
 */

const express = require('express');

const app = express();
app.use(express.static(__dirname + '/static'));

app.listen(3000, function () {
    console.log('App started on port 3000');
});