import React from "react";
import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "./Hoops logo.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PhoneIcon from "@mui/icons-material/Phone";
import "../Css/ListStyle.css";

const List = () => {
	return (
		<>
			<header>
				<div className="container container-flex">
					<div>
						<img src={Logo} alt="logo" className="logo" />
					</div>
					<nav>
						<div className="list">
							<NavLink to="/" className="ListItems">
								Home
							</NavLink>
							<NavLink to="about" className="ListItems">
								About
							</NavLink>
							<NavLink to="services" className="ListItems">
								Services
							</NavLink>
							<NavLink to="contact" className="ListItems">
								Contact
							</NavLink>
							<NavLink to="policy" className="ListItems">
								Policy
							</NavLink>
						</div>
					</nav>
					<div className="icons">
						<SearchIcon className="icon" />
						<AccountCircleIcon className="icon" />
						<PhoneIcon className="icon" />
					</div>
				</div>
			</header>
		</>
	);
};

export default List;
