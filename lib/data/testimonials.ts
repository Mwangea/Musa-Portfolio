export interface Testimonial {
  id: string;
  content: string;
  author: string;
  position: string;
  company: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "nuru-mbeyu",
    content:
      "Musa's dedication to creating impactful solutions was evident in our work at World Vision. His ability to build scalable systems while keeping sustainability and real-world impact in mind made a significant difference in our projects.",
    author: "Nuru Mbeyu",
    position: "Project Manager",
    company: "World Vision",
    image: "/nuru.jpg",
  },
  {
    id: "bonny-longa",
    content:
      "Musa played a crucial role in developing our e-commerce platform. His expertise in frontend and backend technologies ensured a seamless shopping experience for our customers, helping us scale efficiently.",
    author: "Bonny Longa",
    position: "CEO",
    company: "ShopEase",
    image: "/Bonny.jpg",
  },
  {
    id: "juma-mwavadu",
    content:
      "Musa played a crucial role in bringing the King Chi Foundation's vision to life through a beautifully designed and highly functional website. His technical expertise, problem-solving mindset, and ability to collaborate effectively ensured that the platform was user-friendly, secure, and impactful.",
    author: "Juma Mwavadu",
    position: "CEO",
    company: "King Chi Foundation",
    image: "/Kingchi.jpg",
  },
];

