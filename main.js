var y = 0;
var y1 = 0;
var y2 = 0;
var x1 = 0;
var x2 = 0;
function addCart_one(){
    y += 4.99;
    y1 += 4.99 * 0.13;
    y2 += 4.99 * 1.13;
    x1 += 1;
    document.getElementById('price').innerHTML = "Sub-Total: " + y + "$";
    document.getElementById('tax').innerHTML = "Tax: " + y1 + "$";
    document.getElementById('total').innerHTML = "Total: " + y2 + "$";
    document.getElementById('x1').innerHTML = x1; 
}
function addCart_two(){
    y += 7.99;
    y1 += 7.99 * 0.13;
    y2 += 7.99 * 1.13;
    x2 += 1;
    document.getElementById('price').innerHTML = "Sub-Total: " + y + "$";
    document.getElementById('tax').innerHTML = "Tax: " + y1 + "$";
    document.getElementById('total').innerHTML = "Total: " + y2 + "$";
    document.getElementById('x2').innerHTML = x2; 
}
function removeCart_one(){
    if (x1 == 0){
    }
    else {
        y -= 4.99;
        y1 -= 4.99 * 0.13;
        y2 -= 4.99 * 1.13;
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
    else {
        y -= 7.99;
        y1 -= 7.99 * 0.13;
        y2 -= 7.99 * 1.13;
        x2 -= 1;
        document.getElementById('price').innerHTML = "Sub-Total: " + y + "$";
        document.getElementById('tax').innerHTML = "Tax: " + y1 + "$";
        document.getElementById('total').innerHTML = "Total: " + y2 + "$";
        document.getElementById('x2').innerHTML = x2;
    }
}

/*function addCart_tax_one(){
    y1 += 5 * 0.13;
    document.getElementById('tax').innerHTML = "Tax: " + y1 + "$";
}
function addCart_tax_two(){
    y1 += 8 * 0.13;
    document.getElementById('tax').innerHTML = "Tax: " + y1 + "$";
}
function addCart_total_one(){
    y2 += 5 * 1.13;
    document.getElementById('total').innerHTML = "Total: " + y2 + "$";
}
function addCart_total_two(){
    y2 += 8 * 1.13;
    document.getElementById('total').innerHTML = "Total: " + y2 + "$";
}*/

	


//if(document.getElementById("PurchaseChoice1").checked,function() {
    //document.getElementById("price").innerHTML = "Total: $" + 5;
//})