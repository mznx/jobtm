/* eslint-disable @typescript-eslint/no-explicit-any */

import { FastifyInstance } from 'fastify';

export interface ModuleI {
    import?: ModuleI[];
    route?: Route;
    service?: Service;
}

export interface Route {
    new (service: any, fastify: FastifyInstance): any; // TODO добавить типизацию
}

export interface Service {
    new (fastify: FastifyInstance): any;
}
