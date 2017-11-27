import * as fs from 'fs';
import * as ejs from 'ejs';

class TestEnv {
    container: HTMLElement;

    constructor() {
        document.body.innerHTML = '<div id="test-env-container"></div><div id="mq-state"></div>';

        this.container = document.getElementById('test-env-container');
    }

    setHTML(html: string): void {
        this.container.innerHTML = html;
    }

    setHTMLFromEJSTemplate(filePath: string, data?) {
        let dataEjs = data || {};

        if (!dataEjs.rootPath) {
            dataEjs.rootPath = '../../../..'
        }

        this.setHTML(ejs.render(fs.readFileSync(filePath, "utf8"), dataEjs, {
            filename: filePath
        }));
    }
}

export let testEnv = new TestEnv();