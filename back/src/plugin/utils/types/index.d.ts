import * as crypto from '../crypto.utils';

declare module 'fastify' {
    export interface FastifyInstance {
        utils: {
            crypto: typeof crypto,
        }
    }
}
