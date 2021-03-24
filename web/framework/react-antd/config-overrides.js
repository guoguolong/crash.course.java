const { override, fixBabelImports, addLessLoader } = require("customize-cra");
const path = require('path')

const loaderOptions = {
    modifyVars: {
        'hack': `true; @import "${path.join(__dirname, './src/antd/theme.less')}";`
    },
    javascriptEnabled: true,
}
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader(loaderOptions)
);