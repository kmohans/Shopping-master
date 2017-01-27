'use strict';

// Production specific configuration
// =================================
module.exports = {
  // Server IP
  ip:       process.env.OPENSHIFT_NODEJS_IP ||
            process.env.IP ||
            undefined,

  // Server port
  port:     process.env.OPENSHIFT_NODEJS_PORT ||
            process.env.PORT ||
            8080,

  // MongoDB connection options
  mongo: {
    uri: 'mongodb://admin:CVGUAGBVBJRNQGRQ@sl-us-dal-9-portal.4.dblayer.com:18948/admin?ssl=false'
	//replicaSet=RS-rstestNode-0&ssl=true'
	//process.env.OPENSHIFT_MONGODB_DB_URL ||  'mongodb://localhost/shopping-db'
  }
  //,

  //seedDB: true
};
