import { FastifyInstance, FastifyRegisterOptions } from 'fastify';
import { ModuleI } from '../interface/module.interface';

const parseModule = (modules: ModuleI[], fastify: FastifyInstance) => {
    for (const module of modules) {
        if (module.service && module.route) {
            const service = new module.service(fastify);
            const route = new module.route(service, fastify);
        }
        parseModule(module.import || [], fastify);
    }
};

export default (module: ModuleI) => {

    const modules = module.import;
    if (!modules?.length) throw new Error('module has no imports');

    return async <T>(fastify: FastifyInstance, options?: FastifyRegisterOptions<T>) => {
        parseModule(modules, fastify);
    };
};
