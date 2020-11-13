var iName;
var iDescription;

var iCounter = 1;

function itemPrompt() {
    
    var itemName = prompt("Please enter a name for this reminder: ");
    var itemDescription = prompt("Please enter a description: ");
         
    var itemDiv = document.createElement("div");
    itemDiv.className += ("toDoList");
    itemDiv.id += ("toDoList" + iCounter);
    
    var p1 = document.createElement("p");
    p1.className += ("slot1");
    var p2 = document.createElement("p");
    p2.className += ("slot2");
    var p3 = document.createElement("p");
    p3.className += ("slot3");
    var p4 = document.createElement("p");
    p4.className += ("slot4");
    var p5 = document.createElement("p");
    p5.className += ("slot5");
    p5.id += "slot5";
    var p5Button = document.createElement("button");
    p5Button.id += "removeButton";
    
    document.getElementById("section2").appendChild(itemDiv);
    document.getElementById("toDoList" + iCounter).appendChild(p1);
    document.getElementById("toDoList" + iCounter).appendChild(p2);
    document.getElementById("toDoList" + iCounter).appendChild(p3);
    document.getElementById("toDoList" + iCounter).appendChild(p5);
    document.getElementById("slot5").appendChild(p5Button);
    
    p1.innerHTML += iCounter;
    p2.innerHTML += itemName;
    p3.innerHTML += itemDescription;
    p5Button.innerHTML += "X";

    iCounter++;
    
} 

