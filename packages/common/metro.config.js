const exclusionList = require("metro-config/src/defaults/exclusionList");
const {getMetroTools, getMetroAndroidAssetsResolutionFix} = require("react-native-monorepo-tools");

const monorepoMetroTools = getMetroTools();

const androidAssetsResolutionFix = getMetroAndroidAssetsResolutionFix();

module.exports = {
    resetCache: true,
    transformer: {
        publicPath: androidAssetsResolutionFix.publicPath,
        getTransformOptions: async () => ({
            transform: {
                experimentalImportSupport: false,
                inlineRequires: true
            }
        })
    },
    server: {
        enhanceMiddleware: (middleware) => androidAssetsResolutionFix.applyMiddleware(middleware)
    },
    watchFolders: monorepoMetroTools.watchFolders,
    resolver: {
        blockList: exclusionList(monorepoMetroTools.blockList),
        extraNodeModules: monorepoMetroTools.extraNodeModules
    }
};
