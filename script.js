// 100 preguntas: 20 de cada categoría, con etiqueta y clase
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

let mazo = [],
    juegoIniciado = false,
    currentIndex = -1,
    cartaRevelada = false;

function iniciarMazo() {
  mazo = [
    ...ridiculas.map(t => ({ texto: t, categoria: 'Ridícula', catClass: 'ridicula' })),
    ...cachondas.map(t => ({ texto: t, categoria: 'Picante',   catClass: 'picante'   })),
    ...oscuras.map(   t => ({ texto: t, categoria: 'Turbia',    catClass: 'turbia'    })),  
    ...psicologicas.map(t=> ({ texto: t, categoria: 'Mental',    catClass: 'mental'    })),  
    ...random.map(    t => ({ texto: t, categoria: 'Random',    catClass: 'random'    }))
  ].sort(() => Math.random() - 0.5);

  currentIndex = -1;
  document.getElementById("contador").innerText = `Cartas restantes: ${mazo.length}`;
}

function iniciarJuego() {
  iniciarMazo(); juegoIniciado = true; cartaRevelada = false;  
  const cartaDiv     = document.getElementById("carta");  
  const contenidoDiv = document.getElementById("contenido-carta");  
  const textoDiv     = document.getElementById("texto-carta");  
  const categoriaDiv = document.getElementById("categoria-carta");  
  const mazoBack     = document.getElementById("mazoBack");  
  const botonInit    = document.getElementById("boton-inicio");  
  const botonPrev    = document.getElementById("boton-anterior");

  mazoBack.classList.add("mover-izq");  
  contenidoDiv.classList.remove("mostrar"); textoDiv.innerText = ""; categoriaDiv.innerText = "";  
  cartaDiv.className = "carta-activa"; void cartaDiv.offsetWidth;  

  currentIndex = 0;  
  const carta = mazo[currentIndex];  
  categoriaDiv.innerText = carta.categoria; categoriaDiv.className = `categoria ${carta.catClass}`;  
  textoDiv.innerText     = carta.texto; cartaDiv.classList.add("entrada-zoom");  

  botonInit.style.display = "none"; botonPrev.style.display = "none";  
}

function cardClick() {  
  if (!juegoIniciado) return;  
  const contenidoDiv = document.getElementById("contenido-carta");  
  if (!cartaRevelada) {  
    document.getElementById("flipSound").play(); contenidoDiv.classList.add("mostrar");  
    cartaRevelada = true; document.getElementById("boton-anterior").style.display = currentIndex > 0 ? "inline-block" : "none";  
  } else siguienteCarta();  
}

function siguienteCarta() {  
  if (!juegoIniciado) return;  
  const cartaDiv     = document.getElementById("carta");  
  const contenidoDiv = document.getElementById("contenido-carta");  
  const textoDiv     = document.getElementById("texto-carta");  
  const categoriaDiv = document.getElementById("categoria-carta");  
  const mazoBack     = document.getElementById("mazoBack");  
  const botonInit    = document.getElementById("boton-inicio");  
  const botonPrev    = document.getElementById("boton-anterior");

  contenidoDiv.classList.remove("mostrar");  
  cartaDiv.classList.add("salida-derecha");  
  setTimeout(() => {  
    currentIndex++;  
    if (currentIndex >= mazo.length) {  
      textoDiv.innerText = "¡Se terminaron las cartas!";  
      juegoIniciado = false; cartaRevelada = false;  
      botonPrev.style.display = "none"; botonInit.style.display = "inline-block";  
      mazoBack.classList.remove("mover-izq"); return;  
    }  
    const carta = mazo[currentIndex];  
    categoriaDiv.innerText = carta.categoria; categoriaDiv.className = `categoria ${carta.catClass}`;  
    textoDiv.innerText     = carta.texto;  
    cartaDiv.className = "carta-activa"; void cartaDiv.offsetWidth; cartaDiv.classList.add("entrada-zoom");  
    cartaRevelada = false;  
    botonPrev.style.display = currentIndex > 0 ? "inline-block" : "none";  
    document.getElementById("contador").innerText = `Cartas restantes: ${mazo.length - currentIndex - 1}`;  
  }, 600);  
}

function anteriorCarta() {  
  if (!juegoIniciado || currentIndex <= 0) return;  
  const cartaDiv     = document.getElementById("carta");  
  const contenidoDiv = document.getElementById("contenido-carta");  
  const textoDiv     = document.getElementById("texto-carta");  
  const categoriaDiv = document.getElementById("categoria-carta");  

  contenidoDiv.classList.remove("mostrar");  
  currentIndex--;  
  const carta = mazo[currentIndex];  
  categoriaDiv.innerText = carta.categoria; categoriaDiv.className = `categoria ${carta.catClass}`;  
  textoDiv.innerText     = carta.texto;  
  cartaDiv.className = "carta-activa"; void cartaDiv.offsetWidth; cartaDiv.classList.add("entrada-zoom");  
  cartaRevelada = false;  
  document.getElementById("boton-anterior").style.display = currentIndex > 0 ? "inline-block" : "none";  
  document.getElementById("contador").innerText = `Cartas restantes: ${mazo.length - currentIndex - 1}`;  
}
