/**
 * Created by kolinkoehl on 5/1/16.
 */

var express = require('express');
var router = express.Router();
var Newfx = require('../models/fixeriomongo');

router.get('/', function(req, res) {
    Newfx.find().select().sort('-date').limit(1).exec(function(err, Newfx) {
        if (err)
            res.send(err);

        res.json(Newfx);
    });
});

router.route('/:currency')
    .get(function(req,res) {
        Newfx.find().select('rates.'+req.params.currency).sort('-date').limit(1).exec(function(err, Newfx) {
            if (err)
                res.send(err);

            res.json(Newfx);
        });

    });

///beer/:beer_id

module.exports = router;