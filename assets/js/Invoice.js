// Constructor function can be used to create objects containing properties "name", "age", "breed", and the "nap()" function
// function Dog(name, age, breed) {
//     this.name = name;
//     this.age = age;
//     this.breed = breed;
//     this.nap = function () {
//       console.log('Zzzzzzzzz');
//     };
  
//     this.bark = function(){console.log('woof')};
//   }
  
//   // Sets the variable "dog" to a Dog object and initializes with name, age, and breed properties
//   const dog = new Dog('Rex', 2, 'Bulldog');
  
//   // Calling dog's nap method
//   dog.nap();



class Invoice{
  constructor(firstName, lastName, businessName, email, cell, bizPhone, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.businessName = businessName;
    this.email = email;
    this.cell = cell;
    this.bizPhone = bizPhone;
    this.address=address;

    this.cxInfo = function(){
        console.log(`
        Name: ${this.firstName} ${this.lastName}
        Business Name: ${this.businessName}
        Email: ${this.email}
        Cell: ${this.cell}
        Business Phone: ${this.bizPhone}
        Address: ${this.address}
        `);
    };
  }};

  // Customer.prototype.method(){}


  //const
  //customer.addComment

  // let customer = new Customer('Matt', 'Barrett', 'Estin Inc', 'mattestin@gmail.com', 2769718343, 2763350011, '119 Gateway Dr Richlands VA 24630');

  // customer.cxInfo();

  module.exports = Invoice;