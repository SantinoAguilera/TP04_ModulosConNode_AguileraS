const { URL } = require('url');

function parsearUrl(direccion) {
    try {
        const url = new URL(direccion);

        const host = `${url.protocol}//${url.host}`;
        const pathname = url.pathname;

        const params = {};
        for (const [clave, valor] of url.searchParams.entries()) {
            params[clave] = valor;
        }

        return {
            host,
            pathname,
            parametros: params
        };
    } catch (error) {
        console.error("Error: no se pudo parsear la URL.");
        console.error(error.message);
        return null;
    }
}

module.exports = parsearUrl;