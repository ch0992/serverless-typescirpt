import { APIGatewayProxyHandler, Handler, Context, Callback } from "aws-lambda";
import "source-map-support/register";

interface HelloResponse {
  statusCode: number;
  body: string;
}
let Context = "Test message";

const hello: APIGatewayProxyHandler = async (event, _context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message:
          "Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!",
        input: event
      },
      null,
      2
    )
  };
};

const hello2: Handler = (
  event: "localTest",
  context: Context,
  callback: Callback
) => {
  const response: HelloResponse = {
    statusCode: 200,
    body: JSON.stringify({
      message: Math.floor(Math.random() * 10),
      context: context,
      event: event
    })
  };
  callback(undefined, response);
};

export { hello, hello2 };
