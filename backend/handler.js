'use strict';
import dotenv from 'dotenv';
import { create } from 'apisauce';
dotenv.config();

////////////////////////////////////////////////////////////////////////////////
// SALTEDGE
////////////////////////////////////////////////////////////////////////////////

const saltedgeClientId = process.env.SALTEDGE_CLIENT_ID;
const saltedgeServiceSecret = process.env.SALTEDGE_SERVICE_SECRET;

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Client-id': 'QTPsSIxhOxBxIRf3IKzWew',
    'Service-secret': 'b6aeHuRHbvQouDqS_zB-R0cdXzKdvbi3kLnkMYE6EcU'
};
const saltedgeApi = create({
    baseURL: 'https://www.saltedge.com/api/v3',
    timeout: 1000,
    headers
});

const getLogin = (loginId) => {
    return saltedgeApi.get(`/logins/${loginId}`).then((response) => {
        console.log(JSON.stringify(response.data.data, null, 4));
        if (response.ok) {
            const data = response.data.data;
            return {
                finished: data.last_attempt.finished,
                succeededAt: data.last_attempt.success_at,
                failedAt: data.last_attempt.success_at
            };
        } else {
            if (response.problem == "CLIENT_ERROR") {
                throw response.data.error_class;
            } else  {
                throw response.problem;
            };
        }
    });
};


////////////////////////////////////////////////////////////////////////////////
// LAMBDA HANDLER
////////////////////////////////////////////////////////////////////////////////

export const hello = (event, context, callback) => {
    const loginId = event.body.loginId;

    getLogin(loginId).then((login) => {
        console.log(JSON.stringify(login, null, 4));
        if (login.finished) {
            if (login.succeededAt) {
                console.log("succeeded");
            } else {
                console.log("failed");
            }
        } else {
            console.log("in progress");
        }
    }).catch((error) => {
        console.log(JSON.stringify(error, null, 4));
    });

    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Go Serverless v1.0! Your function executed successfully!',
            input: event
        })
    };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};

