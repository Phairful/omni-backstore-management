import React, { useState, useEffect } from 'react';
import { getAllItems } from './components/api';
import ItemList from './components/ItemList';
import CellPhonesComponent from './components/CellPhonesComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CreateButton from './components/CreateButton';

import UpdateButton from './components/UpdateButton';
import DeleteButton from './components/DeleteButton';


const App = () => {
  const [items, setItems] = useState([]);
  const [activeComponent, setActiveComponent] = useState(null);

  const fetchItems = async () => {
    const data = await getAllItems();
    setItems(data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleDelete = async (itemId) => {
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'create':
       
        break;
      case 'update':
      
        break;
      case 'delete':
   
        break;
      default:
        return null;
    }

  return (
    <div className="container mt-4">
      <Header />
      <CreateButton onClick={() => setActiveComponent('create')} />
      <CellPhonesComponent onClick={() => setActiveComponent('read')} />
      <UpdateButton onClick={() => setActiveComponent('update')} />
      <DeleteButton onClick={() => setActiveComponent('delete')} />
      {renderComponent()}
      <ItemList items={items} onDelete={handleDelete} />
    </div>
  );
};
}
export default App;
