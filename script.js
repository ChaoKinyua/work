document.getElementById('expense-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const expenseName = document.getElementById('expense-name').value;
    const expenseAmount = document.getElementById('expense-amount').value;
    const expenseDate = document.getElementById('expense-date').value;
    
    const expenseTable = document.querySelector('#expense-list tbody');
    const newRow = expenseTable.insertRow();
    
    const nameCell = newRow.insertCell(0);
    const amountCell = newRow.insertCell(1);
    const dateCell = newRow.insertCell(2);
    
    nameCell.textContent = expenseName;
    amountCell.textContent = expenseAmount;
    dateCell.textContent = expenseDate;
    
    document.getElementById('expense-form').reset();
});
