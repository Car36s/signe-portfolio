const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

// eslint-disable-next-line
module.exports = (phase, { defaultConfig }) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            /* development only config options here */
            devIndicators: {
                autoPrerender: true,
            },
            trailingSlash: false,
            reactStrictMode: true,
        }
    }

    return {
        /* config options for all phases except development here */
    }
}
