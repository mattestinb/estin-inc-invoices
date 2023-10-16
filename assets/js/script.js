//create class for customer objects
// var customer = require
const Customer = require('./Customer');
const Invoice = require('./Invoice');


var salesTax;

let newInvoiceForm = document.getElementById('newInvoice');
// var currentTimeEl = $('#');
// var invoiceDateEl = $('#invoiceDate');
// var invoiceNumberEl = $('#invoiceNumber');
// var completionDateEl = $('#');
// var paymentTermsEl = $('#');
// var dueDateEl = $('#');
// var lineTotalEl = $('#');
// var subTotalEl = $('#');
// var totalEl = $('#');
var saveCustomerBtn = document.getElementById('saveCustomer');
var cxName = document.getElementById('customerName');
//create a new customer object
//will need a form to use this information to generate a new customer


saveCustomerBtn.addEventListener("click", function(event){
event.preventDefault();

//invoice form variables
let invoiceSelectCustomer = document.getElementById('selectCustomer');



// var customer = new Customer('Matt', 'Barrett', 'Estin Inc', 'mattestin@gmail.com', 2769718343, 2763350011, '119 Gateway Dr Richlands VA 24630');

// customer.cxInfo();

// customer.cxAddComment("matt is the best yo");




var customerz = {
    cxName: cxName.value
    // cxBusiness: cxBusiness.value,
    // cxAddress: cxAddress.value,
    // cxPhone: cxPhone.value,
    // cxEmail: cxEmail.value
    
};
console.log(cxName);

localStorage.setItem("customerList", JSON.stringify(customerz));
// renderMessage();

});

// function renderMessage() {
//   var lastCx = JSON.parse(localStorage.getItem("customerz"));
//   if (lastCx !== null) {
//     document.getElementById("test").textContent = lastCx.customer + 
//     " received a/an "
//   }
// }


// var customerInvoice = {
//     cxInvRate: cxInvRate.value,
//     cxInvDate: cxInvDate.value,
//     cxInvNumber: cxInvNumber.value,
//     cxInvCompletionDate: cxInvCompletionDate.value,
//     cxInvPaymentTerms: cxInvPaymentTerms.value,
//     cxInvDueDate: cxInvDueDate.value
// }


// var today = dayjs();

// console.log(today);
// console.log(dayjs());

//$('#1a').text(today.format('MMM D, YYYY'));
//local storage to save the customer information



var cx = localStorage.getItem("cx");
//table or something o display the cx


//
//customer form
var newCustomerForm = document.getElementById('newCustomer');

console.log(newCustomerForm);
console.log('hello');
newCustomerForm.addEventListener('click', (e)=>{
    e.preventDefault();

    var fd = new FormData(newCustomerForm);
    console.log(fd);
    console.log(newCustomerForm);
});

saveCustomerBtn.addEventListener('click', saveNewCustomer);
///create a new customer
function saveNewCustomer(){
    localStorage.setItem("cx", cx);
}



let customers = [];
// const addCustomer = (ev)=>{
//     ev.preventDefault();
//     let customer = {
//         // var customer = {
//     cxName: document.getElementById('customerName').value,
    // cxBusiness: document.getElementById('customerBusiness'.value),
    // cxAddress: cxAddress.value,
    // cxPhone: cxPhone.value,
    // cxEmail: cxEmail.value
// }

customers.push({

});
document.forms[0].reset();
document.querySelector('form').reset();

console.log(customers);

    
// }




// ****************************************************
//  LOCAL STORAGE
// ****************************************************
//1. create the table
//2. create
let selectCustomer = document.getElementById('selectCustomer');
let selectService = document.getElementById('selectService');

let createdInvoice = localStorage.getItem("invoice")
    ? JSON.parse(localStorage.getItem("invoice"))
    : [];
  
    
  newInvoiceForm.addEventListener("submit", (e) => {
    e.preventDefault();
    createdInvoice.push(selectCustomer.value);
    createdInvoice.push(selectService.value);
    // createdInvoice.push(eyeshadowInput.value);
    // createdInvoice.push(mascaraInput.value);
    // createdInvoice.push(featuresInput.value);
  
    localStorage.setItem("invoice", JSON.stringify(createdInvoice));
    listBuilder(selectCustomer.value);
    listBuilder(selectService.value);
    // listBuilder(eyeshadowInput.value);
    // listBuilder(mascaraInput.value);
    // listBuilder(featuresInput.value);
  
    displayMakeupItems();
  
  });

  const listBuilder = (text) => {
    const item = document.createElement("li");
    item.innerHTML = text + ' <button onclick="deleteNote(this)">x</button>';
    invoice.appendChild(item);
  };
  
  const getChoices = JSON.parse(localStorage.getItem("invoice"));
  // getChoices.forEach((item) => {
  //   listBuilder(item);
  // });


  // ****************************************************
//  LOCAL STORAGE
// ****************************************************


//create the table

//map
//  #invoice-table > thead > tr > th >

//  #invoice-table > thead > tr > th/td >
//  #invoice-table > thead > tr > td >

//#invoice-table > body > th scope ="row"+id tr > td >

var invoiceTableMain = document.querySelector('#invoice-table');
//var invoiceCol1 = document.querySelector('');

let invoiceCount = 10;
let invoiceCustomerName ='bob';
let invoiceDate ='today';
let invoiceTotal =200;

let invoice = [];
let invoiceTableMainBody = document.querySelector('#invoice-table-body');




function displayInvoices(){

//table data ===
//1. invoice number
//2. customer
//3. date
//4. total$

//let tdata = `<tr><th>${invoiceCount}</th>`
let tdata = invoiceTableMainBody;
  for(var i=0; i<invoiceCount; i++){
    
    //let tdata;
    tdata += `<tr>
    <th scope="row">${invoiceCount}</th>
    <td>${invoiceCount}</td>
    <td>${invoiceCustomerName}</td>
    <td>${invoiceDate}</td>
    <td>${invoiceTotal}</td>
    </tr>
    invoiceTableMainBody.innerHTML=tdata;
    `;
  }

  
 
};

displayInvoices();