import { axios_fetch } from '../../services/service-request';

export const USER_ACCESS = 'USER_ACCESS'
export const ERROR = 'ERROR'

export function _Get_User_Access(url) {
    return (
        axios_fetch('GET', url)
        .then(
            (resp) => ({
                type: USER_ACCESS,
                payload: resp
            }),
            (err)=> ({
                type: ERROR,
                payload: err
            }))
        .catch( (err) => ({
            type: ERROR,
            payload: err
        }) )
    );
};
