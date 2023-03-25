  var cats=["ferreteria","hogar","papeleria","varios"]

  function datos_promo(){
    console.log("en la funcion")
    const xhttp1=new XMLHttpRequest();
     
   
    xhttp1.open('GET', 'promos.json', true);
    
    xhttp1.send();
    
    xhttp1.onreadystatechange= function(){
        if(this.readyState== 4 && this.status == 200){

          var slides=["1","2","3","4"]
            
            let datos= JSON.parse(this.responseText)
           
            for(let item of datos){

               console.log(item.nombre)

               var img_slider1= document.getElementById("img_slider1");
               var img_slider2= document.getElementById("img_slider2");
               var img_slider3= document.getElementById("img_slider3");
               
          //   img_slider1.setAttribute('src',"imagenes_competidor/"+item.nombre+".png")
           // img_slider2.setAttribute('src',"imagenes_competidor/"+item.nombre+".png")
           if( slides.includes(item.slide)){

          console.log(item.slide)
            var img_slider= document.getElementById("img_slider"+item.slide);
           

            img_slider.setAttribute('src',"imagenes_competidor/"+item.nombre+".png")
            var nombre= document.getElementById("nombre_prom"+item.slide);
            var descuento= document.getElementById("descuento"+item.slide)
            var new_valor= document.getElementById("new_valor"+item.slide)
            var mensaje= document.getElementById("mensaje_promo"+item.slide)
            nombre.innerHTML=item.nombre
            descuento.innerHTML=item.valor
             new_valor.innerHTML=item.valorpromo
             mensaje.innerHTML=item.mensaje
        }

            }

        }
    }
  }


    function traerDatos(){

        console.log("en la funcion")
        const xhttp=new XMLHttpRequest();
         
       
       
        xhttp.open('GET', 'PRODUCT.JSON', true);
        xhttp.send();
        
        xhttp.onreadystatechange= function(){
            if(this.readyState== 4 && this.status == 200){
    
              
                
                let datos= JSON.parse(this.responseText)
               
             
                  

                for(let item of datos){
                
                    var seccion_hogar= document.getElementById("hogar");
                    var seccion_papeleria= document.getElementById("papeleria");
                    var seccion_ferreteria= document.getElementById("ferreteria");
                    var seccion_varios= document.getElementById("varios");
                    var btn_whatsap= document.getElementById("whatsapp");
                    
                   // var hoja= document.getElementById("hogar");
                    var cardProd = document.createElement("div");
                    cardProd.id="producto";
                    cardProd.className="producto";
                    
                    var imagen = document.createElement("img");
                    imagen.id="imagen";
                    if( cats.includes(item.categoria)){
                        console.log(item.categoria)
                  var seccion= document.getElementById(item.categoria);
                  imagen.setAttribute('src',"imagenes_competidor/"+item.nombre+".png");
                        
                    
                        var descrip = document.createElement("div");
                        descrip.id="descrip"
                        var p = document.createElement("p");
                        var valor = document.createElement("a");
                        var buton = document.createElement("button");
                        buton.id="revisar";
                        buton.setAttribute('target',"_blank");
                        valor.id="precio"
                        var pText = document.createTextNode(item.nombre);
                        valor.innerHTML= item.valor
                        
                        buton.innerHTML="Revisar"
                        p.appendChild(pText);
                        descrip.appendChild(p);
                        descrip.appendChild(valor);
                        descrip.appendChild(buton); 
                        cardProd.appendChild(imagen);
                        cardProd.appendChild(descrip);
                        buton.onclick= function(){
                            
                            document.querySelector("#pop-up").classList.add("active")

                            document.querySelector("#image_prod").setAttribute('src',"imagenes_competidor/"+item.nombre+".png")
                            btn_whatsap.setAttribute('href', "https://wa.me/573026055289?text= Hola buen dia, Quiesiera hecer un pedido de"+item.nombre+"🙏")
                    }
                    
                        seccion.appendChild(cardProd);

                      }


                    if(item.categoria=="hogar"){

                    
                        
                    }
                  /*  if(item.categoria=="papeleria" ){

                        imagen.setAttribute('src',"imagenes_competidor/"+item.nombre+".png");
                        
                    
                        var descrip = document.createElement("div");
                        descrip.id="descrip"
                        var p = document.createElement("p");
                        var valor = document.createElement("a");
                        var buton = document.createElement("button");
                        buton.id="revisar";
                        buton.setAttribute('target',"_blank");
                        valor.id="precio"
                        var pText = document.createTextNode(item.nombre);
                        valor.innerHTML= item.valor
                        
                        buton.innerHTML="Revisar"
                        p.appendChild(pText);
                        descrip.appendChild(p);
                        descrip.appendChild(valor);
                        descrip.appendChild(buton); 
                        cardProd.appendChild(imagen);
                        cardProd.appendChild(descrip);
                        buton.onclick= function(){

                            document.querySelector("#pop-up").classList.add("active")

                            document.querySelector("#image_prod").setAttribute('src',"imagenes_competidor/"+item.nombre+".png")
                            btn_whatsap.setAttribute('href', "https://wa.me/573026055289?text= Hola buen dia, Quiesiera hecer un pedido de"+item.nombre+"🙏")
                    }
                    
                        seccion_papeleria.appendChild(cardProd);
                    }
                    if(item.categoria=="ferreteria" ){

                        imagen.setAttribute('src',"imagenes_competidor/"+item.nombre+".png");
                        
                    
                        var descrip = document.createElement("div");
                        descrip.id="descrip"
                        var p = document.createElement("p");
                        var valor = document.createElement("a");
                        var buton = document.createElement("button");
                        buton.id="revisar";
                        buton.setAttribute('target',"_blank");
                        valor.id="precio"
                        var pText = document.createTextNode(item.nombre);
                        valor.innerHTML= item.valor
                       //buton.setAttribute('href', "https://wa.me/573026055289?text= Hola buen dia, Quiesiera hecer un pedido de"+item.nombre+"🙏")
                        buton.innerHTML="Revisar"
                        p.appendChild(pText);
                        descrip.appendChild(p);
                        descrip.appendChild(valor);
                        descrip.appendChild(buton); 
                        cardProd.appendChild(imagen);
                        cardProd.appendChild(descrip);
                        
                        buton.onclick= function(){

                                document.querySelector("#pop-up").classList.toggle("active")

                                document.querySelector("#image_prod").setAttribute('src',"imagenes_competidor/"+item.nombre+".png")
                                btn_whatsap.setAttribute('href', "https://wa.me/573026055289?text= Hola buen dia, Quiesiera hecer un pedido de"+item.nombre+"🙏")
                        }
                        seccion_ferreteria.appendChild(cardProd);
                    }

                    if(item.categoria=="varios" ){

                        imagen.setAttribute('src',"imagenes_competidor/"+item.nombre+".png");
                        
                    
                        var descrip = document.createElement("div");
                        descrip.id="descrip"
                        var p = document.createElement("p");
                        var valor = document.createElement("a");
                        var buton = document.createElement("button");
                        buton.id="revisar";
                        buton.setAttribute('target',"_blank");
                        valor.id="precio"
                        var pText = document.createTextNode(item.nombre);
                        valor.innerHTML= item.valor
                       //buton.setAttribute('href', "https://wa.me/573026055289?text= Hola buen dia, Quiesiera hecer un pedido de"+item.nombre+"🙏")
                        buton.innerHTML="Revisar"
                        p.appendChild(pText);
                        descrip.appendChild(p);
                        descrip.appendChild(valor);
                        descrip.appendChild(buton); 
                        cardProd.appendChild(imagen);
                        cardProd.appendChild(descrip);
                        
                        buton.onclick= function(){

                                document.querySelector("#pop-up").classList.toggle("active")

                                document.querySelector("#image_prod").setAttribute('src',"imagenes_competidor/"+item.nombre+".png")
                                btn_whatsap.setAttribute('href', "https://wa.me/573026055289?text= Hola buen dia, Quiesiera hecer un pedido de"+item.nombre+"🙏")
                        }
                        seccion_varios.appendChild(cardProd);
                    }*/
                       
                    // var nom_prod="producto"+i;
                    // nombre(nom_prod)
                   
                  // }
                    }
               // }
            }
    
        }
       }
       traerDatos() 
       datos_promo()

       document.querySelector("#close_view").addEventListener("click",function(){

        document.querySelector("#pop-up").classList.toggle("active")
        
    
   });
   
   
   
    
        



     
     

      
    
    



    