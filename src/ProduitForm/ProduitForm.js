import { Produit } from "../produitES5/ProduitES6.js";
import '../../node_modules/jquery/dist/jquery.js';
class ProduitForm{
    #_produit=null;
    #_template=null;
    #_templateUrl='/vues/produit-form.html';
    #_parentSelector='#wrapper-2';
    #_node=null;

    set produit (value) {
        this.#_produit=value;
        //remplissage form
        this.fillForm();
        //affichage form
        this.showForm(true);
    }
    get produit(){return this.#_produit;}

    constructor(objparams){
        this.loadTemplate();
    }

    loadTemplate(){
        return fetch(this.#_templateUrl)
            .then((resp)=>{return resp.text()}) 
            .then((texthtml)=>{
                const parser=new DOMParser();
                this.#_template=parser.parseFromString(texthtml,'text/html');
                const copytmpl=this.#_template.cloneNode(this.#_template, true).body.firstChild;
                document.querySelector(this.#_parentSelector).append(copytmpl); 
                this.#_node=copytmpl;
                this.#_node.querySelector('form').addEventListener('submit',this.onsubmit)
                return this.#_template;
        });
    }
    showForm(showState=true){
        switch(showState){
            case true:
                $('form#form-produit').slideDown(800);
                break;
            default:
                $('form#form-produit').slideUp(800);
                 break;
        }
    }
    fillForm(){
        $('#titre-produit').val( (this.#_produit!==null?this.#_produit.getName():''));
        $('#prix-produit').val( (this.#_produit!==null?this.#_produit.getPrix():''));
        $('#desc-produit').val( (this.#_produit!==null?this.#_produit.getDesc():''));
        $('#ean-produit').val( (this.#_produit!==null?this.#_produit.EAN:''));
        $('#image-produit').val( (this.#_produit!==null?this.#_produit.getImg():''));
    }
    onsubmit=(event)=>{
        event.preventDefault();
        //alert('Formulaire submit')
        //console.log(event,document.forms['form-produit'])
        if(this.#_produit!==null){
            this.#_produit.setName(document.forms['form-produit']['titre-produit'].value);
            this.#_produit.EAN=document.forms['form-produit']['ean-produit'].value;
            this.#_produit.setPrix(document.forms['form-produit']['prix-produit'].value);
            this.#_produit.setImg(document.forms['form-produit']['image-produit'].value);
            this.#_produit.setDesc(document.forms['form-produit']['desc-produit'].value);

        }
        else{
            this.#_produit=new Produit({name:document.forms['form-produit']['titre-produit'].value,
                                        desc:document.forms['form-produit']['desc-produit'].value,
                                        img:document.forms['form-produit']['image-produit'].value,
                                        EAN:document.forms['form-produit']['ean-produit'].value,
                                        prix:document.forms['form-produit']['prix-produit'].value});
        }
        console.log(this.#_produit);
        this.showForm(false);
    }
}

export const formulaireProduit = new ProduitForm()
