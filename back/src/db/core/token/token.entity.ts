export interface TokenEntityI {
    id: number;
    token: string;
    user_id: number;
    created_at: number;
    expires_on: number;
}

export const TokenEntity = {
    name: 'token',
};
