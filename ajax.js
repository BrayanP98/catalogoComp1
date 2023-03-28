  var cats=["ferreteria","hogar","papeleria","varios", "aseo personal","salud","alimentos"]
 
     
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

              
               
          //   img_slider1.setAttribute('src',"imagenes_competidor/"+item.nombre+".png")
           // img_slider2.setAttribute('src',"imagenes_competidor/"+item.nombre+".png")
           if( slides.includes(item.slide)){

          console.log(item.slide)
            var img_slider= document.getElementById("img_slider"+item.slide);
            var hoja_slider= document.querySelector("#promos")
            promos
            img_slider.setAttribute('src',"img/imagenes_competidor/"+item.nombre+".png")
            var nombre= document.getElementById("nombre_prom"+item.slide);
            var descuento= document.getElementById("descuento"+item.slide)
            var new_valor= document.getElementById("new_valor"+item.slide)
            var mensaje= document.getElementById("mensaje_promo"+item.slide)
            nombre.innerHTML=item.nombre
            descuento.innerHTML=item.valor
             new_valor.innerHTML=item.valorpromo
             mensaje.innerHTML=item.mensaje
            
             img_slider.onclick= function(){


              document.querySelector("#pop-up").classList.add("active")

              var btn_whatsap= document.getElementById("whatsapp");
              var nombre_cliente=document.querySelector("#nombre_cliente1");
              var email_cliente=document.querySelector("#email_cliente");
              var cant_prod=document.querySelector("#cant_prod");
              cant_prod.style.border="2px solid black";
              nombre_cliente.style.border="2px solid black";
               btn_whatsap.removeAttribute('href');
                          
                          
                
                          
                document.querySelector("#nombre_view").innerHTML=item.nombre
                document.querySelector("#valor_view").innerHTML=item.valor
                document.querySelector("#desccripcion_view").innerHTML=item.descripcion
                 document.querySelector("#image_prod").setAttribute('src',"img/imagenes_competidor/"+item.nombre+".png")
               
                 btn_whatsap.onclick= function(){

                           
              
                    
                
                  if(nombre_cliente.value=="" && cant_prod.value==0){
                   btn_whatsap.removeAttribute('href');
                    cant_prod.style.border="2px solid red";
                    nombre_cliente.style.border="2px solid red"
                    nombre_cliente.setAttribute('placeholder', "ingrese nombre porfavor");
                    btn_whatsap.style.cursor="not-allowed"
                  }else{
                    
                    btn_whatsap.setAttribute('href', "https://wa.me/573026055289?text= Hola, minombre es"+" "+nombre_cliente.value+"%0A %0A"+"Quiesiera hecer un pedido de "+cant_prod.value+" "+"de"+" "+item.nombre+"🙏"+"%0A %0A"+"Mi correo es:"+" "+email_cliente.value);
                    //var loader=document.querySelector("#loader")
                    cant_prod.style.border="2px solid black";
                    nombre_cliente.style.border="2px solid black"
                    nombre_cliente.setAttribute('placeholder', "");
                    btn_whatsap.style.cursor="pointer"
                  //  loader.style.opacity="1"
                   // setTimeout(() => {
                      
                
                 //   }, 4000);
                  nombre_cliente.setAttribute('placeholder', )
                 
                  cant_prod.value=value=""
                   nombre_cliente.value=""
                  email_cliente.value=""
                  
                  btn_whatsap.style.cursor="not-allowed"
                  }
                  
                }
              
             }
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
                  imagen.setAttribute('src',"img/imagenes_competidor/"+item.nombre+".png");
                        
                    
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
                       
                        buton.onclick= function view(){
                          
                          var nombre_cliente=document.querySelector("#nombre_cliente1");
                          var email_cliente=document.querySelector("#email_cliente");
                         var cant_prod=document.querySelector("#cant_prod");
                         cant_prod.style.border="2px solid black";
                                nombre_cliente.style.border="2px solid black";
                          btn_whatsap.removeAttribute('href');
                          
                          
                            document.querySelector("#pop-up").classList.add("active")
                          
                            document.querySelector("#nombre_view").innerHTML=item.nombre
                            document.querySelector("#valor_view").innerHTML=item.valor
                            document.querySelector("#desccripcion_view").innerHTML=item.descripcion
                            document.querySelector("#image_prod").setAttribute('src',"img/imagenes_competidor/"+item.nombre+".png")
                            
                            btn_whatsap.onclick= function(){

                           
                              nombre_cliente.addEventListener('keydown', (event) => {
                                btn_whatsap.style.cursor="pointer"
                                
                            })
                              if(nombre_cliente.value=="" && cant_prod.value==0){
                               btn_whatsap.removeAttribute('href');
                                cant_prod.style.border="2px solid red";
                                nombre_cliente.style.border="2px solid red"
                                nombre_cliente.setAttribute('placeholder', "ingrese nombre porfavor");
                                btn_whatsap.style.cursor="not-allowed"
                              }else{
                                
                                btn_whatsap.setAttribute('href', "https://wa.me/573026055289?text= Hola, minombre es"+" "+nombre_cliente.value+"%0A %0A"+"Quiesiera hecer un pedido de "+cant_prod.value+" "+"de"+" "+item.nombre+"🙏"+"%0A %0A"+"Mi correo es:"+" "+email_cliente.value);
                                //var loader=document.querySelector("#loader")
                                cant_prod.style.border="2px solid black";
                                nombre_cliente.style.border="2px solid black"
                                nombre_cliente.setAttribute('placeholder', "");
                                btn_whatsap.style.cursor="pointer"
                              //  loader.style.opacity="1"
                               // setTimeout(() => {
                                  
                            
                             //   }, 4000);
                              nombre_cliente.setAttribute('placeholder', )
                             
                              cant_prod.value=value=""
                               nombre_cliente.value=""
                              email_cliente.value=""
                              
                              btn_whatsap.style.cursor="not-allowed"
                              }
                              
                            }
                         
                    
                    
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
   
   function disable() {
    // To get the scroll position of current webpage
    TopScroll = window.pageYOffset || document.documentElement.scrollTop;
    LeftScroll = window.pageXOffset || document.documentElement.scrollLeft,
    
    // if scroll happens, set it to the previous value
    window.onscroll = function() {
    window.scrollTo(LeftScroll, TopScroll);
            };
    }
    
        



     
     

      
    
    



    