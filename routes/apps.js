'use strict';

const express = require('express');
const router = express.Router();

router.get('/order/:org', function(req, res, next) {
    res.render("order", {layout: false});
});

router.get('/coupons/:org', function(req, res, next) {
    res.render("coupons", {layout: false});
});

router.get('/loyalty/:org', function(req, res, next) {
    res.render("loyalty", {layout: false});
});

router.get('/appointments/:org', function(req, res, next) {
    res.render("appointments", {layout: false});
});

module.exports = router;
