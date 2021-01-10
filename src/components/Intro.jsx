import { useViewportScroll } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import BackgroundBox from './intro/BackgroundBox'
import LogoImage from './intro/LogoImage'
import TextImage from './intro/TextImage'

const INTRO_CONTENT_HEIGHT = 250 // px

const StickyWrapper = styled.section({
    minHeight: '400vh',
    backgroundColor: 'purple',
    padding: `0 0 ${INTRO_CONTENT_HEIGHT * 4}px`,
    overflowx: 'hidden',
})

const StickyContent = styled.div({
    position: 'sticky',
    top: 0,
    bottom: 0,

    padding: `calc(50vh - ${INTRO_CONTENT_HEIGHT}px) 0 0`,

    display: 'flex',
    justifyContent: 'center',
})

const StyledIntro = () => {
    const [intro, setIntro] = useState({})

    useEffect(() => {
        const intro = document.getElementById('sticky-intro')
        const introHeight = intro.scrollHeight
        const windowHeight = window.document.activeElement.scrollHeight // {todo} Is it always correct element
        const introToTotalHeightRatio = introHeight / windowHeight
        setIntro({ height: introToTotalHeightRatio, width: intro.scrollWidth })
    }, [])

    const { scrollYProgress } = useViewportScroll()
    return (
        <StickyWrapper id="sticky-intro">
            <StickyContent>
                <BackgroundBox height={INTRO_CONTENT_HEIGHT} intro={intro} scrollYProgress={scrollYProgress} />
                <TextImage height={INTRO_CONTENT_HEIGHT} intro={intro} scrollYProgress={scrollYProgress} />
                <LogoImage height={INTRO_CONTENT_HEIGHT} intro={intro} scrollYProgress={scrollYProgress} />
            </StickyContent>
        </StickyWrapper>
    )
}

export default StyledIntro
