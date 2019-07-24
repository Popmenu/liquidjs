import DelimitedToken from './delimited-token';
import Token from './token';
import { NormalizedFullOptions } from '../liquid-options';
export default class TagToken extends DelimitedToken {
    name: string;
    args: string;
    constructor(raw: string, value: string, input: string, line: number, pos: number, options: NormalizedFullOptions, file?: string);
    static is(token: Token): token is TagToken;
}
