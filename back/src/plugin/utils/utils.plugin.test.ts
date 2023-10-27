import Fastify from 'fastify';
import utilsPlugin from './utils.plugin';

describe('Utils plugin', () => {
    const fastify = Fastify();

    it('Должен быть успешно инициализирован', async () => {
        await fastify.register(utilsPlugin);
        expect(fastify.utils).toBeDefined();
    });


    describe('crypto', () => {
        it('Должен быть определен', () => {
            expect(fastify.utils.crypto).toBeDefined();
        });


        describe('getNumCode', () => {
            it('Возвращаемый тип должен быть числом', () => {
                expect(typeof fastify.utils.crypto.getNumCode(1)).toBe('number');
            });

            it('Количество цифр в числе должно соответствовать параметру', () => {
                expect(fastify.utils.crypto.getNumCode(5).toString()).toHaveLength(5);
            });
        });


        describe('getHexCode', () => {
            it('Возвращаемый тип должен быть строкой', () => {
                expect(typeof fastify.utils.crypto.getHexCode(1)).toBe('string');
            });

            it('Количество hex значений в коде должно соответствовать параметру', () => {
                expect(fastify.utils.crypto.getHexCode(5)).toHaveLength(5 * 2);
            });
        });


        describe('getHash', () => {
            it('Возвращаемый тип должен быть строкой', () => {
                expect(typeof fastify.utils.crypto.getHash('abc')).toBe('string');
            });
        });
    });
});
