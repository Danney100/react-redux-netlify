import { scBase, scColor } from './_variables';

const scVar = {
    ...scBase(),
    ...scColor(),
};

export function cssCollapseMenu() {
    return {
        [`& .${scVar.prefix}collapse-menu`]: {
            paddingLeft: 0,
            width: '100%',
            color: scVar.textActive,
            whiteSpace: 'initial',
            border: 0,
        },
        [`& .${scVar.prefix}collapse-menu.open .sc-collapse-label`]: {
            color: scVar.itemActive,
        },
        [`& .${scVar.prefix}collapse-arrow`]: {
            fontSize: '1rem',
        },
        [`& .${scVar.prefix}collapse-menu-lv2`]: {
            position: 'relative',
            paddingLeft: `${15 / scVar.rootFontBase}rem`,
            whiteSpace: 'initial',
        },
        [`& .${scVar.prefix}collapse-menu-lv2.open`]: {
            color: scVar.itemActive,
        },
        [`& .${scVar.prefix}collapse-menu-lv2.open .sc-collapse-menu-lv2__line`]: {
            position: 'absolute',
            top: 0,
            left: `${-15 / scVar.rootFontBase}rem`,
            bottom: 0,
            width: '5px',
            backgroundColor: scVar.itemActive,
        },
    }
}

export function cssCollapseMenuUpMd() {
    return {
        [`& .${scVar.prefix}collapse-menu-lv2.open .sc-collapse-menu-lv2__line`]: {
            left: `${-25 / scVar.rootFontBase}rem`,
        },
    }
}

export function cssCollapseMenuUpLg() {
    return {
        [`& .${scVar.prefix}collapse-panel-lv2`]: {
            position: 'absolute',
            top: 0,
            left: `calc(100% + 1px)`,
            zIndex: 1,
        },
        [`& .${scVar.prefix}collapse-panel-lv2 h2`]: {
            marginTop: `${10 / scVar.rootFontBase}rem`,
            marginBottom: `${15 / scVar.rootFontBase}rem`,
        },
    }
}

export default {
    cssCollapseMenu,
    cssCollapseMenuUpMd,
    cssCollapseMenuUpLg,
}