window.addEventListener("load", function() {
  init();
});

function init() {    

    const appStoreSection = document.getElementById("app-store");
    const bannerSection = document.getElementById("banner");
    const mainSection = document.getElementById("loyalty");
    const signupButton = document.getElementById("signup");
    const alternativeSection = document.getElementById("alternative");
    const codeSection = document.getElementById("code");

    document.getElementById('signup').onclick = function(e) {
        appStoreSection.classList.add('hidden');
        bannerSection.classList.add('hidden');
        mainSection.classList.add('hidden');
        signupButton.classList.add('hidden');
        alternativeSection.classList.remove('hidden');

        const loyaltyData = {};
        loyaltyData.email = document.getElementById("email_field").value;
        loyaltyData.phone = document.getElementById("phone_field").value;
        loyaltyData.firstName = document.getElementById("firstName_field").value;
        loyaltyData.lastName = document.getElementById("lastName_field").value;
        new QRCode(document.getElementById("qrcode"), JSON.stringify(loyaltyData));

        codeSection.classList.remove('hidden');
    }
}