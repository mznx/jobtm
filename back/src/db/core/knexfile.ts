import type { Knex } from 'knex';
import conf from '../../config/configuration';

const config: { [key: string]: Knex.Config } = {
    development: conf.database.core,
};

export default config;
