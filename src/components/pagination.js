import { Button } from 'react-foundation';
function Pagination (props) {
	return (
          <div>
              { props.total.map((n) => (
                <Button key={n} onClick={(e) => props.setPageN(n)}>
                {n === props.pageN || n}
              </Button>
              ))}
          </div>
		);
}
export default Pagination;