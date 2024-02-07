//preguntamos cuantas veces quiere jugar
let rondas = +prompt(`cuantas rondas quieres jugar?`)

//generamos la eleccion de pc
function pcEleccion() {
    let numeroRandom = Math.floor(Math.random()*3);
    if (numeroRandom === 0){
        return "piedra";
    } else if (numeroRandom === 1) {
        return "papel";
    } else {
        return "tijera"
    }
}

//funcion para jogar una ronda
function jugarRonda() {
    let userPick = prompt("Escoge: Piedra, Papel o Tijera").toLowerCase();
    let pcPick = pcEleccion();

    alert(`Tu eliges ${userPick}, yo elijo ${pcPick}`);

    //determinar resultados
    if (userPick === "piedra"){
        if (pcPick === "piedra"){
            return "Empate";
        } else if (pcPick === "papel"){
            return "Yo Gano";
        } else {
            return "Tu ganas"
        }
    } else if (userPick === "papel") {
        if (pcPick === "piedra"){
            return "Tu ganas"
        } else if (pcPick === "papel"){
            return "empate";
        } else {
            return "yo gano"
        }
    } else if (userPick === "tijera") {
        if (pcPick === "piedra") {
            return "Yo gano"
        } else if (pcPick === "papel"){
            return "tu ganas"
        } else {
            return "empate"
        }
    } else {
        return "eleccion invalida"
    }
}

// rondas a jugar (determinado x el user)
for (let i = 0; i < rondas; i++) {
    alert("Ronda " + (i + 1) + " : ");
    let resultado = jugarRonda();
    alert(resultado);
}

