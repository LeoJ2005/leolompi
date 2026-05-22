
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
            cardSubtitle: "operando con números", 
            cardText: "Realiza operaciones matemáticas básicas como suma, resta, multiplicación y división.",    
            textBtn: getRandomPalabra(),
            cardLink: "calculadora.html"
        },
    ],

    retos: [

    ],
}

document.getElementById("searchInput").addEventListener("input", () => cargarBiblioteca(document.getElementById("searchInput").value));
document.addEventListener("DOMContentLoaded", cargarBiblioteca());

function cargarBiblioteca(filter = "") {
    
    // convierte el filtro a minúsculas para comparación insensible a mayúsculas
    document.getElementById("herramientas").innerHTML = ""

    for (const herramienta of BIBLIOTECA.herramientas) {
        
        if(herramienta.cardTitle.toLowerCase().includes(filter) || filter === "") {
            // si el título de la herramienta incluye el filtro, se muestra
            console.log(22);
            
        document.getElementById("herramientas").insertAdjacentHTML('beforeend', `
            <div class="card-neo" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title text-neo-blue">${herramienta.cardTitle}</h5>
                    <h6 class="card-subtitle mb-2 text-neo-pink">${herramienta.cardSubtitle}</h6>
                    <p class="card-text">${herramienta.cardText}</p>
                    <a href="" class="btn-neo green">${herramienta.textBtn}</a>
                </div>
            </div>
        `);

        }
    }



    

}



