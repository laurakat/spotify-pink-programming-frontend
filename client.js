const readAccessTokenFromURL = () => {
	const query = window.location.search.substring(1);

	const searchParams = new URLSearchParams(window.location.search)
	accessToken = searchParams.get('access_token')

	//redirect to login page if no access token provided
	if (!accessToken) {
		window.location.href = '/'
	}
}

const addTracksToDOM = (name, image) => {
	const tracksDiv = document.getElementById('tracks');
	const html = `<div class='track'>
		<h3>${name}</h3>
		<img src='${image}' />
	</div>`
	tracksDiv.innerHTML = tracksDiv.innerHTML + html
}

const getArtistTopTenTracks = () => {
	console.log('get top 10 tracks');
}

readAccessTokenFromURL();