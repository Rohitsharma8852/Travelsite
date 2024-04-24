import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ServicePage = () => {
  return (
    <>

    <Navbar/>

    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 mt-[70px]">
      <div className="flex flex-wrap justify-center mb-4">
        <h1 className="text-3xl font-bold mb-2 md:text-4xl lg:text-5xl">
          Our Services
        </h1>
      </div>
      <div className="flex flex-wrap justify-center mb-4">
        <div className="w-full md:w-1/2 lg:w-1/3 p-2">
          <div className="bg-white rounded-lg shadow-lg p-4 overflow-hidden">
            <h2 className="text-xl font-bold mb-2">Flight Booking</h2>
            <div className="overflow-hidden">
            <img
              src="https://png.pngtree.com/background/20230425/original/pngtree-this-airplane-is-flying-away-from-a-runway-picture-image_2473783.jpg"
              alt="Flight Booking Image"
              className="mx-auto h-[220px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
            />
            </div>
            <p className="text-lg">
              We offer flight booking services for domestic and international
              destinations. Our team of experts will help you find the best
              deals and options for your travel needs.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-2">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-xl font-bold mb-2">Hotel Booking</h2>
            <div className="overflow-hidden">
            <img
              src="https://t3.ftcdn.net/jpg/00/29/13/38/360_F_29133877_bfA2n7cWV53fto2BomyZ6pyRujJTBwjd.jpg"
              alt="Hotel Booking Image"
              className="mx-auto h-[220px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
            />
            </div>
            <p className="text-lg">
              We offer hotel booking services for a wide range of accommodations,
              from budget-friendly options to luxury resorts. Our team will help
              you find the perfect place to stay for your trip.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-2 ">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-xl font-bold mb-2"> Room Booking</h2>
            <div className="overflow-hidden">
            <img
              src="https://w0.peakpx.com/wallpaper/205/649/HD-wallpaper-hotel-room-interior-design-luxury-hotel-apartments-modern-interior-design-classic-style-luxury-chandelier.jpg"
              alt="Room Booking Imgae"
              className="mx-auto h-[220px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
            />
            </div>
            <p className="text-lg">
              We offer hotel booking services for a wide range of accommodations,
              from budget-friendly options to luxury resorts. Our team will help
              you find the perfect place to stay for your trip.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center mb-4">
        <div className="w-full md:w-1/2 lg:w-1/3 p-2">
          <div className="bg-white rounded-lg shadow-lg p-4 overflow-hidden">
            <h2 className="text-xl font-bold mb-2">Taxi Booking</h2>
            <div className="overflow-hidden">
            <img
              src="https://www.shutterstock.com/shutterstock/photos/403179772/display_1500/stock-photo-taxi-403179772.jpg"
              alt="Flight Booking Image"
              className="mx-auto h-[220px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
            />
            </div>
            <p className="text-lg">
              We offer Taxi booking services for domestic and international
              destinations. Our team of experts will help you find the best
              deals and options for your travel needs.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-2">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-xl font-bold mb-2">Train Booking</h2>
            <div className="overflow-hidden">
            <img
              src="https://www.livemint.com/lm-img/img/2023/06/19/600x338/ANI-20230529138-0_1685461514722_1687147713893.jpg"
              alt="Hotel Booking Image"
              className="mx-auto h-[220px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
            />
            </div>
            <p className="text-lg">
              We offer Train booking services for a wide range of accommodations,
              from budget-friendly options to luxury Train. Our team will help
              you find the perfect place to stay for your trip.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-2 ">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-xl font-bold mb-2">Car Booking</h2>
            <div className="overflow-hidden">
            <img
              src="https://c8.alamy.com/comp/DX0359/lamborghini-lp700-4-super-car-2013-model-limited-edition-in-hong-kong-DX0359.jpg"
              alt="Room Booking Imgae"
              className="mx-auto h-[220px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
            />
            </div>
            <p className="text-lg">
              We offer Car booking services for a wide range of accommodations,
              from budget-friendly options to luxury car. Our team will help
              you find the perfect place to stay for your trip.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center mb-4">
        <div className="w-full md:w-1/2 lg:w-1/3 p-2">
          <div className="bg-white rounded-lg shadow-lg p-4 overflow-hidden">
            <h2 className="text-xl font-bold mb-2">gym</h2>
            <div className="overflow-hidden">
            <img
              src="https://watermark.lovepik.com/photo/20211123/large/lovepik-gym-picture_500868937.jpg"
              alt="Flight Booking Image"
              className="mx-auto h-[220px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
            />
            </div>
            <p className="text-lg">
              We offer gym booking services for domestic and international
              destinations. Our team of experts will help you find the best
              deals and options for your travel needs.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-2">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-xl font-bold mb-2">Resort</h2>
            <div className="overflow-hidden">
            <img
              src="https://www.dellaresorts.com/new-images/luxury-resort-banner-v2.webp"
              alt="Hotel Booking Image"
              className="mx-auto h-[220px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
            />
            </div>
            <p className="text-lg">
              We offer Resort booking services for a wide range of accommodations,
              from budget-friendly options to luxury resort. Our team will help
              you find the perfect place to stay for your trip.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-2 ">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-xl font-bold mb-2">Home</h2>
            <div className="overflow-hidden">
            <img
              src="https://png.pngtree.com/thumb_back/fh260/background/20230616/pngtree-exterior-design-of-a-modern-house-in-the-city-a-3d-image_3606113.jpg"
              alt="Room Booking Imgae"
              className="mx-auto h-[220px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
            />
            </div>
            <p className="text-lg">
              We offer Home booking services for a wide range of accommodations,
              from budget-friendly options to luxury home. Our team will help
              you find the perfect place to stay for your trip.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center mb-4">
        <NavLink
          to="/"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        >
          Back to Home
        </NavLink>
      </div>
    </div>

    <Footer/>

    </>
  );
};

export default ServicePage;