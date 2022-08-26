import Link from "next/link"
import { useQuery } from "@apollo/client"
import { getAllBooks, BookList } from "../pages/getPosts.query"
import { NextPage } from "next"

interface PostsListProps {}

const BookList: NextPage<PostsListProps> = () => {
  const { loading, error, data } = useQuery<BookList>(getAllBooks)
  
  const { nodes } = data.allBooks

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {JSON.stringify(error)}</p>

  if (!nodes) return null

  return (
    <ul>
      {nodes.map((node, index) => (
        <li key={index}>
          {node.id}{' '}
          <Link href={`/posts/${node.id}`}>詳細</Link>
        </li>
      ))}
    </ul>
  )
}

export default BookList
