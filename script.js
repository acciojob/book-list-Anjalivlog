//your JS code here. If required.
document.getElementById('submit').addEventListener('click', function() {
	const title = document.getElementById('title').value;
	const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

	var table = document.getElementById('book-list');
            var newRow = table.insertRow(table.rows.length);
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            var cell4 = newRow.insertCell(3);

            cell1.innerHTML = title;
            cell2.innerHTML = author;
            cell3.innerHTML = isbn;
            cell4.innerHTML = '<button class="btn btn-danger delete">x</button>';

            document.getElementById('title').value = '';
            document.getElementById('author').value = '';
            document.getElementById('isbn').value = '';
        });

    document.addEventListener('click', function(e) {
            if (e.target && e.target.classList.contains('delete')) {
                e.target.closest('tr').remove();
            }
})