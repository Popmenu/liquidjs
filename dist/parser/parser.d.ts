import Liquid from '../liquid';
import ParseStream from './parse-stream';
import Token from './token';
import Tag from '../template/tag/tag';
import Output from '../template/output';
import HTML from '../template/html';
import ITemplate from '../template/itemplate';
export default class Parser {
    private liquid;
    constructor(liquid: Liquid);
    parse(tokens: Token[]): ITemplate[];
    parseToken(token: Token, remainTokens: Token[]): Tag | Output | HTML;
    parseStream(tokens: Token[]): ParseStream;
}
