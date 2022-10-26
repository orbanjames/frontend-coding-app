import React, { useState, useEffect } from 'react'
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  styled,
  Typography,
} from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { getPosts, editPost } from '../Service/api'

const initialValue = {
  title: '',
  date: '',
  creatorUser: '',
  tags: '',
  content: '',
}

const EditPostPage = () => {
  const [post, setPost] = useState(initialValue)
const { title, date, creatorUser, tags, content } = post
  const { id } = useParams()

  let navigate = useNavigate()

  useEffect(() => {
    loadPostDetails()
  }, [])

  const loadPostDetails = async () => {
    const response = await getPosts(id)
    setPost(response.data)
  }

  const editPostDetails = async () => {
    const response = await editPost(id, post)
    setPost(response.data)
    navigate('/all')
  }

  const onValueChange = (e) => {
    console.log(e.target.value)
    setPost({ ...post, [e.target.name]: e.target.value })
  }

  return (
    <Container>
      <Typography variant='h4'>Edit Information</Typography>
      <FormControl>
        <InputLabel htmlFor='my-input'>Title</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name='title'
          value={title}
          id='my-input'
          aria-describedby='my-helper-text'
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor='my-input'>Post Date</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name='date'
          value={date}
          id='my-input'
          aria-describedby='my-helper-text'
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor='my-input'>Creator User</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name='user'
          value={creatorUser}
          id='my-input'
          aria-describedby='my-helper-text'
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor='my-input'>Post Tags</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name='tags'
          value={tags}
          id='my-input'
          aria-describedby='my-helper-text'
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor='my-input'>Post Content</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name='content'
          value={content}
          id='my-input'
          aria-describedby='my-helper-text'
        />
      </FormControl>
      <FormControl>
        <Button
          variant='contained'
          color='primary'
          onClick={() => editPostDetails()}
        >
          Edit Post
        </Button>
      </FormControl>
    </Container>
  )
}

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% 0 0 25%;
  & > div {
    margin-top: 20px;
  }
`
export default EditPostPage
