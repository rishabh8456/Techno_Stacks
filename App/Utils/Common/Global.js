import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

export const ScreenWidth = width;
export const ScreenHeight = height;

export const BASE_URL = "https://devapi.fiiviq.com/users/commonlogin.json"

export const APPVERSION = '';
export const DEVICEMODAL = '';
export const DEVICENAME = '';
export const DEVICETYPE = '';
export const DEVICEUID = '';
export const DEVICEVERSION = '';
export const DEVICETOKEN = '';

export const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

export const URL_REGEX = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
