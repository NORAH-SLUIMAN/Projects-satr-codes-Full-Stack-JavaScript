let books=[];
var Id=0;
document.getElementById("BookIDText").value=++Id;

function showBook(){
    document.getElementById("bookID").style.display="block";
    document.getElementById("BookIDText").style.display="block";
    document.getElementById("bookName").style.display="block";
    document.getElementById("bookNameText").style.display="block";
    document.getElementById("bookAuthor").style.display="block";
    document.getElementById("bookAuthorText").style.display="block";
    document.getElementById("bookPrice").style.display="block";  
    document.getElementById("bookPriceText").style.display="block";  
    document.getElementById("bookQuantity").style.display="block";  
    document.getElementById("bookQuantityText").style.display="block";  
}

function hideBook(){
    document.getElementById("bookID").style.display="none";
    document.getElementById("bookIDText").style.display="none";
    document.getElementById("bookName").style.display="none";
    document.getElementById("bookNameText").style.display="none";
    document.getElementById("bookAuthor").style.display="none";
    document.getElementById("bookAuthorText").style.display="none";
    document.getElementById("bookPrice").style.display="none";  
    document.getElementById("bookPriceText").style.display="none";  
    document.getElementById("bookQuantity").style.display="none";  
    document.getElementById("bookQuantityText").style.display="none"; 
}

function addBook(){
    books.push([Id,bookNameText.value,bookAuthorText.value,bookPriceText.value,bookQuantityText.value]);
    alert("book create "+books[books.length-1]);
    document.getElementById("BookIDText").value=++Id;
    document.getElementById("bookNameText").value="enter new book";
    document.getElementById("bookAuthorText").value="enter new Author";
    document.getElementById("bookPriceText").value="enter new Price";
    document.getElementById("bookQuantityText").value="enter new Quantity";
}

function deleteBook(){
    books.pop();
    document.getElementById("BookIDText").value=--Id;
}

function queryId(){
    var qid = prompt("enter book Id","1");
    showBook();
    var i;
    for(i=1; i<=Id; i++){
        if(books[i-1][0]==qid){
            BookIDText.value=qid;
            bookNameText.value=books[i-1][1];
            bookAuthorText.value=books[i-1][2];
            bookPriceText.value=books[i-1][3];
            bookQuantityText.value=books[i-1][4];
        }
    }
}

function queryName(){
    var qName=prompt("enter book Name","");
    showBook();
    var i;
    for (i=1; i<=Id; i++){
        if (books[i-1][1]==qName){
            BookIDText.value=books[i-1][0];
            bookNameText.value=qName;
            bookAuthorText.value=books[i-1][2];
            bookPriceText.value=books[i-1][3];
            bookQuantityText.value=books[i-1][4];
        }
    }
}

function queryAuthor(){
    var qAuthor=prompt("enter book Author","");
    showBook();
    var i;
    var found=0;
    for (i=1; i<=Id; i++){
        if (books[i-1][2]==qAuthor){
            BookIDText.value=books[i-1][0];
            bookNameText.value=books[i-1][1];
            bookAuthorText.value=qAuthor;
            bookPriceText.value=books[i-1][3];
            bookQuantityText.value=books[i-1][4];
            found=1;}
    }
    if (found==0)
    
    alert("Author not found ");}
    
    function invoice (){
 var book =prompt("Enter book name","");
var quantity=prompt("Enter book quantity","1");
var balance=prompt("Enter the balance");
var i;
for(i=1; i<Id; i++)
if (books[i-1][1]==book)
{
var Price =Number(books[i-1][3]);
var q=Number(books[i-1][4]);
if(q<quantity)
     alert("The required is less than the current quantity ");
      else if(balance<price*quantity)
      alert("The blance not enough,");
      else{
         q=q-quantity;
          books[i-1][4]=q;
         alert("The new quantity is : "+q.toString());
      balance=balance-Price*quantity;
         alert("The new balance is:"+ balance.toString());
         alert("the invoice of "+ quantity.toString()+"book is done");
      }
        }
 }

