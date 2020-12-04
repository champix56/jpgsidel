
// abstract class Produitts{
//     constructor(param?:{nom:string,id?:number}){
//         console.log()
//     }

// }
// class produitAlimentaire extends Produitts{
//     constructor(param){
//         super(param);
//     }

// }
interface Produitts{
    nom:string,
    id?:number
    clog:Function
}
class Produitsts extends Array{
    constructor(private nomListe?: String,){
        super();
    }
    add=(produit: Produitts)=>{
        this.push(produit);
    }
}
const p=new Produitsts();
p.add({});
console.log(p);