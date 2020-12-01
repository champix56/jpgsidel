var produits = [new Produit({ EAN: '0001', nom: 'p1', prix: 2.54 }), new Produit({ EAN: '0002', nom: 'p2', prix: 2.38 })];

console.log(produits);

function Produits() {
    var _liste = [];
    this.get = function (index) { return _liste[index]; }
    this.cloneAt = function (index) { return Object.assign({}, _liste[index]); }
    //exposition de fonctions tierce d'un contenu privé
    this.add = function (value) { return _liste.push(value) };
    //this.add =  _liste.push;
    this.pop = _liste.pop;
    this.find = _liste.find;
    this.findAt = _liste.findIndex;

}

var p2 = new Produits();
p2.add(new Produit({ nom: 'anc' }));
p2.clog('outclass')
// p2.add(new Produit({ nom: 'an2' }));
// p2.add(new Produit({ nom: 'an3' }));
// p2.add(new Produit({ nom: 'an4' }));
console.log(p2);
console.log(p2[0]);