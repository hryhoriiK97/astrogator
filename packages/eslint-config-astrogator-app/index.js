module.exports = {
    plugins: ["react", "react-native"],
    extends: ["prettier", "plugin:react-hooks/recommended", "plugin:react-native/all"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        }
    },
    env: {
        "react-native/react-native": true
    },
    ignorePatterns: ["**/*.js"],
    rules: {
        "react-native/no-color-literals": "off",
        "react-native/no-raw-text": "off",
        "react-native/sort-styles": "off",
        "react-native/no-inline-styles": "off"
    }
};
