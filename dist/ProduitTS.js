"use strict";
// abstract class Produitts{
//     constructor(param?:{nom:string,id?:number}){
//         console.log()
//     }
class Produitsts extends Array {
    constructor() {
        super();
        this.add = (produit) => {
            this.push(produit);
        };
    }
}
const p = new Produitsts();
p.add({ id: 1, nom: 'hello', clog: function () { } });
console.log(p);
