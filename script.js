// ============================================================
// CONFIGURACIÓN GLOW SITE
// ============================================================
const WHATSAPP_NUMERO   = "541135888575";
const INSTAGRAM_USUARIO = "glow.site";
// ============================================================

const fmt = n => "$" + n.toLocaleString("es-AR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const productos = [
  { n: "Colágeno sachetera x 36 u.",                                    img: "colageno-capilar.png", p: 28600 },
  { n: "Keratina Express sachetera x 36 u.",                            img: "keratina-express.jpg", p: 21000 },
  { n: "Keratina en Crema sachetera x 36 u.",                           img: "keratina-crema.jpg", p: 28900 },
  { n: "Crema de Argan Express sachetera x 36 u.",                      img: "crema-argan-express.jpg", p: 28100 },
  { n: "Crema de Argan sachetera x 36 u.",                              img: "crema-argan.jpg", p: 28900 },
  { n: "Crema de Coco sachetera x 36 u.",                               img: "crema-coco.jpg", p: 28400 },
  { n: "Rubios Totales sachetera x 36 u.",                              img: "rubios-totales.jpg", p: 29200 },
  { n: "Tratamiento 3 Minutos sachetera x 36 u.",                       img: "3-minutos.jpg", p: 28100 },
  { n: "Palta en crema sachetera x 36 u.",                              img: "palta-crema.jpg", p: 28500 },
  { n: "Aceite de Almendras sachetera x 36 u.",                         img: "aceite-almendras.jpg", p: 26600 },
  { n: "Shock ácido sachetera x 36 u.",                                 img: "shock-acido.png", p: 27900 },
  { n: "Botoxx Sachetera x 36 u.",                                      img: "botoxx.jpg", p: 27700 },
  { n: "911 con enjuague sachetera x 36 u.",                            img: "911-enguaje.png", p: 29000 },
  { n: "Cicatri total Tratamiento reparador Intensivo sachetera x 36 u.", img: "cicatri-total.png", p: 28500 },
  { n: "Lifting en crema sachetera x 36 u.",                            img: "lifting-crema.png", p: 28900 },
  { n: "Tratamiento 60 Segundos x 36 u.",                               img: "60-segundos.jpg", p: 28900 },
  { n: "Brillo 3D sachetera x 36 u.",                                   img: "brillo-3d.png", p: 46000 },
  { n: "Ablandador de Canas sachetera x 36 u.",                         img: "ablandador-canas.jpg", p: 20800 },
  { n: "Cristales de Keratina sachetera x 36 u.",                       img: "cristales-keratina.jpg", p: 21000 },
  { n: "Glaseado sachetera x 36 u.",                                    img: "glaseado.jpg", p: 46800 },
  { n: "Oleo crema keratina + argan sachetera x 36 u.",                 img: "oleo-crema.png", p: 28900 },
  { n: "911 capilar sachetera x 36 u.",                                 img: "911-capilar.jpg", p: 25200 },
  { n: "Shampoo neutro PH7 sachetera x 36 u.",                          img: "shampoo-neutro.jpg", p: 20500 },
  { n: "Oleo keratina + argan sachetera x 36 u.",                       img: "oleo-keratina.jpg", p: 49700 },
  { n: "Tratamiento Pro B5 sachetera x 36 u.",                          img: "tratamiento-pro-b5.jpg", p: 29000 },
  { n: "Shock ácido express sachetera x 36 u.",                         img: "shock-acido-express.png", p: 21100 },
  { n: "Shampoo Pro K sachetera x 36 u.",                               img: "shampoo-pro-k.jpg", p: 26000},
  { n: "Acondicionador Pro K sachetera x 36 u.",                        img: "acondicionador-pro-k.jpg", p: 19400 },
  { n: "Exprimido de nutrición en crema sachetera x 36 u. (Banana y Kiwi)",             img: "exprimido-reparacion.jpg", p: 27100},
  { n: "Coctel extra ácido en crema sachetera x 36 u. (Naranja y Papaya)",                 img: "coctel-acido.jpg", p: 28300 },
  { n: "Batido de vitaminas en crema sachetera x 36 u. (Mango y Café verde) ",                img: "batido-vitaminas.jpg", p: 28600 },
  { n: "Tratamiento Pro B5 Doy pack",                                   img: "pack-911.jpg", p:  5000},
  { n: "Cicatri total Tratamiento reparador Intensivo doy pack",        img: "pack-colageno.jpg", p:  4800 },
  { n: "Oleo crema keratina + argan doy pack",                          img: "pack-oleo-crema.jpg", p:  4900 },
  { n: "Lifting en crema doy pack",                                     img: "pack-lifting-crema.png", p:  4900 },
  { n: "Rubios totales doy pack",                                       img: "pack-rubios.png", p:  5000 },
  { n: "60 seg doy pack",                                               img: "pack-60-segundos.jpg", p:  4900 },
  { n: "Crema de coco doy pack",                                        img: "pack-crema-coco.png", p:  4900 },
  { n: "Palta en crema doy pack",                                       img: "pack-palta.jpg", p:  4800 },
  { n: "Tratamiento 3 min doy pack",                                    img: "pack-3-minutos.jpg", p:  4900 },
  { n: "Botox doy pack",                                                img: "pack-botox.jpg", p:  4800 },
  { n: "Crema de argan doy pack",                                       img: "pack-crema-argan.png", p:  4700 },
  { n: "Keratina en crema doy pack",                                    img: "pack-keratina-crema.png", p:  4900 },
  { n: "Shock ácido doy pack",                                          img: "pack-shock-acido.jpg", p:  4900 },
  { n: "Batido de vitaminas en crema Doy pack (Mango y Café verde) ",                         img: "pack-batido.jpg", p:  4600 },
  { n: "Coctel extra ácido en crema Doy pack (Naranja y Papaya)",                          img: "pack-coctel.jpg", p:  4600 },
  { n: "Exprimido de nutrición en crema Doy pack (Banana y Kiwi)",                      img: "pack-exprimido.jpg", p:  4400},
  { n: "Doy pack 911 con enjuague",                                     img: "911-enguaje.png", p:  4700 },
  { n: "Doy pack Colágeno",                                             img: "pack-colageno.jpg", p:  4800 },
  { n: "Ampolla ablandador de canas x 10ml",                            img: "ampolla-ablandador.jpg", p:  1500 },
  { n: "Ampolla botox x 10ml",                                          img: "ampolla-botox.jpg", p:  2600 },
  { n: "Ampolla glaseado x 10ml",                                       img: "ampolla-glaseado.jpg", p:  2400 },
  { n: "Ampolla espuma estructurante x 10ml",                           img: "ampolla-espuma.jpg", p:  2000 },
  { n: "Crema de Argan express en pomo",                                img: "pomo-crema-argan.jpg", p:  6300 },
  { n: "Keratina Express en Pomo",                                      img: "pomo-keratina.jpg", p:  5800 },
  { n: "Emulsión Hidratante Anti-frizz en Pomo",                        img: "pomo-emulsion.png", p:  4700 },
  { n: "Oleo keratina + argan en Botella x 60grs",                      img: "botella-oleo-keratina.jpg", p:  8800 },
  { n: "911 Capilar en Botella x 60g",                                  img: "botella-911.jpg", p:  4700 },
  { n: "Aceite de almendras en botellita x 50ml",                       img: "botella-aceite-almendra.jpg", p:  5000 },
  { n: "Oleo Laminante Reparador",                                      img: "oleo-laminante.png", p:  4100 },
  { n: "Crema de Argan Express en sachet",                              img: "crema-argan-sachet.jpg", p:   680 },
  { n: "Tratamiento Pro B5 en Pote",                                    img: "pote-prob5.jpg", p:  6100 },
  { n: "Tratamiento Pro B5 sachet",                                     img: "sachet-prob5.jpg", p:   850 },
  { n: "Colágeno en sachet",                                            img: "sachet-colageno.jpg", p:   850 },
  { n: "Tratamiento Keratina en Pote",                                  img: "pote-keratina.jpg", p:  6400 },
  { n: "Polvo Decolorante x 30gr",                                      img: "polvo-30g.jpg", p:  1700 },
  { n: "Polvo Decolorante x 70gr",                                      img: "polvo-70g.jpg", p:  3400 },
  { n: "Cicatri total Tratamiento reparador Intensivo sachet",          img: "cicatri-total-chico.jpg", p:   950 },
  { n: "Acondicionador Pro K sachet",                                   img: "pro-k.png", p:   660 },
  { n: "Shampoo Pro K sachet",                                          img: "shampoo-prok.png", p:   850 },
  { n: "911 Capilar Sachet",                                            img: "sachet-911.jpg", p:   850 },
  { n: "Tratamiento 60 Segundos en Sachet",                             img: "sachet-60segs.jpg", p:   950 },
  { n: "Oleo crema de keratina + argan sachet",                         img: "sachet-oleo.jpg", p:   860 },
  { n: "Rubios totales en sachet",                                      img: "rusachet-rubio.jpg", p:   990 },
  { n: "Ablandador de Canas en Sachet",                                 img: "sachet-ablandador.jpg", p:   640 },
  { n: "Tratamiento 3 Minutos Sachet",                                  img: "sachet-3mins.jpg", p:   860 },
  { n: "Palta en crema sachet",                                         img: "sachet-palta.jpg", p:   950 },
  { n: "Tratamiento Crema de Argan En Sachet",                          img: "sachet-crema-argan.png", p:   860 },
  { n: "Botox Sachet",                                                  img: "sachet-botox.png", p:   850 },
  { n: "Oleo Keratina + Argan Sachet",                                  img: "sachet-oleo.jpg", p:  1500 },
  { n: "Shampoo PH7 sachet",                                            img: "shampoo-ph7.jpg", p:   630 },
  { n: "Brillo 3D Sachet",                                              img: "sachet-brillo3d.jpg", p:  1420 },
  { n: "Lifting en crema sachet",                                       img: "sachet-lifting.jpg", p:   950 },
  { n: "Aceite Natural de Almendras Sachet",                            img: "sachet-aceite.jpg", p:   820},
  { n: "Cristales de Keratina en Sachet",                               img: "sachet-cristal.jpg", p:   700 },
  { n: "Shock Ácido en Sachet",                                         img: "sachet-shock.jpg", p:   860 },
  { n: "Crema de Coco Sachet",                                          img: "sachet-crema-coco.jpg", p:   900 },
  { n: "Glaseado Blindaje de Keratina sachet",                          img: "glaseado.jpg", p:  1440 },
  { n: "Keratina en Crema Sachet",                                      img: "sachet-keratina.jpg", p:   950 },
  { n: "Keratina Express Sachet",                                       img: "sachet-keratina-express.jpg", p:   650 },
  { n: "Shock ácido express en sachet",                                 img: "sachet-shock-express.jpg", p:   950 },
  { n: "Batido de vitaminas en crema sachet (Mango y Café verde)",                           img: "batido-vitaminas.jpg", p:   900},
  { n: "Exprimido de nutrición en crema sachet (Banana y Kiwi)",                        img: "exprimido-reparacion.jpg", p:   900 },
  { n: "Coctel extra ácido en crema sachet (Naranja y Papaya)",                            img: "coctel-acido.jpg", p:   900 },
  { n: "911 con enjuague en sachet",                                    img: "sachet-911.jpg", p:   950 },
  { n: "Ampolla 911 con enjuague",                                      img: "ampolla-911.jpg", p:  3000 },
];

// ── CARRITO ───────────────────────────────────────────────────
var carrito = []; // [{ n, p, qty }]

function carritoTotal() {
  return carrito.reduce(function(s, i) { return s + i.p * i.qty; }, 0);
}

function carritoCount() {
  return carrito.reduce(function(s, i) { return s + i.qty; }, 0);
}

function agregarAlCarrito(prod) {
  var idx = carrito.findIndex(function(i) { return i.n === prod.n; });
  if (idx >= 0) {
    carrito[idx].qty++;
  } else {
    carrito.push({ n: prod.n, p: prod.p, qty: 1 });
  }
  actualizarBadgeCarrito();
  renderCarrito();
  mostrarToast(prod.n);
}

function cambiarCantidad(nombre, delta) {
  var idx = carrito.findIndex(function(i) { return i.n === nombre; });
  if (idx < 0) return;
  carrito[idx].qty += delta;
  if (carrito[idx].qty <= 0) carrito.splice(idx, 1);
  actualizarBadgeCarrito();
  renderCarrito();
}

function eliminarDelCarrito(nombre) {
  carrito = carrito.filter(function(i) { return i.n !== nombre; });
  actualizarBadgeCarrito();
  renderCarrito();
}

function vaciarCarrito() {
  carrito = [];
  actualizarBadgeCarrito();
  renderCarrito();
}

function actualizarBadgeCarrito() {
  var badge = document.getElementById("cart-badge");
  var cnt = carritoCount();
  badge.textContent = cnt;
  badge.style.display = cnt > 0 ? "flex" : "none";
  // botón flotante
  var fab = document.getElementById("cart-fab");
  var fabBadge = document.getElementById("cart-fab-badge");
  var fabTotal = document.getElementById("cart-fab-total");
  if (cnt > 0) {
    fab.classList.add("visible");
    fabBadge.textContent = cnt;
    fabTotal.textContent = fmt(carritoTotal());
  } else {
    fab.classList.remove("visible");
  }
}

function renderCarrito() {
  var lista = document.getElementById("cart-lista");
  var totalEl = document.getElementById("cart-total-val");
  var vacioEl = document.getElementById("cart-vacio");
  var accionesEl = document.getElementById("cart-acciones");

  if (carrito.length === 0) {
    lista.innerHTML = "";
    vacioEl.style.display = "flex";
    accionesEl.style.display = "none";
    totalEl.textContent = fmt(0);
    return;
  }

  vacioEl.style.display = "none";
  accionesEl.style.display = "flex";
  totalEl.textContent = fmt(carritoTotal());

  lista.innerHTML = carrito.map(function(item) {
    return '<div class="cart-item">' +
      '<div class="cart-item-info">' +
        '<p class="cart-item-name">' + item.n + '</p>' +
        '<p class="cart-item-sub">' + fmt(item.p) + ' c/u · Subtotal: ' + fmt(item.p * item.qty) + '</p>' +
      '</div>' +
      '<div class="cart-item-qty">' +
        '<button class="qty-btn" onclick="cambiarCantidad(\'' + item.n.replace(/'/g, "\\'") + '\', -1)">−</button>' +
        '<span class="qty-num">' + item.qty + '</span>' +
        '<button class="qty-btn" onclick="cambiarCantidad(\'' + item.n.replace(/'/g, "\\'") + '\', 1)">+</button>' +
        '<button class="qty-del" onclick="eliminarDelCarrito(\'' + item.n.replace(/'/g, "\\'") + '\')">✕</button>' +
      '</div>' +
    '</div>';
  }).join("");
}

function generarMensajeCarrito() {
  var lineas = ["🛒 *Mi pedido en Glow Site:*\n"];
  carrito.forEach(function(item, i) {
    lineas.push((i + 1) + ". " + item.n + " x" + item.qty + " — " + fmt(item.p * item.qty));
  });
  lineas.push("\n💰 *TOTAL: " + fmt(carritoTotal()) + "*");
  lineas.push("\n(Todos los precios incluyen 15% OFF)");
  return lineas.join("\n");
}

function consultarCarritoWhatsapp() {
  if (carrito.length === 0) return;
  var msg = encodeURIComponent(generarMensajeCarrito());
  window.open("https://wa.me/" + WHATSAPP_NUMERO + "?text=" + msg, "_blank");
}

function consultarCarritoInstagram() {
  if (carrito.length === 0) return;
  // Copia el mensaje al portapapeles y abre Instagram
  var texto = generarMensajeCarrito();
  if (navigator.clipboard) {
    navigator.clipboard.writeText(texto).then(function() {
      mostrarToastInfo("¡Pedido copiado! Pegalo en el chat de Instagram 📋");
    });
  }
  setTimeout(function() {
    window.open("https://www.instagram.com/" + INSTAGRAM_USUARIO + "/", "_blank");
  }, 800);
}

// ── Toast notificaciones ──────────────────────────────────────
function mostrarToast(nombre) {
  var t = document.getElementById("toast");
  t.innerHTML = '<span class="toast-icon">🛒</span> <strong>' + nombre.substring(0, 30) + (nombre.length > 30 ? "…" : "") + '</strong> agregado al carrito';
  t.classList.add("show");
  clearTimeout(t._timer);
  t._timer = setTimeout(function() { t.classList.remove("show"); }, 2500);
}

function mostrarToastInfo(msg) {
  var t = document.getElementById("toast");
  t.innerHTML = msg;
  t.classList.add("show");
  clearTimeout(t._timer);
  t._timer = setTimeout(function() { t.classList.remove("show"); }, 3500);
}

// ── Abrir / cerrar carrito panel ──────────────────────────────
function abrirCarrito() {
  document.getElementById("cart-panel").classList.add("open");
  document.getElementById("cart-overlay").classList.add("open");
  document.body.style.overflow = "hidden";
  renderCarrito();
}

function cerrarCarrito() {
  document.getElementById("cart-panel").classList.remove("open");
  document.getElementById("cart-overlay").classList.remove("open");
  document.body.style.overflow = "";
}

// ── DOM refs ──────────────────────────────────────────────────
const gridEl   = document.getElementById("grid");
const countEl  = document.getElementById("count");
const buscador = document.getElementById("buscador");
const modal    = document.getElementById("detalle");

// ── Placeholder SVG ───────────────────────────────────────────
const placeholderSVG =
  '<div class="img-placeholder">' +
    '<svg viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1.2">' +
      '<rect x="3" y="3" width="18" height="18" rx="2"/>' +
      '<circle cx="8.5" cy="8.5" r="1.5"/>' +
      '<polyline points="21 15 16 10 5 21"/>' +
    '</svg>' +
  '</div>';

// ── Render grilla ─────────────────────────────────────────────
function render(lista) {
  countEl.textContent = lista.length + " productos encontrados";
  gridEl.innerHTML = "";

  lista.forEach(function(p) {
    var card = document.createElement("div");
    card.className = "card";

    var imgTag = p.img
      ? '<img src="images/' + p.img + '" alt="' + p.n + '" loading="lazy" />'
      : placeholderSVG;

    card.innerHTML =
      '<div class="img-box">' +
        imgTag +
        '<div class="disc-tag">15% OFF</div>' +
      '</div>' +
      '<div class="card-body">' +
        '<p class="card-name">' + p.n + '</p>' +
        '<div class="price-row">' +
          '<span class="precio-nuevo">' + fmt(p.p) + '</span>' +
        '</div>' +
        '<p class="precio-incluye">✦ Precio con 15% OFF incluido</p>' +
        '<div class="card-btns">' +
          '<button class="ver-btn">Ver detalle →</button>' +
          '<button class="add-cart-btn" title="Agregar al carrito">' +
            '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>' +
          '</button>' +
        '</div>' +
      '</div>';

    // click en "Ver detalle"
    card.querySelector(".ver-btn").addEventListener("click", function(e) {
      e.stopPropagation();
      abrirProducto(p);
    });

    // click en "Agregar al carrito"
    card.querySelector(".add-cart-btn").addEventListener("click", function(e) {
      e.stopPropagation();
      agregarAlCarrito(p);
    });

    // click en la card completa → abre detalle
    card.addEventListener("click", function() { abrirProducto(p); });

    gridEl.appendChild(card);
  });
}

// ── Orden ─────────────────────────────────────────────────────
var ordenActual = "default";

function ordenar(lista) {
  var copia = lista.slice();
  if (ordenActual === "az")    return copia.sort(function(a, b) { return a.n.localeCompare(b.n, "es"); });
  if (ordenActual === "za")    return copia.sort(function(a, b) { return b.n.localeCompare(a.n, "es"); });
  if (ordenActual === "mayor") return copia.sort(function(a, b) { return b.p - a.p; });
  if (ordenActual === "menor") return copia.sort(function(a, b) { return a.p - b.p; });
  return copia;
}

document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".orden-btn").forEach(function(btn) {
    btn.addEventListener("click", function() {
      document.querySelectorAll(".orden-btn").forEach(function(b) { b.classList.remove("active"); });
      btn.classList.add("active");
      ordenActual = btn.dataset.orden;
      filtrarYRenderizar();
    });
  });

  // cerrar carrito con overlay
  document.getElementById("cart-overlay").addEventListener("click", cerrarCarrito);
});

// ── Buscador ──────────────────────────────────────────────────
function filtrarYRenderizar() {
  var q = buscador.value.toLowerCase().trim();
  var filtrados = q
    ? productos.filter(function(p) { return p.n.toLowerCase().includes(q); })
    : productos;
  render(ordenar(filtrados));
}

buscador.addEventListener("input", filtrarYRenderizar);

// ── Modal producto ────────────────────────────────────────────
function abrirProducto(p) {
  document.getElementById("det-nombre").textContent = p.n;
  document.getElementById("det-viejo").textContent  = "";
  document.getElementById("det-nuevo").textContent  = fmt(p.p);

  // botón agregar al carrito del modal
  document.getElementById("btn-add-cart-modal").onclick = function() {
    agregarAlCarrito(p);
  };

  var mainEl  = document.getElementById("det-img-main");
  var thumbEl = document.getElementById("det-img-thumb");
  if (p.img) {
    mainEl.innerHTML  = '<img src="images/' + p.img + '" alt="' + p.n + '" />';
    thumbEl.innerHTML = '<img src="images/' + p.img + '" alt="' + p.n + '" />';
  } else {
    mainEl.innerHTML  = placeholderSVG;
    thumbEl.innerHTML = placeholderSVG;
  }

  var msg = encodeURIComponent("Hola Glow Site! Me interesa: " + p.n + " — Precio: " + fmt(p.p) + " (con 15% OFF incluido)");
  document.getElementById("btn-wa").href =
    "https://wa.me/" + WHATSAPP_NUMERO + "?text=" + msg;

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function cerrar() {
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

modal.addEventListener("click", function(e) {
  if (e.target === modal) cerrar();
});

document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") {
    cerrar();
    cerrarCarrito();
  }
});

// ── Init ──────────────────────────────────────────────────────
filtrarYRenderizar();
actualizarBadgeCarrito();
