import { Button } from 'react-foundation';
import { Grid, Cell, Thumbnail } from 'react-foundation';
function Gallery (props) {
	const pageSize = 16;
	return (
		<div className="grid-block-example">
	        <Grid upOnSmall={1} upOnMedium={1} upOnLarge={1}>
	        	{props.captions.slice(props.pageN * pageSize, (props.pageN * pageSize) + pageSize).map((caption, index) => 
	        		(<Cell key={index}>
	            		<iframe id={"ytplayer_" + caption.video_web_id}
	            		type="text/html"
	            		title={caption.video_web_id}
	            		src={'https://www.youtube.com/embed/' + caption.video_web_id + '?modestbranding=1&start=' + parseInt(caption.timestamp)}
	            		frameBorder="0"
	            		allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe><div className='captionText'><Button onClick={(e)=>props.setSelectedVideo(caption)}>{caption.timestamp}</Button> {caption.text}</div>
	          		</Cell>)
	        	)}
	        </Grid>
	      </div>
		);
}
export default Gallery;