import React from 'react'
import { Divider, makeStyles, List, ListItem, Typography } from '@material-ui/core'
import { useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';

const useStyles = makeStyles((theme) => ({
  container: {
    justifySelf: 'flex-end',
    overflow: 'hidden',
  },
  messageContainer: {  
    height: '20vh',
    overflowY: 'auto',
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': {
      display:'none'
    },
  }
}))

export default function Log() {
  const { container, messageContainer } = useStyles();
  const messages = useSelector(s => s.Log)
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current !== null) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  return (
    <div className={container}>
      <Divider />
      <List className={messageContainer}>
      {messages.map((message, index) => 
        <ListItem key={index}>
          <Typography>
            {message}
          </Typography>
        </ListItem>
      )}
      <div ref={messagesEndRef} />
    </List>
    </div>
  )
}
