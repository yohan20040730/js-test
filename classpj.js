class hewan {
    constructor (darat, laut){
        this.darat = darat;
        this.laut  = laut;
     }
}

let hewan1 = new hewan("ayam" , "paus");

console.log(
    hewan1.darat + 
    "adalah hewan yg bertelur"
);
console.log(`${hewan1.laut} adalah ikan yg paling besar`);