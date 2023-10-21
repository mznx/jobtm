import { BaseQuery } from '../../base.query';
import { TokenEntity, TokenEntityI } from './token.entity';

/** */
export default class TokenQuery extends BaseQuery {

    /** */
    public async getOne(): Promise<TokenEntityI[]> {
        return await this.db(TokenEntity.name)
            .select();
    }

    /** */
    public async add(data: Partial<TokenEntityI>): Promise<number[]> {
        return await this.db(TokenEntity.name)
            .insert(data);
    }
}
