// 100 preguntas: 20 por categoría
const ridiculas = [
  "¿Quién sería el más probable en casarse solo por los regalos?",
  "¿Quién terminaría en el noticiero por algo insólito?",
  "¿Quién se olvidaría a un hijo en una estación de servicio?",
  "¿Quién tendría una crisis existencial por quedarse sin WiFi?",
  "¿Quién se uniría a una secta sin darse cuenta?",
  "¿Quién grabaría un tutorial en YouTube y se haría viral por accidente?",
  "¿Quién haría una videollamada desde el baño sin querer?",
  "¿Quién se tropezaría con su propia sombra?",
  "¿Quién se presentaría a trabajar un domingo creyendo que es lunes?",
  "¿Quién se quedaría encerrado en un baño público?",
  "¿Quién enviaría un sticker en medio de una discusión seria?",
  "¿Quién se dormiría en una cita?",
  "¿Quién entraría a una casa que no es la suya por error?",
  "¿Quién rompería algo en casa ajena y fingiría que ya estaba así?",
  "¿Quién se reiría en un velorio por nervios?",
  "¿Quién se tragaría una moneda por jugar?",
  "¿Quién se iría de vacaciones y se olvidaría la valija?",
  "¿Quién haría un brindis y se golpearía con su propio vaso?",
  "¿Quién llamaría “mamá” al profesor por error?",
  "¿Quién festejaría su cumpleaños un día antes por equivocación?"
];

const cachondas = [
  "¿Quién sería el más probable en tener sexo en un lugar público?",
  "¿Quién aceptaría participar en un trío?",
  "¿Quién le escribiría a su ex a las 3 AM?",
  "¿Quién se haría una cuenta de OnlyFans?",
  "¿Quién tendría un amorío con alguien mucho mayor?",
  "¿Quién haría un video hot y luego lo borraría por vergüenza?",
  "¿Quién tendría sexo con alguien sin saber su nombre?",
  "¿Quién mandaría una nude por error al grupo familiar?",
  "¿Quién usaría juguetes sexuales solo por curiosidad?",
  "¿Quién tendría una fantasía con alguien del grupo?",
  "¿Quién se besaría con dos personas la misma noche?",
  "¿Quién vería porno en un lugar inapropiado?",
  "¿Quién se tatuaría algo erótico?",
  "¿Quién propondría una noche sin ropa?",
  "¿Quién habría tenido sexo en una pileta?",
  "¿Quién guardaría cosas íntimas en la heladera?",
  "¿Quién fingiría estar en pareja para evitar un encuentro sexual?",
  "¿Quién tendría un historial de búsquedas que da vergüenza ajena?",
  "¿Quién se excitaría con algo insólito?",
  "¿Quién le tiraría onda al padre o madre de un amigo?"
];

const oscuras = [
  "¿Quién vendería un riñón por plata si nadie se entera?",
  "¿Quién fingiría estar de duelo para no ir a trabajar?",
  "¿Quién usaría una discapacidad para colarse en la fila?",
  "¿Quién abandonaría al grupo si se gana la lotería?",
  "¿Quién traicionaría al resto en un apocalipsis zombie?",
  "¿Quién sería líder de una dictadura si tuviera poder?",
  "¿Quién fingiría tener una enfermedad para dar lástima?",
  "¿Quién cobraría por dar falsas esperanzas?",
  "¿Quién haría humor negro en un velorio?",
  "¿Quién inventaría una tragedia personal para zafar de algo?",
  "¿Quién mataría sin culpa a un personaje de una serie?",
  "¿Quién dejaría morir a alguien en una película sin avisar?",
  "¿Quién engañaría a una ONG por dinero?",
  "¿Quién usaría un funeral para levantar?",
  "¿Quién se burlaría de un niño sin sentir culpa?",
  "¿Quién le robaría a su abuela y luego la abrazaría?",
  "¿Quién fingiría llorar para manipular?",
  "¿Quién mentiría diciendo que es huérfano por likes?",
  "¿Quién se iría sin pagar de un restaurante?",
  "¿Quién sería cancelado en redes por un comentario fuera de lugar?"
];

const psicologicas = [
  "¿Quién mentiría mejor en un interrogatorio policial?",
  "¿Quién ocultaría un crimen por un amigo?",
  "¿Quién sería más difícil de convencer en una discusión?",
  "¿Quién haría todo por tener la razón?",
  "¿Quién se volvería loco si se queda solo una semana?",
  "¿Quién manipularía emocionalmente sin darse cuenta?",
  "¿Quién se haría la víctima para ganar una pelea?",
  "¿Quién se autoengaña más seguido?",
  "¿Quién haría ghosting sin culpa?",
  "¿Quién terminaría una relación por WhatsApp?",
  "¿Quién ocultaría información para tener ventaja?",
  "¿Quién se haría el tonto para no colaborar?",
  "¿Quién se enamoraría de alguien solo por cómo lo trata?",
  "¿Quién traicionaría sus principios por dinero?",
  "¿Quién evitaría un conflicto aunque eso lo haga cómplice?",
  "¿Quién fingiría arrepentimiento para engañar?",
  "¿Quién necesitaría tener el control todo el tiempo?",
  "¿Quién negaría estar celoso aunque lo esté?",
  "¿Quién se sentiría superior aunque lo oculte bien?",
  "¿Quién sería capaz de actuar como otra persona por días?"
];

const random = [
  "¿Quién lloraría si lo sacan de un grupo de WhatsApp?",
  "¿Quién pasaría 24 horas sin hablar y lo disfrutaría?",
  "¿Quién tendría un accidente ridículo en una primera cita?",
  "¿Quién ganaría todos los juegos solo por suerte?",
  "¿Quién haría un challenge vergonzoso en redes sociales?",
  "¿Quién quedaría pegado en una cita doble incómoda?",
  "¿Quién hablaría con su mascota como si fuera humano?",
  "¿Quién seguiría a un desconocido solo por intuición?",
  "¿Quién se emocionaría en exceso con una película infantil?",
  "¿Quién adoptaría un animal solo por estética?",
  "¿Quién fingiría saber de vinos para quedar bien?",
  "¿Quién se tatuaría una frase sin saber qué significa?",
  "¿Quién se haría viral por una pavada?",
  "¿Quién saldría en una app de citas solo para curiosear?",
  "¿Quién lloraría en una boda ajena sin conocer a nadie?",
  "¿Quién haría cosplay sin que se lo pidan?",
  "¿Quién se sacaría una selfie en una situación seria?",
  "¿Quién escribiría poesía sin contárselo a nadie?",
  "¿Quién coleccionaría cosas inútiles con orgullo?",
  "¿Quién usaría Crocs en una gala sin dudarlo?"
];

// Audios
const flipSound  = document.getElementById('flipSound');
const slideSound = document.getElementById('slideSound');
const passSound  = document.getElementById('passSound');
const endSound   = document.getElementById('endSound');
const dealSound  = document.getElementById('dealSound');

// Estado global
let jugadores     = [];
let mazo          = [];
let modoJuego     = 'completo';
let currentIndex  = -1;
let cartaRevelada = false;

// Crear formulario para nombres
function crearFormNombres() {
  endSound.currentTime = 0;
  endSound.play();

  modoJuego = document.querySelector('input[name="modo"]:checked').value;
  const n = parseInt(document.getElementById('numJugadores').value);
  if (!n || n < 2) return alert('Poné al menos 2 jugadores');
  jugadores = [];

  const cont = document.getElementById('nombresContainer');
  cont.innerHTML = '';
  for (let i = 1; i <= n; i++) {
    const inp = document.createElement('input');
    inp.type = 'text';
    inp.id = `jugador${i}`;
    inp.placeholder = `Jugador ${i}`;
    cont.appendChild(inp);
  }

  const btn = document.createElement('button');
  btn.textContent = 'Comenzar';
  btn.onclick = () => {
    endSound.currentTime = 0;
    endSound.play();
    iniciarSetup();
  };
  cont.appendChild(btn);
}

// Iniciar juego
function iniciarSetup() {
  const inputs = document.querySelectorAll('#nombresContainer input');
  for (let inp of inputs) {
    const name = inp.value.trim();
    if (!name) return alert('Completá todos los nombres');
    jugadores.push({ name, score: 0 });
  }

  document.getElementById('setup').style.display = 'none';
  document.getElementById('container').style.background = 'none';
  document.getElementById('app').style.display = 'block';
  document.getElementById('mazoBack').classList.add('mover-izq');

  dealSound.currentTime = 0;
  dealSound.play();

  iniciarMazo();
  iniciarJuego();
}

function iniciarMazo() {
  mazo = [
    ...ridiculas.map(t => ({ texto: t, categoria: 'Ridícula', catClass: 'ridicula' })),
    ...cachondas.map(t => ({ texto: t, categoria: 'Picante',   catClass: 'picante' })),
    ...oscuras.map(t    => ({ texto: t, categoria: 'Turbia',    catClass: 'turbia' })),
    ...psicologicas.map(t => ({ texto: t, categoria: 'Mental',  catClass: 'mental' })),
    ...random.map(t     => ({ texto: t, categoria: 'Random',   catClass: 'random' }))
  ].sort(() => Math.random() - 0.5);

  if (modoJuego === 'cortado') mazo = mazo.slice(0, 50);

  currentIndex = -1;
  document.getElementById('contador').innerText = `Cartas restantes: ${mazo.length}`;
  document.getElementById('votosContainer').innerHTML = '';
  document.getElementById('boton-anterior').style.display = 'none';
}

function iniciarJuego() {
  cartaRevelada = false;
  siguienteCarta();
}

function cardClick() {
  if (cartaRevelada) return;
  flipSound.currentTime = 0;
  flipSound.play();

  document.getElementById('contenido-carta').classList.add('mostrar');
  cartaRevelada = true;
  document.getElementById('boton-anterior').style.display = currentIndex > 0 ? 'inline-block' : 'none';
  renderVotacion();
}

function siguienteCarta() {
  const cartaDiv = document.getElementById('carta');
  const contenidoDiv = document.getElementById('contenido-carta');
  const textoDiv = document.getElementById('texto-carta');
  const categoriaDiv = document.getElementById('categoria-carta');
  const botonPrev = document.getElementById('boton-anterior');

  document.getElementById('votosContainer').innerHTML = '';
  contenidoDiv.classList.remove('mostrar');
  cartaDiv.classList.add('salida-derecha');

  passSound.currentTime = 0;
  passSound.play();

  setTimeout(() => {
    currentIndex++;
    if (currentIndex >= mazo.length) return mostrarResultado();

    slideSound.currentTime = 0;
    slideSound.play();

    const c = mazo[currentIndex];
    categoriaDiv.innerText = c.categoria;
    categoriaDiv.className = `categoria ${c.catClass}`;
    textoDiv.innerText = c.texto;

    cartaDiv.className = 'carta-activa';
    void cartaDiv.offsetWidth;
    cartaDiv.classList.add('entrada-zoom');

    cartaRevelada = false;
    botonPrev.style.display = currentIndex > 0 ? 'inline-block' : 'none';
    document.getElementById('contador').innerText = `Cartas restantes: ${mazo.length - currentIndex - 1}`;
  }, 600);
}

function renderVotacion() {
  const vc = document.getElementById('votosContainer');
  vc.innerHTML = '<p>¿Quién recibe esta carta?</p>';
  jugadores.forEach(j => {
    const b = document.createElement('button');
    b.textContent = j.name;
    b.onclick = () => {
      j.score++;
      siguienteCarta();
    };
    vc.appendChild(b);
  });
}

function anteriorCarta() {
  if (currentIndex <= 0) return;
  currentIndex -= 2;
  if (currentIndex < -1) currentIndex = -1;
  siguienteCarta();
}

function finalizarJuego() {
  endSound.currentTime = 0;
  endSound.play();
  mostrarResultado();
}

function mostrarResultado() {
  endSound.currentTime = 0;
  endSound.play();

  const ranking = [...jugadores].sort((a, b) => b.score - a.score);
  const max = ranking[0].score;
  const ganadores = ranking.filter(j => j.score === max);

  let msg = '';
  if (max === 0) {
    msg = 'Nadie perdió: todos tienen 0 cartas asignadas';
  } else if (ganadores.length === 1) {
    msg = `${ganadores[0].name} se comió más cartas, es el AMIGO DEL ORTO con ${ganadores[0].score} votos`;
  } else {
    const nombres = ganadores.map(g => g.name).join(' y ');
    msg = `Empate entre ${nombres}, cada uno con ${max} cartas. Son los AMIGOS DEL ORTO.`;
  }

  const lista = ranking.map(j => `<li>${j.name}: ${j.score}</li>`).join('');

  document.getElementById('app').style.display = 'none';
  document.getElementById('result').style.display = 'block';
  document.getElementById('ganador').innerHTML = `<p>${msg}</p><ol>${lista}</ol>`;

  // ✅ Reasignar sonido al botón "Jugar de nuevo"
  setTimeout(() => {
    const boton = document.querySelector('#result button');
    if (boton) {
      boton.onclick = () => {
        endSound.currentTime = 0;
        endSound.play();
        window.location.reload();
      };
    }
  }, 0);
}
