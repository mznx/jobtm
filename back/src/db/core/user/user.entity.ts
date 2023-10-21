export interface UserEntityI {
    id: number;
    login: string;
    name: string
    pass: string;
}

export const UserEntity = {
    name: 'user',
};
