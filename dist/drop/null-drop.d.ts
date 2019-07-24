import { Drop } from './drop';
import { IComparable } from './icomparable';
export declare class NullDrop extends Drop implements IComparable {
    equals(value: any): boolean;
    gt(): boolean;
    geq(): boolean;
    lt(): boolean;
    leq(): boolean;
    valueOf(): null;
}
