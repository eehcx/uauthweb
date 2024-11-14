export default function formatDate(isoDate) {
    const date = new Date(isoDate);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    return date.toLocaleDateString('es-ES', options);
}