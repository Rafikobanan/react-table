import React from 'react';
import './Pagination.scss';

const Pagination = ({className = '', content = []}) => (
	<nav className={className} aria-label="navigation">
		<ul className="pagination">
			<li className="page-item">
				<button className="page-link" aria-label="Previous">
					<span aria-hidden="true">&laquo;</span>
				</button>
			</li>
			{content.map((number, index) => (
				<li
					key={'pagination_' + index}
					className="page-item"
				>
					<button className="page-link">{number}</button>
				</li>
				)
			)}
			<li className="page-item">
				<button className="page-link" aria-label="Next">
					<span aria-hidden="true">&raquo;</span>
				</button>
			</li>
		</ul>
	</nav>
);

export default Pagination;