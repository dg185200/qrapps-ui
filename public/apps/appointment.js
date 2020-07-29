const slots = [
    {
        "id": "88c8c547-9c77-4d66-ad57-f5df1912d7b5",
        "time": "08:45AM",
    },
    {
        "id": "46a74685-1e32-426c-a9d5-a1461d356df8",
        "time": "09:15AM",
    },
    {
        "id": "ad0dd6f0-d106-11ea-87d0-0242ac130003",
        "time": "12:00PM",
    },
    {
        "id": "b1f0e0fe-d106-11ea-87d0-0242ac130003",
        "time": "12:15PM",
    },
    {
        "id": "1512c5b6-d149-11ea-87d0-0242ac130003",
        "time": "12:30PM",
    },
    {
        "id": "46a74685-1e32-426c-a9d5-a1461d356df8",
        "time": "04:30PM",
    }
];

window.addEventListener("load", function() {
  init();
});

function init() {    

    const appStoreSection = document.getElementById("app-store");
    const bannerSection = document.getElementById("banner");
    const mainSection = document.getElementById("slots");
    const checkoutButton = document.getElementById("checkout");
    const codeSection = document.getElementById("code");

    var source = document.getElementById("slot-template").innerHTML;
    var template = Handlebars.compile(source);
    
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    mainSection.append(htmlToElement("<p>" + new Date().toLocaleDateString(undefined, options) + "</p>"));

    slots.forEach(slot => {
        var html = template(slot);    
        mainSection.append(htmlToElement(html));
    });
}

function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}
