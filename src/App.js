import './App.css';
import { Header } from './components/Header/Header';
import { Card } from './components/Card/Card';
import { CustomInfiniteScroll } from './components/InfiniteScroll/InfiniteScroll';
import React, { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState([]);
  const [sortBy, setSortBy] = useState('default');
  const perPage = 10;


  const fetchData = async (page = '') => {
    try {
      const pageNumber = parseInt(page, 10) || 1;
      const response = await fetch(`/wp-json/wc/store/products?page=${pageNumber}`);
      const jsonData = await response.json();

      if (jsonData.code && jsonData.message) {
        console.error('API Error:', jsonData.message);
        return;
      }


      if (!Array.isArray(jsonData) || jsonData.length === 0) {
        console.warn('No data received.');
        return;
      }

      setData((prevData) => [...prevData, ...jsonData]);


    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchInitialData = async () => {
    try {
      const response = await fetch('/wp-json/wc/store/products?page=1');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching initial data:', error);
    }
  };


  useEffect(() => {
    fetchInitialData();
  }, []);


  const handleSortChange = (sortOption) => {
    setSortBy(sortOption);
  };

  const loadMoreData = () => {
    fetchData((data.length / perPage) + 1);
  };

  const filteredData = data.sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'price') {
      const priceA = a.prices?.price || 0;
      const priceB = b.prices?.price || 0;
      return priceB - priceA;
    }
    return 0;
  });

  const categories = [...new Set(data.map(item => item.categories?.[0]?.name))];

  const handleCategoryChange = (selectedCategory) => {
    console.log(`Selected category:', ${selectedCategory} \n Logic for categories must be done...`);
  };

  return (
    <div className='App'>
      <Header onSortChange={handleSortChange} onCategoryChange={handleCategoryChange} categories={categories} />

      <main className='main-content'>
        <CustomInfiniteScroll
          data={data}
          fetchData={loadMoreData}
          hasMore={true}
          loaderText={'Зареждане на още...'}
        >
          <div className='cards-wrapper'>
            {filteredData.map((greetData, index) => (
              <Card key={`${greetData.id}-${index}`} greetData={greetData} />
            ))}
          </div>
        </CustomInfiniteScroll>
      </main>
    </div>
  );
}

export default App;
