import React, { useState, useRef, useEffect } from "react";

function Tracker() {
  const [transactions, setTransactions] = useState([]);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    console.log("Updated", transactions);
  }, [transactions]);

  const addTransaction = () => {
    if (!text || !amount) return;

    const newTransaction = {
      id: Date.now(),
      text,
      amount: +amount,
    };

    setTransactions([...transactions, newTransaction]);
    setText("");
    setAmount("");
    inputRef.current.focus();
  };

  return (
    <div className="tracker">
      <h2>Balance: ₹
        {transactions.reduce((acc, t) => acc + t.amount, 0)}
      </h2>

      <input
        ref={inputRef}
        placeholder="Description"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={addTransaction}>Add</button>

      <ul>
        {transactions.map((t) => (
          <li key={t.id}>
            {t.text} ({t.amount})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tracker;