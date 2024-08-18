import {
  FaHeadset,
  FaLock,
  FaMoneyBillWave,
  FaShippingFast,
  FaTag,
} from "react-icons/fa";

import MenCategory from "../../assets/images/man.jpg";
import WomenCategory from "../../assets/images/woman.jpg";
import KidsCategory from "../../assets/images/kid.jpg";

export const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Shop",
    href: "/",
  },
  {
    title: "Contact",
    href: "/",
  },
  {
    title: "About",
    href: "/",
  },
];

export const infoItems = [
  {
    Icon: FaShippingFast,
    title: "Free Shippping",
    description: "Get your orders delivered with no extra cost",
  },
  {
    Icon: FaHeadset,
    title: "Support 24/7",
    description: "We are here to assist you anytime",
  },
  {
    Icon: FaMoneyBillWave,
    title: "100% Money Back",
    description: "Full refund if you are not satisfied",
  },
  {
    Icon: FaLock,
    title: "Payment Secure",
    description: "Your payment information is safe with us",
  },
  {
    Icon: FaTag,
    title: "Discount",
    description: "Enjoy thge best prices on our products",
  },
];

export const categories = [
  { title: "Men", imageSrc: MenCategory },
  { title: "Women", imageSrc: WomenCategory },
  { title: "Kids", imageSrc: KidsCategory },
];
