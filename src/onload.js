const alphabetComparisonLower = document.getElementById("alphabetComparisonLower");
const alphabetComparisonUpper = document.getElementById("alphabetComparisonUpper");
const ggNormalAlphabetContainerLower = document.getElementById("ggNormalAlphabetContainerLower");
const ggNormalAlphabetContainerUpper = document.getElementById("ggNormalAlphabetContainerUpper");
const whitneyAlphabetContainerLower = document.getElementById("whitneyAlphabetContainerLower");
const whitneyAlphabetContainerUpper = document.getElementById("whitneyAlphabetContainerUpper");

const fonts = ["whitney", "ggNormal", "empty"]
const alphabetLower = "abcdefghijklmnopqrstuvwxyz";
const alphabetUpper = alphabetLower.toUpperCase();
const emptyAlphabet = "                          ";
const containersArray = [[alphabetLower, alphabetComparisonLower, whitneyAlphabetContainerLower, ggNormalAlphabetContainerLower],
[alphabetUpper, alphabetComparisonUpper, whitneyAlphabetContainerUpper, ggNormalAlphabetContainerUpper]]

containersArray.forEach((containers) => {
    for(let i = 0; i < containers[0].length; i++){
        fonts.forEach(font => {
            let element = document.createElement("p");
            if(font === "empty"){
                element.innerHTML = emptyAlphabet[i];
            } else {
                element.innerHTML = containers[0][i];
            }
            element.classList.add(font);
            containers[1].appendChild(element)
            if(font === "whitney") containers[2].appendChild(element.cloneNode(true))
            if(font === "ggNormal") containers[3].appendChild(element.cloneNode(true))
        })
    }
})