import { scBase } from './_variables';

const scVar = {
    ...scBase(),
};

export function cssHeading() {
    return {
        [`& .${scVar.prefix}heading-bar`]: {
            marginBottom: `${ 30 / scVar.rootFontBase}rem`,
        },
        [`& .${scVar.prefix}heading`]: {
            fontFamily: 'DINCondensed-Bold',
        },
        [`& h1.${scVar.prefix}heading`]: {
            fontSize: `${ 32 / scVar.rootFontBase}rem`,
        },
        [`& h2.${scVar.prefix}heading`]: {
            fontSize: `${ 22 / scVar.rootFontBase}rem`,
        },
    }
}

export function cssHeadingUpSm() {
    return {
        [`& .${scVar.prefix}heading`]: {
            marginBottom: 0,
        },
    }
}

export default {
    cssHeading,
    cssHeadingUpSm,
}