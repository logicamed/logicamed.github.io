//VARIABILI

var ricadute = [];
var problematiche = [];
var soluzioni = [];

var ricaduteHTML;
var problematicheHTML;
var soluzioniHTML;

var svg;
var grandezzaSVG;

var offsetAltezza = 30;

var offsetY = 20;



//CLASSI

function Ricaduta(id, testo){

    this.id = id;
    this.testo = testo;

}

function Problematica(id, testo){

    this.id = id;
    this.testo = testo;

}

function Soluzione(id, testo){

    this.id = id;
    this.testo = testo;

}

//FUNZIONI

function inizializzazione(){

    console.log("inizializzazione");
    svg = d3.select("#containerSVG");
    grandezzaSVG = new Object();

    window.addEventListener("resize", eventoResizeFinestra);

    aggiornaGrandezzeSVG();
    aggiornaPosizioni();

    disegnaRicadute();
   

}

function aggiungiRicaduta(r){

    ricadute.push(r);

}

function aggiungiProblematica(p){

    problematiche.push(p);

}

function aggiungiSoluzione(s){

    soluzioni.push(s);

}

function disegnaRicadute(){

    console.log("disegna le ricadute");

    svg.select("#coldx").selectAll("g")
        .data(ricadute)
        .enter()
        .append("g")
        .attr("transform", (d, i) => {

            return "translate(0, "+(offsetAltezza*i)+")"

        });

    svg.select("#coldx").selectAll("g")
        .append("text")
        .style("text-anchor", "start")
        .style("font-size", "10px")
        .attr("fill", "black")
        .text((d, i) => {

            return ricadute[i].testo;

        })

    svg.select("#coldx").selectAll("g")
        .append("line")
        .attr("x1", 200)
        .attr("y1", 3)
        .attr("x2", -6)
        .attr("y2", 3)
        .attr("stroke", "black")
        .attr("strok-width", 2)
        .attr("fill", "transparent");


    svg.select("#coldx").selectAll("g")
        .append("circle")
        .attr("cx", -6)
        .attr("cy", 3)
        .attr("r", 4)
        .attr("stroke", "black")
        .attr("stroke-width", 2)
        .attr("fill", "white");

}

function disegnaProblematiche(){

    console.log("disegna le problematiche");

    svg.select("#colsx").selectAll("g")
        .data(problematiche)
        .enter()
        .append("g")
        .attr("transform", (d, i) => {

            return "translate(0, "+(offsetAltezza*i)+")"

        });

    svg.select("#colsx").selectAll("g")
        .append("text")
        .style("text-anchor", "start")
        .style("font-size", "10px")
        .attr("fill", "black")
        .text((d, i) => {

            return problematiche[i].testo;

        })

    svg.select("#colsx").selectAll("g")
        .append("line")
        .attr("x1", 200)
        .attr("y1", 3)
        .attr("x2", -6)
        .attr("y2", 3)
        .attr("stroke", "black")
        .attr("strok-width", 2)
        .attr("fill", "transparent");


    svg.select("#colsx").selectAll("g")
        .append("circle")
        .attr("cx", 200)
        .attr("cy", 3)
        .attr("r", 4)
        .attr("stroke", "black")
        .attr("stroke-width", 2)
        .attr("fill", "white");

}

function caricaDatiJSON(path_json, tipo){
    var xhr = new XMLHttpRequest;
    xhr.open("GET", path_json, true);

    console.log("ottieni JSON");

    switch(true){

        case tipo == "ricadute":
        case tipo == "ricaduta":
        case tipo == "ric":
        xhr.onload = () =>{

            if(xhr.status == 200){

                JSON.parse(xhr.responseText).forEach(element => {

                    aggiungiRicaduta(new Ricaduta(element.id, element.testo));
                    console.log("ottieni Ricadute");

                });
                disegnaRicadute();
            }

        }
        break;

        case tipo == "problematiche":
        case tipo == "problematica":
        case tipo == "prob":
        xhr.onload = () =>{

            if(xhr.status == 200){

                JSON.parse(xhr.responseText).forEach(element => {

                    aggiungiProblematica(new Problematica(element.id, element.testo));
                    console.log("ottieni Problematiche");
                    
                });
                disegnaProblematiche();
            }

        }
        break;

        case tipo == "soluzioni":
        case tipo == "soluzione":
        case tipo == "sol":
        xhr.onload = () =>{

            if(xhr.status == 200){

                JSON.parse(xhr.responseText).forEach(element => {

                    aggiungiSoluzione(new Soluzione(element.id, element.testo));
                    console.log("ottieni Soluzioni");
                    
                });

            }

        }
        break;

        default:
        alert("Non esiste una classe di tipo: " + tipo);

    }

    xhr.send();

}

function aggiornaGrandezzeSVG(){

    console.log("aggiornamento grandezza svg");
    grandezzaSVG.larghezza = svg.node().getBoundingClientRect().width;
    grandezzaSVG.altezza = svg.node().getBoundingClientRect().height;

}

function aggiornaPosizioni(){

    console.log("aggiornamento posizioni");
    var offsetX = grandezzaSVG.larghezza/3

    svg.selectAll(".colonna")
        .attr("transform", (d, i) => {

            console.log("aggiornata posizione colonna: " + i );
            return "translate("+((offsetX * i)+20)+", "+offsetY+")";

        })

}

function eventoResizeFinestra(){

    aggiornaGrandezzeSVG();
    aggiornaPosizioni();

}
