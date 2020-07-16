interface Obj {
    [key: string]: any;
}

declare let BI: Obj & import('fineui').BI & {
    FormulaJSONs: {
        def: string;
        name: string;
        type: string;
    }[];
    FormulaCollections: string[];
};
declare const Fix: Obj;

declare interface String {
    replaceAll(regx: string, callback: (str: string) => void): string;
}
