const insert = document.querySelector('.insert');

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
        <div class ="color">
            <table style = "border: 2px solid white">
                <tr>
                    <th>Key</th>
                    <th>KeyCode</th>
                    <th>Code</th>
                </tr>
                <tr>
                    <td>${e.key === ' ' ? 'Space' : e.key}</td></td>
                    <td>${e.keyCode}</td>
                    <td>${e.code}</td>
                </tr>
            </table>
        </div>
    `
})