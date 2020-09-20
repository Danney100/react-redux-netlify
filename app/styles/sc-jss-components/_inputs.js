import { scBase, scColor } from './_variables';

const scVar = {
    ...scBase(),
    ...scColor(),
};
const inputFontBase = 14;

export default function cssInputBase() {
    return {
        [`& .${scVar.prefix}input`]: {
            fontSize: `${inputFontBase /scVar.rootFontBase }rem`,
        },
        [`& .${scVar.prefix}input:not(textarea)`]: {
            height: `${40 / inputFontBase}em`,
        },
        [`& .${scVar.prefix}input::placeholder`]: {
            color: scVar.textPlaceholderColor,
        },
    }
}