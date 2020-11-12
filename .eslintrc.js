module.exports = {
    env: {
        'browser': true,
        'es2021': true,
    },
    extends: [
        'plugin:react/recommended',
    ],
    parserOptions: {
        'ecmaFeatures': {
            'jsx': true,
        },
        'ecmaVersion': 12,
        'sourceType': 'module',
    },
    plugins: [
        'react',
    ],
    rules: {
        'linebreak-style': [0, 'error', 'windows'],
        semi: ['error', 'always'],
        'require-jsdoc': 'off',
        'indent': ['error', 4, {
            'SwitchCase': 1,
            'VariableDeclarator': 1,
            'outerIIFEBody': 1,
            'MemberExpression': 1,
            'ignoredNodes': ['TemplateLiteral *', 'JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXFragment', 'JSXOpeningFragment', 'JSXClosingFragment', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
        }],
        'react/react-in-jsx-scope': 'off',
        quotes: ['error', 'single']
    },
};
