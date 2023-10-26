import Fastify from 'fastify';
import confPlugin from './conf.plugin';

describe('Conf plugin', () => {
    const fastify = Fastify();

    it('Должен быть успешно инициализирован', async () => {
        await fastify.register(confPlugin);
        expect(fastify.conf).toBeDefined();
    });
});
