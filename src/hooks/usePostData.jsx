import { useState } from 'react';

function usePostData(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const postData = async (postData) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData),
            });

            if (!response.ok) {
                throw new Error("Error en la solicitud POST");
            }

            const result = await response.json();
            setData(result);

        } catch (err) {
            setError(err.message);
            console.log(err)
        } finally {
            setLoading(false);
        }
    };

    return { data, loading, error, postData };
}

export default usePostData;
