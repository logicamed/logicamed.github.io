//MAIN

/* var pulsanteCarica = document.querySelector("#carica");

pulsanteCarica.addEventListener("click", function (e) {
    var file = document.querySelector("#file");
    console.log(file);
});
 */

aggiornaAttributi();

aggiungiDipendente(new Dipendente(1, "Roberto Gigli"));
aggiungiDipendente(new Dipendente(2, "Mario Rossi"));
// aggiungiDipendente(new Dipendente(3, "Franco Neri"));
// aggiungiDipendente(new Dipendente(4, "Marcello Angeli"));
aggiungiDipendente(new Dipendente(5, "Luciano Monzi"));
/* aggiungiDipendente(new Dipendente(6, "Marco Giovannelli")); */
aggiungiDipendente(new Dipendente(7, "Giuseppe Trimarco"));
aggiungiDipendente(new Dipendente(8, "Lorenzo Follo"));
aggiungiDipendente(new Dipendente(9, "Luigi Casalone"));
aggiungiDipendente(new Dipendente(10, "Francesca Nobile"));
aggiungiDipendente(new Dipendente(11, "Chiara Vecchio"));
aggiungiDipendente(new Dipendente(12, "Elisa Albanese"));
aggiungiDipendente(new Dipendente(13, "Rossana Sorrentino"));
aggiungiDipendente(new Dipendente(14, "Teresa Vergano"));
aggiungiDipendente(new Dipendente(15, "Edoardo Servili"));
aggiungiDipendente(new Dipendente(16, "Graziella Poppa"));
aggiungiDipendente(new Dipendente(17, "Margherita Botto"));
aggiungiDipendente(new Dipendente(18, "Mattia Perna"));
aggiungiDipendente(new Dipendente(19, "Ilaria Bussi"));
aggiungiDipendente(new Dipendente(20, "Flavio Rolando"));
aggiungiDipendente(new Dipendente(21, "Matilde Cantino"));
aggiungiDipendente(new Dipendente(22, "Umberto Fiora"));
aggiungiDipendente(new Dipendente(23, "Gaetano Santoro"));
aggiungiDipendente(new Dipendente(24, "Isabella Marigliani"));
aggiungiDipendente(new Dipendente(25, "Ugo Colombo"));
aggiungiDipendente(new Dipendente(26, "Fulvio Milano"));
aggiungiDipendente(new Dipendente(27, "Guglielmo Grillo"));
aggiungiDipendente(new Dipendente(28, "Alfonso Monaco"));
aggiungiDipendente(new Dipendente(29, "Marialuisa Brondolo"));
aggiungiDipendente(new Dipendente(30, "Italo Svevo"));
aggiungiDipendente(new Dipendente(31, "Gabriele D'Annunzio"));
aggiungiDipendente(new Dipendente(32, "Giovanni Verga"));



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

//Ricadute Autonomia
aggiungiRelazioneAttrRic(new RelazioneAttrRic("a","r1"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("a","r4"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("a","r5"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("a","r6"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("a","r7"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("a","r9"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("a","r11"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("a","r12"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("a","r13"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("a","r20"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("a","r21"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("a","r22"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("a","r24"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("a","r25"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("a","r26"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("a","r30"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("a","r22"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("a","r34"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("a","r37"));

//Ricadute Coesione
aggiungiRelazioneAttrRic(new RelazioneAttrRic("b","r1"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("b","r2"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("b","r3"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("b","r7"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("b","r8"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("b","r10"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("b","r12"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("b","r13"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("b","r17"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("b","r18"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("b","r20"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("b","r22"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("b","r23"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("b","r25"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("b","r31"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("b","r36"));

//Ricadute Fiducia
aggiungiRelazioneAttrRic(new RelazioneAttrRic("c","r2"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("c","r3"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("c","r8"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("c","r9"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("c","r11"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("c","r12"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("c","r13"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("c","r17"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("c","r20"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("c","r21"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("c","r23"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("c","r24"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("c","r27"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("c","r30"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("c","r34"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("c","r35"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("c","r36"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("c","r37"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("c","r38"));

//Ricadute Pressione
aggiungiRelazioneAttrRic(new RelazioneAttrRic("d","r1"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("d","r2"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("d","r3"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("d","r4"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("d","r5"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("d","r7"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("d","r10"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("d","r11"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("d","r19"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("d","r20"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("d","r21"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("d","r22"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("d","r23"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("d","r25"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("d","r26"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("d","r30"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("d","r31"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("d","r32"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("d","r33"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("d","r34"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("d","r38"));

//Ricadute Sostegno
aggiungiRelazioneAttrRic(new RelazioneAttrRic("e","r2"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("e","r3"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("e","r4"))
aggiungiRelazioneAttrRic(new RelazioneAttrRic("e","r6"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("e","r7"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("e","r11"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("e","r12"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("e","r13"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("e","r16"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("e","r17"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("e","r18"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("e","r20"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("e","r23"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("e","r24"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("e","r27"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("e","r30"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("e","r32"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("e","r33"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("e","r34"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("e","r36"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("e","r37"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("e","r38"));

//Ricadute Riconoscimento
aggiungiRelazioneAttrRic(new RelazioneAttrRic("f","r1"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("f","r2"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("f","r3"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("f","r4"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("f","r6"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("f","r7"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("f","r8"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("f","r9"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("f","r10"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("f","r11"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("f","r12"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("f","r13"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("f","r14"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("f","r15"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("f","r16"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("f","r17"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("f","r18"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("f","r21"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("f","r23"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("f","r26"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("f","r27"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("f","r28"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("f","r29"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("f","r34"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("f","r35"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("f","r36"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("f","r37"));

//Ricadute Valorizzazione
aggiungiRelazioneAttrRic(new RelazioneAttrRic('g','r1')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('g','r2')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('g','r3')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('g','r4')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('g','r6')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('g','r7')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('g','r8')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('g','r9')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('g','r11')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('g','r12')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('g','r13')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('g','r14')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('g','r15')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('g','r16')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('g','r17')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('g','r18')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('g','r21')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('g','r22')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('g','r23')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('g','r24')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('g','r27')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('g','r28')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('g','r29')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('g','r34')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('g','r35')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('g','r36')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('g','r37')); 

//Ricadute Equità
aggiungiRelazioneAttrRic(new RelazioneAttrRic('h','r2')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('h','r3')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('h','r4')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('h','r8')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('h','r10')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('h','r12')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('h','r13')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('h','r19')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('h','r20')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('h','r21')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('h','r22')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('h','r26')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('h','r30')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('h','r38')); 

//Ricadute Innavazione
aggiungiRelazioneAttrRic(new RelazioneAttrRic('i','r1')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('i','r5')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('i','r6')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('i','r7')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('i','r8')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('i','r9')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('i','r10')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('i','r16')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('i','r20')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('i','r23')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('i','r24')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('i','r25')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('i','r26')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('i','r28')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('i','r30')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('i','r37'));

//Ricadute Dinamismo
aggiungiRelazioneAttrRic(new RelazioneAttrRic('l','r4')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('l','r6')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('l','r7')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('l','r12')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('l','r13')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('l','r15')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('l','r16')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('l','r18')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('l','r20')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('l','r22')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('l','r23')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('l','r32')); 

//Ricadute Remunerazione
aggiungiRelazioneAttrRic(new RelazioneAttrRic('m','r1')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('m','r2')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('m','r3')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('m','r4')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('m','r5')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('m','r7')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('m','r11')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('m','r12')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('m','r13')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('m','r15')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('m','r20')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('m','r22')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('m','r23')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('m','r25')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('m','r31')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('m','r32')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('m','r33')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('m','r34')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('m','r36')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('m','r37')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('m','r38'));

//Riccadute Coinvolgimento
aggiungiRelazioneAttrRic(new RelazioneAttrRic('n','r1')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('n','r2')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('n','r3')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('n','r4')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('n','r6')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('n','r7')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('n','r8')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('n','r9')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('n','r11')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('n','r12')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('n','r13')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('n','r14')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('n','r15')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('n','r16')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('n','r17')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('n','r18')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('n','r21')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('n','r22')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('n','r23')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('n','r24')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('n','r27')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('n','r28')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('n','r29')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('n','r34')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('n','r35')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('n','r36')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('n','r37')); 

//Ricadute Organizzazione
aggiungiRelazioneAttrRic(new RelazioneAttrRic('q','r1')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('q','r5')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('q','r8')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('q','r10')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('q','r12')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('q','r13')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('q','r19')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('q','r20')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('q','r21')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('q','r22')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('q','r23')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('q','r24')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('q','r25')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('q','r26')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('q','r30')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('q','r31')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('q','r32')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('q','r34')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('q','r38')); 

//Ricadute Leadership
aggiungiRelazioneAttrRic(new RelazioneAttrRic('r','r2')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('r','r3')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('r','r4')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('r','r6')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('r','r7')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('r','r9')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('r','r11')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('r','r12')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('r','r13')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('r','r14')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('r','r15')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('r','r16')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('r','r20')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('r','r21')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('r','r27')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('r','r28')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('r','r29')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('r','r30')); 

//Ricadute Vavlori
aggiungiRelazioneAttrRic(new RelazioneAttrRic('s','r2')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('s','r3')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('s','r4')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('s','r8')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('s','r10')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('s','r12')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('s','r13')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('s','r19')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('s','r20')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('s','r21')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('s','r22')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('s','r26')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('s','r30')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('s','r38'));

//Ricadute Cultura
aggiungiRelazioneAttrRic(new RelazioneAttrRic('t','r2')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('t','r3')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('t','r4')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('t','r5')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('t','r6')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('t','r10')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('t','r11')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('t','r13')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('t','r25')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('t','r26')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('t','r36'));

//Ricadute Integrità
aggiungiRelazioneAttrRic(new RelazioneAttrRic('u','r2')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('u','r3')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('u','r4')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('u','r8')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('u','r10')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('u','r12')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('u','r13')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('u','r19')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('u','r20')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('u','r21')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('u','r22')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('u','r26')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('u','r30')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('u','r38'));

//Ricadute Alimentazione
aggiungiRelazioneAttrRic(new RelazioneAttrRic('v','r1')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('v','r4')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('v','r6')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('v','r7')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('v','r8')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('v','r9')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('v','r11')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('v','r12')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('v','r21')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('v','r26')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('v','r27')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('v','r28')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('v','r33')); 

//Ricadute Sport
aggiungiRelazioneAttrRic(new RelazioneAttrRic('z','r1')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('z','r4')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('z','r6')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('z','r7')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('z','r8')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('z','r9')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('z','r11')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('z','r12')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('z','r21')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('z','r26')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('z','r27')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('z','r28')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('z','r33')); 

//Ricadute Tempo Libero
aggiungiRelazioneAttrRic(new RelazioneAttrRic('aa','r1')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('aa','r4')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('aa','r6')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('aa','r7')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('aa','r8')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('aa','r9')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('aa','r11')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('aa','r12')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('aa','r21')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('aa','r26')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('aa','r27')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('aa','r28')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('aa','r33')); 

//Ricadute Prevenzione
aggiungiRelazioneAttrRic(new RelazioneAttrRic('ab','r1')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ab','r4')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ab','r6')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ab','r7')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ab','r8')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ab','r9')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ab','r11')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ab','r12')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ab','r21')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ab','r26')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ab','r27')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ab','r28')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ab','r33')); 

//Ricadute Benessere Percepito
aggiungiRelazioneAttrRic(new RelazioneAttrRic('ac','r1')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ac','r4')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ac','r6')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ac','r7')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ac','r8')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ac','r9')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ac','r11')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ac','r12')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ac','r21')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ac','r26')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ac','r27')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ac','r28')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ac','r33')); 

//Ricadute Equilibrio VIta-Lavoro
aggiungiRelazioneAttrRic(new RelazioneAttrRic('ad','r1')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ad','r4')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ad','r6')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ad','r7')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ad','r8')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ad','r9')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ad','r11')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ad','r12')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ad','r21')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ad','r26')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ad','r27')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ad','r28')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ad','r33')); 

//Ricadute Felicità
aggiungiRelazioneAttrRic(new RelazioneAttrRic('ae','r1')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ae','r4')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ae','r6')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ae','r7')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ae','r8')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ae','r9')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ae','r11')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ae','r12')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ae','r21')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ae','r26')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ae','r27')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ae','r28')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ae','r33')); 

//Ricadute Potenzialita
aggiungiRelazioneAttrRic(new RelazioneAttrRic('af','r1')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('af','r4')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('af','r6')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('af','r7')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('af','r8')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('af','r9')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('af','r11')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('af','r12')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('af','r21')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('af','r26')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('af','r27')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('af','r28')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('af','r33')); 

//Ricadute Intelligenze
aggiungiRelazioneAttrRic(new RelazioneAttrRic('ag','r1')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ag','r4')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ag','r6')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ag','r7')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ag','r8')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ag','r9')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ag','r11')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ag','r12')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ag','r21')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ag','r26')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ag','r27')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ag','r28')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ag','r33')); 

//Ricadute Cura di se
aggiungiRelazioneAttrRic(new RelazioneAttrRic('ah','r1')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ah','r4')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ah','r6')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ah','r7')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ah','r8')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ah','r9')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ah','r11')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ah','r12')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ah','r21')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ah','r26')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ah','r27')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ah','r28')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ah','r33')); 

//Ricadute Coraggio
aggiungiRelazioneAttrRic(new RelazioneAttrRic('ai','r1')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ai','r4')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ai','r6')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ai','r7')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ai','r8')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ai','r9')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ai','r11')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ai','r12')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ai','r21')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ai','r26')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ai','r27')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ai','r28')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('ai','r33')); 

//Ricadute Temperanza
aggiungiRelazioneAttrRic(new RelazioneAttrRic('al','r1')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('al','r4')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('al','r6')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('al','r7')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('al','r8')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('al','r9')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('al','r11')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('al','r12')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('al','r21')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('al','r26')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('al','r27')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('al','r28')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('al','r33')); 

//Ricadute Saggezza
aggiungiRelazioneAttrRic(new RelazioneAttrRic('am','r1')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('am','r4')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('am','r6')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('am','r7')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('am','r8')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('am','r9')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('am','r11')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('am','r12')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('am','r21')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('am','r26')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('am','r27')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('am','r28')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('am','r33')); 

//Ricadute Giustizia
aggiungiRelazioneAttrRic(new RelazioneAttrRic('an','r1')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('an','r4')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('an','r6')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('an','r7')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('an','r8')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('an','r9')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('an','r11')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('an','r12')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('an','r21')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('an','r26')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('an','r27')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('an','r28')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('an','r33')); 

//Ricadute Umanità
aggiungiRelazioneAttrRic(new RelazioneAttrRic('o','r1')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('o','r4')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('o','r6')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('o','r7')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('o','r8')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('o','r9')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('o','r11')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('o','r12')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('o','r21')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('o','r26')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('o','r27')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('o','r28')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('o','r33')); 

//Ricadute Trascendenza
aggiungiRelazioneAttrRic(new RelazioneAttrRic('p','r1')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('p','r4')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('p','r6')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('p','r7')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('p','r8')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('p','r9')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('p','r11')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('p','r12')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('p','r21')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('p','r26')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('p','r27')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('p','r28')); aggiungiRelazioneAttrRic(new RelazioneAttrRic('p','r33')); 






aggiungiRelazioneDipAttr(new RelazioneDipAttr(1,"u",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(1,"i",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(1,"e",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(1,"c",1));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(1,"a",15));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(1,"o",25));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(1,"z",27));


aggiungiRelazioneDipAttr(new RelazioneDipAttr(2,"a",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(2,"c",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(2,"d",9));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(2,"f",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(2,"m",24));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(2,"o",18));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(2,"p",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(2,"r",3));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(2,"t",0));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(2,"u",16));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(2,"z",25));


// aggiungiRelazioneDipAttr(new RelazioneDipAttr(3,"b",1));
// aggiungiRelazioneDipAttr(new RelazioneDipAttr(3,"c",1));
// aggiungiRelazioneDipAttr(new RelazioneDipAttr(3,"e",1));
// aggiungiRelazioneDipAttr(new RelazioneDipAttr(3,"g",1));
// aggiungiRelazioneDipAttr(new RelazioneDipAttr(3,"i",1));
// aggiungiRelazioneDipAttr(new RelazioneDipAttr(3,"m",1));
// aggiungiRelazioneDipAttr(new RelazioneDipAttr(3,"p",1));
// aggiungiRelazioneDipAttr(new RelazioneDipAttr(3,"r",1));
// aggiungiRelazioneDipAttr(new RelazioneDipAttr(3,"t",1));
// aggiungiRelazioneDipAttr(new RelazioneDipAttr(3,"v",1));


// aggiungiRelazioneDipAttr(new RelazioneDipAttr(4,"a",30));
// aggiungiRelazioneDipAttr(new RelazioneDipAttr(4,"b",29));
// aggiungiRelazioneDipAttr(new RelazioneDipAttr(4,"c",28));
// aggiungiRelazioneDipAttr(new RelazioneDipAttr(4,"d",27));
// aggiungiRelazioneDipAttr(new RelazioneDipAttr(4,"e",26));
// aggiungiRelazioneDipAttr(new RelazioneDipAttr(4,"f",25));
// aggiungiRelazioneDipAttr(new RelazioneDipAttr(4,"g",24));
// aggiungiRelazioneDipAttr(new RelazioneDipAttr(4,"h",23));
// aggiungiRelazioneDipAttr(new RelazioneDipAttr(4,"i",22));
// aggiungiRelazioneDipAttr(new RelazioneDipAttr(4,"l",21));
// aggiungiRelazioneDipAttr(new RelazioneDipAttr(4,"m",20));
// aggiungiRelazioneDipAttr(new RelazioneDipAttr(4,"n",19));
// aggiungiRelazioneDipAttr(new RelazioneDipAttr(4,"o",18));
// aggiungiRelazioneDipAttr(new RelazioneDipAttr(4,"p",17));
// aggiungiRelazioneDipAttr(new RelazioneDipAttr(4,"q",16));
// aggiungiRelazioneDipAttr(new RelazioneDipAttr(4,"r",15));
// aggiungiRelazioneDipAttr(new RelazioneDipAttr(4,"s",10));
// aggiungiRelazioneDipAttr(new RelazioneDipAttr(4,"t",9));
// aggiungiRelazioneDipAttr(new RelazioneDipAttr(4,"u",8));
// aggiungiRelazioneDipAttr(new RelazioneDipAttr(4,"v",7));
// aggiungiRelazioneDipAttr(new RelazioneDipAttr(4,"z",6));


aggiungiRelazioneDipAttr(new RelazioneDipAttr(5,"a",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(5,"c",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(5,"d",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(5,"e",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(5,"h",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(5,"i",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(5,"n",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(5,"o",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(5,"r",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(5,"s",30));;
aggiungiRelazioneDipAttr(new RelazioneDipAttr(5,"u",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(5,"v",10));


// aggiungiRelazioneDipAttr(new RelazioneDipAttr(6,"f",30));
// aggiungiRelazioneDipAttr(new RelazioneDipAttr(6,"u",30));


aggiungiRelazioneDipAttr(new RelazioneDipAttr(7,"a",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(7,"c",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(7,"d",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(7,"h",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(7,"l",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(7,"p",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(7,"q",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(7,"r",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(7,"u",10));


aggiungiRelazioneDipAttr(new RelazioneDipAttr(8,"b",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(8,"e",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(8,"g",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(8,"h",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(8,"i",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(8,"l",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(8,"o",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(8,"p",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(8,"r",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(8,"s",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(8,"t",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(8,"v",30));


aggiungiRelazioneDipAttr(new RelazioneDipAttr(9,"a",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(9,"d",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(9,"g",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(9,"h",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(9,"i",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(9,"m",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(9,"p",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(9,"r",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(9,"s",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(9,"t",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(9,"z",10));


aggiungiRelazioneDipAttr(new RelazioneDipAttr(10,"a",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(10,"b",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(10,"e",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(10,"g",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(10,"i",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(10,"l",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(10,"m",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(10,"o",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(10,"q",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(10,"r",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(10,"v",20));


aggiungiRelazioneDipAttr(new RelazioneDipAttr(11,"a",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(11,"c",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(11,"e",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(11,"h",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(11,"l",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(11,"n",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(11,"q",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(11,"r",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(11,"s",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(11,"v",10));


aggiungiRelazioneDipAttr(new RelazioneDipAttr(12,"a",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(12,"b",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(12,"e",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(12,"f",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(12,"h",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(12,"m",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(12,"n",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(12,"p",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(12,"r",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(12,"s",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(12,"u",30));


aggiungiRelazioneDipAttr(new RelazioneDipAttr(13,"a",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(13,"b",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(13,"c",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(13,"e",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(13,"f",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(13,"g",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(13,"l",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(13,"r",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(13,"t",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(13,"v",30));


aggiungiRelazioneDipAttr(new RelazioneDipAttr(14,"a",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(14,"b",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(14,"c",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(14,"e",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(14,"f",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(14,"h",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(14,"i",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(14,"l",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(14,"m",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(14,"p",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(14,"q",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(14,"r",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(14,"s",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(14,"t",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(14,"u",20));


aggiungiRelazioneDipAttr(new RelazioneDipAttr(15,"a",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(15,"c",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(15,"g",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(15,"h",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(15,"i",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(15,"m",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(15,"n",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(15,"o",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(15,"p",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(15,"q",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(15,"s",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(15,"t",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(15,"u",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(15,"v",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(15,"z",30));


aggiungiRelazioneDipAttr(new RelazioneDipAttr(16,"a",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(16,"d",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(16,"e",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(16,"i",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(16,"l",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(16,"m",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(16,"n",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(16,"o",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(16,"p",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(16,"q",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(16,"s",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(16,"t",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(16,"u",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(16,"z",30));


aggiungiRelazioneDipAttr(new RelazioneDipAttr(17,"a",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(17,"d",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(17,"e",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(17,"h",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(17,"i",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(17,"l",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(17,"n",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(17,"o",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(17,"p",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(17,"q",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(17,"r",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(17,"s",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(17,"u",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(17,"v",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(17,"z",10));


aggiungiRelazioneDipAttr(new RelazioneDipAttr(18,"a",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(18,"c",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(18,"d",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(18,"e",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(18,"g",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(18,"h",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(18,"i",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(18,"l",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(18,"m",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(18,"n",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(18,"o",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(18,"q",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(18,"r",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(18,"s",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(18,"t",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(18,"v",30));


aggiungiRelazioneDipAttr(new RelazioneDipAttr(19,"a",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(19,"b",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(19,"c",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(19,"e",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(19,"f",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(19,"h",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(19,"l",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(19,"m",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(19,"n",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(19,"o",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(19,"q",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(19,"r",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(19,"s",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(19,"t",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(19,"u",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(19,"v",30));


aggiungiRelazioneDipAttr(new RelazioneDipAttr(20,"a",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(20,"c",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(20,"d",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(20,"e",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(20,"g",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(20,"h",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(20,"i",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(20,"m",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(20,"n",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(20,"o",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(20,"p",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(20,"r",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(20,"s",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(20,"t",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(20,"u",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(20,"v",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(20,"z",10));


aggiungiRelazioneDipAttr(new RelazioneDipAttr(21,"a",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(21,"b",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(21,"c",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(21,"d",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(21,"g",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(21,"h",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(21,"i",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(21,"m",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(21,"n",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(21,"p",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(21,"q",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(21,"s",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(21,"t",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(21,"u",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(21,"v",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(21,"z",20));


aggiungiRelazioneDipAttr(new RelazioneDipAttr(22,"a",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(22,"c",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(22,"d",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(22,"f",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(22,"g",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(22,"h",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(22,"i",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(22,"l",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(22,"m",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(22,"n",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(22,"p",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(22,"r",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(22,"s",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(22,"t",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(22,"u",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(22,"v",20));


aggiungiRelazioneDipAttr(new RelazioneDipAttr(23,"a",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(23,"b",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(23,"c",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(23,"e",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(23,"f",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(23,"h",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(23,"i",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(23,"l",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(23,"m",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(23,"n",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(23,"o",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(23,"p",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(23,"q",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(23,"r",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(23,"s",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(23,"u",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(23,"v",10));


aggiungiRelazioneDipAttr(new RelazioneDipAttr(24,"a",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(24,"b",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(24,"d",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(24,"e",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(24,"f",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(24,"h",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(24,"i",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(24,"l",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(24,"m",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(24,"n",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(24,"o",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(24,"p",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(24,"q",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(24,"r",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(24,"t",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(24,"v",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(24,"z",20));


aggiungiRelazioneDipAttr(new RelazioneDipAttr(25,"a",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(25,"b",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(25,"c",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(25,"d",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(25,"g",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(25,"h",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(25,"l",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(25,"m",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(25,"n",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(25,"o",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(25,"p",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(25,"q",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(25,"r",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(25,"s",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(25,"t",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(25,"u",20));


aggiungiRelazioneDipAttr(new RelazioneDipAttr(26,"a",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(26,"b",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(26,"c",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(26,"e",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(26,"f",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(26,"g",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(26,"l",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(26,"m",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(26,"n",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(26,"o",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(26,"p",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(26,"q",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(26,"r",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(26,"s",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(26,"t",20));


aggiungiRelazioneDipAttr(new RelazioneDipAttr(27,"a",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(27,"b",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(27,"c",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(27,"d",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(27,"e",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(27,"f",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(27,"g",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(27,"l",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(27,"m",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(27,"n",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(27,"o",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(27,"q",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(27,"r",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(27,"s",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(27,"t",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(27,"u",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(27,"v",20));


aggiungiRelazioneDipAttr(new RelazioneDipAttr(28,"a",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(28,"b",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(28,"c",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(28,"d",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(28,"e",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(28,"f",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(28,"g",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(28,"h",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(28,"m",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(28,"n",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(28,"q",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(28,"r",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(28,"s",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(28,"t",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(28,"u",20));


aggiungiRelazioneDipAttr(new RelazioneDipAttr(29,"a",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(29,"b",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(29,"d",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(29,"e",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(29,"f",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(29,"h",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(29,"i",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(29,"l",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(29,"n",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(29,"p",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(29,"q",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(29,"r",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(29,"s",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(29,"t",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(29,"u",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(29,"v",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(29,"z",30));


aggiungiRelazioneDipAttr(new RelazioneDipAttr(30,"a",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(30,"b",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(30,"c",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(30,"d",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(30,"e",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(30,"f",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(30,"g",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(30,"l",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(30,"m",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(30,"n",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(30,"p",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(30,"q",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(30,"r",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(30,"s",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(30,"t",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(30,"u",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(30,"v",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(30,"z",10));


aggiungiRelazioneDipAttr(new RelazioneDipAttr(31,"a",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(31,"b",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(31,"c",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(31,"d",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(31,"g",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(31,"h",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(31,"i",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(31,"l",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(31,"m",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(31,"n",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(31,"o",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(31,"q",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(31,"r",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(31,"s",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(31,"t",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(31,"u",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(31,"v",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(31,"z",30));


aggiungiRelazioneDipAttr(new RelazioneDipAttr(32,"a",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(32,"d",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(32,"e",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(32,"f",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(32,"g",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(32,"h",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(32,"i",10));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(32,"l",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(32,"m",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(32,"n",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(32,"o",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(32,"p",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(32,"r",30));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(32,"s",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(32,"t",20));
aggiungiRelazioneDipAttr(new RelazioneDipAttr(32,"u",20));
