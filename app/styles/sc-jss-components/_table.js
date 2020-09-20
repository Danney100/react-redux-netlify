import { darken } from '@material-ui/core/styles/colorManipulator';
import { scBase, scColor } from './_variables';

const scVar = {
    ...scBase(),
    ...scColor(),
};

export function cssTable() {
    return {
        [`& .${scVar.prefix}table-responsive .react-bootstrap-table`]: {
            marginBottom: '1rem',
            overflowX: 'auto',
        },
        [`& .${scVar.prefix}table-responsive .react-bootstrap-table .table`]: {
            marginBottom: 0,
        },
        [`& .${scVar.prefix}table thead`]: {
            fontFamily: 'SFUIText-Semibold',
        },
    }
}

export function tableActionBtns() {
    return {
        '& .sc-btn-action': {
            display: 'flex',
            alignItems: 'center',
        },
        [`& .sc-btn-action:not(:disabled):focus .sc-btn-action__icon,
        .sc-btn-action:not(:disabled):hover .sc-btn-action__icon,
        .sc-btn-action:not(:disabled):active .sc-btn-action__icon`]: {
            backgroundColor: darken(scVar.actionBtnBg, 0.05),
        },
        '& .sc-btn-action__icon': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            marginRight: `calc(10 / ${scVar.fontBase} * 1em)`,
            width: `calc(24 / ${scVar.fontBase} * 1em)`,
            height: `calc(24 / ${scVar.fontBase} * 1em)`,
            backgroundColor: scVar.actionBtnBg,
        },
        '& .sc-btn-action__img': {
            width: `calc(12 / ${scVar.fontBase} * 1em)`,
            height: `calc(12 / ${scVar.fontBase} * 1em)`,
        },
    };
}

export default {
    cssTable,
    tableActionBtns,
}