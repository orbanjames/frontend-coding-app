import { useState, useEffect } from 'react'
import React from 'react'
import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Button,
  styled,
} from '@mui/material'
import { getPosts, deletePost } from '../Service/api'
import { Link } from 'react-router-dom'

const AllPostsTable = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getAllPosts()
  }, [])

  const deletePostData = async (id) => {
    await deletePost(id)
    getAllPosts()
  }

  const getAllPosts = async () => {
    let response = await getPosts()
    setPosts(response.data)
  }

  return (
    <StyledTable>
      <TableHead>
        <THead>
          <TableCell> Post Title</TableCell>
          <TableCell>Post Date</TableCell>
          <TableCell>Creator User</TableCell>
          <TableCell>Post Tags</TableCell>
          <TableCell>Post Content</TableCell>
          <TableCell>Actions</TableCell>
        </THead>
      </TableHead>
      <TableBody>
        {posts.map((post) => (
          <TRow key={post.id}>
            <TableCell>{post.title}</TableCell>
            <TableCell>{post.date}</TableCell>
            <TableCell>{post.cretorUser}</TableCell>
            <TableCell>{post.tags}</TableCell>
            <TableCell>{post.content}</TableCell>
            <TableCell>
              <Button
                color='primary'
                variant='contained'
                style={{ marginRight: 10 }}
                component={Link}
                to={`/edit/${post.id}`}
              >
                Edit
              </Button>
              <Button
                color='secondary'
                variant='contained'
                onClick={() => deletePostData(post.id)}
              >
                Delete
              </Button>
            </TableCell>
          </TRow>
        ))}
      </TableBody>
    </StyledTable>
  )
}

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px 0 0 50px;
`

const THead = styled(TableRow)`
  & > th {
    font-size: 20px;
    background: #000000;
    color: #ffffff;
  }
`

const TRow = styled(TableRow)`
  & > td {
    font-size: 18px;
  }
`

export default AllPostsTable
