import Fastify from 'fastify';
import dbPlugin from './db.plugin';
import conf from '../../config/configuration';

describe('DB plugin', () => {
    const fastify = Fastify();

    it('Должен быть успешно инициализирован', async () => {
        await fastify.register(dbPlugin, conf.database);
        expect(fastify.db).toBeDefined();
    });
});
