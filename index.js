

function process()
{
   // getting the elements

   var firstNumber =document.getElementById('input').value;
    x= parseInt(firstNumber);
   var secondNumber = document.getElementById('input2').value;
   y = parseInt(secondNumber);  //parseInt to convert the string into an int
   var  selector = document.getElementById('choice');
    warning = document.getElementById('span');
   var answer = document.getElementById('answerBox');
   clear = document.getElementById('clear')
    
   button = document.getElementById('btn');
   button.style.backgroundColor ="Black";
   button.style.color = "White"
    //the processes
    if(firstNumber == "" || secondNumber =="")
        { 
        warning.innerHTML = "Please Enter Numbers";
        warning.style.color ="red";}
    
    //doing calculations
    else if(selector.value == "0")
    {
        warning.innerHTML = "Please Pick an Operator";
        warning.style.color ="red";
    }
        
    else if(selector.value == "Addition")
    {
         answer.style.backgroundColor = "grey";
         warning.innerHTML = "";
         answer.textContent = x + y;
    }
    else if(selector.value == "Subtraction")
    {
        answer.style.backgroundColor = "grey";
        warning.innerHTML = "";
        answer.textContent = x - y;
    }

    else if(selector.value == "Multiplication")
    {
        answer.style.backgroundColor = "grey";
        warning.innerHTML = "";
        answer.textContent = x * y;
    }

    else if(selector.value == "Division")
    {
        answer.style.backgroundColor = "grey";
        warning.innerHTML = "";
        answer.textContent = x / y;
    }

    clear.addEventListener("click", function()
    {
        answer.textContent ="";
        warning.textContent="";
        firstNumber.textContent = "";
        
    })
   
    

}


document.getElementById('btn').onclick = function(){process()};





