import { useEffect, useState } from 'react';
import React from 'react';

export const useLivePrice = () => {
  const [price, setPrice] = useState<string>('0');

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080');

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.price) {
        setPrice(data.price);
      }
    };
    return () => {
      socket.close();
    };
  }, []);

  return price;
};


// Можно использовать этот хук, тогда в каждой карточке будет разная цена. Оставила как вариант взаимодействия с websocket.