const order = {
    "i": [
        {
        "id": "coke",
        "q": 2
        } 
    ],
    "p": 1,
    "r": 1
};

window.addEventListener("load", function() {
  init();
});

function init() {  
    const menuSection = document.getElementById("menu");
    const paymentSection = document.getElementById("payment");
    const receiptSection = document.getElementById("receipt");
    const notificationSection = document.getElementById("notification");
    const qrCodeSection = document.getElementById("code");
    const alternativeSection = document.getElementById("alternative");

    const paymentBtn = document.getElementById("btn-payment");
    const checkoutBtn = document.getElementById("btn-checkout");
    const onlineBtn = document.getElementById("btn-online");

    var source = document.getElementById("menu-template").innerHTML;
    var categoryTemplate = Handlebars.compile(source);

    var sourceItem = document.getElementById("menu-item-template").innerHTML;
    var itemTemplate = Handlebars.compile(sourceItem);

    menu.forEach(item => {
        var html = categoryTemplate(item);    
        menuSection.append(htmlToElement(html));   
        
       /* item.items.forEach(menu => {
            var html = itemTemplate(menu);    
            mainSection.append(htmlToElement(html));   
        }); */
    });

    document.getElementById('btn-payment').onclick = function(e) {
        menuSection.classList.add('hidden');
        paymentSection.classList.remove('hidden');
        receiptSection.classList.remove('hidden');
        notificationSection.classList.remove('hidden');
        paymentBtn.classList.add('hidden');
        checkoutBtn.classList.remove('hidden');
    }

    document.getElementById('btn-checkout').onclick = function(e) {
        menuSection.classList.add('hidden');
        paymentSection.classList.add('hidden');
        receiptSection.classList.add('hidden');
        notificationSection.classList.add('hidden');
        checkoutBtn.classList.add('hidden');

        qrCodeSection.classList.remove('hidden');
        alternativeSection.classList.remove('hidden');
        
        new QRCode(document.getElementById("qrcode"), JSON.stringify(order));
    }
}

function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}
