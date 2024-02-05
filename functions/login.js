const { USER_POOL, USER_POOL_CLIENT } = require("../config");
const {
  formatUserAttributes,
  successResponse,
  failedResponse,
} = require("../helpers");
const { cognito } = require("../provider");

module.exports.login = async (event) => {
  try {
    const { email, password } = JSON.parse(event.body);

    const response = await cognito
      .adminInitiateAuth({
        AuthFlow: "ADMIN_NO_SRP_AUTH",
        UserPoolId: USER_POOL,
        ClientId: USER_POOL_CLIENT,
        AuthParameters: {
          USERNAME: email,
          PASSWORD: password,
        },
      })
      .promise();

    const data = await cognito
      .getUser({
        AccessToken: response.AuthenticationResult.AccessToken,
      })
      .promise();

    return successResponse({
      ...formatUserAttributes(data.UserAttributes),
      ...response.AuthenticationResult,
      statusCode: 200,
    });
  } catch (error) {
    return failedResponse(error.message);
  }
};
