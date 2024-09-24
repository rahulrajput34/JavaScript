// learning from here is keydown for keyboard events
// and we have some properties which come from e.whateverproperty

const insert = document.getElementById('insert');

document.addEventListener('keydown', (e) => {
    insert.innerHTML = `
    <div class = 'color'>
    <table>
        <tr>
            <th>Key</th>
            <th>Key Code</th>
            <th>Code</th>
        </tr>
        <tr>
            <td>${e.key === ' '? "Space": e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
        </tr>
    </table> 
    </div>`
})