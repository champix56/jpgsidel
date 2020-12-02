
class Produits extends Array{
    constructor()
    {
        super();
    }
    loadFromRest(){

    }
    findByEAN(EAN){
       let obj= this.find(
            (element)=>{
                return element.EAN===EAN;
            }
        );
        return obj;
    }

}
const produits=new Produits();
produits.push(new Produit({nom:'Produit1', EAN:'0000'}));
produits.push(new Produit({nom:'Produit2', EAN:'0001'}));
produits.push(new Produit({nom:'Produit3', EAN:'0002'}));
produits.push(new Produit({nom:'Produit4', EAN:'0003'}));


console.log(produits);

console.log(produits.findByEAN('0001'))
