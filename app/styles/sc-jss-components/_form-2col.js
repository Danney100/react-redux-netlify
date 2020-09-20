import { fade } from '@material-ui/core/styles/colorManipulator';
import { scBase, scColor } from './_variables';

const scVar = { ...scBase(), ...scColor() };

export function cssForm2Col() {
    return {
        '& .sc-form-2col__right__inline': {
            display: 'flex',
            flexDirection: 'column',
        },
        '& .sc-form-2col__right__inline .custom-control-inline + .custom-control-inline': {
            marginTop: `${30 / scVar.fontBase}em`,
        },
        '& .custom-control-inline': {
            paddingLeft: `${23 / scVar.fontBase}em`,
        },
        '& .custom-control-label': {
            color: scVar.textActive,
            fontFamily: 'SFUIText-Semibold',
        },
        [`& .custom-control-label::before,
        .custom-control-label::after`]: {
            top: `${5 / scVar.fontBase}em`,
            width: `${13 / scVar.fontBase}em`,
            height: `${13 / scVar.fontBase}em`,
        },
        '& .custom-control-label::before': {
            borderColor: scVar.textActive,
            backgroundColor: 'transparent',
        },
        '& .custom-radio .custom-control-label::after': {
            backgroundSize: '53%',
        },
        '& .custom-control-input:checked ~ .custom-control-label': {
            color: scVar.itemActive,
        },
        [`& .custom-control-input:checked ~ .custom-control-label::before,
        .custom-control-input[type="checkbox"]:indeterminate ~ .custom-control-label::before`]: {
            borderColor: scVar.itemActive,
            backgroundColor: scVar.itemActive,
        },
        '& .custom-control-input:focus:not(:checked) ~ .custom-control-label::before': {
            borderColor: fade(scVar.itemActive, 0.5),
        },
        '& .custom-control-input:not(:disabled):active ~ .custom-control-label::before': {
            backgroundColor: fade(scVar.itemActive, 0.2),
            borderColor: fade(scVar.itemActive, 0.2),
        },
        '& .custom-control-input:focus ~ .custom-control-label::before': {
            boxShadow: `0 0 0 0.2rem ${fade(scVar.itemActive, 0.3)}`,
        },
    };
}

export function cssForm2ColUpSm() {
    return {
        '& .sc-form-2col__right__inline .custom-control-inline + .custom-control.custom-control-inline': {
            marginTop: `${20 / scVar.fontBase}em`,
        },
    };
}

export function cssForm2ColUpLg() {
    return {
        '& .sc-form-2col__right__inline': {
            marginTop: `${15 / scVar.fontBase}em`,
            flexFlow: 'row wrap',
        },
        '& .sc-form-2col__right__inline .custom-control-inline + .custom-control.custom-control-inline': {
            marginTop: 0,
            marginLeft: `${40 / scVar.fontBase}em`,
        },
        [`& .sc-form-2col__right .form-control,
        .sc-form-2col__right .sc-form-2col__select-wrapper`]: {
            width: 450,
        }
    }
}

export default {
    cssForm2Col,
    cssForm2ColUpSm,
    cssForm2ColUpLg,
}