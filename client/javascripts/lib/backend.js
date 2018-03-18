import { create } from 'apisauce';

const backendAPI = create({baseURL: 'https://9u7wwafaq0.execute-api.eu-west-1.amazonaws.com/dev'});

export const isValidSessionId = (sessionId) => {
    return backendAPI.post("/isLoggedIn", {sessionId}).then((response) => {
        console.log(JSON.stringify(response, null, 4));
        return response.isValid;
    });
};

export const getSaltedgeLoginStatusCall = (loginId) => {
    return backendAPI.post("/loginStatus", {loginId}).then((response) => {
        return response.data.status;
    }).catch((error) => {
        throw error;
    });
};
