"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const path = require("path");
const sass_url_variants_1 = require("./sass-url-variants");
ava_1.default(`Should be a function.`, (t) => {
    const sassUrlVariants = sass_url_variants_1.sassUrlVariantsFactory(path);
    t.is(typeof sassUrlVariants, `function`);
});
ava_1.default(`Should return the unmodified URL in an array if no file is specified.`, (t) => {
    const sassUrlVariants = sass_url_variants_1.sassUrlVariantsFactory(path);
    const urlArray = sassUrlVariants(`some-package-name`, [`.scss`, `.sass`]);
    t.deepEqual(urlArray, [`some-package-name`]);
});
ava_1.default(`Should return an array of URL variants.`, (t) => {
    const sassUrlVariants = sass_url_variants_1.sassUrlVariantsFactory(path);
    const urlArray = sassUrlVariants(path.join(`some-package-name`, `some`, `file`), [`.scss`, `.sass`]);
    t.deepEqual(urlArray, [
        path.join(`some-package-name`, `some`, `file`),
        path.join(`some-package-name`, `some`, `file.scss`),
        path.join(`some-package-name`, `some`, `_file.scss`),
        path.join(`some-package-name`, `some`, `file.sass`),
        path.join(`some-package-name`, `some`, `_file.sass`),
    ]);
});
//# sourceMappingURL=sass-url-variants.spec.js.map