import React from 'react'
import styled from 'styled-components'

import StaticImage from './StaticImage'

const INTRO_HEIGHT = 250 // px

const StickyWrapper = styled.section({
    minHeight: '200vh',
    backgroundColor: 'purple',
    padding: `0 0 ${INTRO_HEIGHT}px`,
})

const StickyContent = styled.div({
    position: 'sticky',
    top: 0,
    bottom: 0,

    padding: `calc(50vh - ${INTRO_HEIGHT}px) 0 0`,

    display: 'flex',
    justifyContent: 'center',
})

const TextImage = styled.div({
    position: 'absolute',
})
const LogoImage = styled.div({
    clipPath: 'circle(50% at center)',
    position: 'absolute',
})

const StyledIntro = () => (
    <StickyWrapper>
        <StickyContent>
            <LogoImage>
                <StaticImage alt="Signe" height={INTRO_HEIGHT} src="logo-image.jpg" />
            </LogoImage>
            <TextImage>
                <StaticImage
                    alt="Signe P Studio, e-commerce photo and videography"
                    height={INTRO_HEIGHT}
                    src="logo-text.png"
                />
            </TextImage>
        </StickyContent>
    </StickyWrapper>
)

export default StyledIntro
