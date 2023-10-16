class Customer{
    constructor(firstName, lastName, businessName, email, cell, bizPhone, address, createdOn){
    this.firstName = firstName;
    this.lastName = lastName;
    this.businessName = businessName;
    this.email = email;
    this.cell = cell;
    this.bizPhone = bizPhone;
    this.address=address;
    this.comments = [];
}

    cxInfo(){
        console.log(`
        Name: ${this.firstName} ${this.lastName}
        Business Name: ${this.businessName}
        Email: ${this.email}
        Cell: ${this.cell}
        Business Phone: ${this.bizPhone}
        Address: ${this.address}
        Created On: ${this.createdOn}
        `);
    }
    cxAddComment(comment){
       // Customer.prototype.comments = [];
        this.comments.push(comment);
        console.log(this.comment);
    }
};
  
//Customer.cxAddComment('is a super cool dude');
  // Customer.prototype.method(){}


  //const
  //customer.addComment

//   var customer = new Customer('Matt', 'Barrett', 'Estin Inc', 'mattestin@gmail.com', 2769718343, 2763350011, '119 Gateway Dr Richlands VA 24630');

//   customer.cxInfo();

// customer.cxAddComment("matt is the best yo");


  
// function Customer(firstName, lastName, businessName, email, cell, bizPhone, address){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.businessName = businessName;
//     this.email = email;
//     this.cell = cell;
//     this.bizPhone = bizPhone;
//     this.address=address;

//     this.cxInfo = function(){
//         console.log(`
//         Name: ${this.firstName} ${this.lastName}
//         Business Name: ${this.businessName}
//         Email: ${this.email}
//         Cell: ${this.cell}
//         Business Phone: ${this.bizPhone}
//         Address: ${this.address}
//         `);
//     };
//   }
export default Customer;