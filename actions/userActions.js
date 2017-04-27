import axios from 'axios';
export function getUsers(){
	
	return (dispatch) => {
		
		axios
		.get('http://jsonplaceholder.typicode.com/users')
		.then((response) => {
			return dispatch({
				type: 'GET_USERS',
				payload: response.data
			});
		});
	};
}

export function getAlbumsOfUser(){
	alert();
	return (dispatch) => {
		axios
		.get('http://jsonplaceholder.typicode.com/albums')
		.then((response) => {
			return dispatch({
				type: 'GET_ALBUMS',
				payload: response.data
			});
		});
	};
}

export function getPhotos(){
	alert('photos');
	return (dispatch) => {
		axios.get('http://jsonplaceholder.typicode.com/photos')
		.then((res) => {
			return dispatch({
				type: 'THUMBNAILS',
				payload: res.data
			});
		});
	};

}
