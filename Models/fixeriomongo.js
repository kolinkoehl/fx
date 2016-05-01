/**
 * Created by kolinkoehl on 4/30/16.
 */

var mongoose   = require('mongoose');

var Schema       = mongoose.Schema;

var NewfxSchema = new Schema({
    base: String,
    date: Date,
    rates: {
        AUD: Number,
        BGN: Number,
        BRL: Number,
        CAD: Number,
        CHF: Number,
        CNY: Number,
        CZK: Number,
        DKK: Number,
        GBP: Number,
        HKD: Number,
        HRK: Number,
        HUF: Number,
        IDR: Number,
        ILS: Number,
        INR: Number,
        JPY: Number,
        KRW: Number,
        MXN: Number,
        MYR: Number,
        NOK: Number,
        NZD: Number,
        PHP: Number,
        PLN: Number,
        RON: Number,
        RUB: Number,
        SEK: Number,
        SGD: Number,
        THB: Number,
        TRY: Number,
        ZAR: Number,
        EUR: Number
    }

});



module.exports = mongoose.model('Newfx', NewfxSchema);

//download rates from fixerIO and save to Mongo

//schedule this file to run daily

//new rates overwrite old rates

