import { Drop } from '../drop/drop';
import { NormalizedFullOptions } from '../liquid-options';
import { Scope } from './scope';
export default class Context {
    private scopes;
    private registers;
    environments: Scope;
    opts: NormalizedFullOptions;
    constructor(ctx?: object, opts?: NormalizedFullOptions);
    getRegister(key: string, defaultValue?: {}): any;
    setRegister(key: string, value: any): any;
    getAll(): Scope;
    get(path: string): Promise<Scope>;
    push(ctx: object): number;
    pop(): import("./scope").PlainObject | Drop | undefined;
    front(): Scope;
    private findScope;
    private parseProp;
}
