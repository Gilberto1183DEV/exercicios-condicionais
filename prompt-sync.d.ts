declare module 'prompt-sync' {
    function promptSync(options?: { sigint: boolean }): (query?: string) => string;
    export = promptSync;
}
