import { HTMLElementWrapper } from './element.js';

export class BodyElement extends HTMLElementWrapper {
    constructor() {
        super('body'); // Use 'body' as the tag name
        this._element = document.body; // Ensure it wraps the existing <body> element
    }

    // Example method: Set the background color of the body
    setBackgroundColor(color) {
        this._element.style.backgroundColor = color;
    }

    // Example method: Get the background color of the body
    getBackgroundColor() {
        return this._element.style.backgroundColor;
    }

    // Example method: Add content to the body
    appendContent(content) {
        if (content instanceof HTMLElement) {
            this._element.appendChild(content);
        } else if (typeof content === 'string') {
            const textNode = document.createTextNode(content);
            this._element.appendChild(textNode);
        } else {
            throw new Error('Content must be an HTMLElement or a string.');
        }
    }

    // Example method: Clear all content from the body
    clearContent() {
        this._element.innerHTML = '';
    }
}

// Example usage
/*
const bodyWrapper = new BodyElementWrapper();
bodyWrapper.setBackgroundColor('lightblue'); // Set the background color
bodyWrapper.appendContent('Hello, Body!'); // Add text content
const div = document.createElement('div');
div.innerText = 'This is a div inside the body.';
bodyWrapper.appendContent(div); // Add an HTMLElement
bodyWrapper.clearContent(); // Clear all content from the body
*/