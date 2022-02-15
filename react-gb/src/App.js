import './App.css';
import {Message} from "./components/Message/Message";
import {Chat} from "./components/Chat/Chat";
import {useEffect, useState} from "react";
import {MessageForm} from "./components/MessageForm/MessageForm";
import List from "@material-ui/core/List/List";

function App() {
  const [messageList, setMessageList] = useState([])
  const [chatsList, setChatsList] = useState([
      {name: 'Friends', id: 'chat-1'},
      {name: 'Nick', id: 'chat-2'},
      {name: 'Besties', id: 'chat-3'},
      {name: 'Work', id: 'chat-4'},
  ])

    useEffect(() => {
        let timeout
        if(messageList[messageList.length -1]?.author === 'me') {
            timeout = setTimeout(() => {
                setMessageList((prevMessageList) => [...prevMessageList, {text: `Your message is: ${prevMessageList[prevMessageList.length-1].text}`, author: 'robot', id: `msg-${Date.now()}`}])
            }, 1500)
        }

        return () => clearTimeout(timeout)
    }, [messageList])

    const renderMessages = () => {
        return messageList.map((message) =>
            <Message text={message.text} author={message.author} key={message.id} />)
    }

    const renderChats = () => {
        return chatsList.map((chat) =>
            <Chat name={chat.name} key={chat.id} />)
    }

    const handleSubmit = (messageText) => {
        setMessageList([...messageList, {text: messageText, author: 'me', id: `msg-${Date.now()}`}])

    }

  return (
    <div className="App">
        <div className='left_container'>
            <List className='list'>
                {renderChats()}
            </List>
        </div>
        <div className='right_container'>
            {renderMessages()}
            <MessageForm onSubmit={handleSubmit}/>
        </div>
    </div>
  );
}

export default App;
