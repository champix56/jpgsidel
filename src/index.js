import Produits from './produitsES6/ProduitsES6.js';
import {formulaireProduit} from './ProduitForm/ProduitForm.js';


(
    function(){
        document.querySelector('#newProduct').addEventListener('click',(event) => {
            formulaireProduit.produit=null;
        })
    }
)();

