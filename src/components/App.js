import React, { useState } from 'react';
import Item from './Item';
import Form from './Form';

import './App.css';

function App() {
  const [items, setItems] = useState([
    {
      title: 'Wac, ft. Valeria - “Tortoise”',
    },
    {
      title: 'Kishi Bashi - “The Ballad of Mr Steak”',
    },
    {
      title: 'Lucy Dacus - “Night Shift”',
    },
    {
      title: 'Shamir - “Larry Clark”',
    },
    {
      title: 'Moloko - “Over & Over”',
    },
    {
      title: 'Shugo Tokumaru - “Lita-Ruta”',
    },
  ]);

  function handleAdd(item) {
    setItems([...items, item]);
  }

  function handleRemove(index) {
    if (index >= 0 && index <= items.length - 1) {
      const newItems = items.slice();
      newItems.splice(index, 1);
      setItems(newItems);
    }
  }

  return (
    <div className="App">
      <h1>Items</h1>
      {items.map((item, index) => (
        <Item
          key={index}
          id={`item_${index}`}
          title={item.title}
          onRemove={() => {
            handleRemove(index);
          }}
        />
      ))}
      <Form onAdd={handleAdd} />
    </div>
  );
}

export default App;
