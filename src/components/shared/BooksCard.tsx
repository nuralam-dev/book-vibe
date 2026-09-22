import { IBook } from "@/types/book.type";
import Image from "next/image";
interface IBookCardProps {
  book: IBook;
}
const BooksCard = ({ book }: IBookCardProps) => {
  if (!book) return null;

  const {
    bookName = "Untitled",
    author = "Unknown Author",
    image,
    rating = 0,
    category = "General",
    tags = [],
  } = book;

  return (
    <div className="w-full mx-auto bg-white border border-gray-200/80 rounded-[20px] p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Image Container */}

      <div className="relative bg-[#f3f3f3] rounded-[16px] h-[230px] w-full flex items-center justify-center mb-5 overflow-hidden p-4">
        {image ? (
          <Image
            src={image}
            alt={bookName}
            width={120}
            height={170}
            className="max-h-[170px] w-auto object-contain drop-shadow-md"
          />
        ) : (
          <div className="text-gray-400 text-sm font-medium">
            No Image Available
          </div>
        )}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-[#f0fdf4] text-[#23c552] text-sm font-medium px-4 py-1.5 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h2 className="font-serif text-[22px] font-bold text-gray-900 mb-2 leading-snug line-clamp-1">
        {bookName}
      </h2>

      {/* Author */}
      <p className="text-sm text-gray-600 font-medium mb-5">By : {author}</p>

      {/* Dashed Divider */}
      <div className="border-t border-dashed border-gray-200 mb-4" />

      {/* Footer Details */}
      <div className="flex justify-between items-center text-sm font-medium text-gray-700">
        <span>{category}</span>

        <div className="flex items-center gap-1.5">
          <span>{Number(rating).toFixed(2)}</span>
          <svg
            className="w-4 h-4 stroke-gray-800 fill-none stroke-[2] stroke-linejoin-round"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BooksCard;
