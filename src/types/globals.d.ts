interface Obj {
    [key: string]: any;
}

declare let BI: Obj & import('@fui/core').BI;
declare const Fix: Obj;

declare interface String {
    replaceAll(regx: string | RegExp, callback: (str: string) => void): string;
}
