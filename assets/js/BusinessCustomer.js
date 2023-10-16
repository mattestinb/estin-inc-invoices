class BusinessCustomer extends Customer{
constructor(author, text, createdOn){
super(author, text);
this.createdOn = createdOn;
this.comments = [];
}
addComment(comment){
    this.comments.push(comment);
}

// class Comment extends ForumItem


// const newCust = new Customer{
//     'name'
//     'phone'
//     'etc'

// }
// }