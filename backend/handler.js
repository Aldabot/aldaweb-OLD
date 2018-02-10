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
    return saltedgeApi.get(`/logins?from_id={loginId}`);
};


////////////////////////////////////////////////////////////////////////////////
// LAMBDA HANDLER
////////////////////////////////////////////////////////////////////////////////

export const hello = (event, context, callback) => {
    console.log(JSON.stringify(event, null, 4));
    console.log(JSON.stringify(context, null, 4));

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
