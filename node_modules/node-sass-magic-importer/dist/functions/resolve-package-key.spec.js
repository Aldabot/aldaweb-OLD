"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const resolve_package_key_1 = require("./resolve-package-key");
ava_1.default(`Should be a function.`, (t) => {
    const resolvePackageKey = resolve_package_key_1.resolvePackageKeyFactory();
    t.is(typeof resolvePackageKey, `function`);
});
ava_1.default(`Should find the first existing key in an object from an array of keys.`, (t) => {
    const resolvePackageKey = resolve_package_key_1.resolvePackageKeyFactory();
    const packageJson = {
        main: `some/file.js`,
        sass: `some/file.scss`,
    };
    const packageKeys = [
        `sass`,
        `main`,
    ];
    const newPackageJson = resolvePackageKey(packageJson, packageKeys);
    const expectedResult = {
        main: `some/file.scss`,
        sass: `some/file.scss`,
    };
    t.deepEqual(newPackageJson, expectedResult);
});
//# sourceMappingURL=resolve-package-key.spec.js.map