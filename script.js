document.addEventListener("DOMContentLoaded", function() {
    fetch('analogies.json').then(function(response) { 
response.json().then(function(analogies){  
  console.log(analogies);
var numCase = 0;
analogies.forEach(function afficheAnalogie(resultat) {
document.querySelector('#liste-analogies').innerHTML += "<section class=\"section\"><div class=\"analogie\" id="+ resultat.id + "><h1>Si j’étais " + resultat.analogie + ", je serais " + resultat.variableAnalogie + ".</h1><img src=" + resultat.img + " alt=\"\"class=\"image\"><div class=\"justify\"><p class=\"paragraphe\">" + resultat.justify + "</p></div></div></section>";
numCase = numCase + 1;

        })
     })
   });


/*  volet déroulant  */
document.querySelector('.volet-invisible').addEventListener('click', function (click) {
    //création du déroulement
    document.querySelector('.volet-invisible').animate([{ height: '12em' }], { duration: 800 })
    setTimeout(function () {
        window.scrollTo(0, document.body.clientHeight);
    }, 2);
    //fixation du déroulement(le volet invisible devient 100% visible)
    setTimeout(function () {
        document.querySelector('.volet-invisible').classList.replace('volet-invisible', 'volet-visible')
            ;
    }, 800);
});

document.querySelector('.volet-invisible').addEventListener('click', function (click) {
    //cachée le volet
    document.querySelector('.volet-visible').animate([{ height: '3em' }], { duration: 800 })
    //fixation du déroulement(le volet visible devient 100% invisible)
    setTimeout(function () {
        document.querySelector('.volet-visible').classList.replace('volet-visible', 'volet-invisible')
            ;
    }, 800);
});


// fenêtre modale  //
var overlay = document.getElementById("overlay");

document.querySelector("#show-modal-btn").addEventListener("click", () => {
    overlay.style.display = "block";
})

document.querySelector("#close-modal-btn").addEventListener("click", () => {
    overlay.style.display = "none";
})

// Formulaire //
document.querySelector('#valider').addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('#toncompte').innerHTML += "<section class=\"section\"><div class=\"analogie\"><h1>Si j’étais " + document.querySelector("#analogie").value + ", je serais " + document.querySelector("#valeurAnalogie").value + ".</h1><img src=" + document.querySelector("#imganalogie").value + " alt=\"\"class=\"image\"><div class=\"justify\"><p class=\"paragraphe\">"  + document.querySelector("#arganalogie").value + "</p></div></div></section>";

/* API */
fetch("https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=anna.hassani&courriel=" + document.querySelector("#courriel").value + "&message=Si j'étais " + document.querySelector("#analogie").value + ",je serais " + document.querySelector("#valeurAnalogie").value + "Parce que " + document.querySelector("#message").value).then(function (response) {
            response.json().then(function (data) {
                if (data.status == "success") {
                    document.querySelector("#message").innerHTML = "Votre message a bien été reçu";
                } else {
                    document.querySelector("#message").innerHTML = "Problème : votre message n'a pas été reçu";
                }
        })
    })
});


});
