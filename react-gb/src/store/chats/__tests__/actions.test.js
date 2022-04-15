import {ADD_CHAT, addChat, DELETE_CHAT, deleteChat} from "../actions";


describe('Chats actions tests', () => {
    it('Add chat test', () => {
        const chatId = 'chat-1'
        const chatName = 'Friends'
        const expected = {
            type: ADD_CHAT,
            id: chatId,
            name: chatName,
        }

        const received = addChat(chatId, chatName)

        expect(expected).toEqual(received)
    })

    it('Delete chat test', () => {
        const chatId = 'chat-1'
        const expected = {
            type: DELETE_CHAT,
            id: chatId,
        }

        const received = deleteChat(chatId)

        expect(expected).toEqual(received)
    })
})
