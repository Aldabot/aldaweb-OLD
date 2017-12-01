"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const path = require("path");
const build_include_paths_1 = require("./build-include-paths");
ava_1.default(`Should be a function.`, (t) => {
    const buildIncludePaths = build_include_paths_1.buildIncludePathsFactory(path);
    t.is(typeof buildIncludePaths, `function`);
});
ava_1.default(`Should return an array with node-sass include paths.`, (t) => {
    const buildIncludePaths = build_include_paths_1.buildIncludePathsFactory(path);
    const nodeSassIncludePaths = `/include/path1${path.delimiter}/include/path2`;
    const previouslyResolvedPath = `non-absolute/include/path/file.scss`;
    const expectedResult = [
        `/include/path1`,
        `/include/path2`,
    ];
    t.deepEqual(buildIncludePaths(nodeSassIncludePaths, previouslyResolvedPath), expectedResult);
});
ava_1.default(`Should return an array with node-sass include paths and include path from previous file.`, (t) => {
    const buildIncludePaths = build_include_paths_1.buildIncludePathsFactory(path);
    const nodeSassIncludePaths = `/include/path1${path.delimiter}/include/path2`;
    const previouslyResolvedPath = `/include/path3/file.scss`;
    const expectedResult = [
        `/include/path1`,
        `/include/path2`,
        `/include/path3`,
    ];
    t.deepEqual(buildIncludePaths(nodeSassIncludePaths, previouslyResolvedPath), expectedResult);
});
//# sourceMappingURL=build-include-paths.spec.js.map