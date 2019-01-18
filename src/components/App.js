import React, { Component } from 'react';
import Item from './Item';
import Form from './Form';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          title: 'Wac, ft. Valeria - “Tortoise”'
        },
        {
          title: 'Kishi Bashi - “The Ballad of Mr Steak”'
        },
        {
          title: 'Lucy Dacus - “Night Shift”'
        },
        {
          title: 'Shamir - “Larry Clark”'
        },
        {
          title: 'Moloko - “Over & Over”'
        },
        {
          title: 'Shugo Tokumaru - “Lita-Ruta”'
        }
      ]
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleAdd(item) {
    this.setState(oldState => ({ items: [...oldState.items, item] }));
  }

  handleRemove(index) {
    const {
      items: { length }
    } = this.state;

    if (index >= 0 && index <= length - 1) {
      this.setState(oldState => {
        const newItems = oldState.items.slice();
        newItems.splice(index, 1);
        return { items: newItems };
      });
    }
  }

  render() {
    const { items } = this.state;
    return (
      <div className="App">
        <h1>Items</h1>
        {items.map((item, index) => (
          <Item
            key={index}
            id={`item_${index}`}
            title={item.title}
            onRemove={() => {
              this.handleRemove(index);
            }}
          />
        ))}
        <Form onAdd={this.handleAdd} />
      </div>
    );
  }
}

export default App;
