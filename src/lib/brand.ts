export const brand = {
  name: "Guincho Rio Preto",
  phone: "17 99623-8858",
  phoneIntl: "+5517996238858",
  whatsappMsg: "Olá, preciso de um guincho",
  city: "São José do Rio Preto/SP",
};

export const waLink = `https://wa.me/5517996238858?text=${encodeURIComponent(brand.whatsappMsg)}`;
export const telLink = `tel:${brand.phoneIntl}`;

export const images = {
  logo: "/assets/logo-guincho-rio-preto.png",
  truck: "/assets/guincho.png",
  moto: "/assets/guincho-moto.jpeg",
  carNight: "/assets/guincho-carro-batido.jpeg",
  service: "/assets/guincho-carro.png",
};
