var old;

var y = document.getElementById('error');
var form  = document.getElementById('form');

function contact(){
    var elem = document.getElementById('form');
    if(document.forms["stick"]["chicken"].value === ""){
        document.getElementById('error').innerHTML = "Please enter a valid name";
        document.forms["stick"]["chicken"].style.background = "red";
        event.preventDefault();
        return;
    }else{
        document.forms["stick"]["chicken"].style.background = "white";
        document.getElementById('error').innerHTML = "";
    }
    if(document.forms["stick"]["mail"].validity.typeMismatch || document.forms["stick"]["mail"].value === ""){
        document.getElementById('error1').innerHTML = "Please enter a valid email";
        document.forms["stick"]["mail"].style.background = "red";
        event.preventDefault();
        return;
    }else{
        document.forms["stick"]["mail"].style.background = "white";
        document.getElementById('error1').innerHTML = "";
    }
	if(!confirm("Can you make a commitment?")){
	    event.preventDefault();
        return;
	}
}



function colorChange(){
    
    if(event.target.className != 'button'){
        event.target.style.background = 'white';
    }   else{
                event.target.style.color = "yellow";
                old = event.target.innerHTML;
                event.target.innerHTML = "click here";
    }

}
function colorReturn(){
    if(event.target.className != 'button'){
        event.target.style.background = '#689AD3';
    }  else{
                event.target.style.color = "white";
                event.target.innerHTML = old;
    }
}

