//$( ".plus" ).click(function() {
 //   var plus = $(this).attr('data');
 //   console.log(plus);
 //   $('#input-'+plus).val($('#input-'+plus).val()+1);
 // });

  function myFunctionplus1() {
      //console.log("inpuuut " + document.getElementById("input-1").value);
      var ValInput = document.getElementById("input-1").value;
      var NewValue = parseInt(ValInput) + 1;    
      document.getElementById("input-1").setAttribute('value', NewValue);
      document.getElementById("myspan").textContent = NewValue * 10;
      
  }
  function myFunctionmoins1() {
    //console.log("inpuuut " + document.getElementById("input-1").value);
    var ValInput = document.getElementById("input-1").value;
    if(ValInput != 1){
        var NewValue = parseInt(ValInput) - 1;    
        document.getElementById("input-1").setAttribute('value', NewValue);
        document.getElementById("myspan").textContent = NewValue * 10;
    }
}
    
    function myFunctionheart1() {
        document.getElementById("heart1").style.color = "#FF0000";

    }
    
  function myFunctionplus2() {
    //console.log("inpuuut " + document.getElementById("input-1").value);
    var ValInput = document.getElementById("input-2").value;
    var NewValue = parseInt(ValInput) + 1;    
    document.getElementById("input-2").setAttribute('value', NewValue);
    document.getElementById("myspan2").textContent = NewValue * 26;
    
}
function myFunctionmoins2() {
  //console.log("inpuuut " + document.getElementById("input-1").value);
  var ValInput = document.getElementById("input-2").value;
  if(ValInput != 1){
      var NewValue = parseInt(ValInput) - 1;    
      document.getElementById("input-2").setAttribute('value', NewValue);
      document.getElementById("myspan2").textContent = NewValue * 26;
  }
}
  
  function myFunctionheart2() {
      document.getElementById("heart2").style.color = "#FF0000";
      
  }
  function myFunctionplus3() {
    //console.log("inpuuut " + document.getElementById("input-1").value);
    var ValInput = document.getElementById("input-3").value;
    var NewValue = parseInt(ValInput) + 1;    
    document.getElementById("input-3").setAttribute('value', NewValue);
    document.getElementById("myspan3").textContent = NewValue * 50;
    
}
function myFunctionmoins3() {
  //console.log("inpuuut " + document.getElementById("input-1").value);
  var ValInput = document.getElementById("input-3").value;
  if(ValInput != 1){
      var NewValue = parseInt(ValInput) - 1;    
      document.getElementById("input-3").setAttribute('value', NewValue);
      document.getElementById("myspan3").textContent = NewValue * 50;
  }
}
  
  function myFunctionheart3() {
      document.getElementById("heart3").style.color = "#FF0000";
      
  }
    function remove1() { 
        
        document.getElementById("article1").remove() ;

    }
    function remove2() { 
        
        document.getElementById("article2").remove() ;

    }
    function remove3() { 
        
        document.getElementById("article3").remove() ;

    }


