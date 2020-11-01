import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

import { lightGrey } from '../styles/colors'

const Container = styled.footer({
    width: '100%',
    height: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: lightGrey,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,

    img: {
        marginLeft: '0.5rem',
        height: '1em',
    },

    a: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
})
const Footer = () => (
    <Container>
        <Link
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            rel="noopener noreferrer"
            target="_blank"
        >
            <span>
                Powered by <img alt="Vercel Logo" src="/vercel.svg" />
            </span>
        </Link>
    </Container>
)

export default Footer
