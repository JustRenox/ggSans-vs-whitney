const whitney = new Map(Object.entries({
    a: 86,    b: 93,    c: 82,    d: 94,
    e: 86,    f: 52,    g: 89,    h: 92,
    i: 41,    j: 41,    k: 82,    l: 41,
    m: 144,   n: 92,    o: 92,    p: 94,
    q: 93,    r: 60,    s: 77,    t: 58,
    u: 93,    v: 82,    w: 129,   x: 83,
    y: 84,    z: 79,    A: 122,   B: 96,
    C: 114,   D: 123,   E: 89,    F: 84,
    G: 122,   H: 124,   I: 47,    J: 65,
    K: 106,   L: 82,    M: 160,   N: 124,
    O: 131,   P: 94,    Q: 131,   R: 100,
    S: 90,    T: 103,   U: 119,   V: 120,
    W: 181,   X: 111,   Y: 111,   Z: 107
}))

const ggSans = new Map(Object.entries({
    a: 90,    b: 97,    c: 89,    d: 97,
    e: 89,    f: 60,    g: 88,    h: 95,
    i: 40,    j: 40,    k: 86,    l: 44,
    m: 143,   n: 93,    o: 94,    p: 97,
    q: 97,    r: 67,    s: 79,    t: 68,
    u: 93,    v: 83,    w: 123,   x: 81,
    y: 83,    z: 77,    A: 113,   B: 108,
    C: 112,   D: 116,   E: 98,    F: 96,
    G: 118,   H: 118,   I: 43,    J: 90,
    K: 107,   L: 97,    M: 148,   N: 120,
    O: 120,   P: 107,   Q: 120,   R: 110,
    S: 98,    T: 94,    U: 117,   V: 106,
    W: 144,   X: 103,   Y: 104,   Z: 97
}))

const distributionMap = new Map(Object.entries({
    a: 8.2,   b: 1.5,
    c: 2.8,   d: 4.3,
    e: 13,    f: 2.2,
    g: 2,     h: 6.1,
    i: 7,     j: 0.15,
    k: 0.77,  l: 4,
    m: 2.4,   n: 6.7,
    o: 7.5,   p: 1.9,
    q: 0.095, r: 6,
    s: 6.3,   t: 9.1,
    u: 2.8,   v: 0.98,
    w: 2.4,   x: 0.15,
    y: 2,     z: 0.074
}))

const pixelDifferenceMap = new Map()
const percentDifferenceMap = new Map()
const weightedDistributionArray = []

whitney.forEach((value, key) => {
    let pixelDifference = ggSans.get(key) - whitney.get(key)
    let percentDifference = Math.round((ggSans.get(key) / whitney.get(key)) * 10000)/100
    pixelDifferenceMap.set(key, pixelDifference)
    percentDifferenceMap.set(key, percentDifference)
    if(key.toUpperCase() !== key){
        weightedDistributionArray.push(percentDifference * distributionMap.get(key))
    }
})

let averageDifference = weightedDistributionArray.reduce((accumulator, currentValue) => accumulator + currentValue) / 100

let letterArray = Array.from(whitney.keys())
let pixelDifferenceArray = Array.from(pixelDifferenceMap.values())
let percentDifferenceArray = Array.from(percentDifferenceMap.values())
let distributionArray = Array.from(percentDifferenceMap.values())

console.log(pixelDifferenceMap)
console.log(percentDifferenceMap)
console.log(weightedDistributionArray)
console.log(averageDifference)

let table = [["letter", "percentDifference", "letterFrequency", "weightedDistribution"]]

for(let i = 0; i < letterArray.length; i++){
    if(letterArray[i].toUpperCase() === letterArray[i]){
        // table.push([letterArray[i], pixelDifferenceArray[i], percentDifferenceArray[i], "no data", "no data"])
    } else {
        // using pixelDifference doesn't really make sense since it's relative to the 11rem font size.
        // table.push([letterArray[i], pixelDifferenceArray[i], percentDifferenceArray[i], distributionArray[i], weightedDistributionArray[i]])
        table.push([letterArray[i], percentDifferenceArray[i], distributionArray[i], weightedDistributionArray[i]])
    }
}

table.push(["totalAvg:", null, null, averageDifference])

console.table(table)

