import { FastifyInstance } from 'fastify';
import fastifyPlugin from 'fastify-plugin';
import * as crypto from './crypto.utils';

const data = {
    crypto: crypto,
};

declare module 'fastify' {
    export interface FastifyInstance { utils: typeof data }
}

export default fastifyPlugin(async (fastify: FastifyInstance) => {
    fastify.decorate('utils', data);
});
