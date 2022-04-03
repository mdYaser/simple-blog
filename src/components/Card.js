const Card = ({ title, author, onClick }) => {
	return (
		<div className="card-container" onClick={onClick}>
			<div className="card-title">{title}</div>
			<div className="card-author">{author}</div>
		</div>
	);
};

export default Card;
