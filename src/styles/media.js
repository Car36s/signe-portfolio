const sizes = {
    mobileS: 320,
    mobileM: 375,
    mobileL: 425,
    tablet: 768,
    laptop: 1024,
    laptopL: 1440,
    desktop: 2560,
}

const PREFIX = '@media only screen and'

export const media = Object.keys(sizes).reduce(
    (acc, label) => {
        acc.min[label] = `${PREFIX} (min-width: ${sizes[label]}px)`
        acc.max[label] = `${PREFIX} (max-width: ${sizes[label]}px)`

        return acc
    },
    { min: [], max: [] }
)
