import { BaseQuery } from '../../base.query';
import { UserEntity, UserEntityI } from './user.entity';

/** */
export default class TokenQuery extends BaseQuery {

    /** */
    public async getOne(): Promise<UserEntityI[]> {
        return await this.db(UserEntity.name)
            .select();
    }
}
