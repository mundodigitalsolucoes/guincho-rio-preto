import logoAsset from "@/assets/logo.png.asset.json";
import truckAsset from "@/assets/truck-red.jpg.asset.json";
import motoAsset from "@/assets/moto.jpg.asset.json";
import suvAsset from "@/assets/suv.jpg.asset.json";

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
  logo: logoAsset.url,
  truck: truckAsset.url,
  moto: motoAsset.url,
  suv: suvAsset.url,
};
