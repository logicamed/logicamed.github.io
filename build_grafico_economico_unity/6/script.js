function caricaJSON(path) {
    var xhr = new XMLHttpRequest;

    xhr.open("GET", path, true);
    xhr.onload = () => {
        if (xhr.status == 200) {
            console.log(xhr.responseText);
            if (gameInstance != null) {
                gameInstance.SendMessage("gridController", "inizializzazione", xhr.responseText);
            }
        }
    }

    xhr.send();
}

function aggiornaGestoreEventi() {
    var avvia = document.querySelector("#avvia");

    avvia.addEventListener("click", (e) => {
        caricaJSON("StreamingAssets/DatiEconomici.json");
        if (gameInstance != null) {
            e.target.setAttribute("disabled", "");
        }
    });
}