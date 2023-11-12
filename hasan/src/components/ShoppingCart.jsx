import React, { useState, useEffect } from "react";

const ShoppingCart = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  const handleItemAdd = () => {
    if (itemName.trim() !== "" && !isNaN(itemPrice) && itemPrice > 0) {
      const newItem = {
        name: itemName,
        price: parseFloat(itemPrice),
      };

      setItems((prevItems) => [...prevItems, newItem]);
      setItemName("");
      setItemPrice("");
    } else {
      alert("Please enter valid item name and price.");
    }
  };

  useEffect(() => {
    // Calculate total price whenever items array changes
    const total = items.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(total);
  }, [items]);

  return (
    <div>
      <label htmlFor="itemName">Enter Item Name:</label>
      <input
        type="text"
        id="itemName"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />

      <br />

      <label htmlFor="itemPrice">Enter Item Price:</label>
      <input
        type="text"
        id="itemPrice"
        value={itemPrice}
        onChange={(e) => setItemPrice(e.target.value)}
      />

      <br />

      <button onClick={handleItemAdd}>Submit</button>

      <br />

      <div>
        <h2>Shopping Cart</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{`${item.name}: $${item.price.toFixed(2)}`}</li>
          ))}
        </ul>
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ShoppingCart;
