window.addEventListener("load", function() {
  init();
});

function init() {    

    const appStoreSection = document.getElementById("app-store");
    const appNameSection = document.getElementById("app-name");
    const bannerSection = document.getElementById("banner");
    const infoSection = document.getElementById("promotions-info");
    const rewardSection = document.getElementById("promotions-reward");

    const checkButton = document.getElementById("promotions-check");
    const claimButton = document.getElementById("promotions-claim");

    checkButton.onclick = function(e) {
        appStoreSection.classList.add('hidden');
        appNameSection.classList.add('hidden');
        bannerSection.classList.add('hidden');
        infoSection.classList.add('hidden');
        rewardSection .classList.remove('hidden');

        checkButton.classList.add('hidden');
        claimButton.classList.remove('hidden');
    }
}