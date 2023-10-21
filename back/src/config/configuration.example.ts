export default {
    server: {
        host: '0.0.0.0',
        port: 3001,
    },

    coreDB: {
        client: 'mysql2',
        connection: {
            host: 'mariadb',
            user: 'root',
            password: 'pass',
            database: 'core',
        },
    },

    jwt: {
        secret: 'secret',
    },
};
