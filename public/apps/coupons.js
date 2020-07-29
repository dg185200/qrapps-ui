const coupons = [
    {
        "id": "ad0dd6f0-d106-11ea-87d0-0242ac130003",
        "icon": "/images/coke.png",
        "title": "Save $0.50 on Coca-Cola beverages",
        "description": "Save $0.50 on Coca-Cola beverages when you buy a 12-pack of 12oz",
        "expiration": "Aug 14"
    },
    {
        "id": "b1f0e0fe-d106-11ea-87d0-0242ac130003",
        "icon": "/images/yogurt.png",
        "title": "Save $0.40 on Oui French Yogurt",
        "description": "Save $0.40 when you buy ONE (1) Oui by Yoplait Yogurt",
        "expiration": "Aug 18"
    },
    {
        "id": "1512c5b6-d149-11ea-87d0-0242ac130003",
        "icon": "/images/sprite.png",
        "title": "Save $0.35 on Sprite beverages",
        "description": "Save $0.50 on Sprite beverages when you buy a 12-pack of 12oz",
        "expiration": "Aug 18"
    }
];

window.addEventListener("load", function() {
  init();
});

function init() {    

    const appStoreSection = document.getElementById("app-store");
    const bannerSection = document.getElementById("banner");
    const mainSection = document.getElementById("coupons");
    const checkoutButton = document.getElementById("checkout");
    const codeSection = document.getElementById("code");

    var source = document.getElementById("coupon-template").innerHTML;
    var template = Handlebars.compile(source);
    
    coupons.forEach(coupon => {
        var html = template(coupon);    
        mainSection.append(htmlToElement(html));
    });

    document.getElementById('checkout').onclick = function(e) {
        appStoreSection.classList.add('hidden');
        bannerSection.classList.add('hidden');
        mainSection.classList.add('hidden');
        checkoutButton.classList.add('hidden');

        var coupons = [];
        const selectedCoupons = document.getElementsByClassName("coupon selected");
        for (var i = 0; i < selectedCoupons.length; i++) {
            coupons.push(selectedCoupons[i].id);
        }

        new QRCode(document.getElementById("qrcode"), JSON.stringify(coupons));

        codeSection.classList.remove('hidden');
    }

    const clipButtons = document.getElementsByClassName('clip-button');
    for (var i = 0; i < clipButtons.length; i++) {
        clipButtons[i].onclick = function(e) {
            const couponId = e.currentTarget.id;
            document.getElementById("coupon-" + couponId).classList.toggle('selected');
            
            if (document.getElementsByClassName("coupon selected").length > 0) {
                document.getElementById("checkout").disabled = false;
            } else {
                document.getElementById("checkout").disabled = true;
            }
        };
    }
}

function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}
