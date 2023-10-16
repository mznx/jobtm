import Fastify from 'fastify';
import AppModule from './app.module';
import ModuleLoaderSys from './system/moduleLoader.system';
import PluginLoaderSys from './system/pluginLoader.system';

const fastify = Fastify({
    logger: true,
});

(async () => {
    try {
        await fastify.register(PluginLoaderSys);
        await fastify.register(ModuleLoaderSys(AppModule));

        await fastify.listen(fastify.conf.server);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
})();
