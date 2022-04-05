import React from 'react'
import {Chats} from '../Chats'
import {render, screen} from '@testing-library/react'

describe('Chats tests', () => {
    it('Render list of chats, button', () => {
        const component = render(<Chats chats={[
        {id: 'chat1', name: 'Friends'},
        {id: 'chat2', name: 'Fam'},
        {id: 'chat3', name: 'Besties'},
        {id: 'chat4', name: 'Nick'},
            ]}/>)

        expect(component.getByText('Friends')).toBeDefined()
    })
})
