import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js'

@customElement('test-element')
export class TestElement extends LitElement {
    render(){
        return html `<p>Greetings from element</p>`;
    }
}