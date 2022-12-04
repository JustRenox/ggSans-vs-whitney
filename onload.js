const alphabetComparisonLower = document.getElementById("alphabetComparisonLower");
const alphabetComparisonUpper = document.getElementById("alphabetComparisonUpper");
const ggNormalAlphabetContainerLower = document.getElementById("ggNormalAlphabetContainerLower");
const ggNormalAlphabetContainerUpper = document.getElementById("ggNormalAlphabetContainerUpper");
const whitneyAlphabetContainerLower = document.getElementById("whitneyAlphabetContainerLower");
const whitneyAlphabetContainerUpper = document.getElementById("whitneyAlphabetContainerUpper");
const alphabetLower = "abcdefghijklmnopqrstuvwxyz";
const alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const emptyAlphabet = "                          ";

console.log("hey")

for(let i = 0; i < alphabetLower.length; i++){
    let whitneyLetter = document.createElement("p");
    whitneyLetter.classList.add("whitney");
    whitneyLetter.innerHTML = alphabetLower[i];
    let ggLetter = document.createElement("p");
    ggLetter.classList.add("ggNormal");
    ggLetter.innerHTML = alphabetLower[i];
    let emptyLetter = document.createElement("p");
    emptyLetter.innerHTML = emptyAlphabet[i];
    emptyLetter.classList.add("empty");
    alphabetComparisonLower.appendChild(whitneyLetter)
    alphabetComparisonLower.appendChild(ggLetter)
    alphabetComparisonLower.appendChild(emptyLetter)
    let whitneyElementClone = whitneyLetter.cloneNode(true)
    let ggElementClone = ggLetter.cloneNode(true)
    ggNormalAlphabetContainerLower.appendChild(ggElementClone)
    whitneyAlphabetContainerLower.appendChild(whitneyElementClone)
}

for(let i = 0; i < alphabetUpper.length; i++){
    let whitneyLetter = document.createElement("p");
    whitneyLetter.classList.add("whitney");
    whitneyLetter.innerHTML = alphabetUpper[i];
    let ggLetter = document.createElement("p");
    ggLetter.classList.add("ggNormal");
    ggLetter.innerHTML = alphabetUpper[i];
    let emptyLetter = document.createElement("p");
    emptyLetter.innerHTML = emptyAlphabet[i];
    emptyLetter.classList.add("empty");
    alphabetComparisonUpper.appendChild(whitneyLetter)
    alphabetComparisonUpper.appendChild(ggLetter)
    alphabetComparisonUpper.appendChild(emptyLetter)
    let whitneyElementClone = whitneyLetter.cloneNode(true)
    let ggElementClone = ggLetter.cloneNode(true)
    ggNormalAlphabetContainerUpper.appendChild(ggElementClone)
    whitneyAlphabetContainerUpper.appendChild(whitneyElementClone)
}