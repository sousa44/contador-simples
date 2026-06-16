/* elementos dom*/

const number = document.getElementById("number");
const textNumber = document.querySelector(".textNumber");
const actions = document.querySelectorAll("#boxActions div")


let numberValue = parseInt(number.textContent)

// function realizar ação

function realizarAcao(acao) {

    switch (acao) {

        case "diminuir":

            number.textContent = --numberValue;

            break;

        case "aumentar":

            number.textContent = numberValue++;

            break;

        case "resetar":

            number.textContent = numberValue = 0;

            break;


    }

    console.log(acao)


    if (numberValue < 0) {
        textNumber.textContent = "Negativo";
        textNumber.style.color = "#FF0000"


        return
    }

    if (numberValue >= 0) {
        textNumber.textContent = "Positivo";
        textNumber.style.color = "#0000FF"

        return
    }

}

// actions

actions.forEach((action) => {

    action.addEventListener("click", () => {
        realizarAcao(action.getAttribute("action"))
    })
})