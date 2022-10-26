import React, { useState } from 'react'
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  styled,
  Typography,
} from '@mui/material'
import { createPost } from '../Service/api'
import { useNavigate } from 'react-router-dom'

const initialValue = {
  title: '',
  date: '',
  creatorUser: '',
  tags: '',
  content: '',
}

const CreatePostPage = () => {
  const [post, setPost] = useState(initialValue)
  const { title, date, creatorUser, tags, content } = post
  let navigate = useNavigate()

  const onValueChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value })
  }

  const createPostDetails = async () => {
    await createPost(post)
    navigate('/all')
  }

  return (
    <Container>
      <Typography variant='h4'>Create Post</Typography>
      <FormControl>
        <InputLabel htmlFor='my-input'>Title</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name='title'
          value={title}
          id='my-input'
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor='my-input'>Post Date</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name='date'
          value={date}
          id='my-input'
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor='my-input'>Creator User</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name='creatorUser'
          value={creatorUser}
          id='my-input'
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor='my-input'>Post Tags</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name='tags'
          value={tags}
          id='my-input'
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor='my-input'>Post Content</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name='content'
          value={content}
          id='my-input'
        />
      </FormControl>
      <FormControl>
        <Button
          variant='contained'
          color='primary'
          onClick={() => createPostDetails()}
        >
          Create Post
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
export default CreatePostPage
