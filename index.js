var haslo = "antek";


const wpisane_haslo = document.getElementById("pass1")


function sprawdz_haslo() {
    const haslo = document.getElementById("pass1").value;

    if(haslo == "PNCONTRACTEXECUTIONIMMINENT") {
        //strona od Marcina Z
        location.href="./podstrona.html";
    }

    else if(haslo == "F1R3em0J1") {
        //strona od Zuzi Ż
        location.href="./podstrona1.html";
    }

    else if(haslo == "LOD69") {
        //strona od Kingi
        location.href="./podstrona2.html";
    }

    else if(haslo == "e=mc^2") {
        location.href="./film_kostki.html"
    }

    else if(haslo == "diva") {
        location.href="./film_panek.html"
    }

    else if(haslo == "Banan") {
        location.href="./film_mariny.html"
    }

    else if(haslo == "s3Mi-ducK") {
        location.href="./film_antka.html"
    }

    else if(haslo == "PioXDenaturat18") {
        location.href="./film_janka.html"
    }

    else if(haslo == "whistle") {
        location.href="./whistle.html"
    }

    else if(haslo == "megu") {
        location.href="./happy_birthday.html"
    }

    else if(haslo == "pik") { //krzysiu bardzo chcial zeby haslem bylo "𝛑k" ale znaku liczby pi strona chyba nie akceptuje bo nie dzialalo. Tak czy siak wydaje mi sie, ze dasz sobie rade z odnalezieniem tej strony
        location.href="./jegahnohrahfjgdkki.html"
    }

     else if(haslo == "") {
        //strona ode mnie
        location.href="./ludwik.html"
    }

}

function pokaz_alert_z_dupy() {
    alert('guzik')
}