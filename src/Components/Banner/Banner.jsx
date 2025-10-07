import React from "react";
import BookImage from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="flex justify-between my-6 items-center p-16 w-full bg-gray-100 rounded-3xl">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold">
          Books to freshen up your bookshelf
        </h1>
        <button className="btn btn-active btn-primary">View The List</button>
      </div>
      <div>
        <img className="rounded-2xl" src={BookImage} alt="" />
      </div>
    </div>
  );
};

export default Banner;
