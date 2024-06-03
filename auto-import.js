export var imports = [
    {
        '~/di': ['inject'],
        '~/env': ['environment'],
        'fp-ts/lib/function': ['pipe'],
        'react': ['createContext'],
        'react-router-dom': ['createBrowserRouter'],
        'vitest-mock-extended': ['mock']
    }
];
export var importTypes = [
    {
        from: 'axios',
        imports: ['AxiosInstance'],
        type: true
    },
    {
        from: 'react',
        imports: ['FC', 'ReactNode'],
        type: true
    },
    {
        from: 'react-router-dom',
        imports: ['RouteObject'],
        type: true
    }
];
