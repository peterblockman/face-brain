if(process.env.APP_ENV === 'production'){
	module.exports = require('./prodEnv');
} else {
	module.exports = require('./devEnv');
}