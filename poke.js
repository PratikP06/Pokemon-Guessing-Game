
let pokename = ""


async function poke() {

    const randid = Math.floor(Math.random() * 1025) + 1;
    const url = `https://pokeapi.co/api/v2/pokemon/${randid}`

    try {

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Pokemon not found");

        }

        const data = await response.json();
        pokename = data.name.toLowerCase();

        const imgurl = data.sprites.front_default;
        document.getElementById("pokeimg").src = imgurl;
        console.log(pokename);
        

    } catch (error) {
        console.log(error);

    }


}

function checkName() {
    
    

    const guess = document.getElementById("guess").value.toLowerCase();
    const result = document.getElementById("result");


    if (guess === pokename) {
        result.textContent = "Bingo !! You guessed it"
        poke();
    } else {
        result.textContent = "WOMP WOMP TRY AGAIN !!!";
       
    }


}