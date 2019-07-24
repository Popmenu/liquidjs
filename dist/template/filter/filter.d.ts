import Context from '../../context/context';
import { FilterImplOptions } from './filter-impl-options';
declare type KeyValuePair = [string?, string?];
declare type FilterArg = string | KeyValuePair;
export declare type FilterArgs = FilterArg[];
export declare class Filter {
    private name;
    private impl;
    private args;
    private static impls;
    constructor(name: string, args: FilterArgs, strictFilters: boolean);
    render(value: any, context: Context): Promise<any>;
    static register(name: string, filter: FilterImplOptions): void;
    static clear(): void;
}
export {};
