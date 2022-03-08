// Add Foundation to index.js
import 'foundation-sites/dist/css/foundation.min.css';

function Search (props) {
	return (
		<div className="button-basics-example">
          <div className="input-group">
            <span className="input-group-label">🔍</span>
            <input className="input-group-field" type="text" defaultValue={props.queryInput} onChange={(e) => props.setQueryInput(e.target.value)} />
            <div className="input-group-button">
              <input type="submit" className="button" value="Search" onClick={(e) => props.setQuery(props.queryInput)} />
            </div>
          </div>
        </div>
		);
}
export default Search;