function Search (props) {
	return (
		<div className="button-basics-example">
          <div className="input-group">
            <input className="input-group-field"
            	   type="text"
            	   onKeyPress={(e) => e.key === 'Enter' && props.setQuery(props.queryInput)}
            	   defaultValue={props.queryInput}
            	   onChange={(e) => props.setQueryInput(e.target.value)} />
            <div className="input-group-button">
              <input type="submit" className="button" value="Search"
              		 onClick={(e) => props.setQuery(props.queryInput)} />
            </div>
          </div>
        </div>
		);
}
export default Search;