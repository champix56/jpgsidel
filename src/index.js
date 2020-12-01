// function showProduct(params) {
//     console.log(params.nom);
//     //selectionner produit
//     var produit_html = document.querySelector('#wrapper .produit');
//     produit_html.addEventListener("click",onclick1);
   
//     //selection image
//     var cheminImg=(params.img !== undefined?params.img:'img/paquet.png');
//     // if(params.img != undefined)cheminImg=params.img;
//      var img_html = produit_html.querySelector('img').src=cheminImg;
//     //description
//     var desc = produit_html.querySelector('.descriptionProduit');
    
//     //constitution du prix
//     var balise=document.createElement('div');
//     balise.innerHTML=(params.prix!==undefined?params.prix:'inconnu');
//     balise.classList.add('produit-prix');
//     //ajout dans le parent
//     desc.append(balise);
   
// }
//var objRepresentantUnContenu={nom:'mon produit', codebar:'000000', prix:2.54};
//showProduct(objRepresentantUnContenu);
//showProduct('nom produit','00000','','');
//var mabalise=document.querySelector('selecteur css')
// function redoProduit(){
//     document.querySelector('#wrapper').innerHTML='Hello'+document.querySelector('#wrapper').innerHTML
// }
// redoProduit();
// function onclick1(event) {
//     alert('Hello de lu');
//     console.log(event);
// }

// console.log(produit.EAN);
