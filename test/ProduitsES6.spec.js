var assert=require('assert');
require('isomorphic-fetch');
var Produits = require('../src/')
var Produit = require('../src/produitES6/ProduitES6.js')


describe('test produits', () => {
    describe('gestion de la liste', () => {
        it('should push new products in list', () => {
            var pr=new Produits();
            var length=pr.length;
            pr.push(new Produit({}));
            assert.strictEqual(pr.length,length+1)
        });
        it('should not add not instanceof Produit',()=>{
            var pr=new Produits();
            var length=pr.length;
            pr.push({});
            assert.strictEqual(pr[pr.length] instanceof(Produit),true)
        })
    });
})
