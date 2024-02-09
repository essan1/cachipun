function iniciarJuego() {
  //Bienvenida y preguntamos cuantas veces quiere jugar
  let userName = prompt(`Bienvenido al CA👊 - CHI🤚 - PUN✌️!\nComo te llamas?`);
  let rondas = +prompt(
    `Muy bien ${userName},\nCuantas rondas quieres jugar?\n(Indicame con un numero)`
  );

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
    let userPick = prompt(
      `Escoge: Piedra🪨, Papel📃 o Tijera✂️\nEscribe tu opcion.`
    ).toLowerCase();
    let pcPick = pcEleccion();

    // se verifica la eleccion de user
    if (
      userPick !== "piedra" &&
      userPick !== "papel" &&
      userPick !== "tijera"
    ) {
      alert("Eleccion invalida. Por favor, escoge: Piedra, Papel o Tijera");
    }

    //alerta para mostrar la eleccion de ambos.
    alert(`Tu eliges ${userPick}, yo elijo ${pcPick}`);

    //determinar resultados
    let resultado;
    if (userPick === "piedra") {
      if (pcPick === "piedra") {
        empates++;
        resultado = "Empate🤝";
      } else if (pcPick === "papel") {
        victoriasPC++;
        resultado = "Yo Gano😈";
      } else {
        victoriasUsuario++;
        resultado = "Tu ganas🤬";
      }
    } else if (userPick === "papel") {
      if (pcPick === "piedra") {
        victoriasUsuario++;
        resultado = "Tu ganas🤬";
      } else if (pcPick === "papel") {
        empates++;
        resultado = "Empate🤝";
      } else {
        victoriasPC++;
        resultado = "Yo gano😈";
      }
    } else if (userPick === "tijera") {
      if (pcPick === "piedra") {
        victoriasPC++;
        resultado = "Yo gano😈";
      } else if (pcPick === "papel") {
        victoriasUsuario++;
        resultado = "Tu ganas🤬";
      } else {
        empates++;
        resultado = "Empate🤝";
      }
    } else {
      resultado = "Eleccion Invalida 🙄";
    }

    // Mostrar el resultado de la ronda y el marcador actual
    return `${resultado}\n${userName} = ${victoriasUsuario}, YO😎 = ${victoriasPC}, y Empates = ${empates}.`;
  }

  // rondas a jugar (determinado x el user)
  for (let i = 0; i < rondas; i++) {
    let resultado = jugarRonda();
    alert(resultado);
  }
  
  // let para guardar el resultado final y poder pasarlo al html
  let resultadoFinal;
  if (victoriasUsuario > victoriasPC) {
    resultadoFinal = `¡Felicidades🎊, has ganado el juego! Me venciste ${victoriasUsuario} a ${victoriasPC}👍`;
  } else if (victoriasUsuario < victoriasPC) {
    resultadoFinal = `Lo siento🙄, has perdido el juego. Te gané ${victoriasPC} a ${victoriasUsuario}😎`;
  } else {
    resultadoFinal = `El juego terminó en empate📍 Hemos quedado ${victoriasPC} a ${victoriasUsuario}🤗`;
  }

  //
  let resultadoHtml = document.getElementById("resultado");
  resultadoHtml.innerHTML = `${resultadoFinal}`;
}
