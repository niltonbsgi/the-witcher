import { axios_fetch } from '../../services/service-request';

export function _Get_User_Access(url) {
    return (
        axios_fetch('', url)
        .then(
            (resp) => ({
                type: 'USER_ACCESS',
                payload: resp
            }),
            (err)=> ({
                type: 'ERROR',
                payload: err
            }))
        .catch( (err) => ({
            type: 'ERROR',
            payload: err
        }) )
    );
};
