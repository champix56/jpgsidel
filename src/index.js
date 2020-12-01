import produits from './produitsES6/ProduitsES6.js';
import * as PRODUIT from './produitES5/produitES5.js';

console.log('index.js');
produits.push(new PRODUIT.Produit({EAN:'ZZZZ',nom:'ZAZA'}));
console.log(produits);
