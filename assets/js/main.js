function iniciarJuego() {
  //preguntamos cuantas veces quiere jugar
  let rondas = +prompt(`cuantas rondas quieres jugar?`);

  //generamos la eleccion de pc
  function pcEleccion() {
    let numeroRandom = Math.floor(Math.random() * 3);
    if (numeroRandom === 0) {
      return "piedra";
    } else if (numeroRandom === 1) {
      return "papel";
    } else {
      return "tijera";
    }
  }

  // Contador de wins
  let victoriasUsuario = 0;
  let victoriasPC = 0;
  let empates = 0;

  //funcion para jogar una ronda
  function jugarRonda() {
    let userPick = prompt("Escoge: Piedra, Papel o Tijera").toLowerCase();
    let pcPick = pcEleccion();

    // se verifica la eleccion de user
    if (
      userPick !== "piedra" &&
      userPick !== "papel" &&
      userPick !== "tijera"
    ) {
      alert("Eleccion invalida. Por favor, escoge: Piedra, Papel o Tijera");
      return "Vamos, vuelve a intentarlo!";
    }

    alert(`Tu eliges ${userPick}, yo elijo ${pcPick}`);

    //determinar resultados
    if (userPick === "piedra") {
      if (pcPick === "piedra") {
        empates++;
        return "Empate";
      } else if (pcPick === "papel") {
        victoriasPC++;
        return "Yo Gano";
      } else {
        victoriasUsuario++;
        return "Tu ganas";
      }
    } else if (userPick === "papel") {
      if (pcPick === "piedra") {
        victoriasUsuario++;
        return "Tu ganas";
      } else if (pcPick === "papel") {
        empates++;
        return "empate";
      } else {
        victoriasPC++;
        return "yo gano";
      }
    } else if (userPick === "tijera") {
      if (pcPick === "piedra") {
        victoriasPC++;
        return "Yo gano";
      } else if (pcPick === "papel") {
        victoriasUsuario++;
        return "tu ganas";
      } else {
        empates++;
        return "empate";
      }
    } else {
      return "eleccion invalida";
    }
  }

  // rondas a jugar (determinado x el user)
  for (let i = 0; i < rondas; i++) {
    let resultado = jugarRonda();
    alert(resultado);
  }


  // let para guardar el resultado final y poder pasarlo al html
  let resultadoFinal;
  if (victoriasUsuario > victoriasPC) {
    resultadoFinal = `¡Felicidades, has ganado el juego!, me venciste ${victoriasUsuario} a ${victoriasPC}`;
  } else if (victoriasUsuario < victoriasPC) {
    resultadoFinal = `Lo siento, has perdido el juego. Te gané ${victoriasPC} a ${victoriasUsuario}`;
  } else {
    resultadoFinal = `El juego terminó en empate. Hemos quedado ${victoriasPC} a ${victoriasUsuario}`;
  }

  // 
  let resultadoHtml = document.getElementById("resultado");
  resultadoHtml.innerHTML = `${resultadoFinal}`;
}