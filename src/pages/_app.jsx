import Head from 'next/head'
import PropTypes from 'prop-types'

import Footer from '../components/Footer'
import GlobalStyle from '../styles/globals'

const MyApp = ({ Component, pageProps }) => (
    <>
        <Head>
            <title>Portfolio</title>
            <link href="/favicon.ico" rel="icon" />
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
        <Footer />
    </>
)

MyApp.propTypes = {
    Component: PropTypes.func,
    pageProps: PropTypes.object,
}

export default MyApp
