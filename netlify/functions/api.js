exports.handler = async (event, context) => {
    try {
        // Lógica de tu API aquí
        const data = { message: '¡Hola desde mi API en Netlify!' };

        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Error en la función' })
        };
    }
};