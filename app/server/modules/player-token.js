var config = require('config');
var OoyalaApi = require('ooyala-api');

var api = new OoyalaApi(config.api.key, config.api.secret, {expirationTime: 180});

exports.get = function(embedCode, accountId) {
  return api.getTokenRequest(embedCode, accountId);
};
