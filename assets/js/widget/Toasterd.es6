
export default class {
    constructor(message = 'Hello toaster') {
        this.element = this.buildElement(message)
        this.showing = false

        this.element.addEventListener("animationend", () => {
            if (!this.showing) {
                this.removeElement()
            }
        });
    }

    show() {
        this.showing = true

        this.element.classList.remove('toaster-hide')
        this.element.classList.add('toaster-show')

        this.injectElement()

        setTimeout(() => this.hide(), 2000)
    }

    hide() {
        this.showing = false

        this.element.classList.add('toaster-hide')
        this.element.classList.remove('toaster-show')
    }

    injectElement() {
        document.body.appendChild(this.element)
    }

    removeElement() {
        if (this.element.parentNode) {
            this.element.parentNode.removeChild(this.element)
        }
    }

    buildElement(message) {
        let div = document.createElement("div")
        
        div.classList.add('toaster')
        div.innerText = message
        
        return div
    }
}