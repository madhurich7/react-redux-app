import React from 'react';
import Home from '../components/Home';
import About from '../components/About';
import Albums from '../components/Albums';
import Photos from '../components/Photos';
import {connect} from 'react-redux';

import {getUsers, getAlbumsOfUser, getPhotos} from '../actions/userActions';

class Main extends React.Component{
	
	render(){
		return(
				<div>
					<Home/>

					<About getData={this.props.getUsers} 
					data={this.props.user.data} 
					isClicked={this.props.user.isClicked}
					getAlbums={() => this.props.getAlbumsOfUser()}
					/>

					<Albums albums={this.props.user.albums} 
					isAlbums={this.props.user.isAlbums}
					thumbnails={() => this.props.getPhotos()}/>

					<Photos thumbnails={this.props.user.thumbnails}
					isPhotos={this.props.user.isPhotos}/>
				</div>
			)
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.userReducer
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getUsers: () => {
			dispatch(getUsers());
		},
		getAlbumsOfUser: () => {
			dispatch(getAlbumsOfUser())
		},
		getPhotos: () => {
			dispatch(getPhotos())
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Main);
