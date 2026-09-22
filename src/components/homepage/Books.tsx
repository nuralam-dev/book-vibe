import { IBook } from "@/types/book.type";
import BooksCard from "../shared/BooksCard";
const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");
  const data = res.json();
  return data;
};
const Books = async () => {
  const books = await getBooks();
  console.log(books);
  return (
    <div>
        <h1 className="text-center p-5 font-bold text-2xl">Books</h1>
        <div className="container mx-auto grid grid-cols-3 gap-1">
      {books.map((book: IBook , ind : number) => (
        <BooksCard key={ind} book={book}></BooksCard>
      ))}
    </div>
    </div>
  );
};

export default Books;
