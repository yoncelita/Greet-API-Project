import './App.css';
import { Header } from './components/Header/Header';
import { Card } from './components/Card/Card';
import React, { useEffect, useState } from 'react';


function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/wp-json/wc/store/products?page=1');
        const jsonData = await response.json();
        setData(jsonData);
        console.log('Data:', jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='App'>
      <Header />
      <main className='main-content'>
        <div className='cards-wrapper'>
          {data &&
            data.map((greetData) => (
              <Card key={greetData.id} greetData={greetData} />
            ))}
        </div>
      </main>
    </div>
  );
}

export default App;