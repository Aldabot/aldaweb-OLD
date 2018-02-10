'use strict';
import dotenv from 'dotenv';
import mysql from 'mysql';
import Promise from 'bluebird';
Promise.promisifyAll(require("mysql/lib/Connection").prototype); // Promisfy MySQL callback-hell
Promise.promisifyAll(require("mysql/lib/Pool").prototype);
dotenv.config();

////////////////////////////////////////////////////////////////////////////////
// MYSQL
////////////////////////////////////////////////////////////////////////////////

const pool = mysql.createPool({
    connectionLimit: 5,
    host: process.env.RDS_HOST,
    user: process.env.RDS_USER,
    password: process.env.RDS_PASSWORD,
    database: process.env.RDS_DB
});

const getConnection = (pool) => {
    return pool.getConnectionAsync().disposer((connection) => {
        connection.release();
    });
};

const query = (pool, sql, values) => {
    return Promise.using(getConnection(pool), (connection) => {
        return connection.queryAsync(sql, values);
    });
};

const isValidSessionId = (sessionId) => {
    const sql = "SELECT EXISTS(SELECT session_id FROM persons WHERE session_id = ? LIMIT 1) AS isValid";
    return query(pool, sql, [sessionId]).then((response) => {
        return response[0].isValid ? true : false;
    });
};

////////////////////////////////////////////////////////////////////////////////
// LAMBDA ANDLER
////////////////////////////////////////////////////////////////////////////////

export const index = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;

    const body = JSON.parse(event.body);
    // const body = event.body;

    const sessionId = body.sessionId;

    isValidSessionId(sessionId).then((isValid) => {
        respond(callback, event, isValid);
    }).catch((error) => {
        console.log(JSON.stringify(error, null, 4));
        respondError(callback, event, error);
    });
};


////////////////////////////////////////////////////////////////////////////////
// LAMBDA RESPONSES
////////////////////////////////////////////////////////////////////////////////

const respond = (callback, event, isValid) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            isValid,
            input: event
        })
    };

    callback(null, response);
};

const respondError = (callback, event, error) => {
    const response = {
        statusCode: 500,
        body: JSON.stringify({
            error,
            input: event
        })
    };

    callback(null, response);
};
