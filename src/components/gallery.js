import 'foundation-sites/dist/css/foundation.min.css';
import { Grid, Cell, Thumbnail } from 'react-foundation';
function Gallery (props) {
	return (
		<div className="grid-block-example">
	        <Grid upOnSmall={1} upOnMedium={2} upOnLarge={4}>
	        	{props.captions.slice(0,16).map((caption, index) => 
	        		(<Cell key={index}>
	            		<iframe id={"ytplayer_" + caption.video_web_id}
	            		type="text/html"
	            		title={caption.video_web_id}
	            		src={'https://www.youtube.com/embed/' + caption.video_web_id + '?start=' + parseInt(caption.timestamp)}
	            		frameBorder="0"></iframe><div>{caption.text}</div>
	          		</Cell>)
	        	)}
	        </Grid>
	      </div>
		);
}
export default Gallery;