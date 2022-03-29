export type DataState = {
    data?: string,
    loading?: boolean,
    success?: boolean
};

export enum DataActionsType {
    Request = 'DATA_SEND_REQUEST',
    Success = 'DATA_SEND_SUCCESS',
    Error = 'DATA_SEND_FAIL'
};

export type DataActions = 
    | { type: DataActionsType.Request }
    | { type: DataActionsType.Success, payload: string }
    | { type: DataActionsType.Error, payload: string }