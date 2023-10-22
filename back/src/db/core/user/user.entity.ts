export interface UserEntityI {
    id: number;
    login: string;
    name?: string
    pass: string;
    created_at: string;
}

export const UserEntity = {
    name: 'user',
};
