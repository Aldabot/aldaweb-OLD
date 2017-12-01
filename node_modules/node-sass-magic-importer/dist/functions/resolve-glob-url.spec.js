"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const glob = require("glob");
const path = require("path");
const sinon = require("sinon");
const resolve_glob_url_1 = require("./resolve-glob-url");
ava_1.default(`Should be a function.`, (t) => {
    const resolveGlobUrl = resolve_glob_url_1.resolveGlobUrlFactory(glob, path);
    t.is(typeof resolveGlobUrl, `function`);
});
ava_1.default(`Should only handle URLs containing glob patterns.`, (t) => {
    const globStub = {
        hasMagic: sinon.stub().returns(false),
        sync: sinon.stub().returns([]),
    };
    const resolveGlobUrl = resolve_glob_url_1.resolveGlobUrlFactory(globStub, path);
    const result = resolveGlobUrl(`test/url`, [`/test/include/path`]);
    t.true(globStub.hasMagic.called);
    t.deepEqual(result, []);
});
ava_1.default(`Should return found glob file paths.`, (t) => {
    const globStub = {
        hasMagic: sinon.stub().returns(true),
        sync: sinon.stub().returns([`path/1.scss`, `path/2.scss`]),
    };
    const resolveGlobUrl = resolve_glob_url_1.resolveGlobUrlFactory(globStub, path);
    const result = resolveGlobUrl(`test/url/**/*.scss`, [`/test/include/path`]);
    if (/^win/.test(process.platform)) {
        t.deepEqual(result, [`C:/test/include/path/path/1.scss`, `C:/test/include/path/path/2.scss`]);
    }
    else {
        t.deepEqual(result, [`/test/include/path/path/1.scss`, `/test/include/path/path/2.scss`]);
    }
});
//# sourceMappingURL=resolve-glob-url.spec.js.map