import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

export default class AuthService {

    constructor(private fastify: FastifyInstance) {}

    public async login(req: FastifyRequest, rep: FastifyReply) {
        const authToken = this.fastify.jwt.sign({ a: 1 });
        const refreshToken = this.fastify.utils.crypto.getHexCode(64);
        rep.setCookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: true,
        });

        return {
            token: authToken,
        };
    }

}
