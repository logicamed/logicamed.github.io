using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class mouse_controller : MonoBehaviour {


    private CursorMode cursorMode = CursorMode.Auto;
    private Vector2 hotSpot = Vector2.zero;

    public Texture2D cursorTexture;

    void Start()
    {

        Cursor.SetCursor(cursorTexture, hotSpot, cursorMode);

    }

}
