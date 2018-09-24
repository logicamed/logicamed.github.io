var attributi = [];
var ricadute = [];


aggiungiAttributo(new Attributo("a", "Autonomia"));
aggiungiAttributo(new Attributo("b", "Coesione"));
aggiungiAttributo(new Attributo("c", "Fiducia"));
aggiungiAttributo(new Attributo("d", "Pressione"));
aggiungiAttributo(new Attributo("e", "Sostegno"));
aggiungiAttributo(new Attributo("f", "Riconoscimento"));
aggiungiAttributo(new Attributo("g", "Valorizzazione"));
aggiungiAttributo(new Attributo("h", "Equit&agrave"));
aggiungiAttributo(new Attributo("i", "Innovazione"));
aggiungiAttributo(new Attributo("l", "Dinamismo"));
aggiungiAttributo(new Attributo("m", "Remunerazione"));
aggiungiAttributo(new Attributo("n", "Coinvolgimento"));
aggiungiAttributo(new Attributo("o", "Umanit&agrave"));
aggiungiAttributo(new Attributo("p", "Trascendenza"));
aggiungiAttributo(new Attributo("q", "Organizzazione"));
aggiungiAttributo(new Attributo("r", "Leadership"));
aggiungiAttributo(new Attributo("s", "Valori"));
aggiungiAttributo(new Attributo("t", "Cultura"));
aggiungiAttributo(new Attributo("u", "Integrit&agrave"));
aggiungiAttributo(new Attributo("v", "Alimentazione"));
aggiungiAttributo(new Attributo("z", "Sport"));
aggiungiAttributo(new Attributo("aa", "Tempo Libero"));
aggiungiAttributo(new Attributo("ab", "Prevenzione"));
aggiungiAttributo(new Attributo("ac", "Benessere Percepito"));
aggiungiAttributo(new Attributo("ad", "Equilibrio Vita-Lavoro"));
aggiungiAttributo(new Attributo("ae", "Felicit&agrave"));
aggiungiAttributo(new Attributo("af", "Potenzialit&agrave"));
aggiungiAttributo(new Attributo("ag", "Intelligenze"));
aggiungiAttributo(new Attributo("ah", "Cura di s&egrave"));
aggiungiAttributo(new Attributo("ai", "Coraggio"));
aggiungiAttributo(new Attributo("al", "Temperanza"));
aggiungiAttributo(new Attributo("am", "Saggiezza"));
aggiungiAttributo(new Attributo("an", "Giustizia"));


aggiungiRicaduta(new Ricaduta("r1", "Efficienza Lavorativa", "positiva"));
aggiungiRicaduta(new Ricaduta("r2", "Rispetto", "negativa"));
aggiungiRicaduta(new Ricaduta("r3", "Collaborazione", "positiva"));
aggiungiRicaduta(new Ricaduta("r4", "Comportamento", "negativa"));
aggiungiRicaduta(new Ricaduta("r5", "Sicurezza", "negativa"));
aggiungiRicaduta(new Ricaduta("r6", "Crescita Professionale", "positiva"));
aggiungiRicaduta(new Ricaduta("r7", "Competitivit&agrave", "positiva"));
aggiungiRicaduta(new Ricaduta("r8", "Ottimizzazione", "negativa"));
aggiungiRicaduta(new Ricaduta("r9", "Leadership", "positiva"));
aggiungiRicaduta(new Ricaduta("r10", "Organizzazione Flussi", "negativa"));
aggiungiRicaduta(new Ricaduta("r11", "Responsabilit&agrave", "negativa"));
aggiungiRicaduta(new Ricaduta("r12", "Partecipazione", "negativa"));
aggiungiRicaduta(new Ricaduta("r13", "Condivisione", "negativa"));
aggiungiRicaduta(new Ricaduta("r14", "Immagine", "negativa"));
aggiungiRicaduta(new Ricaduta("r15", "Pubblicit&agrave", "positiva"));
aggiungiRicaduta(new Ricaduta("r16", "Talenti", "negativa"));
aggiungiRicaduta(new Ricaduta("r17", "Appartenenza", "positiva"));
aggiungiRicaduta(new Ricaduta("r18", "Diffusione", "negativa"));
aggiungiRicaduta(new Ricaduta("r19", "Disorientamento", "negativa"));
aggiungiRicaduta(new Ricaduta("r20", "Processi Decisionali", "positiva"));
aggiungiRicaduta(new Ricaduta("r21", "Ruoli", "negativa"));
aggiungiRicaduta(new Ricaduta("r22", "Processi", "positiva"));
aggiungiRicaduta(new Ricaduta("r23", "Innovazione", "positiva"));
aggiungiRicaduta(new Ricaduta("r24", "Formazione", "positiva"));
aggiungiRicaduta(new Ricaduta("r25", "Spreco Tempo", "positiva"));
aggiungiRicaduta(new Ricaduta("r26", "Priorit&agrave", "positiva"));
aggiungiRicaduta(new Ricaduta("r27", "Riconoscimenti", "positiva"));
aggiungiRicaduta(new Ricaduta("r28", "Premi", "positiva"));
aggiungiRicaduta(new Ricaduta("r29", "Comunicazione", "positiva"));
aggiungiRicaduta(new Ricaduta("r30", "Carichi di lavoro", "positiva"));
aggiungiRicaduta(new Ricaduta("r31", "Discrepanza Esigenze", "positiva"));
aggiungiRicaduta(new Ricaduta("r32", "Sovraffaticamento", "positiva"));
aggiungiRicaduta(new Ricaduta("r33", "Carenza", "positiva"));
aggiungiRicaduta(new Ricaduta("r34", "Soddisfazione Lavorativa", "positiva"));
aggiungiRicaduta(new Ricaduta("r35", "Trasparenza", "positiva"));
aggiungiRicaduta(new Ricaduta("r36", "Integrit&agrave", "positiva"));
aggiungiRicaduta(new Ricaduta("r37", "Stima", "positiva"));
aggiungiRicaduta(new Ricaduta("r38", "Problemi Sindacali", "positiva"));




function Attributo(id, nome){

    this.id = id;
    this.nome = nome;

}

function Ricaduta(id, nome){

    this.id = id;
    this.nome = nome;

}

function aggiungiAttributo(att){

    attributi.push(att);


}

function aggiungiRicaduta(ric){

    ricadute.push(ric);

}

attr = document.getElementById("attributi");
attr.innerHTML ="";

attributi.forEach(att => {
    attr.innerHTML += "<option id='"+att.id+"' class='attributo'>"+att.nome+"</option>";
});

rica = document.getElementById("ricadute");
rica.innerHTML="";

ricadute.forEach(ric => {
    rica.innerHTML+= "<input type='checkbox' class='ricaduta' id='"+ric.id+"'>"+ric.nome+"<br>"; 
});

document.querySelector("#generatore").addEventListener("click", genera);
document.querySelector("#resetta").addEventListener("click", reset)

function genera(e){

    var stringa = "";

    var a = document.querySelector("#attributi");
    var r = document.querySelectorAll(".ricaduta");

    var id = a.options[a.selectedIndex].id;

    document.querySelector("#generato").innerHTML ="";
    r.forEach(ric => {
        if(ric.checked){

            document.querySelector("#generato").innerHTML +="aggiungiRelazioneAttrRic(new RelazioneAttrRic('"+id+"','"+ric.id+"'));\n";

        }
    });

    


}

function reset(e){

    rica = document.getElementById("ricadute");
    rica.innerHTML="";

    ricadute.forEach(ric => {
        rica.innerHTML+= "<input type='checkbox' class='ricaduta' id='"+ric.id+"'>"+ric.nome+"<br>"; 
    });

}