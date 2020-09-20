import { scBase, scColor } from './_variables';

const scVar = {
    ...scBase(),
    ...scColor(),
};
const fontBase = 14;

export function cssActionDropdown() {
    return {
        [`& .${scVar.prefix}action-dropdown .btn`]: {
            paddingLeft: 0,
            paddingRight: 0,
        },
        [`& .${scVar.prefix}action-dropdown .dropdown-toggle`]: {
            display: 'flex',
            alignItems: 'center',
            color: scVar.successColor,
        },
        [`& .${scVar.prefix}action-dropdown .dropdown-toggle::after`]: {
            marginLeft: `${10 / fontBase}em`,
            borderTopWidth: `${6 / fontBase}em`,
            borderLeftWidth: `${5 / fontBase}em`,
            borderRightWidth: `${5 / fontBase}em`,
        },
        [`& .${scVar.prefix}action-dropdown .dropdown-menu`]: {
            border: 0,
            boxShadow: `0 10px 30px 0 ${scVar.dropdownShadowColor}`,
        },
        [`& .${scVar.prefix}action-dropdown .dropdown-item`]: {
            color: scVar.textContent,
            padding: `${6 / fontBase}em ${25 / fontBase}em`,
        },
        [`& .${scVar.prefix}action-dropdown .dropdown-item.active,
        .${scVar.prefix}action-dropdown .dropdown-item:active`]: {
            color: scVar.successColor,
            backgroundColor: 'transparent',
        },
    }
}

export default {
    cssActionDropdown,
}