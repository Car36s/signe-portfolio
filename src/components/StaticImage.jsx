import PropTypes from 'prop-types'
import React from 'react'

const StaticImage = ({ alt, src, height }) => {
    return <img alt={alt} height={height ? `${height}px` : 'auto'} src={`/images/${src}`} />
}

StaticImage.propTypes = {
    alt: PropTypes.string,
    height: PropTypes.number,
    src: PropTypes.string.isRequired,
}
export default StaticImage
