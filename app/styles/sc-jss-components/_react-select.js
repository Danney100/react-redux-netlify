import { scBase, scColor } from './_variables';

const scVar = { ...scBase(), ...scColor() };

export const cssReactSelect = {
    control: styles => ({
        ...styles,
        borderColor: scVar.inputBackground,
        minHeight: `${40 / scVar.fontBase}em`,
        backgroundColor: scVar.inputBackground,
        ':hover': {
            borderColor: scVar.inputBackground,
        },
    }),
    valueContainer: styles => ({
        ...styles,
        paddingLeft: `${14 / scVar.fontBase}em`,
    }),
    placeholder: styles => ({
        ...styles,
        color: scVar.textPlaceholderColor,
    }),
    singleValue: styles => ({
        ...styles,
        color: scVar.textContent,
    }),
    indicatorSeparator: () => ({}), // disabled the indicator separator
    dropdownIndicator: styles => ({
        ...styles,
        color: scVar.textContent,
        ':hover': {
            color: scVar.textContent,
        },
        ' svg': {
            width: 17,
        },
    }),
    
};

export function cssSelectInvalid() {
    return {
        [`& .${scVar.prefix}react-select-invalid [class*="-control"]`]: {
            borderColor: scVar.errorColor,
        },
    };
}

export default { 
    cssSelectInvalid,
    cssReactSelect,
}