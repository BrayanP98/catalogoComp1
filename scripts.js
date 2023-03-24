

var  menu=document.querySelector(".lateral1");
let hijos= menu.children;

//alert(hijos.length)


for (let index = 0; index < hijos.length; index++) {
    let hijastro=hijos[index];

  

    let bebe= hijastro.children;

    bebe[2].style.display="none"

    bebe[1].onclick=seleccionar

    
}





function seleccionar(){

   
    let hijos= this.parentNode.children;


   

    //alert(hijos.length)

    let estado= hijos[2].style.display;


    if(estado == "none"){
        hijos[2].style.display="flex"
    
       }
    else if(estado == "flex"){
    
        hijos[2].style.display="none"
       
    }
   // alert(estado)
    


}






function alerta(items){
  
    var sub_menu=document.querySelector(".sub-menu"+"-"+items);
   // alert(sub_menu);
    sub_menu.style.display="none";

   
 
   

   alert( estado)

   if(estado == "none"){
    sub_menu.style.display="flex";

   }
else if(estado == "flex"){

    sub_menu.style.display="none";
   
}
  
    


}

//boton_cont.onclick=alerta
//boton_cont1.onclick=alerta











boton_cont1.addEventListener("click", function(evento){
	// cuando se da click al botón

   var itemss=boton_cont1.getAttribute("id")
   alerta(itemss)
    

});

$(document).ready(function(){

    $("#contactos1").addClass('show')
    $("#contactos1").click(function() {
        event.preventDefault();     
           $("#contactos1").addClass('show')
           $("#pop-wrap").addClass('show')
           });
     
           $("#close").click(function(){
            
            $("#pop-up").removeClass('show')
            $("#pop-wrap").removeClass('show')
           });

           $("#crear_cuenta").click(function(){
            event.preventDefault();  
            $("#line-reg").addClass('lineR')
            $("#pop-up-reg").addClass('show')
            $("#pop-wrap-reg").addClass('show')
           });
           $("#close-reg").click(function(){
            $("#pop-up-reg").removeClass('show')
            $("#pop-wrap-reg").removeClass('show')
           });
          
           $(document).click(function() {
            var obj = $("#container");
             if (!obj.is(event.target) && !obj.has(event.target).length) {
                
               }
             else {
                $("#navbarNavAltMarkup").collapse('hide');
             
                }
               });
           
               
              
            });
            function traerDatos(){

                console.log("en la funcion")
                const xhttp=new XMLHttpRequest();
                xhttp.open('GET', 'ajax.json', true);
                xhttp.send();
                xhttp.onreadystatechange= function(){
                    if(this.readyState== 4 && this.status == 200){
            
                        console.log(this.responseText);
                    }
            
                }
               }
               traerDatos() 