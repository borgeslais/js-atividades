function rollDice(){

    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImgs = document.getElementById("diceImgs");
    const values = [];
    const images = [];

    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        console.log(value);
        values.push(value);
        images.push(`<img src="Dice-imgs/${value}-dice.png" alt="Dice ${value}">`);
    }

    diceResult.textContent = `Result: ${values.join(', ')}`;
    diceImgs.innerHTML = images.join('');
}