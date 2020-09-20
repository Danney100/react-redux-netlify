export default function cssBreakpoint() {
    return {
        breakpoints: {
            // Define custom breakpoint values.
            // These will apply to Material-UI components that use responsive
            // breakpoints, such as `Grid` and `Hidden`. You can also use the
            // theme breakpoint functions `up`, `down`, and `between` to create
            // media queries for these breakpoints
            values: {
                xs: 0,
                sm: 576,
                md: 768,
                lg: 992,
                xl: 1200,
            }
        }
    }
}