import { fade } from '@material-ui/core/styles/colorManipulator';

const textActive = '#403839';

export function scBase() {
    return {
        prefix: 'sc-',
        rootFontBase: 16,
        fontBase: 14,
        gridGutterWidth: 30, // related to bootstrap variable: $grid-gutter-width
    }
}

export function scColor() {
    return {
        infoColor: '#1eb7ff',
        successColor: '#27bfa3',
        errorColor: '#e94b35',
        textActive,
        textInactive: fade(textActive, 0.5),
        inputBackground: '#f7f7f7',
        textPlaceholderColor: '#adaaaa',
        textContent: '#6c6766',
        actionBtnBg: '#e6e0dd',
        itemActive: '#de8b6d',
        borderColor: '#ebe9e8',
        dropdownShadowColor: '#d9d7d6',
    };
}

export default { scBase, scColor }