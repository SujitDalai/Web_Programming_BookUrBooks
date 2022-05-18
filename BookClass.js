class Book{
    constructor(title,author,isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
class UI{
    addBookToList(book) {
        const list = document.getElementById('book-list');
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="" class="delete">REMOVE ITEM</a></td>
        `;
        list.appendChild(row);
    }
    showAlert(message, className){
        const div = document.createElement('div');
        // Adding className
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        // Get form
        const form = document.querySelector('#book-form');
        // Insert alert
        container.insertBefore(div, form);
        // Timeout after 3 sec
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000);
    }
    deleteBook(target){
        if(target.className == 'delete'){
            target.parentElement.parentElement.remove();
        }
    }
    clearFields(){
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}
    // Event Listening
    document.getElementById('book-form').addEventListener('submit',function(e){
        // Get form values
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const isbn = document.getElementById('isbn').value;
        // Instantiate Book
        const book = new Book(title, author, isbn);
        // Instantiate UI
        const ui = new UI();
        // validate
        if(title === '' || author === '' || isbn === ''){
            // error alert
            ui.showAlert('!!! PLEASE FILL IN ALL FEILDS !!!','error');
        }
        else{
            // add book to list
            ui.addBookToList(book);
            // show success
            ui.showAlert('BOOK ADDED','success');
            // clear fields
            ui.clearFields();
        }
        e.preventDefault();
    })
      // Event listening for delete
      document.getElementById('book-list').addEventListener('click', function(e){
          const ui = new UI();
          ui.deleteBook(e.target);  //Delete book
          ui.showAlert('Book Removed!','success');
          e.preventDefault();
      });