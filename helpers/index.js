function successResponse(body, statusCode = 200, headers = {}) {
  return {
    headers: getHeaders(headers),
    statusCode,
    body: JSON.stringify({ data: body, statusCode, error: null }),
  };
}
function failedResponse(body, statusCode = 400, headers = {}) {
  return {
    headers: getHeaders(headers),
    statusCode,
    body: JSON.stringify({ error: body, statusCode, data: null }),
  };
}

function getHeaders(headers) {
  return {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      ...headers,
    },
  };
}

function formatUserAttributes(attributes) {
  return attributes.reduce((acc, { Name, Value }) => {
    return { ...acc, [Name]: Value };
  }, {});
}

function aggregateObjects(arrayOfObjects) {
  const aggregatedResult = {};

  arrayOfObjects.forEach((item) => {
    Object.keys(item).forEach((key) => {
      if (aggregatedResult[key]) {
        aggregatedResult[key] = aggregatedResult[key] + item[key];
      } else {
        aggregatedResult[key] = item[key];
      }
    });
  });

  return aggregatedResult;
}

module.exports = {
  failedResponse,
  successResponse,
  formatUserAttributes,
  aggregateObjects,
};
