import fastify from 'fastify';
import PluginLoaderSys from './system/pluginLoader.system';

const server = fastify({
    logger: true,
});

server.register(PluginLoaderSys);

(async () => {
    try {
        await server.listen({ port: 3001 });
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
})();
