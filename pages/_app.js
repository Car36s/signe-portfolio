import '../styles/globals.css'

import PropTypes from 'prop-types'

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />

MyApp.propTypes = {
    Component: PropTypes.node,
    pageProps: PropTypes.object,
}

export default MyApp
