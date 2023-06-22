function playGame() {
    var choices = ["Pedra", "Papel", "Tesoura"];
    var playerChoice = document.getElementById("playerChoice").value;
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];

    var result = "";

    if (playerChoice === computerChoice) {
        result = "Empate!";
    } else if (
        (playerChoice === "Pedra" && computerChoice === "Tesoura") ||
        (playerChoice === "Papel" && computerChoice === "Pedra") ||
        (playerChoice === "Tesoura" && computerChoice === "Papel")
    ) {
        result = "Você ganhou!";
    } else {
        result = "Você perdeu!";
    }

    document.getElementById("result").innerHTML = "Você escolheu: " + playerChoice + "<br>" +
                                                  "O computador escolheu: " + computerChoice + "<br>" +
                                                  "Resultado: " + result;
}