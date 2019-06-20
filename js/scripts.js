$(document).ready(function() {
  $("form#ping").submit(function(event) {
    event.preventDefault();
    var num = $("#number").val();
    var output = 0;
    var arr=[];
            for(var i=1; i<=num; i++)
            {
              output=output+1;
             console.log(output);


                //if(output % 3 === 0)
               //{

              //console.log("ping");
                //}

        //  if(output % 5 === 0)
            //
          //console.log("pong");
             //}
      }

  });
});
