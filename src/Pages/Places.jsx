import React from "react";
import PlaceCard from "./PlaceCard";


const PlacesData = [
  {
    img: "https://media.istockphoto.com/id/495605663/photo/astronomical-instrument-at-jantar-mantar-observatory.jpg?s=612x612&w=0&k=20&c=txIPgjIok1qj8feWZTTYA0pS5A7Ai8-jq8HX0zLAWBc=",
    title: "Jantar Mantar",
    location: "jaipur",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: "https://w0.peakpx.com/wallpaper/159/511/HD-wallpaper-amber-fort-jaipur-bing-amer-fort.jpg",
    title: "Amber Fort",
    location: "Jaipur",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: "https://www.walk2mall.com/wp-content/uploads/2017/10/Jaipur-World-trade-park.png?x38496",
    title: "Wtp",
    location: "Jaipur",
    description:
      "The wtp is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 6200,
    type: "Cultural Relax",
  },
  {
    img: "https://2.bp.blogspot.com/-Qgt_dCxqnAI/UV6_fsm0F9I/AAAAAAAAClo/IhFsOfTf1KU/s1600/city-palace-jaipur.jpg",
    title: "The Best Place in jaipur",
    location: "Jaipur",
    description:"lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 299,
    type: "Cultural Relax",
  },
  {
    img: "https://media.istockphoto.com/id/598558406/photo/the-palace-jal-mahal-at-night.jpg?s=612x612&w=0&k=20&c=0MSfvYWssJmJtFj_rWSf6TqJBOaN4hOlEQuuw_nHqfQ=",
    title: "Jal Mahal",
    location: "jaipur",
    description:
      "The Jal Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: "https://i.pinimg.com/originals/55/0b/88/550b88b3948685b5e7dfdd3a10dcd0ce.jpg",
    title: "Galtaji",
    location: "jaipur",
    description:
      "The Galtaji is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 6200,
    type: "Cultural Relax",
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container mx-auto px-3">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Places to Visit in Jaipur
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
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

export default Places;