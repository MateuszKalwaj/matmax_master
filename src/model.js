import { IMAGES as images } from "./images";

export const SERVICES = {
  railingsPaint: "railingsPaint",
  railingsSteel: "railingsSteel",
  gastronomy: "gastronomy",
  stairs: "stairs",
};

export const logo = {
  mat: "MAT",
  max: "MAX",
};

export const PHONE_NUMBER = "502 481 863";
export const EMAIL = "biuro@matmax.koszalin.pl";

const srcPath = "/static/images/";

const FIGURES = {
  railingsPaint: `${srcPath}railingsPaint/Balustrada-czarna-drewniana.jpg`,
  railingsSteel: `${srcPath}railingsSteel/balustrada-balkonowa.jpg`,
  gastronomy: `${srcPath}gastronomy/Blat-kuchenny-mala-gastronomia.jpg`,
  stairs: `${srcPath}stairs/schody-krete.jpg`,
};

export const services = [
  {
    id: 1,
    name: SERVICES.stairs,
  },
  {
    id: 2,
    name: SERVICES.railingsSteel,
  },
  {
    id: 3,
    name: SERVICES.gastronomy,
  },
  {
    id: 4,
    name: SERVICES.railingsPaint,
  },
];

export const servicesShortData = [
  {
    id: 1,
    name: SERVICES.stairs,
    image: FIGURES.stairs,
  },
  {
    id: 2,
    name: SERVICES.railingsSteel,
    image: FIGURES.railingsSteel,
  },
  {
    id: 3,
    name: SERVICES.gastronomy,
    image: FIGURES.gastronomy,
  },
  {
    id: 4,
    name: SERVICES.railingsPaint,
    image: FIGURES.railingsPaint,
  },
];

const getCaption = (image) => {
  return image.replace(/-/g, " ").slice(0, image.indexOf("."));
};

export const getPhotos = (service) => {
  return images[service].map((image) => {
    const url = `${srcPath}${service}/${image}`;
    const caption = getCaption(image);
    return {
      url,
      caption,
    };
  });
};

export const logos = [
  {
    name: "Espersen",
    src: `${srcPath}clients/espersen.jpg`,
  },
  {
    name: "Excelsior",
    src: `${srcPath}clients/excelsior.png`,
  },
  {
    name: "Viva-italia",
    src: `${srcPath}clients/viva-italia.jpg`,
  },
  {
    name: "Polfish",
    src: `${srcPath}clients/polfish.png`,
  }
];

export const cookiesAcceptedFlag = 'cookies-accepted';