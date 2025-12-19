
'use strict';

/**
 * New Relic agent configuration.
 * See all options: https://docs.newrelic.com/docs/apm/agents/nodejs-agent/configuration/nodejs-agent-configuration/
 */
exports.config = {
  app_name: [process.env.NEW_RELIC_APP_NAME || 'MultiTeerFrontEnd'],
  license_key: process.env.NEW_RELIC_LICENSE_KEY || 'u01xx25097d321270aa1fdc5e6c5734FFFFNRAL', // do NOT hardcode
  distributed_tracing: {
    enabled: true
  },
  logging: {
    level: process.env.NEW_RELIC_LOG_LEVEL || 'info' // 'trace' for deep debugging
  },
  attributes: {
    // capture request params & custom attributes if you need them
    // enabled: true
  },
  // Uncomment if you want to send logs to New Relic via the agent (v8+ feature)
  // application_logging: {
  //   enabled: true,
  //   forwarding: { enabled: true }
  // },
};
``

