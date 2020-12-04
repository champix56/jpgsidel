import {Produit} from '../produitES5/ProduitES6.js';


class Produits extends Array {
    #_template=null;
    constructor() {
        super();
    }
    loadTemplate(url = 'vues/produits-produit.html') {
        return fetch(url).then((resp) => { return resp.text() })
            .then((texthtml) => {
                const parser = new DOMParser();
                const template = parser.parseFromString(texthtml, 'text/html');
                console.log(template.innerHTML);
                this.#_template=template;
                return template;
            });
    }
    loadFromRest() {
        return fetch('http://localhost:5629/produits')
            .then(function (fluxResponse) { return fluxResponse.json() })
            .then((objetJS) => {

                console.log('Voici la valeur recu', objetJS);
                this.splice(0);
                objetJS.map((element, index) => {
                    this.push(new Produit(element));
                });
                console.log(this);
                return objetJS;
            })
    }
    /**
     * lancement synchronisé des chargements par promises
     */
    syncLoad() {
        console.profile('syncloadProfile');
        console.time('syncload');
        Promise.all([this.loadFromRest(), this.loadTemplate()])
            .then(responses => {
                console.log(responses)
                this.map(elementInArray=>{
                    elementInArray.domNode=this.#_template.cloneNode(this.#_template,true).querySelector('.produit');
                    elementInArray.showProduct();
                    document.querySelector('#wrapper').append(elementInArray.domNode);
                    console.timeEnd('syncload');
                    console.profileEnd('syncloadProfile');
                });  
            });
    }
    findByEAN(EAN) {
        let obj = this.find(
            (element) => {
                return element.EAN === EAN;
            }
        );
        return obj;
    }

}
const produits = new Produits();
// produits.loadFromRest();
// produits.loadTemplate();

produits.syncLoad();
produits.push(new Produit({ nom: 'Produit1', EAN: '0000' }));
produits.push(new Produit({ nom: 'Produit2', EAN: '0001' }));
produits.push(new Produit({ nom: 'Produit3', EAN: '0002' }));
produits.push(new Produit({ nom: 'Produit4', EAN: '0003' }));


console.log(produits);

console.log(produits.findByEAN('0001'));
export const produitListe = produits;
export default Produits;