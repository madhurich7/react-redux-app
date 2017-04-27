import React from 'react';

const Albums = (props) =>{
	
		return(
				<div>
					<h1>Albums Component</h1>
					
						{props.isAlbums ? (
							<div>
							<ul><strong>Albums</strong><br/>{props.albums.map((album, index) => 
								<li onClick={props.thumbnails} 
								    key={index}><strong>Title:</strong> {album.title}</li>)}</ul>

							
							
							</div>

							) : (
							<p><strong>Albums</strong><br/><strong>Title</strong> Not yet! </p>)}			
							
				</div>
			)
	
}

export default Albums;