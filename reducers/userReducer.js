
const userState = {
	name: "name here",
	isAlbums: false,
	isPhotos: false,
	thumbnails: [],
	albums: {title: null},
	data: []
};

const userReducer = (state =  userState, action)=> {
	switch(action.type){
		case "GET_USERS":
		state = Object.assign ({},state,{

			name: state.name + " changed",
			data: action.payload,
			isClicked: true
		});
			
			break;
		case "GET_ALBUMS": 
		state =  Object.assign ({},state,{
			isAlbums: true,
			albums: action.payload
		});	
			break;	
		case "THUMBNAILS": 
		state =  Object.assign ({},state,{
			isPhotos: true,
			thumbnails: action.payload
		});	
			break;	
	}
	console.log('state is ',state);
	return state;
};

export default userReducer;