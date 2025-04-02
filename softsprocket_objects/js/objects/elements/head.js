import { HTMLElementWrapper } from './element.js';

export class HeadElement extends HTMLElementWrapper {
    constructor() {
        super('head'); // Use 'head' as the tag name
        this._element = document.head; // Ensure it wraps the existing <head> element
    }

    // Method: Add a meta tag to the head
    addMeta(name, content) {
        const meta = document.createElement('meta');
        meta.name = name;
        meta.content = content;
        this._element.appendChild(meta);
    }

    // Method: Add a script to the head
    addScript(src, async = true) {
        const script = document.createElement('script');
        script.src = src;
        script.async = async;
        this._element.appendChild(script);
    }

    // Method: Add a stylesheet link to the head
    addStylesheet(href) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        this._element.appendChild(link);
    }

    // Method: Set the document title
    setTitle(title) {
        let titleElement = this._element.querySelector('title');
        if (!titleElement) {
            titleElement = document.createElement('title');
            this._element.appendChild(titleElement);
        }
        titleElement.textContent = title;
    }

    // Method: Get the current document title
    getTitle() {
        const titleElement = this._element.querySelector('title');
        return titleElement ? titleElement.textContent : '';
    }

    // Method: Add a custom element to the head
    appendCustomElement(element) {
        if (element instanceof HTMLElement) {
            this._element.appendChild(element);
        } else {
            throw new Error('Element must be an instance of HTMLElement.');
        }
    }
}

// Example usage
/*
const headWrapper = new HeadElement();
headWrapper.setTitle('My Page Title'); // Set the page title
headWrapper.addMeta('description', 'This is a description of the page.'); // Add a meta tag
headWrapper.addStylesheet('/styles.css'); // Add a stylesheet
headWrapper.addScript('/script.js'); // Add a script
console.log(headWrapper.getTitle()); // Get the current title
*/