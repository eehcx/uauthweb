
const handleReplace = (value) => {
    const strValue = String(value || "");
    const formatted = strValue
        .toLowerCase()                  // Convierte a minúsculas
        .replace(/\s/g, '')             // Elimina todos los espacios
        .replace(/[^a-z0-9]/g, '');     // Solo permite letras minúsculas y números

    const isValid = /^[a-z0-9]{1,12}$/.test(formatted);

    return { value: formatted.slice(0, 12), isValid };
};

export default handleReplace
