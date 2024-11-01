import { useState, useEffect } from 'react';

const useWebSocket = (url, onMessageHandler) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        const socket = new WebSocket(url);

        socket.onopen = () => {
            setIsConnected(true);
            console.log('WebSocket connection established');
        };

        socket.onmessage = (event) => {
        const messageData = JSON.parse(event.data);
        setData(messageData);
            if (onMessageHandler) {
                onMessageHandler(messageData);
            }
        };

        socket.onerror = (err) => {
            console.error('WebSocket error:', err);
            setError(err.message);
        };

        socket.onclose = () => {
            setIsConnected(false);
            console.log('WebSocket connection closed');
        };

        return () => {
            socket.close();
        };
    }, [url, onMessageHandler]);

    return { data, error, isConnected };
};

export default useWebSocket;
