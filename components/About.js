import React from 'react';

class About extends React.Component{

	constructor(props){
		super();
	}
	componentDidMount(){
		console.log('about is mounted');
		this.props.getData();
	}
	albumsAndthumbnails(){
		this.props.getAlbums();
		
	}
	
	render(){
		return(
				<div>
					<h1>Users Component</h1>
					{this.props.data ? (
						<div><ul><strong>Users</strong>{this.props.data.map((user, index) => 
							<li key={index} 
							onClick={this.albumsAndthumbnails.bind(this)}>{user.name}, {user.email}</li>)}
							</ul>
						</div>
						) : (
							<p>Not yet!!</p>
						)}
							
				</div>
			)
	}
		
}
	
export default About;