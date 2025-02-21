module.exports = {
    extends: ["@it-incubator/eslint-config", "plugin:storybook/recommended"],
    rules: {
        'no-console': ['warn', {allow: ['warn', 'error']}], "import/extensions": [
            "error",
            "ignorePackages",
            {
                "ts": "never",
                "tsx": "never"
            }
        ]
    },
}