import { motion, useTransform } from 'framer-motion'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import StaticImage from '../StaticImage'

const MotionDiv = styled(motion.div)({
    zIndex: 1,
})

const LogoImage = ({ height, scrollYProgress, intro }) => {
    const animationEnd = intro.height * 0.66

    const scale = useTransform(scrollYProgress, [0, animationEnd], [1.5, 1])

    const y = useTransform(scrollYProgress, [0, animationEnd], [-800, 0])

    const x = useTransform(
        scrollYProgress,
        [0, animationEnd * 0.6, animationEnd],
        [-intro.width * 0.666, -intro.width * 0.333, 100]
    )
    return (
        <MotionDiv
            style={{
                scale,
                x,
                y,
            }}
        >
            <StaticImage alt="Signe P Studio, e-commerce photo and videography" height={height} src="logo-text.png" />
        </MotionDiv>
    )
}

LogoImage.propTypes = {
    height: PropTypes.number.isRequired,
    scrollYProgress: PropTypes.any,
    intro: PropTypes.shape({ height: PropTypes.number, width: PropTypes.number }).isRequired,
}
export default LogoImage
