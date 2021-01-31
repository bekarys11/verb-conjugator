import React from "react";

interface Form {
	tenseName: string;
	firstPerson: string;
	secondPerson: string;
	thirdPerson: string;
	firstPlural: string;
	secondPlural: string;
	thirdPlural: string;
}

const FormComp = (props: Form) => {
	return (
		<div className="form-container">
			<h3>{props.tenseName}</h3>
			<ul>
				<li>
					<span>I </span>
					{props.firstPerson}
				</li>
				<li>
					<span>You </span>
					{props.secondPerson}
				</li>
				<li>
					<span>He/She/It </span>
					{props.thirdPerson}
				</li>
				<li>
					<span>We </span>
					{props.firstPlural}
				</li>
				<li>
					<span>You </span>
					{props.secondPlural}
				</li>
				<li>
					<span>They </span>
					{props.thirdPlural}
				</li>
			</ul>
		</div>
	);
};

export default FormComp;
