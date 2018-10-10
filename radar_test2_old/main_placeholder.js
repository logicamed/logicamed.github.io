var p = new Periodi();

var pSupporto = [];

aggiungiVoce(pSupporto, new Voce("Asse1", 0.1));
aggiungiVoce(pSupporto, new Voce("Asse2", 0.9));
aggiungiVoce(pSupporto, new Voce("Asse3", 0.8));
aggiungiVoce(pSupporto, new Voce("Asse4", 0.1));

p.aggiungiPeriodo(pSupporto, new StatPeriodo("periodo1", "gennaio 2018"));
pSupporto = [];



aggiungiVoce(pSupporto, new Voce("Asse1", 0.1));
aggiungiVoce(pSupporto, new Voce("Asse2", 0.2));
aggiungiVoce(pSupporto, new Voce("Asse3", 0.6));
aggiungiVoce(pSupporto, new Voce("Asse4", 1));

p.aggiungiPeriodo(pSupporto, new StatPeriodo("periodo2", "gennaio 2020"));
pSupporto = [];



aggiornaPulsantiPeriodi(p);
aggiornaGestoreEventi(p);
aggiornaRadar(p);