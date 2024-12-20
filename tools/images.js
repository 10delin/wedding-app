import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
  const imagesDir = path.join(process.cwd(), 'public/tools/images/carousel');
  const filenames = fs.readdirSync(imagesDir);

  const images = filenames.map((filename) => {
    // Verificar que el archivo tiene el formato esperado
    const parts = filename.split('. ');
    if (parts.length < 2) {
      // Si no tiene el formato esperado, saltar este archivo
      return null;
    }

    const [yearMonth, descriptionWithExtension] = parts;

    // Extraer el año (antes del guion bajo)
    const year = yearMonth.split('_')[0];

    // Eliminar la extensión (por ejemplo, .jpg) del nombre del archivo
    let description = descriptionWithExtension.replace(/\.[^/.]+$/, '');

    // Eliminar cualquier texto dentro de paréntesis
    description = description.replace(/\(.*\)/, '').trim();

    // Formatear la descripción
    const formattedDescription = `${description}, año ${year}`;

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
