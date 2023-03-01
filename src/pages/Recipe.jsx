import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Recipe = () => {
	const [details, setDetails] = useState({});
	const [activeTab, setActiveTab] = useState("instructions");
	let params = useParams();

	const fetchDetails = async () => {
		const data = await fetch(
			`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
		);
		const detailData = await data.json();
		setDetails(detailData);
	};

	useEffect(() => {
		fetchDetails();
	}, [params.id]);

	return (
		<DetailWrapper>
			<div>
				<h2>{details.title}</h2>
				<img
					src={details.image}
					alt=""
				/>
			</div>
			<Info>
				<Button
					className={activeTab === "instructions" ? "active" : ""}
					onClick={() => setActiveTab("instructions")}>
					Instructions
				</Button>
				<Button
					className={activeTab === "ingredients" ? "active" : ""}
					onClick={() => setActiveTab("ingredients")}>
					Ingredients
				</Button>
				{activeTab === "instructions" && (
					<div>
						<p
							dangerouslySetInnerHTML={{
								__html: details.summary,
							}}></p>
						<p
							dangerouslySetInnerHTML={{
								__html: details.instructions,
							}}></p>
					</div>
				)}
				{activeTab === "ingredients" && (
					<ul>
						{details.extendedIngredients.map((ing) => (
							<li key={ing.id}>{ing.original}</li>
						))}
					</ul>
				)}
			</Info>
		</DetailWrapper>
	);
};

const DetailWrapper = styled.div`
	margin-top: 5rem;
	margin-bottom: 5rem;
	display: flex;
	.active {
		background: linear-gradient(35deg, #494949, #313131);
		color: white;
	}
	h2 {
		margin-bottom: 2rem;
	}
	li {
		font-size: 1.2rem;
		line-height: 2.5rem;
	}
	ul {
		margin-top: 2rem;
	}
	p {
		margin-top: 2rem;
	}
`;

const Button = styled.button`
	padding: 1rem 2rem;
	text-align: center;
	width: 160px;
	color: #313131;
	background: white;
	border: 2px solid black;
	margin-right: 2rem;
	font-weight: 600;
	cursor: pointer;
	transition: ease 0.3s;
	&:hover {
		transform: scale(1.1);
	}
`;

const Info = styled.div`
	margin-left: 5rem;
`;

export default Recipe;
