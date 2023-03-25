  var cats=["ferreteria","hogar","papeleria","varios"]
 
    function traerDatos(){

        console.log("en la funcion")
        const xhttp=new XMLHttpRequest();
        xhttp.open('POST', 'PRODUCT.JSON', true);
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

       document.querySelector("#close_view").addEventListener("click",function(){

        document.querySelector("#pop-up").classList.toggle("active")
        
    
   });
   
   
   
    
        



     
     

      
    
    



    