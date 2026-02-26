import pakg1 from "./assets/packages1.webp";
import pakg2 from "./assets/packages2.webp";
import pakg3 from "./assets/packages3.webp";
import pakg4 from "./assets/packages4.webp";
import pakg5 from "./assets/packages5.webp";
import pakg6 from "./assets/packages6.webp";
import { FaBox } from "react-icons/fa";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";

export const tourpackages = [
  {
    name: "Thailand Temples & Beach Getaway",
    about:
      "A beautiful temple in thailand. The temple is designed in white and gold colors.with a traditional Thai-Style pointed roof.Overall,the image presents a peaceful and eye-catching travel destination",
    btn: "View Tour Detail",
    price: "$299",
    days: "4D/3N",
    pax: "7",
    image: pakg1,
  },
  {
    name: "Swiss Alps & Scenic Train Journey",
    about:
      "Experience the breathtaking beauty of the Swiss Alps on a scenic train journey through stunning mountain landscapes. Travel alongside crystal-clear lakes and dramatic peaks as the red train winds smoothly through nature’s masterpiece. ",
    btn: "View Tour Detail",
    price: "$199",
    days: "2D/4N",
    pax: "10",
    image: pakg2,
  },
  {
    name: "New York & Las Vegas City Escape",
    about:
      "Discover the vibrant energy of New York and the dazzling excitement of Las Vegas on this unforgettable city escape.",
    btn: "View Tour Detail",
    price: "$399",
    days: "7D/4N",
    pax: "12",
    image: pakg3,
  },
  {
    name: "Australia Wildlife & Reef Adventure",
    about:
      "The animal prominently featured in the image is likely an Antilopine kangaroo (also known as an antilopine wallaroo). It is one of the largest macropod species, indigenous to northern Australia. ",
    btn: "View Tour Detail",
    price: "$499",
    days: "8D/2N",
    pax: "14",
    image: pakg4,
  },
  {
    name: "Iceland Northern Lights Discovery",
    about:
      "Stay in the moonlight, where every moment feels magical. Let the moonlight guide your journey to unforgettable nights",
    btn: "View Tour Detail",
    price: "$599",
    days: "1D/2N",
    pax: "3",
    image: pakg5,
  },
  {
    name: "Egypt Pyramids & Nile Cruise Tour",
    about:
      "Experience the wonders of ancient Egypt on this unforgettable tour! Explore the majestic Pyramids of Giza.",
    btn: "View Tour Detail",
    price: "$279",
    days: "9D/3N",
    pax: "13",
    image: pakg6,
  },
];

export const features = [
  {
    icon: FaBox,
    name: "Professional Tour Guide",
    about:
"Our experienced tour guides make every journey easy, fun, and memorable. They provide insightful information, local tips, and friendly support so you can explore each destination with confidence"  },
  {
    icon: RiVerifiedBadgeFill,
    name: "Certified Travel Agency",
    about:
"We are a trusted and certified travel agency dedicated to making your trips safe, smooth, and unforgettable"  },
  {
    icon: BiSupport,
    name: "24/7 Premium Support",
    about:
"We provide round-the-clock support to make sure your journey is smooth and worry-free. Our team is always available to assist you with bookings, questions, or any travel issues, so you can enjoy your trip with complete peace of mind.",
  },
];
