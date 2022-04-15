import {chatsReducer} from "../reducer";
import {ADD_CHAT, DELETE_CHAT} from "../actions";

describe("chatsReducer tests", () => {
    it('correct data with ADD_CHAT', () => {
        const addChat = {
            type: ADD_CHAT,
            id: 'chat-1',
            name: 'Friends'
        }

        const received = chatsReducer({ chats: []}, addChat)
        expect(received).toEqual({chats: [{id: addChat.id, name: addChat.name}]})
    })

    it('correct data with DELETE_CHAT', () => {
        const initialState = {
            chats: [
                {id: 'chat1', name: 'Friends'}
            ]
        }

        const deleteChat = {
            type: DELETE_CHAT,
            id: 'chat1'
        }

        const received = chatsReducer(initialState, deleteChat)
        expect(received).toEqual({chats: []})
    })
})
