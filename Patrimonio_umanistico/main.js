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



aggiungiAttributo(new Attributo("a", "Benessere"));
aggiungiAttributo(new Attributo("b", "Alimentazione"));
aggiungiAttributo(new Attributo("c", "Sport"));
aggiungiAttributo(new Attributo("d", "Stima"));
aggiungiAttributo(new Attributo("e", "Distanza"));
aggiungiAttributo(new Attributo("f", "104"));
aggiungiAttributo(new Attributo("g", "Lavoro"));
aggiungiAttributo(new Attributo("h", "Hobby"));
aggiungiAttributo(new Attributo("i", "Denaro"));
aggiungiAttributo(new Attributo("l", "Preoccupazioni"));
aggiungiAttributo(new Attributo("m", "Decisioni"));
aggiungiAttributo(new Attributo("n", "Difficolt&agrave"));
aggiungiAttributo(new Attributo("o", "Carattere"));
aggiungiAttributo(new Attributo("p", "Temperamento"));
aggiungiAttributo(new Attributo("q", "Affidabilit&agrave"));
aggiungiAttributo(new Attributo("r", "Integrit&agrave"));
aggiungiAttributo(new Attributo("s", "Flessibilit&agrave di orario"));
aggiungiAttributo(new Attributo("t", "Lavoro da casa"));
aggiungiAttributo(new Attributo("u", "Fumo"));
aggiungiAttributo(new Attributo("v", "Figli"));
aggiungiAttributo(new Attributo("z", "Single"));


aggiungiRicaduta(new Ricaduta("r1", "Ric.Benessere1", "positiva"));
aggiungiRicaduta(new Ricaduta("r2", "Ric.Benessere2", "negativa"));
aggiungiRicaduta(new Ricaduta("r3", "Ric.Alimentazione", "positiva"));
aggiungiRicaduta(new Ricaduta("r4", "Ric.Sport", "negativa"));
aggiungiRicaduta(new Ricaduta("r5", "Ric.Stima", "negativa"));
aggiungiRicaduta(new Ricaduta("r6", "Ric.Distanza", "positiva"));
aggiungiRicaduta(new Ricaduta("r7", "Ric.104", "positiva"));
aggiungiRicaduta(new Ricaduta("r8", "Ric.Lavoro", "negativa"));
aggiungiRicaduta(new Ricaduta("r9", "Ric.Hobby", "positiva"));
aggiungiRicaduta(new Ricaduta("r10", "Ric.Denaro", "negativa"));
aggiungiRicaduta(new Ricaduta("r11", "Ric.Preoccupazioni", "negativa"));
aggiungiRicaduta(new Ricaduta("r12", "Ric.Difficolt&agrave", "negativa"));
aggiungiRicaduta(new Ricaduta("r13", "Ric.Carattere", "negativa"));
aggiungiRicaduta(new Ricaduta("r14", "Ric.Temperamento", "negativa"));
aggiungiRicaduta(new Ricaduta("r15", "Ric.Affidabilit&agrave", "positiva"));
aggiungiRicaduta(new Ricaduta("r16", "Ric.Integrit&agrave", "negativa"));
aggiungiRicaduta(new Ricaduta("r17", "Ric.Flessibilit&agrave di orario", "positiva"));
aggiungiRicaduta(new Ricaduta("r18", "Ric.Lavoro da casa", "negativa"));
aggiungiRicaduta(new Ricaduta("r19", "Ric.Fumo", "negativa"));
aggiungiRicaduta(new Ricaduta("r20", "Ric.Figli", "positiva"));
aggiungiRicaduta(new Ricaduta("r21", "Ric.Single", "negativa"));
aggiungiRicaduta(new Ricaduta("r22", "Ric.Decisioni", "positiva"));


aggiungiRelazioneAttrRic(new RelazioneAttrRic("a","r1"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("a","r2"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("b","r3"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("c","r4"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("d","r5"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("e","r6"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("f","r7"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("g","r8"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("h","r9"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("i","r10"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("l","r11"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("n","r12"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("o","r13"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("p","r14"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("q","r15"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("r","r16"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("s","r17"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("t","r18"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("u","r19"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("v","r20"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("z","r21"));
aggiungiRelazioneAttrRic(new RelazioneAttrRic("m","r22"));


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


