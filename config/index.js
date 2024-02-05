module.exports = {
  USER_POOL: process.env.IS_OFFLINE ? "local_2JriToK7" : process.env.USER_POOL,
  USER_POOL_CLIENT: process.env.IS_OFFLINE
    ? "22oocthbi9shrrokhup3f1bf2o"
    : process.env.USER_POOL_CLIENT,
};
