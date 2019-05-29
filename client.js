const readAccessTokenFromURL = () => {
	const query = window.location.search.substring(1);

	const searchParams = new URLSearchParams(window.location.search)
	accessToken = searchParams.get('access_token')

	//redirect to login page if no access token provided
	if (!accessToken) {
		window.location.href = '/'
	}
}

const getArtistTopTenTracks = () => {
	console.log('get top 10 tracks')
}

readAccessTokenFromURL();