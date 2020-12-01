
import *  as PR from '../produitES5/produitES5.js';
export class Produits extends Array {
    
    afficherListe() {
        console.log('une instance de produit', this);
    }
    removeByEAN() {

    }
    LoadFromRest() {
        //vidange
        this.slice(0);
        fetch('http://localhost:5629/produits').then(j => j.json()).then((o) => {
            o.map(e => {
                this.push(new PR.Produit(e));
            })
            // this.push(...o)});
            console.log(this);
        });
    }
}
const produits = new Produits();
produits.LoadFromRest();

typeof (produits);
produits.afficherListe();
export default produits;