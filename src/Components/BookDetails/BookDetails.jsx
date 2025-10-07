import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../Utility/addtoDb";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId);
  const {
    bookName,
    image,
    author,
    category,
    publisher,
    rating,
    review,
    tags,
    yearOfPublishing,
    totalPages,
  } = singleBook;

  const handleMarkAsRead = (id) => {
    MySwal.fire({
      title: "Good job!",
      text: "You Have Successfully Marked The Book!",
      icon: "success",
    });

    addToStoredDB(id);
  };

  return (
    <div className="py-10 md:flex md:justify-around gap-8 w-full">
      <div className="md:w-[50%] bg-gray-100 rounded-4xl">
        <img className="p-20" src={image} alt="" />
      </div>
      <div className="text-left space-y-4 md:w-1/2">
        <h5 className="text-4xl font-bold mt-5 md:mt-0">{bookName}</h5>
        <p className="text-1xl font-semibold text-gray-500">By: {author}</p>
        <div className="border-1 border-gray-300"></div>
        <p className="text-1xl font-semibold text-gray-500">{category}</p>
        <div className="border-1 border-gray-300"></div>
        <p>
          <span className="font:bold">Review:</span>
          {review}
        </p>
        <div className="flex justify-center gap-3">
          {" "}
          <span className="font-bold">Tags:</span>
          {tags.map((tag) => (
            <button className="bg-green-100 text-green-500 rounded-4xl py-1 px-2">
              {tag}
            </button>
          ))}
        </div>
        <div className="border-1 border-gray-300"></div>
        <p>
          <span className="text-gray-500">Number of Pages: </span>{" "}
          <span className="font-bold">{totalPages}</span>
        </p>
        <p>
          <span className="text-gray-500">Publisher:</span>{" "}
          <span className="font-bold">{publisher}</span>
        </p>
        <p>
          <span className="text-gray-500">Year of Publishing:</span>{" "}
          <span className="font-bold">{yearOfPublishing}</span>
        </p>
        <p>
          <span className="text-gray-500">Rating: </span>{" "}
          <span className="font-bold">{rating}</span>
        </p>
        <div className="space-x-4">
          <button
            onClick={() => handleMarkAsRead(id)}
            className="p-4 border-2 rounded-2xl border-gray-500 font-semibold"
          >
            Mark as Read
          </button>
          <button className="p-4 rounded-2xl bg-sky-400 font-semibold text-white">
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
