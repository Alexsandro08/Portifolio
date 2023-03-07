function Mostrar(){
   const display = document.getElementById('cont').style.display; const ocultar = document.getElementById('dados').style.display;
   
        if(display == 'none'){
            document.getElementById('cont').style.display ='block';
        }else{
           document.getElementById('cont').style.display = 'none';  
        }

         if(display == 'block'){
         document.getElementById('dados').style.display = 'block';
        } 
        else{
            document.getElementById('dados').style.display ='none';
        }

      
       
            
        
            
}
