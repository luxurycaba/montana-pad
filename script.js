document.addEventListener("DOMContentLoaded", function () {
  // Obtener los elementos
  const hamburguesaToggle = document.getElementById("modal-hamburguesa-toggle");
  const saludo = document.getElementById("btn-saludo");
  const nombreApodo = document.getElementById("btn-nombreApodo");
  const titular = document.getElementById("btn-titular");
  const alias = document.getElementById("btn-alias");
  const cbu = document.getElementById("btn-cbu");
  const btnBienvenida = document.getElementById("btn-bienvenida");
  const btnRegistrarUsuario = document.getElementById("btn-registrarUsuario");
  const segundaCarga = document.getElementById("btn-segundaCarga");
  const acreditadas = document.getElementById("btn-acreditadas");
  const link = document.getElementById("btn-link");
  const sistemaDeReferidos = document.getElementById("btn-sistemaDeReferidos");
  const bono = document.getElementById("btn-bono");
  const captura = document.getElementById("btn-captura");
  const retiro = document.getElementById("btn-retiro");
  const sectorPagos = document.getElementById("btn-sectorPagos");  
  const solicitarUsuario = document.getElementById("btn-solicitarUsuario");
  const referidoAcreditado = document.getElementById("btn-referidoAcreditado");
  const noIngreso = document.getElementById("btn-noIngreso");
  const soporte = document.getElementById("btn-soporte");
  const avisoRetiros = document.getElementById("btn-avisoRetiros");
  const sistemaDePagos = document.getElementById("btn-sistemaDePagos");
  const overlay = document.getElementById("overlay");
  const overlayBienvenida = document.getElementById("overlay-bienvenida");
  const overlayRegistrar = document.getElementById("overlay-registrar");
  const overlayReferidoAcreditado = document.getElementById(
    "overlay-referidoAcreditado"
  );
  const form = document.querySelector("form"); // Seleccionamos el primer formulario
  const formBienvenida = document.querySelectorAll("form")[1]; // Seleccionamos el segundo formulario
  const formRegistrar = document.querySelectorAll("form")[2]; // Seleccionamos el tercer formulario
  const formReferidoAcreditado = document.querySelectorAll("form")[3]; // Seleccionamos el quinto formulario

  let inputTitular, inputCBU, inputAlias;
  let firstVisit = true;
  const textos = [
`Ya están! Mucha suerte!! 🍀`,
`✅ Fichas acreditadas 🎉 *Que la suerte te acompañe* 💥🍀`,
`Acreditadas! A romperla!! 🔥🍀`,
`Todo listo! Éxitos!! ✅🍀`,
`Acreditadas! A jugar!! 🎉✅`,
`Cargadas! Mucha suerte 🥰🍀`,
`🎲 ¡Carga exitosa! Ya podés empezar a jugar 🚀 *Muchisima suerte* 💸🍀`,
`Listo!! Ya podes entrar!! ✅`,
`Listoo!! A darlo todo! 💪🍀`,
`✅ Recarga lista, ahora es tu turno de ganar 💥🍀`,
`Ya podes jugar! Éxitos!! 🎮🍀`,
`Acreditadas! Todo tuyo!! 🤞🏻✅`,
`Cargadas!! ✅`,
`💥 Tus fichas ya están listas 💥`,
`Activadas! Que tengas mucha suerte! 🍀🥰`,
`Ya podes arrancar!! A jugar! 🎲✅`,
`Todo listo! Suerte! 🍀`,
`Cargado! Ya podes entrar 😄✅`,
`💥 Operación completada ✅ ¡A disfrutar y ganar! 🍀`,
`A darle!! Que sea con suerte!! 🤞🏻💫`,
`Ya están listas!! 🍀✅`,
`Suerteee!! Ya podes jugar! 🤩🍀`,
`🎉 Recarga procesada ✅ *¡Muchísima suerte en tus jugadas!* 🍀`,
`Todo ok! A jugar!! 🥳`,
`Acreditado! Vamos con todo! 💪✅`,
`Dale nomas! Ya están cargadas! 👌🍀`,
`Acreditadas! Que la suerte te acompañe! ✨`,
`🎉 Fichas acreditadas con éxito 🎉 *Que la suerte este de tu lado* 🍀💸`,
`Ya está acreditado! Éxitos! 💥🍀`,
`Acreditadass!! Todo listo! 🎉🍀`,
`Acreditadas!! ✅`,
`🚀 Ya tenés tus fichas activas ✅ *Muchos exitosss* 💸🤑`,
`Ya estan cargadas! A jugar!! ✅`,
`Listo acreditado! Suerte!! 🤞🏻🍀`,
`Ya podes arrancar! Mucha suerte! 🚀🍀`,
`✅ Acreditadas! A romperla!! 💥`,
`🎰 ¡Listo para jugar! Tus fichas están cargadas 🔥 *Mucha suerte* 🍀`,
`Listo, ya podes empezar! 🎮🍀`,
`Ya te acredite! A jugar!! 🥰✅`,
`Todo listo! *Mucha suerte!!* 🌟🍀`,
`🎲 *¡Ya podés apostar!* Tus fichas fueron cargadas ✅`
  ];
  let textoIndex = 0;

  const saludos = [
`Holuu, buenass!! 🙌🏻 `,
`Buenas!! 🙋🏼‍♀️`,
`Holii buenas!! 😝`,
`Holuuu!! 😝`,
`Buenass 💕`,
`Holaa buenas!! 🥰`,
`Holii!! 🥰`,
`Bueenass!!! 🤩`,
`Hola buenass!! 🙌🏻`,
`Buenas buenass!! 💕`,
`Holuu buenas!! ☺️`,
`Holaaa!! 🤩`,
`Hola!! 🙌🏻 `,
`Holuu! 🥰`,
`Holaa!! 😝`,
`Buenass!! ☺️`,
`Holaa buenas!! 😁`,
`Buenas buenas!! 😝`
  ];
  let saludosIndex = 0;

  const links = [
`www.kingcash7.net`,
`Accedé a: kingcash7.net`,
`https://www.kingcash7.net`,
`Link: www.kingcash7.net`,
`Ingresá a: kingcash7.net`,
`http://kingcash7.net`,
`Te dejo el link: 🔗 kingcash7.net`,
`kingcash7.net`,
`Página web: 👑 kingcash7.net 👑`,
`El link es: http://kingcash7.net`,
`https://kingcash7.net`,
`Sitio web: 🔗 kingcash7.net`,
`Accedé a: 👑 kingcash7.net 👑`,
`Ingresá a: www.kingcash7.net`,
`Te dejo el link: 👑 kingcash7.net 👑`,
`Link: 👑 kingcash7.net 👑`,
`Accedé a: www.kingcash7.net`,
`🔗 kingcash7.net`,
`Ingresá a: http://kingcash7.net`,
`El link es: www.kingcash7.net`,
`Accedé a: 🔗 kingcash7.net`,
`Link: https://kingcash7.net`,
`https://kingcash7.net`,
`Ingresá a: 👑 kingcash7.net 👑`,
`Página web: www.kingcash7.net`,
`El link es: 🔗 kingcash7.net`,
`kingcash7.net`,
`Te dejo el link: kingcash7.net`,
`Ingresá a: 🔗 kingcash7.net`,
`Link: https://kingcash7.net`,
`Te dejo el link: www.kingcash7.net`,
`👑 kingcash7.net 👑`,
`http://kingcash7.net`,
`El link es: kingcash7.net`,
`Página web: https://kingcash7.net`,
`kingcash7.net`,
`Link: 🔗 kingcash7.net`,
`www.kingcash7.net`,
`Te dejo el link: www.kingcash7.net`,
`Accedé a: kingcash7.net`
  ];
  let linksIndex = 0;

  const sectorPagosMensajes = [
`¡Genial! 🙌 Ya con tus datos, te paso con nuestro sector de pagos 💸
En instantes te van a estar transfiriendo tu premio. *¡Felicidades!* 🥳✨`,
`Buenísimo 😄 Gracias por la info, te derivo con el área de pagos ahora mismo 💥
Van a estar acreditando tu premio al instante. *¡Felicitaciones!* 🎉🤑`,
`¡Perfecto! Con eso ya estás 🙌
Te paso con nuestro equipo de pagos para que recibas tu premio en minutos 🎁
*¡Te felicito!* 🎰💖`,
`Gracias por los datos 😍
Ahora te derivo directamente con quien abona los premios para que lo recibas ya mismo 💸
*¡Disfrutalo!* 🎊`,
`¡Listo! Ya con eso te paso al sector de premios 🎁
En breve vas a estar recibiendo tu ganancia. *¡Felicitaciones campeón/a!* 🥰🔥`,
`¡Excelente! 😍 Gracias por enviarme todo, ahora te derivo con el sector que realiza los pagos 💸
En unos minutos vas a estar recibiendo tu premio. *¡Felicitaciones!* 🎰💥`,
`¡Perfecto! 🙌 Ya con esos datos, te paso con la persona encargada de abonar los premios 🎁
En breve vas a tener tu transferencia. *¡Qué buena jugada hiciste!* 🤑🔥`,
`¡Gracias por la info! 💬
Te derivo al instante con el área de pagos para que te hagan la transferencia 🧾
*¡Disfrutá tu premio, te lo ganaste!* 💃💰`
  ];
  let sectorPagosMensajesIndex = 0;

  const nombreApodoTextos = [
  "¿Me pasás tu nombre o apodo así genero tu usuario?",
  "Necesito un nombre o apodo para crear tu usuario 😊",
  "Para continuar, decime cómo querés que aparezca tu usuario (nombre o apodo).",
  "¿Cómo te gustaría que te llamemos? Con tu nombre o apodo creo el usuario.",
  "Antes de seguir, pasame un nombre o apodo para armar tu usuario.",
  "¿Tenés un nombre o apodo que prefieras? Lo uso para generar tu usuario.",
  "Necesito tu nombre o apodo para crear el usuario y seguimos.",
  "¿Qué nombre o apodo querés usar para tu usuario?",
  "Te pido un nombre o apodo así te genero el usuario en un momento."
];
  let nombreApodoTextosIndex = 0;

  // Funcion para copiar texto al portapapeles
  function copyToClipboard(text) {
    const elementoTemporal = document.createElement("textarea");
    elementoTemporal.value = text;
    document.body.appendChild(elementoTemporal);
    elementoTemporal.select();
    document.execCommand("copy");
    document.body.removeChild(elementoTemporal);
  }

  saludo.addEventListener("click", () => {
    copyToClipboard(saludos[saludosIndex]);
  
    // Avanzar al siguiente saludo (y volver al principio si es el último)
    saludosIndex = (saludosIndex + 1) % saludos.length;
  });

  nombreApodo.addEventListener("click", () => {
    copyToClipboard(nombreApodoTextos[nombreApodoTextosIndex]);
  
    // Avanzar al siguiente saludo (y volver al principio si es el último)
    nombreApodoTextosIndex = (nombreApodoTextosIndex + 1) % nombreApodoTextos.length;
  });

  link.addEventListener("click", () => {
    copyToClipboard(links[linksIndex]);
  
    // Avanzar al siguiente saludo (y volver al principio si es el último)
    linksIndex = (linksIndex + 1) % links.length;
  });

  sectorPagos.addEventListener("click", () => {
    copyToClipboard(sectorPagosMensajes[sectorPagosMensajesIndex]);
  
    // Avanzar al siguiente saludo (y volver al principio si es el último)
    sectorPagosMensajesIndex = (sectorPagosMensajesIndex + 1) % sectorPagosMensajes.length;
  });

  titular.addEventListener("click", () => {
    const texto = `La cuenta figura a nombre de *${inputTitular}* 🥰🍀

Recordá porfavor 🙏🏼 *enviar debajo del comprobante TU USUARIO ASIGNADO 🙏🏼 para agilizar la carga de fichas* de lo contrario no podremos cargar tu saldo 🚫�
`;
    copyToClipboard(texto);
  });

  alias.addEventListener("click", () => {
    const texto = `${inputAlias}`;
    copyToClipboard(texto);
  });

  cbu.addEventListener("click", () => {
    const texto = `${inputCBU}`;
    copyToClipboard(texto);
  });

  segundaCarga.addEventListener("click", () => {
    const texto = `Para obtener *150% extra en tu segunda carga*🎁🥳

Sumate ahora a nuestra *comunidad exclusiva*💎 envíanos captura que estas dentro y desbloqueá beneficios como:

💥Bonificaciones especiales todos los días.
💥Acceso anticipado a promociones ocultas.

Te dejo el acceso al grupo exclusivo 📲💃
https://chat.whatsapp.com/CdCcbh0fCRI3jds15rFxQa?mode=r_t
`;
    copyToClipboard(texto);
  });

  acreditadas.addEventListener("click", () => {
    copyToClipboard(textos[textoIndex]);
  
    // Avanzar al siguiente texto (y volver al principio si es el último)
    textoIndex = (textoIndex + 1) % textos.length;
  });

  sistemaDeReferidos.addEventListener("click", () => {
    const texto = `🎉 *¡Traé a tus amigos y ganá más!* 🎉

Por cada amigo o familiar que se sume a jugar de tu parte, *te regalamos 4.500 fichas GRATIS* 🎁🔥

📌 Importante ⬇️

Las fichas de regalo se acreditan únicamente apartir de las 7:00 am a 8:00 am. ⏰
(Una vez que tu referido comience a jugar, al día siguiente en ese horario verás tus fichas acreditadas). 🥳❤️

👉 Cuantos más amigos traigas, ¡más fichas acumulás! 🤑💸
`;
    copyToClipboard(texto);
  });

  bono.addEventListener("click", () => {
    const texto = `⬇️ *INFO IMPORTANTE* ⬇️

📣 Consultar por cvu disponible siempre antes de transferir, van rotando por turnos 🙏🏻

📣 Hay juegos que *NO* permiten usar la bonificación, y estos se encuentran en la sección *BUY BONUS*. 
En caso de no usar la bonificación, no es posible retirarla 🚫`;
    copyToClipboard(texto);
  });

  captura.addEventListener("click", () => {
    const texto = `Mi nombre es Valu! 👩🏼‍💻 *Para el bonus extra del 200% en tu carga porfavor enviame captura de como me agendaste* ❤️`;
    copyToClipboard(texto);
  });

  retiro.addEventListener("click", () => {
    const texto = `*Cómo retirar tu 💰? envieme:*

🔺 Monto de su premio.
🔺 Su cbu o alias.
🔺 Nombre completo del titular.

🔔 Recordatorio: *LA BONIFICACIÓN NO ES RETIRABLE* y se debita automaticamente al realizar el retiro. ‼

Como ver cuanto puedo retirar?

PASO 1️⃣ : *Ir al símbolo de usuario*
PASO 2️⃣ : *Saldo cobrable*

Una vez que retiramos las fichas, el mismo sistema de la pagina también baja la bonificación.
`;
    copyToClipboard(texto);
  });

  solicitarUsuario.addEventListener("click", () => {
    const texto = `Me recordarias tu usuario porfi 🙏🏼`;
    copyToClipboard(texto);
  });

  avisoRetiros.addEventListener("click", () => {
    const texto = `El horario de pagos ya finalizó, retiros y pagos nuevamente a partir de las 13:00PM. Luego de ese horario envie sus datos para el retiro así la cajera de turno le envia su premio!! ⏱️`;
    copyToClipboard(texto);
  });  

  noIngreso.addEventListener("click", () => {
    const texto = `🚫 Tu transferencia todavía no impactó 🚫

*Tené en cuenta que a veces las transferencias se demoran.*  🙏🏻

*Por favor sea paciente, en cuanto impacte en nuestra cuenta, las fichas serán cargadas* 🙌🏻`;
    copyToClipboard(texto);
  });

  soporte.addEventListener("click", () => {
    const texto = `Por problemas e inconvenientes con la plataforma le solicitamos que *se comuníque con el whatsapp de soporte*. 📲

Puede encontrar el contacto en el menú de nuestra página, en la parte inferior del lado izquierdo donde figuran tres rayitas ☺️`;
    copyToClipboard(texto);
  });

  sistemaDePagos.addEventListener("click", () => {
    const texto = `*Nuestro cronograma* : 

♦️ Días hábiles: De 13:00hs a 00:00hs 
♦️ Fines de semana: De 13:00hs a 02:00hs
♦️Mínimo de retiro: $3.000

 *Importante* ‼⬇

♦️ Usuario que retire desde $2.000 a $30.000 puede realizar un retiro mas, luego se tiene que cumplir 24hs para volver a retirar

♦️ Para retiros superiores a $30.000, se permite solo un retiro cada 24 horas.

💥 *MAXIMO DE RETIRO DEPENDIENDO DE LA CARGA* ⬇️⬇️

♦️Si la carga es menor a 50.000 puede retirar hasta 100.000 diarias 💪🏼

♦️Si la carga apartir de 50.000 puede retirar hasta 150.000 🫰🏼

♦️Si la carga es apartir de 100.000 puede retirar hasta 200.000 diarios 🙌🏻
`;
    copyToClipboard(texto);
  });

  // Función para abrir y cerrar el overlay del menú hamburguesa
  hamburguesaToggle.addEventListener("click", function () {
    if (overlay.style.display === "flex") {
      overlay.style.display = "none"; // Cerrar overlay
      document.body.style.overflow = "auto"; // Permitir desplazamiento del body
    } else {
      overlay.style.display = "flex"; // Abrir overlay
      document.body.style.overflow = "hidden"; // Deshabilitar el scroll del body
    }
  });

  // Función para abrir y cerrar el overlay del menú bienvenida
  btnBienvenida.addEventListener("click", function () {
    if (overlayBienvenida.style.display === "flex") {
      overlayBienvenida.style.display = "none"; // Cerrar overlay del menú central
    } else {
      overlayBienvenida.style.display = "flex"; // Abrir overlay del menú central
      document.body.style.overflow = "hidden"; // Deshabilitar el scroll del body
    }
    document.getElementById("usuarioBienvenida").focus();
  });

  // Función para abrir y cerrar el overlay del menú registrar usuario
  btnRegistrarUsuario.addEventListener("click", function () {
    if (overlayRegistrar.style.display === "flex") {
      overlayRegistrar.style.display = "none"; // Cerrar overlay del menú central
    } else {
      overlayRegistrar.style.display = "flex"; // Abrir overlay del menú central
      document.body.style.overflow = "hidden"; // Deshabilitar el scroll del body
    }
    document.getElementById("usuarioRegistrar").focus();
  });

  // Función para abrir y cerrar el overlay del menú Referido Acreditado
  referidoAcreditado.addEventListener("click", function () {
    if (overlayReferidoAcreditado.style.display === "flex") {
      overlayReferidoAcreditado.style.display = "none"; // Cerrar overlay
      document.body.style.overflow = "auto"; // Permitir desplazamiento del body
    } else {
      overlayReferidoAcreditado.style.display = "flex"; // Abrir overlay
      document.body.style.overflow = "hidden"; // Deshabilitar el scroll del body
    }
    document.getElementById("usuarioQueRefiere").focus();
  });

  // Cerrar el overlay si se hace clic fuera del formulario del primer menú
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay && !firstVisit) {
      overlay.style.display = "none"; // Cerrar overlay si se hace clic fuera del formulario
      form.reset(); // Limpiar los campos del formulario
      document.body.style.overflow = "auto"; // Permitir desplazamiento del body
    }
  });

  // Cerrar el overlay si se hace clic fuera del formulario del segundo menú
  overlayBienvenida.addEventListener("click", function (e) {
    if (e.target === overlayBienvenida) {
      overlayBienvenida.style.display = "none"; // Cerrar overlay si se hace clic fuera del formulario
      formBienvenida.reset(); // Limpiar los campos del formulario
      document.body.style.overflow = "auto"; // Permitir desplazamiento del body
    }
  });

  // Cerrar el overlay si se hace clic fuera del formulario del tercer menú
  overlayRegistrar.addEventListener("click", function (e) {
    if (e.target === overlayRegistrar) {
      overlayRegistrar.style.display = "none"; // Cerrar overlay si se hace clic fuera del formulario
      formRegistrar.reset(); // Limpiar los campos del formulario
      document.body.style.overflow = "auto"; // Permitir desplazamiento del body
    }
  });

  // Cerrar el overlay si se hace clic fuera del formulario del quinto menú
  overlayReferidoAcreditado.addEventListener("click", function (e) {
    if (e.target === overlayReferidoAcreditado) {
      overlayReferidoAcreditado.style.display = "none"; // Cerrar overlay si se hace clic fuera del formulario
      formReferidoAcreditado.reset(); // Limpiar los campos del formulario
      document.body.style.overflow = "auto"; // Permitir desplazamiento del body
    }
  });

  // Cerrar el overlay del primer menú si se presiona ESC
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !firstVisit) {
      // Verifica si la tecla presionada es Escape
      overlay.style.display = "none"; // Cerrar overlay si se hace clic fuera del formulario
      form.reset(); // Limpiar los campos del formulario
      document.body.style.overflow = "auto"; // Permitir desplazamiento del body
    }
  });
  // Cerrar el overlay del segundo menú si se presiona ESC
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      // Verifica si la tecla presionada es Escape
      overlayBienvenida.style.display = "none"; // Cerrar overlay si se hace clic fuera del formulario
      formBienvenida.reset(); // Limpiar los campos del formulario
      document.body.style.overflow = "auto"; // Permitir desplazamiento del body
    }
  });
  // Cerrar el overlay del tercer menú si se presiona ESC
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      // Verifica si la tecla presionada es Escape
      overlayRegistrar.style.display = "none"; // Cerrar overlay si se hace clic fuera del formulario
      formRegistrar.reset(); // Limpiar los campos del formulario
      document.body.style.overflow = "auto"; // Permitir desplazamiento del body
    }
  });
  // Cerrar el overlay del quinto menú si se presiona ESC
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      // Verifica si la tecla presionada es Escape
      overlayReferidoAcreditado.style.display = "none"; // Cerrar overlay si se hace clic fuera del formulario
      formReferidoAcreditado.reset(); // Limpiar los campos del formulario
      document.body.style.overflow = "auto"; // Permitir desplazamiento del body
    }
  });

  // Prevenir el envío del formulario y cerrar el overlay
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario
    overlay.style.display = "none"; // Cerrar el overlay del primer menú
    inputTitular = document.getElementById("titular").value.trim();
    inputCBU = document.getElementById("cbu").value.trim();
    inputAlias = document.getElementById("alias").value.trim();
    form.reset(); // Limpiar los campos del formulario
    firstVisit = false;
    document.body.style.overflow = "auto"; // Permitir desplazamiento del body
  });

  // Prevenir el envío del formulario y cerrar el overlay del segundo menú
  formBienvenida.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario
    overlayBienvenida.style.display = "none"; // Cerrar el overlay del segundo menú
    const user = document.getElementById("usuarioBienvenida").value.trim();
    const texto = `¡Bienvenid@ a MONTANA c4sin0! 🎰🔥 Tu suerte arranca HOY 🍀🫰🏼

💥 *200% de b0n0 de regalo en tu primer deposito*💃
💥 *150% en tu segunda c4rg4* 😱

📲 Usu4rio: ${user}
🔐 Cl4ve: vip123

L1NK: https://kingcash7.net 🫰🏼

🔺M1n1mo de c4rg4: *$1.000*
🔺M1n1m0 de retiro: *$3.000*
🔺 Atencion las 24 hs 🕒
🔺B0nus en todas tus c4rgas diarias 💃🥳

Te envio 4li4s? confirmame 🥰
`;
    copyToClipboard(texto);
    formBienvenida.reset(); // Limpiar los campos del formulario
    document.body.style.overflow = "auto"; // Permitir desplazamiento del body
  });

  // Prevenir el envío del formulario y cerrar el overlay del tercer menú
  formRegistrar.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario
    overlayRegistrar.style.display = "none"; // Cerrar el overlay del tercer menú
    const user = document.getElementById("usuarioRegistrar").value.trim();
    const texto = `✅ USUARIO REGISTRAD@ ✅ 

Sitio web: https://kingcash7.net/ 🎰

♦️ *Usuario:* ${user}

♦️ *Clave:* vip123

Te envió Alias? confírmame 🥰🍀
`;
    copyToClipboard(texto);
    formRegistrar.reset(); // Limpiar los campos del formulario
    document.body.style.overflow = "auto"; // Permitir desplazamiento del body
  });

  // Prevenir el envío del formulario y cerrar el overlay del quinto menú
  formReferidoAcreditado.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario
    overlayReferidoAcreditado.style.display = "none"; // Cerrar el overlay del quinto menú
    const usuario1 = document.getElementById("usuarioQueRefiere").value.trim();
    const usuario2 = document.getElementById("usuarioReferido").value.trim();
    const texto = `El usuario *${usuario1}* recomendó al usuario *${usuario2}* y fue bonificado!! ✅`;
    copyToClipboard(texto);
    formReferidoAcreditado.reset(); // Limpiar los campos del formulario
    document.body.style.overflow = "auto"; // Permitir desplazamiento del body
  });
});



