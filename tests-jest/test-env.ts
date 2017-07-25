export function resetHtml() {
    initWithHtml('');
}

export function initWithHtml(html: string) {
    document.getElementsByTagName('html')[0].innerHTML = html;
}
