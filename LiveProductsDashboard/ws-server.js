import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('Client connected');

  const sendPrice = () => {
    const price = (Math.random() * 100).toFixed(2).toString();
    ws.send(JSON.stringify({ price }));
  };

  sendPrice();
  const interval = setInterval(sendPrice, 1000);

  ws.on('close', () => {
    console.log('Client disconnected');
    clearInterval(interval);
  });
});

console.log('WebSocket server running on ws://localhost:8080');
