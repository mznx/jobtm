import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import AuthService from './auth.service';

export default class AuthRoute {

    constructor(authService: AuthService, fastify: FastifyInstance) {
        const route = '/auth';

        fastify.post(`${route}/login`, async (req: FastifyRequest, rep: FastifyReply) => {
            return await authService.login(req, rep);
        });
    }
}
