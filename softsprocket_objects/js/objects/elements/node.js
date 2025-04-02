import { DOMElementWrapper } from './element.js';

export class DOMNodeWrapper extends DOMElementWrapper {
    constructor(tagName) {
        super(tagName); // Call the parent class constructor
    }

    // Getter for the textContent property
    get textContent() {
        return this._element.textContent;
    }

    // Setter for the textContent property
    set textContent(value) {
        this._element.textContent = value;
    }

    // Getter for the nodeName property
    get nodeName() {
        return this._element.nodeName;
    }

    // Getter for the nodeType property
    get nodeType() {
        return this._element.nodeType;
    }

    // Getter for the childNodes property
    get childNodes() {
        return this._element.childNodes;
    }

    // Example instance method: Append a child node
    appendChild(childNode) {
        if (childNode instanceof Node) {
            this._element.appendChild(childNode);
        } else {
            throw new Error('Parameter must be a Node.');
        }
    }

    // Example instance method: Remove a child node
    removeChild(childNode) {
        if (childNode instanceof Node) {
            this._element.removeChild(childNode);
        } else {
            throw new Error('Parameter must be a Node.');
        }
    }

    // Example instance method: Replace a child node
    replaceChild(newChild, oldChild) {
        if (newChild instanceof Node && oldChild instanceof Node) {
            this._element.replaceChild(newChild, oldChild);
        } else {
            throw new Error('Parameters must be Nodes.');
        }
    }

    // Example instance method: Check if the node has children
    hasChildNodes() {
        return this._element.hasChildNodes();
    }

    // Example instance method: Clone the node
    cloneNode(deep = false) {
        return this._element.cloneNode(deep);
    }

    // Example instance method: Normalize the node
    normalize() {
        this._element.normalize();
    }
}

// Example usage
/*
const nodeWrapper = new DOMNodeWrapper('div');
nodeWrapper.textContent = 'Hello, Node!'; // Set textContent
console.log(nodeWrapper.nodeName); // Get nodeName
console.log(nodeWrapper.nodeType); // Get nodeType
console.log(nodeWrapper.hasChildNodes()); // Check if it has child nodes

const child = document.createElement('span');
child.textContent = 'Child Node';
nodeWrapper.appendChild(child); // Append a child node
console.log(nodeWrapper.childNodes); // Get child nodes
*/