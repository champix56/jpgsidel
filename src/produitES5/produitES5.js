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
    this.EAN = '347254565';
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
    this.getImg = function () { return _img; }
    this.setImg = function (value) { _img = value; }
    /**
    * 
    */
    this.domNode = document.querySelector('.produit');
    /**
     * Fonction pour mettre a jour l'affichage d'un produit
     */
    this.showProduct = function () {
        
        this.domNode.querySelector('h1').innerHTML=_name;
        var cheminImg = (_img !== undefined ? _img : 'img/paquet.png');
        var img_html = this.domNode.querySelector('img').src = cheminImg;
        //description
        var desc = this.domNode.querySelector('.descriptionProduit');
        var descContent = document.createElement('div');
        descContent.innerHTML = (_desc !== undefined ? _desc : 'Sans commentaire');
        desc.append(descContent);
        //constitution du prix
        var balise = document.createElement('div');
        balise.innerHTML = (_prix !== undefined ? _prix : 'inconnu');
        balise.classList.add('produit-prix');
        //ajout dans le parent
        desc.append(balise);
    }
    this.showProduct();
}

var produit = new Produit({ name: 'mon produit func', prix: '2.54', desc: undefined });
//var p2= Produit();
console.log(produit);