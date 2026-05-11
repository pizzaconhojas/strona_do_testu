var haslo = "antek";


const wpisane_haslo = document.getElementById("pass1")


function sprawdz_haslo() {
    const haslo = document.getElementById("pass1").value;

    if(haslo == "antek") {
        alert('niepotrzebny alert');
        location.href="./podstrona.html";
    }

    else if(haslo == "haslo") {
        //alert('ndaegt');
        location.href="./podstrona1.html";
    }

    else if(haslo == "maslo") {
        //alert('ndaegt');
        location.href="./podstrona2.html";
    }
}

function pokaz_alert_z_dupy() {
    alert('guzik')
}