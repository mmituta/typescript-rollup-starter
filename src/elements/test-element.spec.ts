import { LitElement } from "lit";

describe('Tests for the test-element', () => {
    it('should contain greetings', async () => {
        const element: LitElement = document.createElement("test-element") as LitElement;
        document.body.append(element);
        await element.updateComplete;
        expect(element.shadowRoot.textContent).toContain("Greetings");
    });
});