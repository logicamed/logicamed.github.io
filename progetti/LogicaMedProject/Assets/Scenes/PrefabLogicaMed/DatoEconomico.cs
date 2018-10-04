using UnityEngine;
using System.Collections;
using System.Collections.Generic;

[System.Serializable]
public class DatoEconomico
{

    public string id;
    public string titolo;
    public float valore1;
    public float valore2;
    public string sottotitolo1;
    public string sottotitolo2;
    public float valoreEconomico; 
    
    public static float valoreMassimo { get; private set; }
    public float differenza { get; private set; }

    public DatoEconomico(string id, string titolo, float valore1, float valore2, string sottotitolo1, string sottotitolo2, float valoreEconomico)
    {

        this.id = id;
        this.titolo = titolo;
        this.valore1 = valore1;
        this.valore2 = valore2;
        this.sottotitolo1 = sottotitolo1;
        this.sottotitolo2 = sottotitolo2;
        this.valoreEconomico = valoreEconomico;

        calcolaDifferenza();
             

    }

    private void calcolaDifferenza(){

        this.differenza = this.valore2 - this.valore1;

    }

    public static void calcolaValoreMassimo(List<DatoEconomico> dati)
    {

        float val = 0;

        foreach(DatoEconomico dato in dati)
        {

            float valSingolo = dato.differenza;

            if(valSingolo < 0) { valSingolo *= -1; }

            if(valSingolo > val)
            {

                val = valSingolo;

            }

        }


        valoreMassimo = val;

    }
}
