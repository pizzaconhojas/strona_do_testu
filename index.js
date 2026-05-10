var haslo = "antek";

function sprawdz_haslo() {
    if(document.getElementById('pass1').value != haslo) {
        alert('źle');
        return false;
    }

    if(document.getElementById('pass1').value == haslo) {
        alert('niepotrzebny alert');
        alert('niepotrzebny alert 2');
        alert('niepotrzebny alert 3');
    }
}

function pokaz_alert_z_dupy() {
    alert('siema')
}