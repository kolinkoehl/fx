/**
 * Created by kolinkoehl on 4/30/16.
 */
var mongodb = require('mongodb');
var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var https = require("https");
var http = require('http');
var requestify = require('requestify');
var Newfx = require('../models/fixeriomongo');
var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/'); // connect to our database




requestify.get('http://api.fixer.io/latest?base=USD').then(function(response) {
    // Get the response body
    console.log(response.getBody());
    var car = response.getBody();
    var fx2 = new Newfx();
    fx2.base = car.base;
    fx2.date = car.date;
    fx2.rates.AUD = car.rates.AUD;
    fx2.rates.BGN = car.rates.BGN;
    fx2.rates.BRL = car.rates.BRL;
    fx2.rates.CAD = car.rates.CAD;
    fx2.rates.CHF = car.rates.CHF;
    fx2.rates.CNY = car.rates.CNY;
    fx2.rates.CZK = car.rates.CZK;
    fx2.rates.DKK = car.rates.DKK;
    fx2.rates.GBP = car.rates.GBP;
    fx2.rates.HKD = car.rates.HKD;
    fx2.rates.HRK = car.rates.HRK;
    fx2.rates.HUF = car.rates.HUF;
    fx2.rates.IDR = car.rates.IDR;
    fx2.rates.ILS = car.rates.ILS;
    fx2.rates.INR = car.rates.INR;
    fx2.rates.JPY = car.rates.JPY;
    fx2.rates.KRW = car.rates.KRW;
    fx2.rates.MXN = car.rates.MXN;
    fx2.rates.MYR = car.rates.MYR;
    fx2.rates.NOK = car.rates.NOK;
    fx2.rates.NZD = car.rates.NZD;
    fx2.rates.PHP = car.rates.PHP;
    fx2.rates.PLN = car.rates.PLN;
    fx2.rates.RON = car.rates.RON;
    fx2.rates.RUB = car.rates.RUB;
    fx2.rates.SEK = car.rates.SEK;
    fx2.rates.SGD = car.rates.SGD;
    fx2.rates.THB = car.rates.THB;
    fx2.rates.TRY = car.rates.TRY;
    fx2.rates.ZAR = car.rates.ZAR;
    fx2.rates.EUR = car.rates.EUR;

    
    fx2.save();

});








module.exports = router;