"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const path = require("path");
const sinon = require("sinon");
const resolve_package_url_1 = require("./resolve-package-url");
const sass_url_variants_1 = require("./sass-url-variants");
ava_1.default.beforeEach((t) => {
    const sassUrlVariants = sass_url_variants_1.sassUrlVariantsFactory(path);
    t.context.dep = {
        sassUrlVariants,
    };
});
ava_1.default(`Should be a function.`, (t) => {
    const resolveStub = { sync: sinon.stub().returns(`resolved/path.scss`) };
    const resolvePackageKeysStub = sinon.stub().returns({ main: `some/file.scss` });
    const resolvePackageUrl = resolve_package_url_1.resolvePackageUrlFactory(resolveStub, resolvePackageKeysStub, t.context.dep.sassUrlVariants);
    t.is(typeof resolvePackageUrl, `function`);
});
ava_1.default(`Should resolve the path to a file in the node_modules directory.`, (t) => {
    const url = `some/file.scss`;
    const extensions = [`.scss`];
    const cwd = `/`;
    const packageKeys = [`main`];
    const resolveStub = { sync: sinon.stub().returns(`resolved/path.scss`) };
    const resolvePackageKeysStub = sinon.stub().returns({ main: `some/file.scss` });
    const sassUrlVariantsStub = sinon.stub(t.context.dep, `sassUrlVariants`).returns([
        `some/url/variant.scss`,
    ]);
    const resolvePackageUrl = resolve_package_url_1.resolvePackageUrlFactory(resolveStub, resolvePackageKeysStub, sassUrlVariantsStub);
    const file = resolvePackageUrl(url, extensions, cwd, packageKeys);
    t.true(sassUrlVariantsStub.calledWith(url, extensions));
    t.true(resolveStub.sync.calledWith(`some/url/variant.scss`));
    t.is(file, `resolved/path.scss`);
});
//# sourceMappingURL=resolve-package-url.spec.js.map