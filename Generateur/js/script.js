/*
function bienvenu(){
    alert('Bienvenue');
    setTimeout(bienvenu, 1000);
    setInterval(bienvenu, 5000);
}
*/

function notif(){
    alert('Veuillez remplir tous les champs');
}

var min = "abcdefghijklmnopqrstuvwxyz";
var maj = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var chif = "0123456789";
var carspecial = "%!&*^()#$:";

function generer(){

    var monformulaire = document.forms.ajoutPWD;
    var listecar = "";
    var password = "";

    var checkmin = document.querySelector('input[name="Minuscule"]:checked');
    if(checkmin != null) {
        listecar = listecar + min;
        
    }

    var checkmaj = document.querySelector('input[name="Majuscule"]:checked');
    if(checkmaj != null) {
        listecar = listecar + maj;
        
    }

    var checkchif = document.querySelector('input[name="Chiffre"]:checked');
    if(checkchif != null) {
        listecar = listecar + chif;
        
    }

    var checksym = document.querySelector('input[name="Symbole"]:checked');
    if(checksym != null) {
        listecar = listecar + carspecial;
    }

    //console.log(listecar);

    var nombrecar = monformulaire.Nombre.value;

    //console.log(nombrecar);

    for (var i = 1; i <= nombrecar; i++) {
        var randomNumber = Math.floor(Math.random() * listecar.length);
        password += listecar.substring(randomNumber, randomNumber +1);
    }

    console.log(password);

    var minPresente = /[a-z]/.test(password);
    var majPresente = /[A-Z]/.test(password);
    var chifPresente = /\d/.test(password);
    var spePresente = /[%!&*^()#$:]/.test(password);
    

    if ((checkmin !== null && minPresente === false) || (checkmaj !== null && majPresente === false) || (checkchif !== null && chifPresente === false) || (checksym !== null && spePresente === false)) {
        generer();
    } else {
        var datevalid = monformulaire.Date.value;
        var Categ = monformulaire.catégorie.value;
        var siteapp = monformulaire.SiteOrApp.value;

        if (password != "" && datevalid != 0 && Categ != "" && siteapp != "") {

            newLine = document.createElement("tr");

            col1 = document.createElement("td");
            col2 = document.createElement("td");
            col3 = document.createElement("td");
            col4 = document.createElement("td");
            col5 = document.createElement("td");

            col1.textContent = nombrecar;
            col2.textContent = datevalid;
            col3.textContent = Categ;
            col4.textContent = siteapp;
            col5.textContent = password;

            newLine.append(col1, col2, col3, col4, col5);

            var monTableau = document.getElementById("tableau");
            monTableau.appendChild(newLine);

        } else {
            notif();
        }
    }

    
    
}