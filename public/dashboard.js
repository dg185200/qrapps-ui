var httpRequest;

window.addEventListener("load", function() {
  init();
});

function init() {
    var metrics = [400, 350, 345, 440, 475, 500, 520, 670, 650, 800];
    renderResults(metrics);

    renderQRCodes();
}

function renderResults(metrics) {
    var ctx = document.getElementById('metrics').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
    
        // The data for our dataset
        data: {
            labels: ['October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: '',
                backgroundColor: '#56a8ca',
                borderColor: '#ffffff',
                data: metrics
            }],
            legend: {
                display: true,
                labels: {
                    fontColor: '#ba603a'
                }
            }
        },
        options: {}
    });
}

function renderQRCodes() {
    new QRCode(document.getElementById("qrCode-order"), "http://35.232.208.35/apps/order/red-robin-qa/7ec5fed5d44f4c91a1c885f3968b755c");
    new QRCode(document.getElementById("qrCode-coupon"), "http://35.232.208.35/apps/coupons/red-robin-qa");
    new QRCode(document.getElementById("qrCode-loyalty"), "http://35.232.208.35/apps/loyalty/noodles");
    new QRCode(document.getElementById("qrCode-giveaway"), "http://35.232.208.35/apps/giveaway/noodles");
}