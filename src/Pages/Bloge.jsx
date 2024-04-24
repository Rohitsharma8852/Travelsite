import React from "react";
import BlogeCard from "./BlogeCard";


const BlogeData = [
  {
    img: "https://www.tajhotels.com/content/dam/luxury/rambagh-palace/3x2/TRPJ_Exterior1B_AM_4568-3x2.jpg/_jcr_content/renditions/cq5dam.web.756.756.jpeg",
    location: "April 2022",
    title: "The 10 best places to visit in Jaipur",
    description:"lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 299,
    type: "Cultural Relax",
  },
  {
    img: "https://mysimplesojourn.com/wp-content/uploads/2016/10/27.jpg",
    location: "march 2023",
    title: "Top places to visit in Jaipur",
    description:
      "The Jal Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: "https://c8.alamy.com/comp/2J3GDGP/rajasthan-vidhan-sabha-2J3GDGP.jpg",
    location: "april 2022",
    title: "Top places to visit in India",
    description:
      "The Galtaji is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 6200,
    type: "Cultural Relax",
  },

  {
    img: "https://wallpapers.com/images/hd/pink-city-3tav0gnh9fgno4h0.jpg",
    location: "April 2022",
    title: "The 5 best places to visit in Jaipur",
    description:"lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 299,
    type: "Cultural Relax",
  },
  {
    img: "https://www.treebo.com/blog/wp-content/uploads/2017/04/Places-to-Visit-in-Jaipur.jpg",
    location: "march 2023",
    title: "Top places to visit in Jaipur",
    description:
      "The Jal Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: "https://www.india.com/wp-content/uploads/2021/02/TheLeelaJaipur.jpeg",
    location: "april 2022",
    title: "Top places to visit in India",
    description:
      "The Galtaji is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 6200,
    type: "Cultural Relax",
  },
];

const Bloge = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container mx-auto px-3">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
             Our latest Blogs
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {BlogeData.map((item, index) => (
              <BlogeCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Bloge;