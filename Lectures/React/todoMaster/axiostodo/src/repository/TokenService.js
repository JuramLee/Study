const AC_TOKEN = 'access_token';

const TokenService =  {
	// set
	setToken(token) {
		localStorage.setItem(AC_TOKEN, token)
	},
	// get
	getToken() {
		return localStorage.getItem(AC_TOKEN);
	},
	// remove
	deleteToken() {
		localStorage.removeItem(AC_TOKEN)
	}

}

export default TokenService;