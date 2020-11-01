import { createGlobalStyle } from 'styled-components'

import { link } from './colors'

const GlobalStyle = createGlobalStyle({
    'html, body': {
        padding: 0,
        margin: 0,
        fontFamily:
            '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    },

    a: {
        textDecoration: 'none',
        color: link,
        ':visited, :hover, :active': { color: link },
    },

    '*': {
        'box-sizing': 'border-box',
    },
})

export default GlobalStyle
