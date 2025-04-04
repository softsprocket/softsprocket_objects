export class HTMLElementWrapper {
    constructor(tagName) {
        if (!tagName || typeof tagName !== 'string') {
            throw new Error('A valid HTML tag name must be provided.');
        }

        // Create a new HTMLElement with the specified tag name
        this._element = document.createElement(tagName);

        if (!(this._element instanceof HTMLElement)) {
            throw new Error('Failed to create a valid HTMLElement.');
        }
    }

    // Getter for the _element property
    get element() {
        return this._element;
    }

    // Getter for the innerText property
    get innerText() {
        return this._element.innerText;
    }

    // Setter for the innerText property
    set innerText(value) {
        this._element.innerText = value;
    }

    // Getter for the innerHTML property
    get innerHTML() {
        return this._element.innerHTML;
    }

    // Setter for the innerHTML property
    set innerHTML(value) {
        this._element.innerHTML = value;
    }

    // Getter for the className property
    get className() {
        return this._element.className;
    }

    // Setter for the className property
    set className(value) {
        this._element.className = value;
    }

    // Getter for the id property
    get id() {
        return this._element.id;
    }

    // Setter for the id property
    set id(value) {
        this._element.id = value;
    }

    // Example instance method: Add a class to the element
    addClass(className) {
        this._element.classList.add(className);
    }

    // Example instance method: Remove a class from the element
    removeClass(className) {
        this._element.classList.remove(className);
    }

    // Example instance method: Toggle a class on the element
    toggleClass(className) {
        this._element.classList.toggle(className);
    }

    // Example instance method: Add an event listener
    addEventListener(event, callback) {
        this._element.addEventListener(event, callback);
    }

    // Example instance method: Remove an event listener
    removeEventListener(event, callback) {
        this._element.removeEventListener(event, callback);
    }

    // Example instance method: Append the element to a parent
    appendTo(parent) {
        if (parent instanceof HTMLElement) {
            parent.appendChild(this._element);
        } else {
            throw new Error('Parent must be a valid HTMLElement.');
        }
    }

    // Example instance method: Set an attribute on the element
    setAttribute(name, value) {
        this._element.setAttribute(name, value);
    }

    // Example instance method: Get an attribute from the element
    getAttribute(name) {
        return this._element.getAttribute(name);
    }

    // Example instance method: Remove an attribute from the element
    removeAttribute(name) {
        this._element.removeAttribute(name);
    }
}

// Example usage
/*
const htmlWrapper = new HTMLElementWrapper('div');
htmlWrapper.innerText = 'Hello, HTMLElement!'; // Set innerText
htmlWrapper.className = 'my-class'; // Set className
htmlWrapper.addClass('another-class'); // Add a class
htmlWrapper.setAttribute('data-role', 'example'); // Set an attribute
htmlWrapper.appendTo(document.body); // Append the element to the body
*/