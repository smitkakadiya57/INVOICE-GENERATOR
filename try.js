var pname = document.getElementById('product_name');
var pprice = document.getElementById('product_price');
var pqty = document.getElementById('product_qty');
var add = document.getElementById('add');
var remove = document.getElementById('remove');
var update = document.getElementById('update');
var calculate = document.getElementById('calculate');

add.onclick = function () {
    var newfield = document.createElement('input');
    newfield.setAttribute('type', 'text');
    newfield.setAttribute('class', 'name');
    newfield.setAttribute('placeholder', 'Product Code');
    pname.appendChild(newfield);

    var newfield1 = document.createElement('input');
    newfield1.setAttribute('type', 'text');
    newfield1.setAttribute('class', 'price');
    newfield1.setAttribute('placeholder', 'Price');
    pprice.appendChild(newfield1);

    var newfield2 = document.createElement('input');
    newfield2.setAttribute('type', 'text');
    newfield2.setAttribute('class', 'qty');
    newfield2.setAttribute('placeholder', 'Qty');
    pqty.appendChild(newfield2);

}

remove.onclick = function () {

    var input_tag = pname.getElementsByTagName('input');
    pname.removeChild(input_tag[(input_tag.length) - 1]);
    var input_tag = pprice.getElementsByTagName('input');
    pprice.removeChild(input_tag[(input_tag.length) - 1]);
    var input_tag = pqty.getElementsByTagName('input');
    pqty.removeChild(input_tag[(input_tag.length) - 1]);

}

// creating refrences 

var items = [
    ["DM1", "Cold Drink", 100],
    ["DM2", "Chips", 20],
    ["DM3", "Chocolate", 15],
    ["DM4", "Apple", 60],
    ["DM5", "File", 10],
    ["DM6", "Pen", 25],

]


let subtotal = 0;
let ppname;
let price;
let qty;
function update_func() {
    ppname = document.querySelectorAll(".name");
    price = document.querySelectorAll(".price");
    qty = document.querySelectorAll(".qty");

    for (c = 0; c < ppname.length; c++) {

        var b = items.indexOf(items.find(arr => arr.includes(ppname[c].value)));
        if (b !== -1) {
            price[c].value = items[b][2];
            ppname[c].value = items[b][1];
        } else {
            ppname[c].value = 'error';
        }

    }




    pprice.style.display = "block";

    for (c = 0; c < price.length; c++) {
        subtotal = subtotal + (price[c].value * qty[c].value);
    }
    console.log(subtotal);

}


let total = 0;
let discount = 0;
let tax = 0;
function calculate_bill() {
    discount = document.querySelector("#disc").value;
    tax = document.getElementById("gst").value;


    total = ((subtotal) - (discount * subtotal / 100) + (tax * subtotal / 100));

}







function mybill() {


    let final = document.getElementById('final_bill');
    let c_name = document.getElementById('c_name').value;
    let c_email = document.getElementById('c_email').value;
    let c_phone = document.getElementById('c_phone').value;
    let c_adress = document.getElementById('c_adress').value;

    let subheading = `
        <div class="title">
            <img src="img/logo.png" alt="Bill calculator">
            <span> City Mall</span>
        </div>
        <hr> 
       <h2>Customer Details :-</h2>
       <p>Name : ${c_name} </p>
       <p>Email : ${c_email} </p>
       <p>Phone : ${c_phone}</p>
       <p>Adress : ${c_adress}</p>
       <hr> 
       <h2>Product Details :-</h2>
       `;


    let subheading2 = ` 
       <hr>
       <p>SubTotal :${subtotal} Rs</p>
       <p> Discount( ${discount}%) : ${discount * subtotal / 100} Rs</p>
       <p> GST(${tax} %) :${(tax * subtotal / 100)} Rs</p>

       <h2>Total : ${total.toFixed(1)} Rs</h2>
       `;
      

    final.innerHTML = `${subheading} 

    <div class="bill_table">
    <p> Product Name </p>
    <p> Price </p>
    <p> Qty </p>
    <p> Amount </p>
    </div>

     `;

for(let c=0; c<ppname.length ; c++){
    final.innerHTML+=` <div class="bill_table">
    <p> ${ppname[c].value}</p>
    <p> ${price[c].value}</p>
    <p> ${qty[c].value}</p>
    <p> ${price[c].value*qty[c].value}</p>
    </tr>
    </div>
    `;
}

    final.innerHTML += ` <br> ${subheading2 }`;

};

