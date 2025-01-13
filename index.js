document.getElementById('bookForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    // Create a new row for the book list
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
    `;

    // Append the new row to the book list
    document.querySelector('#bookList tbody').appendChild(newRow);

    // Clear the form
    document.getElementById('bookForm').reset();
});