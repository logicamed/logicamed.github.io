//VARIABILI

var dati = [];


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
        roundStrokes: true,
        color: color
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
    console.log(p.stats);
    p.stats.forEach(stat => {


        creaPulsantePeriodo(stat.id, stat.nome, stat.colore);

    });

}

function creaPulsantePeriodo(id, nome, colore) {

    d3.select("#contenitorePulsanti").append("button")
        .attr("id", id)
        .attr("class", "pulsantePeriodo")
        .style("background-color", colore)
        .text(nome);
    abilitaPulsanti();
    if (p.numeroPeriodiVisibili == 1) {
        disabilitaPulsanti(p.ottieniPeriodiVisibili()[0].id);
    }

}

function aggiornaGestoreEventi(p) {

    var pulsanti = document.querySelectorAll(".pulsantePeriodo");

    pulsanti.forEach(pul => {

        pul.addEventListener("click", (e) => {

            var id_periodo = e.target.getAttribute("id");

            invertiVisibilitaPeriodo(p, id_periodo);
            p.calcolaNumeroPeriodiVisibili();
            resettaArrayDati();
            resettaRadar();
            aggiornaRadar(p);
            abilitaPulsanti();
            if (p.numeroPeriodiVisibili == 1) {
                disabilitaPulsanti(p.ottieniPeriodiVisibili()[0].id);
            }
        });

    });

}

function abilitaPulsanti() {
    var pulsanti = document.querySelectorAll(".pulsantePeriodo");
    pulsanti.forEach(pulsante => {
        pulsante.removeAttribute("disabled");
    });
}

function disabilitaPulsanti(id) {
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
