import { Button } from 'react-foundation';
function Pagination (props) {
	return (
          <div>
              <Button onClick={(e) => props.setPageN(props.pageN + 1)}>
                {props.pageN + 1}
              </Button>
          </div>
		);
}
export default Pagination;