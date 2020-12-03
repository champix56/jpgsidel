var assert=require('assert');
var Produit=require('../src/produitES5/ProduitES6.js')
 
describe('produit',function(){
    it('should manage empty name',function () {
        var p=new Produit({});
        assert.strictEqual(p.getName(),'sans nom')
    })
    it('should fill DOM element',function(){
        
    });
});