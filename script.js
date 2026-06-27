function start() {

    document.querySelector("button").style.display = "none";
    document.querySelector(".warning").style.display = "none";

    document.getElementById("game").classList.remove("hidden");

    let percent = 0;
    let bar = document.getElementById("bar");
    let text = document.getElementById("text");

    let messages = [
        "Consultazione del Sig. Peachum...",
        "Verifica disponibilità premio...",
        "Controllo del bilancio...",
        "Analisi delle spese inutili..."
    ];

    let interval = setInterval(() => {

        percent += 10;

        bar.style.width = percent + "%";

        text.innerHTML = messages[Math.floor(percent / 30)] || 
        "Calcolo finale...";

        if(percent >= 100){

            clearInterval(interval);

            document.getElementById("game").classList.add("hidden");

            setTimeout(() => {

                document.getElementById("final")
                .classList.remove("hidden");

            },1000);

        }

    },500);

}
