import { motion, useTransform } from 'framer-motion'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import StaticImage from '../StaticImage'

const MotionDiv = styled(motion.div)({
    clipPath: 'circle(50% at center)',
})

const LogoImage = ({ height, scrollYProgress, intro }) => {
    const animationEnd = intro.height * 0.66

    const scale = useTransform(scrollYProgress, [animationEnd / 2, animationEnd], [0, 1])

    const y = useTransform(scrollYProgress, [0, animationEnd], [-300, 0])

    const x = useTransform(
        scrollYProgress,
        [0, animationEnd * 0.2, animationEnd],
        [intro.width * 0.666, intro.width * 0.333, -100]
    )
    return (
        <MotionDiv
            style={{
                scale,
                x,
                y,
            }}
        >
            <StaticImage alt="Signe" height={height} src="logo-image.jpg" />
        </MotionDiv>
    )
}

LogoImage.propTypes = {
    height: PropTypes.number.isRequired,
    scrollYProgress: PropTypes.any,
    intro: PropTypes.shape({ height: PropTypes.number, width: PropTypes.number }).isRequired,
}
export default LogoImage
