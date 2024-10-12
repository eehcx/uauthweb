import { useState, useCallback } from 'react';

const useRegisterUser = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const registerUser = useCallback(async (email, password) => {
        setIsLoading(true);
        setError(null);
        setSuccess(false);

        const controller = new AbortController();
        const { signal } = controller;

        try {
            const response = await fetch('http://localhost:8080/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password }),
                signal,
                // credentials: 'include'
            });

            if (!response.ok) {
                const errorData = await response.json();
                setError(errorData.message || 'Error al registrar');
                return;
            }

            const responseData = await response.json();
            setSuccess(true);
            return responseData; 
        } catch (err) {
            if (err.name !== 'AbortError') { 
                setError('Error al registrar (sin conexión o problema desconocido)');
                //console.error(err);
            }
        } finally {
            setIsLoading(false);
        }

        return () => controller.abort();
    }, []);

    return { registerUser, isLoading, error, success };
};

export default useRegisterUser;