const menu = [
    {
        "category": "Our Specials",
        "items": [            
        ]
    },
    {
        "category": "Appetizers",
        "items": [            
        ]
    },
    {
        "category": "Salads",
        "items": [            
        ]
    },
    {
        "category": "Entrees",
        "items": [            
        ]
    },
    {
        "category": "Desserts",
        "items": [            
        ]
    }
];

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
    const mainSection = document.getElementById("menu");
    
    menu.forEach(menuElement => {
        var menuCategory = document.createElement("h3");
        menuCategory.appendChild(document.createTextNode(menuElement.category))
        mainSection.appendChild(menuCategory);
    });

    document.getElementById('checkout').onclick = function(e) {
        mainSection.classList.add('hidden');
        new QRCode(document.getElementById("qrcode"), JSON.stringify(order));
    }
}

