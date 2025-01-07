export default {
    endOfLine: 'auto',
    overrides: [
        {
            files: ['*.json5'],
            options: {
                quoteProps: 'preserve',
                singleQuote: false,
            },
        },
    ],
    plugins: ['prettier-plugin-tailwindcss'],
    tabWidth: 4,
    printWidth: 120,
    proseWrap: 'never',
    semi: true,
    singleQuote: true,
    trailingComma: 'all',
};
