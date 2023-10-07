import image1 from "@/../public/img/product/micriphone.jpg";
import image3 from "@/../public/img/product/microphoner.jpg";
import image2 from "@/../public/img/product/musicblank.jpg";
import { v4 as uuidv4 } from "uuid";
export const cartItems = [
  {
    id: uuidv4(),
    image: image1,
    name: "Microphone R4",
    quantity: 1,
    price: 75,
    subTotal: 75,
  },
  {
    id: uuidv4(),
    image: image2,
    name: "Microphone R4",
    quantity: 1,
    price: 75,
    subTotal: 75,
  },
  {
    id: uuidv4(),
    image: image3,
    name: "Microphone R4",
    quantity: 1,
    price: 75,
    subTotal: 75,
  },
];
