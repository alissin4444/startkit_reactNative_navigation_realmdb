import React, {createContext, useContext, useState, useEffect} from 'react';

const FruitContext = createContext({});

import getRealm from '../services/realm';

export const FruitProvider = ({children}) => {
  const [fruits, setFruits] = useState([]);

  const saveFruit = async (fruit) => {
    const realm = await getRealm();

    realm.write(() => {
      realm.create('Fruit', fruit);
    });
  };

  useEffect(() => {
    async function loadSavedFruits() {
      const realm = await getRealm();

      const data = await realm.objects('Fruit');

      setFruits(data);
    }

    loadSavedFruits();
  }, []);

  const addFruit = async () => {
    const fruitPosition = fruits.length + 1;
    const fruit = {
      id: fruitPosition,
      name: `Fruit ${fruitPosition}`,
    };
    setFruits([...fruits, fruit]);
    await saveFruit(fruit);
  };

  return (
    <FruitContext.Provider
      value={{
        fruits,
        addFruit,
      }}>
      {children}
    </FruitContext.Provider>
  );
};

export function useFruit() {
  const context = useContext(FruitContext);

  if (!context) {
    throw new Error('Fruit must be used within an FruitProvider');
  } else {
    return context;
  }
}
