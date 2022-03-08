import { Grid, Cell, Thumbnail } from 'react-foundation';
function Gallery (props) {
	const pageSize = 16;
	return (
		<div className="grid-block-example">
	        <Grid upOnSmall={1} upOnMedium={2} upOnLarge={4}>
	        	{props.captions.slice(props.pageN * pageSize, (props.pageN * pageSize) + pageSize).map((caption, index) => 
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