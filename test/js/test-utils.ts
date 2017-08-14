export function click(target: HTMLElement): void {
    fireMouseEvent('click', target);
}

export function fireMouseEvent(type: string, target: HTMLElement): void {
    let mouseEvent = global.document.createEvent("MouseEvents");

    mouseEvent.initEvent(type, true, true);
    target.dispatchEvent(mouseEvent);
}


