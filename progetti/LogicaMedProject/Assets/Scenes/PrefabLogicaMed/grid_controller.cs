using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.IO;

public class grid_controller : MonoBehaviour
{

    public GameObject griglia;
    public GameObject cubo;
    public GameObject torre;
    public int colonne;
    public int righe;
    public Color colore1;
    public Color colore2;
    public Vector3 offset;
    public string pathJSON;



    private List<DatoEconomico> dati;


    public int nElementi { get; private set; }

    // Use this for initialization
    void Start()
    {

        if (Application.isEditor)
        {
            string pathEditor = Application.streamingAssetsPath + pathJSON;
            string jsNostroEditor = File.ReadAllText(pathEditor);
            inizializzazione(jsNostroEditor);
            Debug.Log("Eseguito in Unity Editor");
        }
        else if (Application.platform == RuntimePlatform.WindowsPlayer)
        {

            string pathEditor = Application.streamingAssetsPath + pathJSON;
            string jsNostroEditor = File.ReadAllText(pathEditor);
            inizializzazione(jsNostroEditor);
            Debug.Log("Eseguito in Windows Player");

        }
        else if (Application.platform == RuntimePlatform.WebGLPlayer)
        {

            Debug.Log("Eseguito in WebGLPlayer");

        }

    }

    public void inizializzazione(string json)
    {
        dati = new List<DatoEconomico>();

        nElementi = 0;

        caricaJSON(json);

        //aggiungiDatoEconomico(new DatoEconomico("t1", "Dato1", 30, 35, "s1" , "s2" , 34f));
        //aggiungiDatoEconomico(new DatoEconomico("t2", "Dato2", 30, 20, "s1" , "s2" , 34f));

        nElementi = dati.ToArray().Length;

        aggiornaPosizione();

        aggiungiCubo();


    }

    // Update is called once per frame
    void Update()
    {

    }

    void aggiungiDatoEconomico(DatoEconomico d)
    {
        dati.Add(d);
    }

    void aggiornaPosizione()
    {

        var posizione = new Vector3(-(colonne / 2) + offset.x, griglia.transform.position.y + offset.y, -(righe / 2) + offset.z);
        griglia.transform.position = posizione;

    }

    void aggiungiCubo()
    {

        int metaRighe = righe / 2;
        int metaColonne = colonne / 2;
        int metaRigheN = metaRighe + nElementi + 1;
        int metaRigheP = metaRighe - nElementi / 2 + 1;
        metaColonne = 4;


        for (int c = 0; c < colonne; c++)
        {

            for (int r = 0; r < righe; r++)
            {

                var posizione = griglia.transform.position;

                posizione.x += c;
                posizione.z += r;
                posizione.y = -(cubo.transform.localScale.y / 2);

                Instantiate(cubo, posizione, Quaternion.identity, griglia.transform);

            }


        }


        var cubi = GameObject.FindGameObjectsWithTag("cubo");

        foreach (GameObject cubo in cubi)
        {

            var scala = cubo.transform.localScale;

            scala.x = 0.9f;
            scala.z = 0.9f;

            cubo.transform.localScale = scala;

        }

        int b = 3;
        int contatoreEle = 0;

        foreach (GameObject cubo in cubi)
        {

            var posizioneNellaGriglia = cubo.transform.position - griglia.transform.position;

            if ((posizioneNellaGriglia.x == metaColonne || posizioneNellaGriglia.x == metaColonne + 6 || posizioneNellaGriglia.x == metaColonne + 12) && (posizioneNellaGriglia.z <= metaRigheN && posizioneNellaGriglia.z >= metaRigheP) && contatoreEle < nElementi)
            {


                if (b == 3)
                {

                    var posizione = cubo.transform.position;
                    posizione.y = 0.5f;

                    var offsetVerticale = torre.transform.localScale.y / 2;

                    posizione.y += offsetVerticale;

                    Instantiate(torre, posizione, Quaternion.identity, griglia.transform);

                    b = 0;
                    contatoreEle++;

                }

                b++;

            }

        }

        DatoEconomico.calcolaValoreMassimo(dati);

        var torri = GameObject.FindGameObjectsWithTag("torre");

        int i = 0;

        foreach (GameObject tr in torri)
        {

            var dato = dati[i];


            var scalaT = tr.transform.localScale;


            tr.GetComponent<tower_controller>().dato = dato;


            i++;

        }



    }

    private void caricaJSON(string js)
    {

        //string path = Application.streamingAssetsPath + pathJSON;
        string json = js;
        DatoEconomico_parse arrayDato = JsonUtility.FromJson<DatoEconomico_parse>(json);

        foreach (DatoEconomico d in arrayDato.dati)
        {

            aggiungiDatoEconomico(new DatoEconomico(d.id, d.titolo, d.valore1, d.valore2, d.sottotitolo1, d.sottotitolo2, d.valoreEconomico));

        }



    }


}
