"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function buildIncludePathsFactory(path) {
    return (nodeSassIncludePaths, previouslyResolvedPath) => {
        const includePathsSet = new Set(nodeSassIncludePaths.split(path.delimiter));
        if (path.isAbsolute(previouslyResolvedPath)) {
            includePathsSet.add(path.dirname(previouslyResolvedPath));
        }
        return [...includePathsSet];
    };
}
exports.buildIncludePathsFactory = buildIncludePathsFactory;
//# sourceMappingURL=build-include-paths.js.map