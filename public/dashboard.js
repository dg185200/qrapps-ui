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
    new QRCode(document.getElementById("qrCode-menu"), "https://ncr.com");
    new QRCode(document.getElementById("qrCode-order"), "https://ncr.com");
}