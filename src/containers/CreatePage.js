import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const CreatePage = () => {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [author, setAuthor] = useState("");
	const navigate = useNavigate();

	const addBlog = () => {
		const blogId = new Date().getTime();
		const blogData = {
			blogId,
			title,
			body,
			author,
		};
		let blogs = localStorage.getItem("blogs");
		if (blogs) {
			blogs = JSON.parse(blogs);
		} else {
			blogs = [];
		}
		blogs.unshift(blogData);
		localStorage.setItem("blogs", JSON.stringify(blogs));
		navigate("/simple-blog");
	};

	return (
		<div className="create-container">
			<div className="create-title">Add a New Blog</div>
			<div className="create-item">
				<label htmlFor="name">Blog title:</label>
				<input
					name="title"
					type="text"
					className="create-input-text"
					onChange={(e) => setTitle(e.target.value)}
				/>
			</div>
			<div className="create-item">
				<label htmlFor="body">Blog body:</label>
				<textarea
					name="body"
					className="create-input-text"
					cols="50"
					onChange={(e) => setBody(e.target.value)}
				/>
			</div>
			<div className="create-item">
				<label htmlFor="author">Blog author:</label>
				<input
					name="author"
					type="text"
					className="create-input-text"
					onChange={(e) => setAuthor(e.target.value)}
				/>
			</div>
			<div style={{ marginTop: "60px" }}>
				<Button className="button-primary" onClick={addBlog}>
					Add Blog
				</Button>
			</div>
		</div>
	);
};

export default CreatePage;
