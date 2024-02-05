const { USER_POOL } = require("../config");
const { successResponse, failedResponse } = require("../helpers");
const { cognito } = require("../provider");

module.exports.register = async (event) => {
  try {
    const { email, password } = JSON.parse(event.body);

    const result = await cognito
      .adminCreateUser({
        UserPoolId: USER_POOL,
        Username: email,
        UserAttributes: [
          {
            Name: "email",
            Value: email,
          },
          {
            Name: "email_verified",
            Value: "true",
          },
        ],
        MessageAction: "SUPPRESS",
      })
      .promise();

    if (result.User) {
      await cognito
        .adminSetUserPassword({
          Password: password,
          UserPoolId: USER_POOL,
          Username: email,
          Permanent: true,
        })
        .promise();
    }

    return successResponse({ result });
  } catch (error) {
    return failedResponse(error.message);
  }
};
