import Token from '../parser/token';
import ITemplate from '../template/itemplate';
declare type ParseToken = ((token: Token, remainTokens: Token[]) => ITemplate);
export default class ParseStream {
    private tokens;
    private handlers;
    private stopRequested;
    private parseToken;
    constructor(tokens: Token[], parseToken: ParseToken);
    on<T extends ITemplate | Token | undefined>(name: string, cb: (arg: T) => void): ParseStream;
    private trigger;
    start(): this;
    stop(): this;
}
export {};
