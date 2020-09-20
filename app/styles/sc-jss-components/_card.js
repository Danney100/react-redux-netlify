import { scBase, scColor } from './_variables';

const scVar = {
    ...scBase(),
    ...scColor(),
};

export function cssCard() {
    return {
        [`& .${scVar.prefix}card`]: {
            padding: `${4 / scVar.rootFontBase}rem 1rem`,
        },
        [`& .${scVar.prefix}card__heading`]: {
            marginTop: `${17 / scVar.rootFontBase}rem`,
            marginBottom: `${26 / scVar.rootFontBase}rem`,
            paddingBottom: `${15 / scVar.rootFontBase}rem`,
            borderBottom: `1px solid ${scVar.borderColor}`,
        },
    }
}

export function cssCardUpMd() {
    return {
        [`& .${scVar.prefix}card`]: {
            paddingLeft: `${25 / scVar.rootFontBase}rem`,
            paddingRight: `${25 / scVar.rootFontBase}rem`,
        },
        [`& .${scVar.prefix}card:not(:first-child)`]: {
            marginTop: `${30 / scVar.rootFontBase}rem`,
        },
        [`& .${scVar.prefix}card__full-row`]: {
            marginLeft: `${-25 / scVar.rootFontBase}rem`,
            marginRight: `${-25 / scVar.rootFontBase}rem`,
        },
        [`& .${scVar.prefix}card .sc-table thead tr th:first-child,
        .${scVar.prefix}card .sc-table tbody tr td:first-child`]: {
            paddingLeft: `${25 / scVar.rootFontBase}rem`,
        },
        [`& .${scVar.prefix}card .sc-table thead tr th:last-child,
        .${scVar.prefix}card .sc-table tbody tr td:last-child`]: {
            paddingRight: `${25 / scVar.rootFontBase}rem`,
        },
    }
}

export default {
    cssCard,
    cssCardUpMd,
}