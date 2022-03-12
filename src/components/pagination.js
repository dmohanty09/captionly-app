import { Button } from 'react-foundation';
function Pagination (props) {
  const start = props.pageN - 5 < 0 ? 0 : props.pageN - 5
  const end = props.pageN + 5 > props.total.length ? props.total.length : props.pageN + 5
	return (
          <div>
              { props.total.slice(start,end).map((n) => (
                <Button key={n} onClick={(e) => props.setPageN(n)}>
                {n === props.pageN || n}
              </Button>
              ))}
          </div>
		);
}
export default Pagination;