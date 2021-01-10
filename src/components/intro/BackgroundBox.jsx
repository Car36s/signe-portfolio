import { motion, useTransform } from 'framer-motion'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const MotionDiv = styled(motion.div)({
    width: '500px',
    position: 'absolute',
    background: 'pink',
    zIndex: 0,
})

const BackgroundBox = ({ height, scrollYProgress, intro }) => {
    const animationEnd = intro.height * 0.66

    const scale = useTransform(scrollYProgress, [0, animationEnd, animationEnd * 1.3, animationEnd * 1.6], [2, 1, 1, 2])

    const y = useTransform(scrollYProgress, [0, animationEnd], [800, 0])

    const opacity = useTransform(
        scrollYProgress,
        [0, animationEnd, animationEnd * 1.2, animationEnd * 1.5],
        [0, 1, 1, 0]
    )
    return (
        <MotionDiv
            style={{
                height,
                scale,
                opacity,
                y,
            }}
        />
    )
}

BackgroundBox.propTypes = {
    height: PropTypes.number.isRequired,
    scrollYProgress: PropTypes.any,
    intro: PropTypes.shape({ height: PropTypes.number, width: PropTypes.number }).isRequired,
}
export default BackgroundBox
