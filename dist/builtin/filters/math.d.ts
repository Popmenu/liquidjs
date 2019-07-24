declare const _default: {
    'abs': (v: number) => number;
    'at_least': (v: number, n: number) => number;
    'at_most': (v: number, n: number) => number;
    'ceil': (v: number) => number;
    'divided_by': (v: number, arg: number) => number;
    'floor': (v: number) => number;
    'minus': (v: number, arg: number) => number;
    'modulo': (v: number, arg: number) => number;
    'round': (v: number, arg?: number) => number;
    'plus': (v: number, arg: number) => number;
    'sort_natural': typeof sortNatural;
    'times': (v: number, arg: number) => number;
};
export default _default;
declare function sortNatural(input: any[], property?: string): any[];
