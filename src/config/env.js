if(process.env.REACT_APP_ENV === 'prod'){
	module.exports = require('./prodEnv');
} else {
	module.exports = require('./devEnv');
}