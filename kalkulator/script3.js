const wyswietlacz = document.getElementById("wyswietlacz");
let zapis = 0;
let zapis2 = 0;
let znak = "";
let ostatniaOperacja = false;

const cyfry = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const operatory = ["+", "-", "x", "/"];

cyfry.forEach(symbol => {
    document.getElementById(symbol).onclick = () => {
        if (ostatniaOperacja) {
            wyswietlacz.innerHTML = "";
            ostatniaOperacja = false;
        }
        wyswietlacz.innerHTML += symbol;
    }
});

operatory.forEach(op => {
    document.getElementById(op).onclick = () => {
        zapis = parseFloat(wyswietlacz.innerHTML) || 0;
        znak = op;
        wyswietlacz.innerHTML = "";
        ostatniaOperacja = false;
    }
});

document.getElementById("=").onclick = () => {
    let nowyZapis2 = parseFloat(wyswietlacz.innerHTML);

    if (!ostatniaOperacja) {
        zapis2 = nowyZapis2 || zapis2;
    }

    let wynik = 0;

    switch (znak) {
        case "+": wynik = zapis + zapis2; break;
        case "-": wynik = zapis - zapis2; break;
        case "x": wynik = zapis * zapis2; break;
        case "/": wynik = zapis2 !== 0 ? (zapis / zapis2).toFixed(2) : "Błąd"; break;
    }

    wyswietlacz.innerHTML = wynik;
    zapis = parseFloat(wynik);
    ostatniaOperacja = true;
};
