function Pagination (props) {
	return (
          <div className="input-group">
            <div className="input-group-button">
              <input type="submit" className="button" value={props.pageN + 1}
              		 onClick={(e) => props.setPageN(props.pageN + 1)} />
            </div>
          </div>
		);
}
export default Pagination;