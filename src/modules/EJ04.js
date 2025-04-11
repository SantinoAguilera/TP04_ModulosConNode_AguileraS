const fs = require('fs').promises;

async function copiar(origen, destino) {
    try {
        const contenido = await fs.readFile(origen, 'utf8');
        await fs.writeFile(destino, contenido);
        console.log(`Archivo copiado de ${origen} a ${destino} correctamente.`);
    } catch (error) {
        console.error("Error al copiar el archivo:", error.message);
    }
}

module.exports = copiar;