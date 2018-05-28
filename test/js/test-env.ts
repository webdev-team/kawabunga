import * as fs from 'fs';
import * as ejs from 'ejs';

export namespace testEnv {
    let container: HTMLElement;

    document.body.innerHTML = '<div id="test-env-container"></div><div id="mq-state"></div>';

    container = document.getElementById('test-env-container');

    export let setHTML = function(html: string): void {
        this.container.innerHTML = html;
    }

    export let setHTMLFromEJSTemplate = function(filePath: string, data?) {
        let dataEjs = data || {};

        if (!dataEjs.rootPath) {
            dataEjs.rootPath = '../../../..'
        }

        this.setHTML(ejs.render(fs.readFileSync(filePath, "utf8"), dataEjs, {
            filename: filePath
        }));
    }
}