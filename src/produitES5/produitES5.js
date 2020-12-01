/**
 * objet function produit 
 * @param {Object} params objet parametre contenant les valeurs initial
 */
function Produit(params) {
    var _name;
    var _prix;
    var _img
    var _desc;
    /**
     * Code à barre du produit
     */
    this.EAN = params.EAN;
    /**
    * 
    */
   this.domNode = document.querySelector('.produit');
    //construction
    /**
     * construction d'un produit
     */
    function init() {
        _name = params.name;
        _prix = params.prix;
        _img = params.img;
        _desc = params.desc;

    }
    //execution de a construction
    init();

    //setter private
    function _setName(value) { _name = value; }

    //exposition public du setter private
    this.setName = _setName;
    //declaration des getter setter
    this.getName = function () { return _name };
    this.getPrix = function () { return _prix; }
    this.setPrix = function (value) { _prix = value; }
    this.getDesc = function () { return _desc; }
    this.setDesc = function (value) { _desc = value; }
    this.getImg  = function () { return _img; }
    this.setImg  = function (value) { _img = value; }
    //creation d'unalias pour this
    var vm=this;
    //fonction de gestion de levenement click
    this.onProductClick=function(event){
        console.log(event);
        alert('mon objet est cliqué');
        console.log(vm);
        //usage de l'alias suite a la delegation d'usage de la,fonction
        //this=> l'evenement declenché

        vm.domNode.classList.add('clicked');
    }
 
 
    
    /**
     * Fonction pour mettre a jour l'affichage d'un produit
     */
    this.showProduct = function () {
        this.domNode.addEventListener('click',this.onProductClick);

        this.domNode.querySelector('h1').innerHTML = _name;

        var cheminImg = (_img !== undefined ? _img : 'img/paquet.png');
        var img_html = this.domNode.querySelector('img').src = cheminImg;

        //description
        var desc = this.domNode.querySelector('.descriptionProduit');

        var descContent = document.createElement('div');
        descContent.innerHTML = (_desc !== undefined ? _desc : 'Sans commentaire');

        desc.append(descContent);

        //constitution du prix
        var balise = document.createElement('div');
        balise.innerHTML = (_prix !== undefined ? _prix + '€' : 'inconnu');
        balise.classList.add('produit-prix');

        //ajout dans le parent
        desc.append(balise);
    }
    this.showProduct();
}

var produit = new Produit({ name: 'mon produit func', prix: '2.54', desc: undefined });
//var p2= Produit();
console.log(produit);