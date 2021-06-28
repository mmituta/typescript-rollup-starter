import { MyType } from "./my-type";

describe('Tests for the my-type sample class', () => {
    it('Should return a message', () => {
        const myType: MyType = new MyType();
        expect(myType.printMessage()).toBeDefined();
    })
});