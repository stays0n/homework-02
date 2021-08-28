import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Counters from './components/counters';

function App() {
  const initialState = [
    { value: 0, id: 1, name: 'Ложка' },
    { value: 4, id: 2, name: 'Вилка' },
    { value: 0, id: 3, name: 'Тарелка' },
    { value: 0, id: 4, name: 'Стартовый набор минималиста' },
    { value: 0, id: 5, name: 'Ненужные вещи' },
  ];
  const [counters, setCounters] = useState(initialState);

  const handleIncrement = (counterId) => {
    const newCounters = counters.map((counter) => {
      if (counter.id === counterId) {
        let { value, id, name } = counter;
        return { value: (value += 1), id, name };
      }
      return counter;
    });
    setCounters(newCounters);
  };
  const handleDecrement = (counterId) => {
    const newCounters = counters.map((counter) => {
      if (counter.id === counterId && counter.value > 0) {
        let { value, id, name } = counter;
        return { value: (value -= 1), id, name };
      }
      return counter;
    });
    setCounters(newCounters);
  };

  const handleReset = () => setCounters(initialState);

  const handleDelete = (counterId) => {
    const newCounters = counters.filter((counter) => counter.id !== counterId);
    setCounters(newCounters);
  };

  return (
    <div className='col-lg-8 mx-auto p-3 py-md-5'>
      <main>
        <NavBar totalItems={counters.reduce((accum, counter) => accum + counter.value, 0)} />
        <Counters
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onReset={handleReset}
          onDelete={handleDelete}
          counters={counters}
        />
      </main>
    </div>
  );
}

export default App;
