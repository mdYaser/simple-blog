import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { ReactComponent as DeleteIcon } from "../assets/delete.svg";

const DetailsPage = () => {
	const [isSmall, setIsSmall] = useState(true);
	const navigate = useNavigate();
	const params = useParams();
	const blogId = params.blogId.substring(1);

	useEffect(() => {
		if (window.innerWidth > 540) {
			setIsSmall(false);
		}
	}, []);

	const blog = JSON.parse(localStorage.getItem("blogs")).find(
		(v) => v.blogId + "" === blogId
	);

	const deleteBlog = () => {
		let blogs = JSON.parse(localStorage.getItem("blogs"));
		blogs = blogs.filter((item) => item.blogId + "" !== blogId);
		localStorage.setItem("blogs", JSON.stringify(blogs));
		navigate("/simple-blog");
	};

	return (
		<div className="details-container">
			<div className="card-title">{blog.title}</div>
			<div className="card-author">{blog.author}</div>
			<div className="details-content">{blog.body}</div>
			<div className="details-delete">
				<Button className="button-primary" onClick={deleteBlog}>
					{isSmall ? <DeleteIcon width="6vw" height="6vw" /> : "Delete"}
				</Button>
			</div>
		</div>
	);
};

export default DetailsPage;
