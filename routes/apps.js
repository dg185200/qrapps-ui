'use strict';

const express = require('express');
const fetch = require('node-fetch')
const router = express.Router();

router.get('/order/:org/:eu', function(req, res, next) {

    console.log("Fetch menu for org " + req.params.org + " and eu " + req.params.eu);

    var headers = {
        "nep-organization": req.params.org,
        "nep-enterprise-unit": req.params.eu
    }  
    
    var requestOptions = {
      method: 'GET',
      headers: headers,
      redirect: 'follow'
    };

    fetch("http://35.232.208.35:9000/api/items", requestOptions)
      .then(response => response.json())
      .then(result => {
        var customizations = {};
        customizations.appName = "Order";    
        customizations.appResource = "order";
        customizations.banner = "Start your order";    
    
        customizations.brandImage = "/images/restaurant.png";
        customizations.menu = JSON.stringify(result);

        res.render("order", fetchBrandCustomizations(req.params.org, customizations));    
       })
      .catch(error => res.render("error"));
});

router.get('/coupons/:org', function(req, res, next) {
    var customizations = {};
    customizations.appName = "Coupons";    
    customizations.appResource = "coupons";
    customizations.banner = "Clip the coupons to add to your cart";    

    customizations.brandImage = "/images/grocery.jpg";

    res.render("coupons", fetchBrandCustomizations(req.params.org, customizations));
});

router.get('/loyalty/:org', function(req, res, next) {
    var customizations = {};
    customizations.appName = "Loyalty Program";    
    customizations.appResource = "loyalty";
    customizations.banner = "Our members enjoy exclusive savings";    
    
    if (req.params.org === "redrobin") {
        customizations.brandImage = "/images/red-robin.jpg";
    } else {
        customizations.brandImage = "/images/noodles.jpg";
    }

    res.render("loyalty", fetchBrandCustomizations(req.params.org, customizations));
});

router.get('/appointments/:org', function(req, res, next) {
    var customizations = {};
    customizations.appName = "Appointments";    
    customizations.appResource = "appointments";
    customizations.banner = "Book your personalized appointment";    

    customizations.brandImage = "/images/retail.jpeg";

    res.render("appointments", fetchBrandCustomizations(req.params.org, customizations));
});

router.get('/giveaway/:org', function(req, res, next) {
    var customizations = {};
    customizations.appName = "Instant Giveaway";    
    customizations.appResource = "giveaway";
    customizations.banner = "Win an iPhone X and many other rewards";    
    customizations.brandImage = "/images/iphone.png";

    res.render("giveaway", fetchBrandCustomizations(req.params.org, customizations));
});

function fetchBrandCustomizations(organization, customizations) {    
    if (organization === "noodles") {
        customizations.brandLogo = "/images/noodles.png";
        customizations.brandSite = "Phoenix, AZ";
        
        customizations.brandButtonColor = "#004d42";

        customizations.brandColor1 = "#FFF";
        customizations.brandFontColor1 = "#000";

        customizations.brandColor2 = "#004d42";
        customizations.brandFontColor2 = "#FFF";

        customizations.brandColor3 = "#004d42";
        customizations.brandFontColor3 = "#FFF";
    } else if (organization === "redrobin") {        
        customizations.brandLogo = "/images/redrobin.png";
        customizations.brandSite = "Phoenix, AZ";

        customizations.brandButtonColor = "#ed1c24";

        customizations.brandFontColor2 = "#707070";

        customizations.brandColor3 = "#ed1c24";
        customizations.brandFontColor3 = "#FFF";

        customizations.brandColor1 = "#FFF";
        customizations.brandFontColor1 = "#ed1c24";
    } else if (organization === "havana") {
        customizations.brandLogo = "/images/havana.png";
        customizations.brandSite = "Valencia, CA";
        customizations.brandColor1 = "#422b26";
        customizations.brandColor2 = "#422b26";
        customizations.brandColor3 = "#422b26";
    } else {
        customizations.brandLogo = "/images/ncrlogo.png";
        customizations.brandSite = "Atlanta, GA";
        customizations.brandButtonColor = "#54BA3A";

        customizations.brandColor1 = "#54BA3A";
        customizations.brandColor2 = "#eee";
        customizations.brandColor3 = "#02A8E1";
    }
    return customizations;
}

module.exports = router;
