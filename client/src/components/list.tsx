import Link from "next/link"
import { useQuery } from "@apollo/client"
import { getPosts, BooksData } from "../pages/getPosts.query"
import { NextPage } from "next";

interface PostsListProps {}

const PostsList: NextPage<PostsListProps> = () => {
  const { loading, error, data } = useQuery<BooksData>(getPosts);

  console.log("data is", data)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  const { books } = data.allBooks;

  // if (!books) return null;

  return (
    <ul>
      <p>hoge</p>
      {books.map((book, index) => {
        return (
          <li key={index}>
            {book.title}{' '}
            <Link href={`/posts/${book.id}`}>
              <a>[Detail]</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default PostsList;
