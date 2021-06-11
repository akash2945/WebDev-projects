             

function count(){
    var content = document.getElementById("text").value;
    var numWords=0;
    var numletter=0;
    var numspace=0;

    for(var i=0;i<=content.length;i++)
    {
    
        
            var currentCharacter = content[i];

        
        if (currentCharacter == " ") {
            numWords += 1;
            numspace+=1;
        }
    }
         numWords+=1;
        numletter = content.length - numspace;
            


document.getElementById("show").innerHTML = numWords;
document.getElementById("show1").innerHTML = numletter;
document.getElementById("show2").innerHTML = numspace;
}  
           