import React from 'react';
import './Pagination.scss';

const Pagination = ({className = '', content = [], handlers = content.map(() => () => {}), activeNumber = null}) => (
	<nav className={className} aria-label="navigation">
		<ul className="pagination">
			<li onClick={handlers[0]} className="page-item">
				<button className="page-link" aria-label="Previous">
					<span aria-hidden="true">&laquo;</span>
				</button>
			</li>
			{content.map((number, index) => (
				<li
					onClick={handlers[1 + index]}
					key={'pagination_' + index}
					className={`page-item ${number === activeNumber ? 'active' : ''}`}
				>
					<button className="page-link">{number}</button>
				</li>
				)
			)}
			<li onClick={handlers[handlers.length - 1]} className="page-item">
				<button className="page-link" aria-label="Next">
					<span aria-hidden="true">&raquo;</span>
				</button>
			</li>
		</ul>
	</nav>
);

export default Pagination;