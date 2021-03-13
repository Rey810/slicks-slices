import { useContext, useState } from 'react';
import OrderContext from '../components/OrderContext';

export default function usePizza({ pizza, inputs }) {
  // 1. create state to hold the order
  // we got rid of this line because useState was moved up to the provider
  //   const [order, setOrder] = useState([]);
  //  now we can access both our state and our updater function via context
  const [order, setOrder] = useContext(OrderContext);

  // 2. Make a function to add things to order
  function addToOrder(orderedPizza) {
    setOrder([...order, orderedPizza]);
  }
  //  3. Make a function to remove things from order
  function removeFromOrder(index) {
    setOrder([
      //  everything before the item we want to remove
      ...order.slice(0, index),
      // everything after the item we want to remove
      ...order.slice(index + 1),
    ]);
  }
  // 4.

  return {
    order,
    addToOrder,
    removeFromOrder,
  };
}
