const spanTitle = document.querySelector(".text-about-me-title"), textTitle = "SOBRE MÍ:";
const pDescription = document.querySelector(".text-about-me"), textDescription = "sdkfpjgfnasedkfgbasdfkb sdfahbg asdhjb asjdhbf h askpdhbfa ksdbf askdhbfaskdhbfasdfhjb hj bashjdfb b jklsadhbfa sjhdbfj khbfjshbdf j jh basdfhbasf jhbasjbfwe fsdkfhbsef sdhfbsdf sd fsdhfbs  sdfs df";

function efectoType(elemento, texto, i = 0, min, max, callback) {
    if (i < texto.length) {
        elemento.textContent += texto[i];
        let randomNumber = getRandomNumber(min, max);
        setTimeout(() => { efectoType(elemento, texto, i + 1, min, max, callback); }, randomNumber);
    } else {
        if (callback) callback();
    }
}

efectoType(spanTitle, textTitle, 0, 0, 100, () => {
    setTimeout(() => {
        efectoType(pDescription, textDescription, 0, 0, 50, () => {
            console.log("Ambos efectos de tipo han terminado.");
        });
    }, 300);
});

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}