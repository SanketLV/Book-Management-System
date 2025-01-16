import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import { sampleBooks } from "@/constants";

const Home = () => {
  const randomIndex = Math.floor(Math.random() * sampleBooks.length);

  return (
    <>
      <BookOverview {...sampleBooks[randomIndex]} />
      <BookList
        title="Latest Books"
        books={sampleBooks}
        containerClassName="mt-28"
      />
    </>
  );
};

export default Home;
