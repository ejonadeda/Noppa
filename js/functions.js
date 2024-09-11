let currentDice = 1;
function updateDiceImage() {
    console.log('Klikattu!'); 
    currentDice = (currentDice % 6) + 1; 
    const diceImage = document.getElementById('noppa'); 
    console.log(`Vaihtaa kuvaan: kuvat/noppa${currentDice}.png`); 
    diceImage.src = `kuvat/noppa${currentDice}.png`; 
}
window.onload = function() {
    document.getElementById('dice').addEventListener('click', updateDiceImage);
}