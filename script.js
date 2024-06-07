function colorMixer() {
    var fundo = document.getElementById("caixadecor");

    var cor1 = document.getElementById('idcor1').value;
    var cor2 = document.getElementById('idcor2').value;

    let roxo = "purple";
    let laranja = "orange";
    let verde = "green";

    var video = document.getElementById('video');
    var resultado = document.getElementById('resultado');
    
    if (cor1===cor2) {
        fundo.style.display = 'block';
        fundo.style.backgroundColor = cor1
        resultado.textContent = "Você não misturou cores diferentes!";
        resultado.style.color = "black";
        video.style.display = 'none';
        video.pause();
    } else if ((cor1 === "#ff0000" && cor2 === "#0000ff") || (cor1 === "#0000ff" && cor2 === "#ff0000")) {
        fundo.style.display = 'none';
        video.style.display = 'block';
        video.play();
        resultado.textContent = "Lapso e Reversão. Juntando as duas expressões ilmitadas, é possível empurrar uma massa imaginária. Vazio roxo.";
        resultado.style.color = "purple";
    } else if ((cor1 === "#ff0000" && cor2 === "#ffff00") || (cor1 === "#ffff00" && cor2 === "#ff0000")) {
        fundo.style.display = 'block';
        fundo.style.backgroundColor = laranja; 
        video.style.display = 'none';
        video.pause();
        resultado.textContent = "O resultado foi a cor: Laranja!";
        resultado.style.color = "orange";
    } else if ((cor1 === "#0000ff" && cor2 === "#ffff00") || (cor1 === "#ffff00" && cor2 === "#0000ff")) {
        fundo.style.display = 'block';
        fundo.style.backgroundColor = verde; 
        video.style.display = 'none';
        video.pause();
        resultado.textContent = "O resultado foi a cor: Verde!";
        resultado.style.color = "green";
    } else {
        fundo.style.display = 'block';
        fundo.style.backgroundColor = "white";
        video.style.display = 'none';
        video.pause();
        resultado.textContent = "O resultado foi a cor: Branco!";
    }
}