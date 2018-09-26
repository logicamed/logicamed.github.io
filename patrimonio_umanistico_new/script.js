//VARIABILI

//ELEMENTI HTML
var testoAttributiHTML = document.querySelectorAll(".testoAtt");
var contenitoreAttributiHTML = document.querySelector("#attributi");
var attributiHTML 	= document.querySelectorAll(".attributo");
var ricaduteHTML 	= document.querySelector("#ricadute");
var dipendentiHTML 	= document.querySelectorAll(".dipendente");
var personaleHTML 	= document.querySelector("#personale");
var corpoHTML = document.querySelector('#corpo');
var sottotitoliHTML = document.querySelectorAll(".sottotitolo");

//COLORI
var coloreDipSfondo_1="black";
var coloreDipSfondo_2="#439cae";
var coloreAttTesto_1="white";
var coloreAttTesto_2="#ff6600";

//ALTRE
var personale = [];
var attributi = [];
var ricadute = [];
var relazioniDipAttr = [];
var relazioniAttrRic = [];
var gapSelezioneDip = 3;
var modalitaSelezionato = false;
var contatoreClickAttributi = 0;

//------------------------------------------------------------------------------{-------------------------------------------------------------------------



//FUNZIONI

//CLASSE Dipendente
function Dipendente(id, nome, selezionato){
	this.id = id;
	this.nome = nome;
	if(selezionato == null){

		this.selezionato = false;

	}
	else{

		this.selezionato = selezionato;

	}
	this.visibile = true;
}

//CLASSE Attributi
function Attributo(id, nome, valore, valoreMin, valoreMax){
	this.id = id;
	this.nome = nome;
	if(valore != null){
		this.valore = valore;
	}
	else
	{
		this.valore = "";
	}

	if(valoreMin != null){
		this.valoreMin = valoreMin;
	}
	else{
		this.valoreMin = 0;
	}

	if(valoreMax != null){
		this.valoreMax = valoreMax;
	}
	else{
		this.valoreMax = 30;
	}
	this.visibile = false;
	this.mostraValori = false;
	this.rotondo = false;
	this.esteso = false;
	this.grandezza = "predefinito";
}

//CLASSE RelazioniPerAttr
function RelazioneDipAttr(id_dipendente, id_attributo, valore_attributo){

	this.id_dipendente = id_dipendente;
	this.id_attributo = id_attributo;
	this.valore_attributo = valore_attributo;

}

//CLASSE Ricaduta
function Ricaduta(id, nome, valore){

	this.id = id;
	this.nome = nome;
	this.visibile = false;
	this.valore = valore;

}

//CLASSE RelazioneAttrRic
function RelazioneAttrRic(id_attributo, id_ricaduta){

	this.id_attributo = id_attributo;
	this.id_ricaduta = id_ricaduta;

}


function aggiungiDipendente(d){

	personale.push(d);
	aggiornaDipendenti();
	aggiornaGestoreEventi();

}

function aggiungiAttributo(a){

	attributi.push(a);
	aggiornaAttributi();
	aggiornaGestoreEventi();
	//aggiornaPosizioni();

}


function aggiungiRelazioneAttrRic(rl){

	relazioniAttrRic.push(rl);

}


function aggiungiRelazioneDipAttr(rl){

	relazioniDipAttr.push(rl);

}

function aggiungiRicaduta(r){

	ricadute.push(r);
	aggiornaRicadute();

}

function aggiornaDipendenti(){

	personaleHTML.innerHTML = "";
	for(var i=0; i < personale.length; i++){


		var d = personale[i];
		if(d.visibile){

			personaleHTML.innerHTML += "<div id='"+d.id+"' class='dipendente' selezionato='"+d.selezionato+"'>"+d.nome+"</div>";

		}

	}

}

function aggiornaAttributi(){

	contenitoreAttributiHTML.innerHTML = "";
	for(var i = 0; i < attributi.length; i++){

		//CONTROLLO QUALI ELEMENTI ATTRIBUTO SONO VISIBILI


		var a = attributi[i];

		if(modalitaSelezionato){

			if(a.valore<=10){

				a.grandezza = "grande";

			}else if(a.valore>20){

				a.grandezza = "piccolo";

			}else{

				a.grandezza = "medio";

			}

		}

		//AGGIUNTA ELEMENTO ATTRIBUTO

		if(a.mostraValori && false){

			contenitoreAttributiHTML.innerHTML += "<div id='"+a.id+"' class='attributo' esteso='"+a.esteso+"' visibile='"+a.visibile+"' grandezza='"+a.grandezza+"' valore='"+a.valore+"'><div class='testoAtt'>"+a.nome+"<br> "+a.valore+"</div></div>";

		}
		else{

			contenitoreAttributiHTML.innerHTML += "<div id='"+a.id+"' class='attributo' esteso='"+a.esteso+"' visibile='"+a.visibile+"' grandezza='"+a.grandezza+"' valore='"+a.valore+"'><div class='testoAtt'>"+a.nome+"</div></div>";

		}

	}

}

function aggiornaGestoreEventi(){

	dipendentiHTML = document.querySelectorAll(".dipendente");
	testoAttributiHTML = document.querySelectorAll(".testoAtt");
	attributiHTML = document.querySelectorAll(".attributo");

	for(var i=0; i < dipendentiHTML.length; i++){

		dipendentiHTML[i].addEventListener("mouseover", mOverDip);
		dipendentiHTML[i].addEventListener("mouseout", mOutDip);
		dipendentiHTML[i].addEventListener("click", mClickDip);

	}

	for(var i=0; i < testoAttributiHTML.length; i++){

		testoAttributiHTML[i].parentElement.addEventListener("mouseout", mOutAtt);
		testoAttributiHTML[i].parentElement.addEventListener("mouseover", mOverAtt);
		testoAttributiHTML[i].parentElement.addEventListener("click", gestoreClickAttributo);


	}

	//window.addEventListener("resize", aggiornaPosizioni);

}

function aggiornaRicadute(){

	ricaduteHTML.innerHTML = "";
	for(var i=0; i < ricadute.length; i++){


		var r = ricadute[i];

		ricaduteHTML.innerHTML += "<div id='"+r.id+"' class='ricaduta' visibile='"+r.visibile+"' valore='"+r.valore+"'>"+r.nome+"</div>";


	}

}

//MOUSE CLICK Dipendente
function mClickDip(e){

	visibilitaSottotitoli(true);
	cercaRelazioniDipAttr(e.target.id);
	aggiornaRicadutePerDipendente();
	modalitaSelezionato = true;
	visibilitaValoreAttributi(true);
	visibilitaDipendenti(false, e.target.id);
	resettaDipSelezionati();
	selezionaDipendenteSingolo(e.target.id);
	interruttoreScorrimentoAttributi(true);
	estendiAttributi(true);
	aggiornaAttributi();
	aggiornaDipendenti();
	aggiornaGestoreEventi();

}

//MOUSE OVER Dipendente
function mOverDip(e){

	if(!modalitaSelezionato){

		visibilitaSottotitoli(true);
		cercaRelazioniDipAttr(e.target.id);
		aggiornaRicadutePerDipendente();

	}


}

//MOUSE OUT Dipendente
function mOutDip(e){

	if(!modalitaSelezionato){
		visibilitaSottotitoli(false);
		visibilitaAttributi(false);
		visibilitaRicadute(false);
		aggiornaRicadute();
		aggiornaAttributi();

	}

}

//MOUSE OVER Attributo
function mOverAtt(e){

	var classeE = e.target.getAttribute("class");

	var idFinale;

	if(classeE == "attributo"){

		idFinale = e.target.id

	}
	else{

		idFinale = e.target.parentElement.id;

	}


	visibilitaRicadute(false);
	cercaRelazioniAttrRic(idFinale);

}

//MOUSE OUT Attributo
function mOutAtt(e){

	visibilitaRicadute(false);
	aggiornaRicadutePerDipendente();
	aggiornaRicadute();

}

function gestoreClickAttributo(e){

	contatoreClickAttributi++;

	if(contatoreClickAttributi == 1){

		timerClickSingolo = setTimeout(function(){

			contatoreClickAttributi = 0
			mClickAtt(e);

		}, 300);

	}
	else if(contatoreClickAttributi == 2){

		clearTimeout(timerClickSingolo);
		contatoreClickAttributi = 0;
		mDoubleClickAtt(e);

	}

}

//MOUSE CLICK Attributo
function mClickAtt(e){

	var classeE = e.target.getAttribute("class");

	var idFinale;
	var valoreFinale;

	if(classeE == "attributo"){

		idFinale = e.target.id
		valoreFinale = e.target.getAttribute('valore');

	}
	else{

		idFinale = e.target.parentElement.id;
		valoreFinale = e.target.parentElement.getAttribute('valore');

	}

	visibilitaAttributi(false);
	visibilitaAttributoSingolo(idFinale, true);
	aggiornaAttributi();
	aggiornaGestoreEventi();
	aggiornaRicadute();

}

function mDoubleClickAtt(e){

	var classeE = e.target.getAttribute("class");

	var idFinale;
	var valoreFinale;

	if(classeE == "attributo"){

		idFinale = e.target.id
		valoreFinale = e.target.getAttribute('valore');

	}
	else{

		idFinale = e.target.parentElement.id;
		valoreFinale = e.target.parentElement.getAttribute('valore');

	}

	visibilitaDipendenti(false);
	aggiornaRicadute();
	selezionaDipendenti(idFinale, valoreFinale);

}

//AGGIORNA POSIZIONI
function aggiornaPosizioni(){

	var larghezzaFinestra = 1200;

	if(window.innerWidth > 1200){
		larghezzaFinestra = window.innerWidth;
	}


	var larghezzaAttributi = contenitoreAttributiHTML.offsetWidth/2;
	var larghezzaPersonale = personaleHTML.offsetWidth;
	var posizionePersonale = larghezzaFinestra/2;
	var posizioneAttributi = Math.round(larghezzaFinestra/3 * 2.2);

	posizionePersonale -= larghezzaPersonale/2;
	posizioneAttributi -= larghezzaAttributi/2;



	contenitoreAttributiHTML.style.left = posizioneAttributi + "px";
	personaleHTML.style.left = posizionePersonale +"px";
	/* personaleHTML.style.top = verticalePersonaleTop + "px"; */


}

//CERCA ATTRIBUTI
function cercaRelazioniDipAttr(id){

	var id_trovati = [];
	var valori_id = [];

	for(var i = 0; i < relazioniDipAttr.length; i++){

		if(relazioniDipAttr[i].id_dipendente == id){

			id_trovati.push(relazioniDipAttr[i].id_attributo);
			valori_id.push(relazioniDipAttr[i].valore_attributo);

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
	//aggiornaPosizioni();
	aggiornaGestoreEventi();

}

function cercaRelazioniAttrRic(id){

	var id_trovati = [];

	for(var i = 0; i < relazioniAttrRic.length; i++){

		if(relazioniAttrRic[i].id_attributo == id){

			id_trovati.push(relazioniAttrRic[i].id_ricaduta);

		}

	}

	for(var i = 0; i < id_trovati.length; i++){

		for(var k = 0; k < ricadute.length; k++){

			if(id_trovati[i] == ricadute[k].id){
				ricadute[k].visibile = true;
			}

		}
	}


	aggiornaRicadute();
	//aggiornaPosizioni();
	aggiornaGestoreEventi();

}

//SELEZIONA DIPENDENTI
function selezionaDipendenti(id, contenutoAtt){

	var valoreAtt = contenutoAtt;
	console.log(valoreAtt);

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

			for(var j = 0; j < relazioniDipAttr.length; j++){

				if(relazioniDipAttr[j].id_attributo == id){

					if(relazioniDipAttr[j].valore_attributo <= max_v && relazioniDipAttr[j].valore_attributo >= min_v){

						for(var k = 0; k < personale.length; k++){

							if(personale[k].id == relazioniDipAttr[j].id_dipendente ){

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
	aggiornaGestoreEventi();

}

function resettaDipSelezionati(){

	for(var i = 0; i < personale.length; i++){

		personale[i].selezionato = false;

	}

}

function visibilitaAttributi(b){

	for(var i = 0; i < attributi.length; i++){

		attributi[i].visibile = b;

	}

}

function visibilitaAttributoSingolo(id, b){

	attributi.forEach(att => {

		if(att.id == id){

			att.visibile = b;

		}

	});

}

function visibilitaValoreAttributi(b){

	for(var i = 0; i < attributi.length; i++){

		attributi[i].mostraValori = b;

	}

}

function interruttoreRotondo(b){

	for(var i = 0; i < attributi.length; i++){

		attributi[i].rotondo = b;

	}

}

function interruttoreScorrimentoAttributi(b){

	contenitoreAttributiHTML.setAttribute("scorrimento", b) ;

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

function selezionaDipendenteSingolo(id){

	for(var i = 0; i < personale.length; i++){

		if(personale[i].id == id){

			personale[i].selezionato = true;

		}

	}

}

function estendiAttributi(b){

	for(var i = 0; i < attributi.length; i++){

		attributi[i].esteso = b;

	}

}

function visibilitaRicadute(b){

	for(var i = 0; i < ricadute.length; i++){

		ricadute[i].visibile = b;

	}

}

function aggiornaRicadutePerDipendente(){

	var vettoreDiSupporto = [];

	for(var i = 0; i < attributi.length; i++){

		if(attributi[i].visibile){

			cercaRelazioniAttrRic(attributi[i].id);

		}

	}

}

function visibilitaSottotitoli(b){

	for(var i = 0; i < sottotitoliHTML.length; i++){

		sottotitoliHTML[i].setAttribute("visibile", b);

	}

}