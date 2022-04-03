import { useNavigate } from "react-router-dom";
import Card from "../components/Card";

const HomePage = () => {
	const navigate = useNavigate();
	let blogs = localStorage.getItem("blogs");
	if (blogs) {
		blogs = JSON.parse(blogs);
	} else {
		blogs = [];
	}

	const handleCard = (blogId) => {
		navigate(`/simple-blog/details:${blogId}`);
	};

	return (
		<div className="homepage-container">
			<div className="homepage-title">All blogs!</div>
			{blogs.map((blog) => (
				<Card
					key={blog.blogId}
					title={blog.title}
					author={blog.author}
					onClick={() => handleCard(blog.blogId)}
				/>
			))}
		</div>
	);
};

export default HomePage;
