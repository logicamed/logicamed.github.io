using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class tower_controller : MonoBehaviour {

    public DatoEconomico dato;

    public float maxAltezza = 4;

    private bool attivo = false;

    private bool attivato = false;

    [Range(0.01f, 0.1f)]
    public float tempoTorre = 0.05f;

    [Range(0.1f, 1)]
    public float tempoCartella = 0.1f;

    public Color[] colori;

    private CursorMode cursorMode = CursorMode.Auto;
    private Vector2 hotSpot = Vector2.zero;

    public Texture2D cursorTexture1;
    public Texture2D cursorTexture2;

    // Use this for initialization
    void Start () {
	}
	
	// Update is called once per frame
	void Update () {

        if (attivato)
        {

            calcolaAlezza();

        }

        if (attivo)
        {
            
            var posizioneMouse = (Vector2)Input.mousePosition;
            var schermo = new Vector2(Screen.width, Screen.height);
            var pannelloInterno = GameObject.FindGameObjectWithTag("pannelloInterno");
            if (posizioneMouse.x > schermo.x/2) {

                posizioneMouse.x -= pannelloInterno.GetComponent<RectTransform>().sizeDelta.x;

            }
            if (posizioneMouse.y > schermo.y / 2)
            {

                posizioneMouse.y -= pannelloInterno.GetComponent<RectTransform>().sizeDelta.y;

            }

            pannelloInterno.transform.position = Vector3.Lerp(pannelloInterno.transform.position, posizioneMouse, tempoCartella);

        }
    }

    public void calcolaAlezza()
    {

        var scala = maxAltezza / DatoEconomico.valoreMassimo;

        var altezza = scala * dato.differenza;

        if(altezza < 0){
            
            altezza *= -1;
            altezza = altezza < 0.1f ? 0.1f : altezza;

            GetComponent<Renderer>().material.SetColor("_Color", colori[1]);
             
        }
        else{
            altezza = altezza < 0.1f ? 0.1f : altezza;
            GetComponent<Renderer>().material.SetColor("_Color", colori[0]);

        }

        var scalaTorre = transform.localScale;

        scalaTorre.y = altezza;
        
        transform.localScale = Vector3.Lerp(transform.localScale, scalaTorre, tempoTorre);

        var offsetVerticale = transform.localScale.y / 2;

        var posizione = transform.position;

        posizione.y = 0.5f;

        posizione.y += offsetVerticale;

        transform.position = posizione;

    }

    private void OnMouseOver()
    {


        var pannelloTXT = GameObject.FindGameObjectWithTag("pText");
        
        pannelloTXT.GetComponent<Canvas>().enabled = true;

        GameObject.FindGameObjectWithTag("titolo").GetComponent<Text>().text = dato.titolo.ToString();
        GameObject.FindGameObjectWithTag("sottotitolo1").GetComponent<Text>().text = dato.sottotitolo1.ToString();
        GameObject.FindGameObjectWithTag("sottotitolo2").GetComponent<Text>().text = dato.sottotitolo2.ToString();
        GameObject.FindGameObjectWithTag("valore1").GetComponent<Text>().text = dato.valore1.ToString() + "/30";
        GameObject.FindGameObjectWithTag("valore2").GetComponent<Text>().text = dato.valore2.ToString() + "/30";

        if (dato.differenza>0) {

            GameObject.FindGameObjectWithTag("differenza").GetComponent<Text>().text = "+" + dato.differenza.ToString();

        } else {

            GameObject.FindGameObjectWithTag("differenza").GetComponent<Text>().text = dato.differenza.ToString();

        }
        
        GameObject.FindGameObjectWithTag("valoreEconomico").GetComponent<Text>().text = "€ " + dato.valoreEconomico.ToString();

        attivo = true;
        attivato = true;
        Cursor.SetCursor(cursorTexture2, hotSpot, cursorMode);

    }


    private void OnMouseExit()
    {
        var pannelloTXT = GameObject.FindGameObjectWithTag("pText");

        pannelloTXT.GetComponent<Canvas>().enabled = false;

        var schermo = new Vector2(Screen.width, Screen.height);

        schermo /= 2;

        attivo = false;
        Cursor.SetCursor(cursorTexture1, hotSpot, cursorMode);

    }

}
