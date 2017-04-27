import React from 'react';

const Photos = (props) =>{
	
		return(
				<div>
					<h1>Photos Component</h1>
					
						{props.isPhotos ? (
							<div>
							<div><strong>Photos</strong><br/>{props.thumbnails.slice(0, 10).map((thumbnail, index) => 
								
								<img key={index} src={thumbnail.thumbnailUrl}/>)}
								
							</div>

							
							
							</div>

							) : (
							<p><strong>Photos</strong><br/>Not yet! </p>)}			
							
				</div>
			)
	
}

export default Photos;