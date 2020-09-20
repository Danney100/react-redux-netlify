import { fade, darken, lighten } from '@material-ui/core/styles/colorManipulator';
import { scBase, scColor } from './_variables';

const scVar = {
    ...scBase(),
    ...scColor(),
};
const buttonFontBase = 13;

export function cssBtnBase() {
    return {
        [`& .${scVar.prefix}btn-group--bottom`]: {
            marginTop: `${30 / scVar.rootFontBase}rem`,
        },
        [`& .${scVar.prefix}btn`]: {
            height: `${40 / buttonFontBase}em`,
            fontFamily: 'SFUIText-Heavy',
            fontSize: `${buttonFontBase / scVar.rootFontBase}rem`,
        },
        [`& .${scVar.prefix}btn-group .${scVar.prefix}btn + .${scVar.prefix}btn`]: {
            marginTop: scVar.gridGutterWidth / 2,
        },
    };
}

export function cssBtnBaseUpSm() {
    return {
        [`& .${scVar.prefix}btn--w240`]: {
            width: 240,
        },
        [`& .${scVar.prefix}btn-group .${scVar.prefix}btn + .${scVar.prefix}btn`]: {
            marginTop: 0,
        },
        [`& .${scVar.prefix}btn-group .${scVar.prefix}btn`]: {
            marginLeft: scVar.gridGutterWidth / 2,
            marginRight: scVar.gridGutterWidth / 2,
        },
        [`& .${scVar.prefix}btn-group .${scVar.prefix}btn:first-child`]: {
            marginLeft: 0,
        },
        [`& .${scVar.prefix}btn-group .${scVar.prefix}btn:last-child`]: {
            marginRight: 0,
        },
    };
}

export function cssSuccessButton() {
    return {
        [`& .${scVar.prefix}btn--success`]: {
            color: '#fff',
            backgroundColor: scVar.successColor,
            borderColor: scVar.successColor,
        },
        [`& .${scVar.prefix}btn--success:not(:disabled):not(.disabled):focus,
        .${scVar.prefix}btn--success:not(:disabled):not(.disabled):hover,
        .${scVar.prefix}btn--success:not(:disabled):not(.disabled):active`]: {
            color: '#fff',
            backgroundColor: darken(scVar.successColor, 0.05),
            borderColor: darken(scVar.successColor, 0.06),
        },
        [`& .${scVar.prefix}btn--success:not(:disabled):not(.disabled):hover:focus,
        .${scVar.prefix}btn--success:not(:disabled):not(.disabled):active:focus`]: {
            boxShadow: `0 0 0 0.2rem ${fade(scVar.successColor, 0.5)}`,
        },
        [`& .${scVar.prefix}btn--success:disabled,
        .${scVar.prefix}btn--success.disabled`]: {
            color: '#fff',
            backgroundColor: lighten(scVar.successColor, 0.05),
            borderColor: lighten(scVar.successColor, 0.06),
        },
    };
}

export function cssCancelButton() {
    return {
        [`& .${scVar.prefix}btn--cancel`]: {
            color: '#fff',
            backgroundColor: scVar.textContent,
            borderColor: scVar.textContent,
        },
        [`& .${scVar.prefix}btn--cancel:not(:disabled):not(.disabled):focus,
        .${scVar.prefix}btn--cancel:not(:disabled):not(.disabled):hover,
        .${scVar.prefix}btn--cancel:not(:disabled):not(.disabled):active`]: {
            color: '#fff',
            backgroundColor: darken(scVar.textContent, 0.05),
            borderColor: darken(scVar.textContent, 0.06),
        },
        [`& .${scVar.prefix}btn--cancel:not(:disabled):not(.disabled):hover:focus,
        .${scVar.prefix}btn--cancel:not(:disabled):not(.disabled):active:focus`]: {
            boxShadow: `0 0 0 0.2rem ${fade(scVar.textContent, 0.5)}`,
        },
        [`& .${scVar.prefix}btn--cancel:disabled,
        .${scVar.prefix}btn--cancel.disabled`]: {
            color: '#fff',
            backgroundColor: lighten(scVar.textContent, 0.05),
            borderColor: lighten(scVar.textContent, 0.06),
        },
    };
}

export default { 
    cssBtnBase,
    cssBtnBaseUpSm,
    cssSuccessButton,
    cssCancelButton,
}