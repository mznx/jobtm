import { FastifyInstance } from 'fastify';
import fastifyPlugin from 'fastify-plugin';
import config from '../../config';

declare module 'fastify' {
    export interface FastifyInstance { conf: typeof config }
}

export default fastifyPlugin(async (fastify: FastifyInstance) => {
    fastify.decorate('conf', config);
});
