'use strict';

const express = require('express');
const fetch = require('node-fetch')
const router = express.Router();

router.get('/login', function(req, res, next) {
    res.render("login", {layout: false});
});

router.get('/', function(req, res, next) {
    res.render("dashboard", {layout: 'admin.hbs'});
});

router.get('/store', function(req, res, next) {
    res.render("store", {layout: 'admin.hbs'});
});

router.get('/settings', function(req, res, next) {
    res.render("settings", {layout: 'admin.hbs'});
});

router.get('/logout', function(req, res, next) {
    res.redirect("/login");
});

module.exports = router;
