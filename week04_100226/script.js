let totalExpense = 0;

const nameInput = document.getElementById("expenseName");
const amountInput = document.getElementById("expenseAmount");
const totalDisplay = document.getElementById("total");
const expenseList = document.getElementById("expenseList");

document.getElementById("add").addEventListener("click", () => {
    const name = nameInput.value;
    const amount = Number(amountInput.value);

    if (name === "" || amount <= 0) {
        alert("Enter valid expense details");
        return;
    }

    totalExpense += amount;
    totalDisplay.textContent = totalExpense;

    const li = document.createElement("li");
    li.innerHTML = `
        ${name} - ₹${amount}
        <button class="delete">Delete</button>
    `;

    li.querySelector(".delete").addEventListener("click", () => {
        totalExpense -= amount;
        totalDisplay.textContent = totalExpense;
        li.remove();
    });

    expenseList.appendChild(li);

    nameInput.value = "";
    amountInput.value = "";
});

document.getElementById("reset").addEventListener("click", () => {
    totalExpense = 0;
    totalDisplay.textContent = totalExpense;
    expenseList.innerHTML = "";
});
