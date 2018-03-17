import { renderToString } from 'react-dom/server';
import React from 'react';
import { matchPath, StaticRouter } from 'react-router-dom';

import routes from './routes.js';
import renderFullPage from './renderFullPage';

export default function router(req, res) {

    const match = routes.reduce((acc, route) => matchPath(req.url, { path: route, exact: true}) || acc, null);

    if(!match) {
        res.status(404).send('page not fond');
        return;
    }

    return res.status(200).send(renderFullPage(html));
}
