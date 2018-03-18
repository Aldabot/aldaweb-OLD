import {
    createActions
} from 'reduxsauce';

const { Types, Creators } = createActions({
    setSaltedgeLoginStatus: { saltedgeLoginStatus: 'inProgress' }
}, {});

export default Creators;
