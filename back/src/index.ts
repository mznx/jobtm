import fastify from 'fastify';

const server = fastify({
    logger: true,
});

(async () => {
    try {
        await server.listen({ port: 3001 });
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
})();
