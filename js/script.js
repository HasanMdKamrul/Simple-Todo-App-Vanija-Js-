// ** Add Items Button
let count = 0;
document.getElementById('button-addon2').addEventListener('click', function() {
    count++;
    const inputValue = document.getElementById('input-value').value;
    
    // ** here lets create a table row

    const tableRow = document.createElement('tr');

    tableRow.classList.add('text-center');

    tableRow.innerHTML = `
    <td>${count}</td>
    <td>${inputValue}</td>
    <td>
      <button id="delete-button" type="button" class="btn btn-danger">
        Delete
      </button>
      <button type="button" class="btn btn-primary">Edit</button>
    </td>
    `;

    document.getElementById('table-body').appendChild(tableRow);

    document.getElementById('input-value').value = '';

    // ** Delete Functionality

    const deleteButtons = document.querySelectorAll('#delete-button');

    for (const button of deleteButtons) {
        button.addEventListener('click', function(event) {
            // console.log(event.target.parentNode.parentNode.parentNode);
            event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode);
        });
    }
    
});

// Dark / light theme functionality

let darkTheme = true;

document.getElementById('dark-button').addEventListener('click', function(event) {
    const title = document.getElementById('header-title');
    // darkTheme = true;
    if (darkTheme) {
        document.getElementById('body').style.backgroundColor ='black';
        title.style.color = 'white';
        darkTheme = false;
    } else {
        document.getElementById('body').style.backgroundColor ='white';
        title.style.color = 'black';
        darkTheme = true;
    }

})






