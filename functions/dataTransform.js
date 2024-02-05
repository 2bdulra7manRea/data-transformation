const {
  successResponse,
  failedResponse,
  aggregateObjects,
} = require("../helpers");

module.exports.performDataTransform = async (event) => {
  try {
    const { data } = JSON.parse(event.body);

    if (!data && !Array.isArray(data)) {
      throw new Error("Data should be an array!");
    }
    const transformedObj = aggregateObjects(data);

    return successResponse(transformedObj);
  } catch (error) {
    console.log(error);
    return failedResponse(error.message);
  }
};
