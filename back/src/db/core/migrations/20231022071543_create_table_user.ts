import { Knex } from 'knex';
import { UserEntity } from '../user/user.entity';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTableIfNotExists(UserEntity.name, (table) => {
        table.increments('id')
            .comment('ID');

        table.string('login', 128)
            .notNullable()
            .comment('Логин');

        table.string('name', 128)
            .comment('Отображаемое имя');

        table.string('pass', 255)
            .notNullable()
            .comment('Хеш пароля');

        table.dateTime('created_at')
            .notNullable()
            .defaultTo(knex.raw('CURRENT_TIMESTAMP()'))
            .comment('Дата создания');
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable(UserEntity.name);
}
