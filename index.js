const submitButton = document.getElementById("submit-button");
const input = document.getElementById("input");
const appendTo = document.getElementById("poke-info")
const div = document.createElement("div");
div.classList.add("row")


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
        appendTo.innerHTML="";
        div.innerHTML=""
        const pokeName = document.createElement("h1");
        pokeName.textContent=name;


        const pokeMoveListDiv = document.createElement("div");
        const pokeMoveListTitle = document.createElement("h2");
        pokeMoveListTitle.textContent = "Moves";
        pokeMoveListDiv.appendChild(pokeMoveListTitle)
        pokeMoveListDiv.classList.add("card")
        const pokeMoveList = document.createElement("ol")
        for (let i = 0;  i < json.moves.length; i++) {
            let li = document.createElement("li");
            li.textContent = json.moves[i].move.name;
            pokeMoveList.appendChild(li);
            if (i==9) {
                break;
            }
        }
        pokeMoveListDiv.appendChild(pokeMoveList)
        div.appendChild(pokeMoveListDiv)



        const pokeAbilityListDiv = document.createElement("div");
        const pokeAbilityListTitle = document.createElement("h2");
        pokeAbilityListTitle.textContent = "Abilities";
        pokeAbilityListDiv.appendChild(pokeAbilityListTitle)
        pokeAbilityListDiv.classList.add("card")
        const pokeAbilityList = document.createElement("ol")
        for (let i = 0;  i < json.abilities.length; i++) {
            let li = document.createElement("li");
            li.textContent = json.abilities[i].ability.name;
            pokeAbilityList.appendChild(li);
            if (i==9) {
                break;
            }
        }
        pokeAbilityListDiv.appendChild(pokeAbilityList)
        div.appendChild(pokeAbilityListDiv)


        const pokeCharacteristics = document.createElement("div")
        const pokeCharacteristicsTitle = document.createElement("h2")
        pokeCharacteristicsTitle.textContent = "Characteristics";
        pokeCharacteristics.appendChild(pokeCharacteristicsTitle);
        const height = document.createElement("li");
        height.textContent = "Height: " +json.height;
        pokeCharacteristics.appendChild(height);
        const baseExp = document.createElement("li");
        baseExp.textContent = "Base Experience: " + json.base_experience;
        pokeCharacteristics.appendChild(baseExp);
        const weight = document.createElement("li");
        weight.textContent = "Weight: " +json.weight;
        pokeCharacteristics.appendChild(weight);
        
        div.appendChild(pokeCharacteristics);


        appendTo.appendChild(pokeName)
        appendTo.appendChild(div);

    })


}

submitButton.addEventListener("click", submitForm);