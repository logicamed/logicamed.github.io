//VARIABILI

var dati = [];
var visibilitaGraph = true;
var visibilitaDati = false;


//CLASSI

function Periodi() {

    this.periodi = [];
    this.stats = [];
    this.numeroPeriodiVisibili = 0;

    this.calcolaNumeroPeriodiVisibili = () => {
        this.numeroPeriodiVisibili = 0;
        this.stats.forEach(stat => {
            if (stat.visibile) {
                this.numeroPeriodiVisibili++;
            }
        });
        /* alert(this.numeroPeriodiVisibili); */
    }

    this.ottieniPeriodiVisibili = () => {
        var arrayVisibili = [];

        this.stats.forEach(stat => {
            if (stat.visibile) {
                arrayVisibili.push(stat);
            }
        });

        return arrayVisibili;
    }

    this.aggiungiPeriodo = (periodo, stat) => {

        this.periodi.push(periodo)
        this.stats.push(stat);
    }

    this.ottieniColoriAttivi = () => {
        var arrayColori = [];

        this.ottieniPeriodiVisibili().forEach(periodo => {
            arrayColori.push(periodo.colore);
        });

        return arrayColori;
    }


}

function StatPeriodo(id, nome, colore, visibile) {

    this.id = id;
    this.nome = nome;
    this.visibile = visibile != null ? visibile : true;
    this.ordineCrescente = false;
    this.colore = colore;
}

function Voce(asse, valore) {

    this.axis = asse;
    this.value = valore;

}

//FUNZIONI

function aggiungiVoce(array, voce) {
    voce.value /= 100;
    array.push(voce);

}

function aggiornaRadar(p) {

    /* Radar chart design created by Nadieh Bremer - VisualCinnamon.com */

    //////////////////////////////////////////////////////////////
    //////////////////////// Set-Up //////////////////////////////
    //////////////////////////////////////////////////////////////

    var margin = { top: 70, right: 100, bottom: 125, left: 100 },
    // width = Math.min(700, window.innerWidth - 10) - margin.left - margin.right,
        width = Math.min(700, window.innerWidth - 10) - margin.left - margin.right,
        height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);

    //////////////////////////////////////////////////////////////
    //////////////////// Draw the Chart //////////////////////////
    //////////////////////////////////////////////////////////////

    var color = d3.scale.ordinal()
        .range(p.ottieniColoriAttivi());


    var radarChartOptions = {
        w: width,
        h: height,
        margin: margin,
        maxValue: 1,
        levels: 5,
        roundStrokes: false,
        opacityCircles: 0.1,
        wrapWidth: 60,
        color: color,
        sfondoRadar:  '#00042c',
    		bordoRadar:   '#989898',
        raggiRadar:   '#989898',
        coloreLabel:  'white',
    		coloreLegend: 'white'
    };

    elaboraDati(p);



    //Call function to draw the Radar chart
    RadarChart(".radarChart", dati, radarChartOptions);

}

function elaboraDati(p) {

    p.periodi.forEach((periodo, index) => {

        if (p.stats[index].visibile) {


            if (p.stats[index].ordineCrescente) {

                periodo.sort((a, b) => {

                    return a.value - b.value;

                });

            }

            dati.push(periodo);

        }

    });

}

function selezionaPeriodo(p, id, visibile, ordineCrescente) {

    p.stats.forEach(stat => {

        if (stat.id == id) {

            stat.visibile = visibile;
            stat.ordineCrescente = ordineCrescente;

        }

    });

}

function invertiVisibilitaPeriodo(p, id) {

    p.stats.forEach(stat => {

        if (stat.id == id) {

            stat.visibile = !stat.visibile;

        }

    });

}

function selezionaPeriodi(p, visibile, ordineCrescente) {

    p.stats.forEach(stat => {

        stat.visibile = visibile;
        stat.ordineCrescente = ordineCrescente;

    });

}

function aggiornaPulsantiPeriodi(p) {
    p.stats.forEach(stat => {


        creaPulsantePeriodo(stat.id, stat.nome);
        calcolaColorePulsanti(p);

    });

}

function creaPulsantePeriodo(id, nome) {

    d3.select("#contenitorePulsanti").append("button")
        .attr("id", id)
        .attr("class", "pulsantePeriodo")
        .text(nome);
    abilitaPulsantiPeriodo();
    if (p.numeroPeriodiVisibili == 1) {
        disabilitaPulsantiPeriodo(p.ottieniPeriodiVisibili()[0].id);
    }

}

function calcolaColorePulsanti(p) {
    p.stats.forEach(stat => {
        if (stat.visibile) {
            aggiornaColoriPulsanti(stat.id, stat.colore);
        }
        else {
            aggiornaColoriPulsanti(stat.id, "gray");
        }
    });
}

function aggiornaColoriPulsanti(id, colore) {
    var pulsanti = document.querySelectorAll(".pulsantePeriodo");

    pulsanti.forEach(pulsante => {
        if (pulsante.getAttribute("id") == id) {
            pulsante.setAttribute("style", "--colore-sfondo: " + colore);
        }
    });
}

function aggiornaGestoreEventi(p) {

    var pulsantiPerido = document.querySelectorAll(".pulsantePeriodo");
    var plt_menu = document.getElementById("imm_mostraDati");
    var plt_grafico = document.getElementById("imm_mostraGrafico");
    var plt_indietro = document.getElementById("imm_indietro");

    pulsantiPerido.forEach(pul => {

        pul.addEventListener("click", (e) => {

            var id_periodo = e.target.getAttribute("id");

            invertiVisibilitaPeriodo(p, id_periodo);
            p.calcolaNumeroPeriodiVisibili();
            resettaArrayDati();
            resettaRadar();
            aggiornaRadar(p);
            abilitaPulsantiPeriodo();
            calcolaColorePulsanti(p);
            if (p.numeroPeriodiVisibili == 1) {
                disabilitaPulsantiPeriodo(p.ottieniPeriodiVisibili()[0].id);
            }
        });

    });

    plt_indietro.addEventListener("click", function () {
        window.history.back();
    });

    plt_menu.addEventListener("click", (e) => {
        invertiVisibilitaGrafico();
    });

}

function invertiVisibilitaGrafico() {
    visibilitaGraph = !visibilitaGraph;
    visibilitaDati = !visibilitaDati;
    var contenitoreDatiAziendali = document.querySelector("#datiAziendali");
    var radar = document.querySelector(".radarChart");
    var pulsantiP = document.querySelector("#contenitorePulsanti");

    contenitoreDatiAziendali.setAttribute("visibile", visibilitaDati);
    radar.setAttribute("visibile", visibilitaGraph);
    pulsantiP.setAttribute("visibile", visibilitaGraph);
}

function abilitaPulsantiPeriodo() {
    var pulsanti = document.querySelectorAll(".pulsantePeriodo");
    pulsanti.forEach(pulsante => {
        pulsante.removeAttribute("disabled");
    });
}

function disabilitaPulsantiPeriodo(id) {
    var pulsanti = document.querySelectorAll(".pulsantePeriodo");

    pulsanti.forEach(pulsante => {
        if (pulsante.getAttribute("id") == id) {
            pulsante.setAttribute("disabled", "");
        }
    });
}

function resettaArrayDati() {

    dati = [];

}

function resettaRadar() {

    d3.select(".radarChart").text("");

}
