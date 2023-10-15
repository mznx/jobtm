import fastify from 'fastify';
import AppModule from './app.module';
import ModuleLoaderSys from './system/moduleLoader.system';
import PluginLoaderSys from './system/pluginLoader.system';

const server = fastify({
    logger: true,
});

server.register(PluginLoaderSys);
server.register(ModuleLoaderSys(AppModule));

(async () => {
    try {
        await server.listen({ port: 3001 });
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
})();
