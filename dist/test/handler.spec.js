import * as mocha from "serverless-mocha-plugin";
import { hello } from "../handlers/handler";
const expect = mocha.chai.expect;
describe("handler", () => {
    describe("hello", () => {
        it("should return Serverless boilerplate message", () => {
            hello(null, null, (error, result) => {
                expect(error).to.be.null;
                result.body.should.equal('{"message":"Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!","input":null}');
            });
        });
    });
});
//# sourceMappingURL=handler.spec.js.map