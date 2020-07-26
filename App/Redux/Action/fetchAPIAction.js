import { FETCH_DATA_LOADING, FETCH_DATA_SUCCESS, FETCH_DATA_FAILED } from './actionConst';
import * as Global from '../../Utils/Common/Global'

export function fetchDataFromAPI(data) {
    return async function (dispatch) {
        dispatch({ type: FETCH_DATA_LOADING })
        try {
            fetch(Global.BASE_URL, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: data.username,
                    password: data.password,
                    url: data.url,
                    multiple_user_login: {
                        app_version: Global.APPVERSION,
                        "device_model": Global.DEVICEMODAL,
                        "device_name": Global.DEVICENAME,
                        "device_token": Global.DEVICETOKEN,
                        "device_type": Global.DEVICETYPE,
                        "device_uid": Global.DEVICEUID,
                        "device_version": Global.DEVICEVERSION
                    }
                })
            })
                .then((response) => response.json())
                .then((responseJson) => {
                    if (responseJson.code == 200) {
                        dispatch({ type: FETCH_DATA_SUCCESS, data: responseJson.data.Users })
                    } else {
                        dispatch({ type: FETCH_DATA_FAILED, message: responseJson.message })
                    }
                })
                .catch((error) => {
                    dispatch({ type: FETCH_DATA_FAILED, message: error })
                });
        } catch (error) {
            dispatch({ type: FETCH_DATA_FAILED, message: error })
        }
    }
}

