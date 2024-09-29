// App.jsx
import { useState } from 'react';
import './index.css';
import PropTypes from 'prop-types';

const initialItems = [
  { id: 1, description: "Passport", quantity: 2, packed: true },
  { id: 2, description: "Charger", quantity: 12, packed: false },
];

export default function App() {
  const [items, setItems] = useState(initialItems);

  // Handle clearing the entire list
  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form setItems={setItems} />
      <PackingList 
        items={items} 
        setItems={setItems} 
        handleClearList={handleClearList} 
      />
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 💼</h1>;
}

function Form({ setItems }) {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description.trim()) return; // Prevent adding empty descriptions

    const newItem = {
      id: Date.now(),
      description: description.trim(),
      quantity: Number(quantity),
      packed: false,
    };

    setItems(prevItems => [...prevItems, newItem]);
    setDescription('');
    setQuantity(1);
  }

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <div>
        <h3>What do you need for your 😃 trip?</h3>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type='text'
          placeholder='Item...'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add</button>
      </div>
    </form>
  );
}

Form.propTypes = {
  setItems: PropTypes.func.isRequired,
};

function PackingList({ items, setItems, handleClearList }) {
  const [sortBy, setSortBy] = useState("input");
  let displayedItems = [...items];

  // Filtering based on sortBy
  if (sortBy === 'packed') {
    displayedItems = displayedItems.filter(item => item.packed);
  } else if (sortBy === 'unpacked') {
    displayedItems = displayedItems.filter(item => !item.packed);
  }

  // Sorting based on sortBy
  if (sortBy === 'description') {
    displayedItems.sort((a, b) => a.description.localeCompare(b.description));
  }
  // Note: 'input' sortBy doesn't require sorting as items are already in input order

  const handleTogglePacked = (id) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleDelete = (id) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  return (
    <div className='list'>
      <ul>
        {displayedItems.map(item => (
          <Item
            key={item.id}
            item={item}
            onTogglePacked={handleTogglePacked}
            onDelete={handleDelete}
          />
        ))}
      </ul> 

      <div className='actions'>
        <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value='input'>Sort by Input Order</option>
          <option value='description'>Sort by Description</option>
          <option value='packed'>Show Only Packed</option>
          <option value='unpacked'>Show Only Unpacked</option>
        </select>
        <button onClick={handleClearList}>Clear List</button>
      </div>
    </div>
  );
}

PackingList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      packed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  setItems: PropTypes.func.isRequired,
  handleClearList: PropTypes.func.isRequired,
};

function Item({ item, onTogglePacked, onDelete }) {
  return (
    <li className={item.packed ? "item packed" : "item"}>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onTogglePacked(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDelete(item.id)}>❌</button>
    </li>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    packed: PropTypes.bool.isRequired,
  }).isRequired,
  onTogglePacked: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

function Stats({ items }) {
  const totalItems = items.length;
  const packedItems = items.filter(item => item.packed).length;
  const percentage = totalItems === 0 ? 0 : Math.round((packedItems / totalItems) * 100);

  return (
    <footer className="stats">
      <em>😘 You have {totalItems} items on your list, and you already packed {packedItems} ({percentage}%)</em>
    </footer>
  );
}

Stats.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      packed: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
