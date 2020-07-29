'use strict';

const express = require('express');
const fetch = require('node-fetch')
const router = express.Router();

router.get('/order/:org', function(req, res, next) {
    var customizations = {};
    customizations.appName = "Order";    
    customizations.appResource = "order";
    customizations.banner = "Start your order";    

    customizations.brandImage = "/images/restaurant.png";

    res.render("order", fetchBrandCustomizations(customizations));
});

router.get('/coupons/:org', function(req, res, next) {
    var customizations = {};
    customizations.appName = "Coupons";    
    customizations.appResource = "coupons";
    customizations.banner = "Clip the coupons to add to your cart";    

    customizations.brandImage = "/images/grocery.jpg";

    res.render("coupons", fetchBrandCustomizations(customizations));
});

router.get('/loyalty/:org', function(req, res, next) {
    var customizations = {};
    customizations.appName = "Loyalty Program";    
    customizations.appResource = "loyalty";
    customizations.banner = "Our members enjoy exclusive savings";    
    
    customizations.brandImage = "/images/grocery2.gif";

    res.render("loyalty", fetchBrandCustomizations(customizations));
});

router.get('/appointments/:org', function(req, res, next) {
    var customizations = {};
    customizations.appName = "Appointments";    
    customizations.appResource = "appointments";
    customizations.banner = "Book your personalized appointment";    

    customizations.brandImage = "/images/retail.jpeg";

    res.render("appointments", fetchBrandCustomizations(customizations));
});

function fetchBrandCustomizations(customizations) {
    /*var test = fetch("https://api.github.com/users/dg185200").then(response =>
        console.log(response)
    );*/
    
    customizations.brandLogo = "data:image/jpeg;base64,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";
    customizations.brandSite = "Atlanta, GA";
//    customizations.brandImage = "/images/retail.jpeg";
    customizations.brandColor1 = "#54BA3A";
    return customizations;
}

module.exports = router;
