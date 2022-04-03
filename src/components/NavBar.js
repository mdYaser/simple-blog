import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Title from "./Title";
import { ReactComponent as HomeIcon } from "../assets/home.svg";
import { ReactComponent as CreateIcon } from "../assets/add.svg";

const NavBar = () => {
	const [isSmall, setIsSmall] = useState(true);
	const navigate = useNavigate();
	useEffect(() => {
		if (window.innerWidth > 540) {
			setIsSmall(false);
		}
	}, []);
	const handleHome = () => {
		navigate("/simple-blog");
	};
	const handleCreate = () => {
		navigate("/simple-blog/create");
	};

	return (
		<div className="nav-container">
			<div className="nav-left">
				<Title>The Simple Blog</Title>
			</div>
			<div className="nav-right">
				<Button className={"button-secondary"} onClick={handleHome}>
					{isSmall ? <HomeIcon width="6vw" height="6vw" /> : "Home"}
				</Button>
				<Button className={"button-primary"} onClick={handleCreate}>
					{isSmall ? <CreateIcon width="6vw" height="6vw" /> : "New Blog"}
				</Button>
			</div>
		</div>
	);
};

export default NavBar;
