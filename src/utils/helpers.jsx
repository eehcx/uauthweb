
export function generateFontSizes(fontSize) {
    const xl = parseInt(fontSize, 10);

    return {
        base: `${xl - 20}px`,
        sm: `${xl - 15}px`,
        md: `${xl - 10}px`,
        lg: `${xl - 5}px`,
        xl: `${xl}px`
    };
}

