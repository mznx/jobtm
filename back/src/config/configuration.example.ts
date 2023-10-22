export default {
    server: {
        host: '0.0.0.0',
        port: 3001,
    },

    database: {
        core: {
            client: 'mysql2',
            connection: {
                host: 'mariadb',
                user: 'root',
                password: 'pass',
                database: 'core',
            },
            pool: {
                min: 2,
                max: 10,
            },
        },
    },

    jwt: {
        secret: 'secret',
    },
};
