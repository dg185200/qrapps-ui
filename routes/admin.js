'use strict';

const express = require('express');
const fetch = require('node-fetch')
const router = express.Router();

router.get('/login', function(req, res, next) {
    res.render("login", {layout: false});
});

router.post('/login', function(req, res, next) {
    var credentials = req.body.usnname + ":" + req.body.pwd;
    var buf = Buffer.from(credentials);
    var encodedCredentials = buf.toString('base64');

    var headers = {
        "Content-Type": "application/json",
        "Authorization": "Basic " + encodedCredentials,
        "nep-application-key": "8a008ade69bd7757016a6f7db0d90092",
        "nep-organization": req.body.org,
        "Accept": "*/*"
    }

    var requestOptions = {
        method: 'POST',
        headers: headers,
        body: ""
    };

    fetch("https://gateway-staging.ncrcloud.com/security/authentication/login", requestOptions)
        .then(response => response.json())
        .then(result => {
            if (result.token) {
                console.log("Logged in as  " + result.username);
                res.redirect("/")    
            } else {
                console.log('Authentication error');
                res.redirect("/login")    
            }
        })
        .catch(error => {
            console.log('Error ', error);
            res.redirect("/login")
        });
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
