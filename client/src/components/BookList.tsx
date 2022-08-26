import Link from "next/link"
import { useQuery } from "@apollo/client"
import { getAllBooks, BookList } from "../pages/getPosts.query"
import { NextPage } from "next"

const BookList: NextPage = () => {
  const { loading, error, data } = useQuery<BookList>(getAllBooks)
  
  if (!data) return null
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {JSON.stringify(error)}</p>

  const { nodes } = data.allBooks

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
