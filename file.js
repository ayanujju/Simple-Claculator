
      <script> 

         //function that will display value 
         
         function dis(val) 
         { 
             document.getElementById("result").value+=val 
         } 
           
         //function that will evaluates the digit and return result
         
         function solve() 
         { 
             let x = document.getElementById("result").value 
             let y = eval(x) 
             document.getElementById("result").value = y 
         } 
         
		     //function that will works as a backspace key,i.e,delete the elements one by one
         
		     function del() 
         { 
              // Need some more effort to complete this function 
         } 
           
         //function that will clear the display 
         
         function clr() 
         { 
             document.getElementById("result").value = "" 
         }
         
      </script> 
