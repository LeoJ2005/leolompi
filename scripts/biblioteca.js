
const palabrasComicas = [
  "Tócame",
  "Púchale",
  "Manoséame",
  "Asómate",
  "Fíjate",
  "Tentación",
  "Úmbole",
  
  "Cáile",
  "Pásale",
  "Éntrale",
  "Pícale",
  "¡Jálalo!",
  "Muévete",
  
  "Chisme",
  "Magia",
  "Peligro",
  "Abrakadabra",
  "¡Zas!",
  "Fuga",
  "¡Yolo!",
  
  "Spawn",
  "Warp",
  "Bootear",
  "Brinca",
  "Gánale"
];

function getRandomPalabra() {
  const index = Math.floor(Math.random() * palabrasComicas.length);
  return palabrasComicas[index];
}

const BIBLIOTECA = {
    herramientas: [
        {cardTitle: "Calculadora", 
            cardSubtitle: "Operando con números",
            cardText: "Realiza operaciones matemáticas básicas como suma, resta, multiplicación y división.",
            textBtn: getRandomPalabra(),
            cardLink: "calculadora.html"
        },
    ],
    
    retos: [
        {cardTitle: "Calculadora", 
            cardSubtitle: "Operando con números",
            cardText: "Realiza operaciones matemáticas básicas como suma, resta, multiplicación y división.",
            textBtn: getRandomPalabra(),
            cardLink: "calculadora.html"
        },
    ],

}

document.getElementById("searchInput").addEventListener("input", () => cargarBiblioteca(document.getElementById("searchInput").value));
document.addEventListener("DOMContentLoaded", cargarBiblioteca());

function cargarBiblioteca(filter = "") {
    // Convertimos el filtro a minúsculas una sola vez fuera de los bucles para mejorar el rendimiento
    const filtroMinuscula = filter.toLowerCase();

    // Limpiamos los contenedores antes de renderizar
    document.getElementById("herramientas").innerHTML = "";
    document.getElementById("retos").innerHTML = "";

    for (const nombreSeccion in BIBLIOTECA) {
        const contenedorSeccion = document.getElementById(nombreSeccion);
        if (!contenedorSeccion) continue;

        const elementos = BIBLIOTECA[nombreSeccion];
        let htmlTarjetas = "";

        // Iteramos por cada tarjeta de la sección actual
        elementos.forEach(item => {
            // Comprobamos si el título coincide con el filtro (o si el filtro está vacío)
            const coincideFiltro = item.cardTitle.toLowerCase().includes(filtroMinuscula);

            if (filtroMinuscula === "" || coincideFiltro) {
                // Usamos 'item' que es la variable correcta de este bucle
                htmlTarjetas += `
                    <div class="card-neo" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title text-neo-blue">${item.cardTitle}</h5>
                            <h6 class="card-subtitle mb-2 text-neo-pink">${item.cardSubtitle}</h6>
                            <p class="card-text">${item.cardText}</p>
                            <a href="${item.cardLink}" class="btn-neo green">${item.textBtn}</a>
                        </div>
                    </div>
                `;
            }
        });

        // Inyectamos las tarjetas filtradas en su sección correspondiente
        contenedorSeccion.innerHTML = htmlTarjetas;
    }
}

function getScript(){
    document.getElementById("main").querySelector("display") = 'none';
    document.getElementById("spaceScript").querySelector("display") = 'solid';



}
