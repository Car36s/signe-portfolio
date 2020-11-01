import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

import { lightGrey, white } from '../styles/colors'

const Container = styled.nav({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '60px',
    boxShadow: '0 2px 2px -1px rgba(0,0,0,0.2)',

    '> a': {
        display: 'flex',
        flex: '1 1 auto',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        transition: 'color 250ms ease-in-out, background-color 250ms ease-in-out',

        '&:hover': {
            color: white,
            backgroundColor: lightGrey,
        },
    },
})

const Navigation = () => (
    <Container>
        <Link href="/">Home</Link>
        <Link href="/eesti">Eesti</Link>
        <Link href="/kissa">Kissa</Link>
    </Container>
)

export default Navigation
