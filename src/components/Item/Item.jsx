import { useState, useEffect } from 'react';

const ItemsPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Função para fazer a requisição dos dados do arquivo JSON
    const fetchItems = async () => {
      try {
        const response = await fetch('../../database/items.json');
        const data = await response.json();
        setItems(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems(); // Chama a função de requisição ao carregar a página
  }, []);

  return (
    <div>
      <h2>Items</h2>
      {Object.keys(items).map((category) => (
        <div key={category}>
          <h3>{category}</h3>
          {items[category].map((item) => (
            <div key={item.id} className="card">
              <h4>{item.name}</h4>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ItemsPage;