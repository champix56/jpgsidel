var Produit = require('../src/produitsES6/ProduitsES6.js')
var assert  = require('assert');
describe('Test de la function produit', () => {
    describe('#test constructeur', () => {
        it('should instanciate without good EAN', () => {
            var produit = new Produit({nom:'',EAN:''});
            var EAN=produit.EAN;
            assert.strictEqual(EAN,undefined);
            
            var produit = new Produit({nom:'',EAN:'1234567891234'});
            assert.strictEqual(EAN,'1234567891234');
            assert.strictEqual(produit.EAN.length,13);
        });
        
    });
    describe('#test affichage DOM', () => {
        
    });
    
    
});
