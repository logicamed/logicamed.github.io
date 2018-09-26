//VARIABILI

var personale = [];
var attributi = [];
var ricadute = [];
var personaleHTML;
var attributiHTML;
var ricaduteHTML; 
var tabellaRelazioniDA = []; //Tabella relazioni Dipendenti Attributi
var tabellaRelazioniAR = []; //Tabella relazioni Attributi Ricadute
var modalitaSelezionato = false //Booleana che che tiene conto se un dipendente e stato selezionato oppure no
var contatoreClickAttributi = 0; //Contatore per eventi click e doppio click attributi
var gapSelezioneDip = 3; //gap di valore attributo durante la selezione dei dipendenti

//CLASSI

function Dipendente(id, nome){

    this.id = id;
    this.nome = nome;
    this.selezionato = false;
    this.visibile = true;

}

function Attributo(id, nome){

    this.id = id;
    this.nome = nome;
    this.valore = 0;
    this.visibile = false;
    this.mostraValori = false;
    this.grandezza = "predefinito";

}

function RelazioneDipAttr(id_dipendente, id_attributo, valore_attributo){

    this.id_dipendente = id_dipendente;
    this.id_attributo = id_attributo;
    this.valore_attributo = valore_attributo;

}

function Ricaduta(id, nome, valore){

    this.id = id;
    this.nome = nome;
    this.valore = valore;
    this.visibile = false;
}

function RelazioneAttrRic(id_attributo, id_ricaduta){

    this.id_attributo = id_attributo;
    this.id_ricaduta = id_ricaduta;

}

//Funzioni

function inizializzazione(){

    personaleHTML = d3.select("#personale");
    attributiHTML = d3.select("#attributi");
    ricaduteHTML = d3.select("#ricadute");

}

function aggiungiDipendente(d){

    personale.push(d);
    disegnaDipendenti();

}

function aggiungiAttributo(a){

    attributi.push(a);
    disegnaAttributi();

}

function aggiungiRelazioneDipAttr(rl){

    tabellaRelazioniDA.push(rl)

}

function aggiungiRicaduta(r){

    ricadute.push(r);
    disegnaRicadute();

}

function aggiungiRelazioneAttrRic(rl){

	tabellaRelazioniAR.push(rl);

}

function disegnaDipendenti(){

    personaleHTML.selectAll(".dipendente")
        .data(personale)
        .enter()
        .append("div")
        .attr("id", function(d){return d.id;})
        .attr("class", "dipendente")
        .attr("selezionato", function(d){return d.selezionato;})
        .attr("visibile", function(d){return d.visibile;})
        .text(function(d){return d.nome;})
        .on("mouseover", mouseOverDipendente)
        .on("mouseout", mouseOutDipendente)
        .on("click", mouseClickDipendente);
        

}

function aggiornaDipendenti(){

    personaleHTML.selectAll(".dipendente")
        .data(personale)
        .attr("id", function(d){return d.id;})
        .attr("class", "dipendente")
        .attr("selezionato", function(d){return d.selezionato;})
        .attr("visibile", function(d){return d.visibile;})
        .text(function(d){return d.nome;})
        .on("mouseover", mouseOverDipendente)
        .on("mouseout", mouseOutDipendente)
        .on("click", mouseClickDipendente);
        

}

function disegnaAttributi(){

    attributi.forEach(att => {
        if(modalitaSelezionato){

			if(att.valore<=10){

				att.grandezza = "grande";

			}else if(att.valore>20){

				att.grandezza = "piccolo";

			}else{

				att.grandezza = "medio";

			}

		}
    });


    attributiHTML.selectAll(".attributo")
        .data(attributi)
        .enter()
        .append("div")
        .attr("id", function(d){return d.id;})
        .attr("class", "attributo")
        .attr("visibile", function(d){return d.visibile;})
        .attr("grandezza", function(d){return d.grandezza;})
        .text(function(d){return d.nome;})
        .on("mouseover", mouseOverAttributo)
        .on("mouseout", mouseOutAttributo)
        .on("click", gestoreClickAttributo);

}

function aggiornaAttributi(){

    attributi.forEach(att => {
        if(modalitaSelezionato){

			if(att.valore<=10){

				att.grandezza = "grande";

			}else if(att.valore>20){

				att.grandezza = "piccolo";

			}else{

				att.grandezza = "medio";

			}

		}
    });


    attributiHTML.selectAll(".attributo")
        .data(attributi)
        .attr("id", function(d){return d.id;})
        .attr("class", "attributo")
        .attr("visibile", function(d){return d.visibile;})
        .attr("grandezza", function(d){return d.grandezza;})
        .text(function(d){return d.nome;})
        .on("mouseover", mouseOverAttributo)
        .on("mouseout", mouseOutAttributo)
        .on("click", gestoreClickAttributo);

}

function disegnaRicadute(){

    ricaduteHTML.selectAll(".ricaduta")
        .data(ricadute)
        .enter()
        .append("div")
        .attr("id", function(d){return d.id;})
        .attr("class", "ricaduta")
        .attr("visibile", function(d){return d.visibile;})
        .attr("valore", function(d){return d.valore;})
        .text(function(d){return d.nome;});

}

function aggiornaRicadute(){

    ricaduteHTML.selectAll(".ricaduta")
        .data(ricadute)
        .attr("id", function(d){return d.id;})
        .attr("class", "ricaduta")
        .attr("visibile", function(d){return d.visibile;})
        .attr("valore", function(d){return d.valore;})
        .text(function(d){return d.nome;});

}

function visibilitaSottotitoli(b){

    d3.selectAll(".sottotitolo")
        .attr("visibile", b);

}

function cercaRelazioniDipAttr(id){

	var id_trovati = [];
	var valori_id = [];

	for(var i = 0; i < tabellaRelazioniDA.length; i++){

		if(tabellaRelazioniDA[i].id_dipendente == id){
            
			id_trovati.push(tabellaRelazioniDA[i].id_attributo);
			valori_id.push(tabellaRelazioniDA[i].valore_attributo);

		}

	}

	for(var i = 0; i < attributi.length; i++){

		attributi[i].visibile = false;

	}

	for(var i = 0; i < id_trovati.length; i++){

		for(var k = 0; k < attributi.length; k++){

			if(id_trovati[i] == attributi[k].id){
				attributi[k].visibile = true;
				attributi[k].valore = valori_id[i];
			}

		}
	}


	aggiornaAttributi();

}

function aggiornaRicadutePerDipendente(){

    attributi.forEach(att => {
        if(att.visibile){
            cercaRelazioniAttrRic(att.id);
        }
    });

}

function cercaRelazioniAttrRic(id){

    var id_trovati = [];

	for(var i = 0; i < tabellaRelazioniAR.length; i++){

		if(tabellaRelazioniAR[i].id_attributo == id){

			id_trovati.push(tabellaRelazioniAR[i].id_ricaduta);

		}

    }
    
    tabellaRelazioniAR.forEach(rel => {
        rel.visibile = false;
    });

	for(var i = 0; i < id_trovati.length; i++){

		for(var k = 0; k < ricadute.length; k++){

			if(id_trovati[i] == ricadute[k].id){
  
				ricadute[k].visibile = true;
			}

		}
	}

	aggiornaRicadute();

}

function visibilitaAttributi(b){

	for(var i = 0; i < attributi.length; i++){

		attributi[i].visibile = b;

	}

}

function visibilitaRicadute(b){

	for(var i = 0; i < ricadute.length; i++){

		ricadute[i].visibile = b;

	}

}

function visibilitaDipendenti(b, id_inverso){

	if(id_inverso != null){

		for(var i = 0; i < personale.length; i++){

			if(personale[i].id == id_inverso){

				personale[i].visibile = !b;

			}
			else{

				personale[i].visibile = b;

			}

		}

	}
	else{

		for(var i = 0; i < personale.length; i++){

			personale[i].visibile = b;

		}

	}

}

function resettaDipSelezionati(){

	for(var i = 0; i < personale.length; i++){

		personale[i].selezionato = false;

	}

}

function selezionaDipendenteSingolo(id){

	for(var i = 0; i < personale.length; i++){

		if(personale[i].id == id){

			personale[i].selezionato = true;

		}

	}

}

function visibilitaAttributoSingolo(id, b){

	attributi.forEach(att => {

		if(att.id == id){

			att.visibile = b;

		}

	});

}

function selezionaDipendenti(id, contenutoAtt){

	var valoreAtt = contenutoAtt;

	try {
		valoreAtt = eval(valoreAtt);
	} catch (error) {
		valoreAtt = null;
	}

	if(valoreAtt == null){

		return;

	}
	else{

		resettaDipSelezionati();

		for(var i = 0; i < attributi.length; i++){

			if(attributi[i].id != id){

				attributi[i].visibile = false;

			}

			var dipSelezionati = [];

			var min_v = valoreAtt - gapSelezioneDip;
			var max_v = valoreAtt + gapSelezioneDip;

			for(var j = 0; j < tabellaRelazioniDA.length; j++){

				if(tabellaRelazioniDA[j].id_attributo == id){

					if(tabellaRelazioniDA[j].valore_attributo <= max_v && tabellaRelazioniDA[j].valore_attributo >= min_v){

						for(var k = 0; k < personale.length; k++){

							if(personale[k].id == tabellaRelazioniDA[j].id_dipendente ){

								personale[k].selezionato = true;
								personale[k].visibile = true;

							}

						}

					}

				}

			}

		}

	}


	aggiornaDipendenti();
	aggiornaAttributi();

}

//Funzioni Eventi

function mouseOverDipendente(e){

    if(!modalitaSelezionato){
        visibilitaSottotitoli(true);
        cercaRelazioniDipAttr(e.id);
        aggiornaRicadutePerDipendente();

    }

}

function mouseOutDipendente(e){

    if(!modalitaSelezionato){

        visibilitaSottotitoli(false);
		visibilitaAttributi(false);
		visibilitaRicadute(false);
		aggiornaRicadute();
		aggiornaAttributi();

    }

}

function mouseClickDipendente(e){

    console.log("yes");
    visibilitaSottotitoli(true);
	cercaRelazioniDipAttr(e.id);
	aggiornaRicadutePerDipendente();
	modalitaSelezionato = true;
	visibilitaDipendenti(false, e.id);
	resettaDipSelezionati();
	selezionaDipendenteSingolo(e.id);
	aggiornaAttributi();
	aggiornaDipendenti();

}

function mouseOverAttributo(e){

    visibilitaRicadute(false);
	cercaRelazioniAttrRic(e.id);

}

function mouseOutAttributo(e){

    visibilitaRicadute(false);
	aggiornaRicadutePerDipendente();
	aggiornaRicadute();

}

function gestoreClickAttributo(e){

	contatoreClickAttributi++;

	if(contatoreClickAttributi == 1){

		timerClickSingolo = setTimeout(function(){

			contatoreClickAttributi = 0
			mouseClickAttributo(e);

		}, 300);

	}
	else if(contatoreClickAttributi == 2){

		clearTimeout(timerClickSingolo);
		contatoreClickAttributi = 0;
		mouseDoppioClickAttributo(e);

	}

}

function mouseClickAttributo(e){

    visibilitaAttributi(false);
	visibilitaAttributoSingolo(e.id, true);
	aggiornaAttributi();
	aggiornaRicadute();

}

function mouseDoppioClickAttributo(e){

    visibilitaDipendenti(false);
	aggiornaRicadute();
	selezionaDipendenti(e.id, e.valore);

}