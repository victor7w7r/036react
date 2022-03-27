export type TData = {
    data?: string,
};

export type DataState = {
    dataSend?: TData
    loading?: boolean;
    success?: boolean;
};

export enum ActionTypeData {
    DATA_SEND_REQUEST = 'DATA_SEND_REQUEST',
    DATA_SEND_SUCCESS = 'DATA_SEND_SUCCESS',
    DATA_SEND_FAIL = 'DATA_SEND_FAIL',
};

export type actionDataRequest = {
    type: ActionTypeData.DATA_SEND_REQUEST;
};

export type actionDataSuccess = {
    type: ActionTypeData.DATA_SEND_SUCCESS;
    payload: TData;
};

export type actionDataFail = {
    type: ActionTypeData.DATA_SEND_FAIL;
    payload: TData;
};

export type ActionData = actionDataRequest | actionDataSuccess | actionDataFail;