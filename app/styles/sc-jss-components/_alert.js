import { scBase, scColor } from './_variables';

const scVar = {
    ...scBase(),
    ...scColor(),
};

export function cssAlert() {
    return {
        [`& .${scVar.prefix}alert`]: {
            marginTop: `${25 / scVar.rootFontBase}rem`,
            borderLeftWidth: 5,
            borderTopColor: scVar.borderColor,
            borderRightColor: scVar.borderColor,
            borderBottomColor: scVar.borderColor,
        },
        [`& .${scVar.prefix}alert__icon`]: {
            marginTop: `${2 / scVar.rootFontBase}rem`,
            marginRight: `1rem`,
        },
        [`& .${scVar.prefix}alert__circle`]: {
            width: `${37 / scVar.rootFontBase}rem`,
            height: `${38 / scVar.rootFontBase}rem`,
            borderRadius: '50%',
        },
        [`& .${scVar.prefix}alert__heading`]: {
            color: scVar.textContent,
        },
        [`& .${scVar.prefix}alert__link`]: {
            fontFamily: 'SFUIText-Semibold',
            color: scVar.textInactive,
        },
        [`& .${scVar.prefix}alert.alert-primary .alert-icon`]: {
            fontSize: `${11 / scVar.rootFontBase}rem`,
        },
    }
}

export function cssAlertUpMd() {
    return {
        [`& .${scVar.prefix}alert`]: {
            paddingLeft: `${36 / scVar.rootFontBase}rem`,
            paddingRight: `${36 / scVar.rootFontBase}rem`,
        },
        [`& .${scVar.prefix}alert__icon`]: {
            marginRight: `${25 / scVar.rootFontBase}rem`,
        },
    }
}

export default {
    cssAlert,
    cssAlertUpMd,
}