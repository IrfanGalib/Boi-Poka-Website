import React, { use } from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  //   const data = use(bookPromise);
  //   console.log(data);
  const {
    bookName,
    author,
    image,
    publisher,

    category,
    rating,
    tags,
    yearOfPublishing,
    bookId,
  } = singleBook;
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div>
        <div className="card bg-base-100 w-96 shadow-sm p-5 border border-gray-300 shadow">
          <figure className="p-5 bg-gray-100 rounded-3xl">
            <img className="max-w-[155px] " src={image} alt="Book" />
          </figure>
          <div className="card-body">
            <div className="flex justify-center gap-7">
              {tags.map((tag) => (
                <button className="border border-green-500 text-green-500 rounded-4xl py-1 px-2">
                  {tag}
                </button>
              ))}
            </div>
            <h2 className="card-title">
              {bookName}
              <div className="badge badge-secondary">{yearOfPublishing}</div>
            </h2>
            <p>
              <span className="font-bold">By Author:</span> {author}
            </p>
            <div className="border-t-1 border-dashed"></div>
            <div className="card-actions justify-between">
              <div className="badge badge-outline text-green-500">
                {publisher}
              </div>
              <div className="badge badge-outline text-green-500">
                {category}
              </div>
              <div className="badge badge-outline text-green-500">
                {rating} <FaStarHalfAlt />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
