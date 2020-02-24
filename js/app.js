function showNumber() {
    let loopCycle = document.getElementById('num-input').value;
    let text = "";
    for ( let i = 0; i < loopCycle; i++ ) {
        text += "The number is " + i + "<br>";
    }
    document.getElementById('result').innerHTML = text;
}