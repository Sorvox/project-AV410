//** Obj. definition */
export class optionsSerach {
    search!: string;
    length!: number;
    previousPageIndex!: number;
    pageIndex!: number;
    pageSize!: number;
    show!: boolean;
    result?: any;
    pageSizeOptions!: Array<number>;
    col1?: any;
    col2?: any;
    col3?: any;
}
enum TipeList {
    list = 0,
    mosaico = 1
}

export class listOptions {
    format!: TipeList;
}

export let opSearch: optionsSerach;

//** GENERAL VAR */
opSearch = {
    pageIndex: 1,
    previousPageIndex: 1,
    show: true,
    search: '',
    result: null,
    length: 1,
    pageSize: 10,
    pageSizeOptions: [10,15,20],
    col1: null,
    col2: null,
    col3: null
}