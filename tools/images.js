import fs from 'fs';
import path from 'path';

// Mapeo de números de mes a nombres de mes en español
const monthNames = {
  '01': 'enero',
  '02': 'febrero',
  '03': 'marzo',
  '04': 'abril',
  '05': 'mayo',
  '06': 'junio',
  '07': 'julio',
  '08': 'agosto',
  '09': 'septiembre',
  '10': 'octubre',
  '11': 'noviembre',
  '12': 'diciembre',
};

export async function getStaticProps() {
  const imagesDir = path.join(process.cwd(), 'public/tools/images/carousel');
  const filenames = fs.readdirSync(imagesDir);

  const images = filenames.map((filename) => {
    // Verificar que el archivo tiene el formato esperado
    const parts = filename.split('. ');
    if (parts.length < 2) {
      return null; // Saltar archivos con formato inesperado
    }

    const [yearMonth, descriptionWithExtension] = parts;

    // Extraer el año y el mes, ignorando cualquier texto entre paréntesis
    const cleanedYearMonth = yearMonth.replace(/\(.*\)/, ''); // Eliminar paréntesis
    const [year, month] = cleanedYearMonth.split('_');

    // Convertir el mes a texto
    const monthText = month ? monthNames[month] : '';

    // Eliminar la extensión y cualquier texto dentro de paréntesis en la descripción
    let description = descriptionWithExtension.replace(/\.[^/.]+$/, '');
    description = description.replace(/\(.*\)/, '').trim();

    // Formatear la descripción
    const formattedDescription = `${description}, ${monthText} ${year}`;

    return {
      src: `/tools/images/carousel/${filename}`,
      alt: formattedDescription,
      description: formattedDescription,
    };
  }).filter(image => image !== null); // Filtrar los valores nulos

  return {
    props: {
      images,
    },
  };
}
