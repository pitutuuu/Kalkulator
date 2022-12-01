//Aleksander Sysio

document.getElementById("1").onclick = function(){
    a = parseFloat(document.getElementById("1").value)
    console.log(typeof a)
    document.getElementById("wyswietlacz").innerHTML += a
}
document.getElementById("2").onclick = function(){
    a = parseFloat(document.getElementById("2").value)
    console.log(typeof a)
    document.getElementById("wyswietlacz").innerHTML += a
}
document.getElementById("3").onclick = function(){
    a = parseFloat(document.getElementById("3").value)
    console.log(typeof a)
    document.getElementById("wyswietlacz").innerHTML += a
}
document.getElementById("4").onclick = function(){
    a = parseFloat(document.getElementById("4").value)
    console.log(typeof a)
    document.getElementById("wyswietlacz").innerHTML += a
}
document.getElementById("5").onclick = function(){
    a = parseFloat(document.getElementById("5").value)
    console.log(typeof a)
    document.getElementById("wyswietlacz").innerHTML += a
}
document.getElementById("6").onclick = function(){
    a = parseFloat(document.getElementById("6").value)
    console.log(typeof a)
    document.getElementById("wyswietlacz").innerHTML += a
}
document.getElementById("7").onclick = function(){
    a = parseFloat(document.getElementById("7").value)
    console.log(typeof a)
    document.getElementById("wyswietlacz").innerHTML += a
}
document.getElementById("8").onclick = function(){
    a = parseFloat(document.getElementById("8").value)
    console.log(typeof a)
    document.getElementById("wyswietlacz").innerHTML += a
}
document.getElementById("9").onclick = function(){
    a = parseFloat(document.getElementById("9").value)
    console.log(typeof a)
    document.getElementById("wyswietlacz").innerHTML += a
}
document.getElementById("0").onclick = function(){
    a = parseFloat(document.getElementById("0").value)
    console.log(typeof a)
    document.getElementById("wyswietlacz").innerHTML += a
}

function wyswietl(){
    zapis2 = parseFloat(document.getElementById("wyswietlacz").innerHTML)
    if (znak == "+"){
        //console.log(zapis2)
        wynik = zapis + zapis2
        //console.log(wynik)
        document.getElementById("wyswietlacz").innerHTML = wynik
    }
    if (znak == "-"){
        //console.log(zapis2)
        wynik = zapis - zapis2
        //console.log(wynik)
        document.getElementById("wyswietlacz").innerHTML = wynik
    }
    if (znak == "x"){
        //console.log(zapis2)
        wynik = zapis * zapis2
        //console.log(wynik)
        document.getElementById("wyswietlacz").innerHTML = wynik
    }
    if (znak == "/"){
        //console.log(zapis2)
        wynik = zapis / zapis2
        //console.log(wynik)
        document.getElementById("wyswietlacz").innerHTML = wynik.toFixed(2) //zaokrąglenie do dwóch po przecinku
    }
}

document.getElementById("=").onclick = function(){
    wyswietl()
}

document.getElementById("+").onclick = function(){
    znak = "+"
    zapis = parseFloat(document.getElementById("wyswietlacz").innerHTML)
    //console.log(zapis)
    document.getElementById("wyswietlacz").innerHTML = ""
}
document.getElementById("-").onclick = function(){
    znak = "-"
    zapis = parseFloat(document.getElementById("wyswietlacz").innerHTML)
    //console.log(zapis)
    document.getElementById("wyswietlacz").innerHTML = ""
}
document.getElementById("x").onclick = function(){
    znak = "x"
    zapis = parseFloat(document.getElementById("wyswietlacz").innerHTML)
    //console.log(zapis)
    document.getElementById("wyswietlacz").innerHTML = ""
}
document.getElementById("/").onclick = function(){
    znak = "/"
    zapis = parseFloat(document.getElementById("wyswietlacz").innerHTML)
    //console.log(zapis)
    document.getElementById("wyswietlacz").innerHTML = ""
}
document.getElementById(".").onclick = function(){
    zapis = document.getElementById("wyswietlacz").innerHTML
    document.getElementById("wyswietlacz").innerHTML = zapis + "."
    zapis = parseFloat(document.getElementById("wyswietlacz").innerHTML)
    //console.log(zapis)
}