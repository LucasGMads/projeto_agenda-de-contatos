
const tabelaContatos = document.getElementById('tabela-contatos');

tabelaContatos.style.borderCollapse = 'collapse';
tabelaContatos.style.width = '100%';


const thCells = tabelaContatos.querySelectorAll('th');
thCells.forEach(cell => {
    cell.style.padding = '8px';
    cell.style.textAlign = 'left';
    cell.style.borderBottom = '1px solid #ddd';
    cell.style.backgroundColor = '#4CAF50';
    cell.style.color = 'white';
});


const tdCells = tabelaContatos.querySelectorAll('td');
tdCells.forEach(cell => {
    cell.style.padding = '8px';
    cell.style.textAlign = 'left';
    cell.style.borderBottom = '1px solid #ddd';
});
