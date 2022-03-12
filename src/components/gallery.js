import { Button } from 'react-foundation';
import { Grid, Cell, Thumbnail } from 'react-foundation';
function Gallery (props) {
	const pageSize = 16;
	const timestamp_to_minutes = (timestamp) => {
		return Math.floor(timestamp / 60) + ":" + parseInt(timestamp % 60 ? timestamp % 60 : '00')
	}
	return (
		<div className="grid-block-example">
	        <Grid upOnSmall={1} upOnMedium={1} upOnLarge={1}>
	        	{props.captions.slice(props.pageN * pageSize, (props.pageN * pageSize) + pageSize).map((caption, index) => 
	        		(<Cell className='vcell' key={index}>
	            		<div className='captionText'>
	            			<figure>
							    <img src={'https://img.youtube.com/vi/'+ caption.video_web_id +'/default.jpg'}
							         alt={caption.text}/>
							    <figcaption>{caption.text}</figcaption>
							</figure>
							<Button onClick={(e)=>props.setSelectedVideo(caption)}>{timestamp_to_minutes(caption.timestamp)}</Button>
	            		</div>
	          		</Cell>)
	        	)}
	        </Grid>
	      </div>
		);
}
export default Gallery;