export const ADD_CHAT_MESSAGES = 'MESSAGES::ADD_CHAT_MESSAGES'
export const DELETE_CHAT_MESSAGES = 'MESSAGES::DELETE_CHAT_MESSAGES'
export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE'

export const addChatMessages = (chatId) => ({
    type: ADD_CHAT_MESSAGES,
    id: chatId
})

export const deleteChatMessages = (chatId) => ({
    type: DELETE_CHAT_MESSAGES,
    id: chatId
})

export const addMessage = (chatId, newMessage) => ({
    type: ADD_MESSAGE,
    id: chatId,
    message: newMessage
})

export const addMessageWithThunk = (chatId, newMessage) => (dispatch) => {
    dispatch(addMessage(chatId, newMessage))
    if(newMessage.author !== 'robot') {
        setTimeout(() => {
            dispatch(addMessage(chatId,
                {text: `Your message is: ${newMessage.text}`, author: 'robot', id: `msg-${Date.now()}`}))
        }, 1500)
    }
}
