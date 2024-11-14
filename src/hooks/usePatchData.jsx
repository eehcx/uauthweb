import { useState } from 'react';

function usePatchData(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const patchData = async (patchData) => {
        setLoading(true); 
        setError(null);
        try {
            const response = await fetch(url, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(patchData),
            });

            if (!response.ok) {
                throw new Error("Error en la solicitud PATCH");
            }

            const result = await response.json();
            setData(result);

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false); 
        }
    };

    return { data, loading, error, patchData };
}

export default usePatchData;
