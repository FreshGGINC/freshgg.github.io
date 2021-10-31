var y = 0;
var y1 = 0;
var y2 = 0;
var x1 = 0;
var x2 = 0;
function addCart_one(){
    if (x1 == 1 || x2 == 1){
    }
    else{
        y += 4.99;
        y = y.toFixed(2);
        y1 += 4.99 * 0.13;
        y1 = y1.toFixed(2);
        y2 += 4.99 * 1.13;
        y2 = y2.toFixed(2);
        x1 += 1;
        document.getElementById('price').innerHTML = "Sub-Total: " + y + "$";
        document.getElementById('tax').innerHTML = "Tax: " + y1 + "$";
        document.getElementById('total').innerHTML = "Total: " + y2 + "$";
        document.getElementById('x1').innerHTML = x1; 
    }
}
function addCart_two(){
    
    if (x2 == 1 || x1 == 1){
    }
    else{
        y += 7.99;
        y = y.toFixed(2);
        y1 += 7.99 * 0.13;
        y1 = y1.toFixed(2);
        y2 += 7.99 * 1.13;
        y2 = y2.toFixed(2);
        x2 += 1;
        document.getElementById('price').innerHTML = "Sub-Total: " + y + "$";
        document.getElementById('tax').innerHTML = "Tax: " + y1 + "$";
        document.getElementById('total').innerHTML = "Total: " + y2 + "$";
        document.getElementById('x2').innerHTML = x2; 
    }    
}
function removeCart_one(){
    if (x1 == 0){
    }
    else{
        y -= y;
        y1 -= y1;
        y2 -= y2;
        x1 -= 1;
        document.getElementById('price').innerHTML = "Sub-Total: " + y + "$";
        document.getElementById('tax').innerHTML = "Tax: " + y1 + "$";
        document.getElementById('total').innerHTML = "Total: " + y2 + "$";
        document.getElementById('x1').innerHTML = x1;
    }
}
function removeCart_two(){
    if (x2 == 0){
    }
    else{
        y -= y;
        y1 -= y1;
        y2 -= y2;
        x2 -= 1;
        document.getElementById('price').innerHTML = "Sub-Total: " + y + "$";
        document.getElementById('tax').innerHTML = "Tax: " + y1 + "$";
        document.getElementById('total').innerHTML = "Total: " + y2 + "$";
        document.getElementById('x2').innerHTML = x2;
    }
}
