import React from 'react'
import {Chats} from '../Chats'
import {render, screen} from '@testing-library/react'
import {MemoryRouter} from "react-router-dom";

describe('Chats tests', () => {
    it('Render list of chats, button', () => {
        const component = render(<MemoryRouter><Chats chats={[
        {id: 'chat1', name: 'Friends'},
        {id: 'chat2', name: 'Fam'},
        {id: 'chat3', name: 'Besties'},
        {id: 'chat4', name: 'Nick'},
            ]}
        handleOpen={() => {}}
        open={true}
        handleClose={() => {}}
        name={''}
        handleChange={() => {}}
        handleSubmit={() => {}}
        /></MemoryRouter>)

        expect(component.getByText('Friends')).toBeDefined()
    })
})
