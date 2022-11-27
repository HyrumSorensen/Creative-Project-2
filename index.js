const submitButton = document.getElementById("submit-button");
const input = document.getElementById("input");
const appendTo = document.getElementById("poke-info")
const div = document.createElement("div");


const submitForm = (e) => {
    e.preventDefault();
    console.log(input.value);
    let name = input.value;
    let url = "https://pokeapi.co/api/v2/pokemon/" + name;

    fetch(url)
    .then (function(response) {
        return response.json();
    }).then(function(json) {
        console.log(json)
        const pokeName = document.createElement("h3");
        pokeName.textContent=name;
        div.appendChild(pokeName);

        // const poke

        appendTo.appendChild(div);

    })


}

submitButton.addEventListener("click", submitForm);