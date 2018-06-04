import * as env from './env';

export let current = function (): string {
    return 'https://' + env.getSite();
};

export let www = function (path?: string): string {
    return 'https://www.' + (env.isLab() ? 'lab.' : '') + env.getDomain() + (path ? path : '');
};