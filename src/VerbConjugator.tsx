import React, { useState } from "react";
import FormComp from "./FormComp";
import "./styles/index.css";

const jsLingua = require("jslingua");
const engMorpho = jsLingua.nserv("morpho", "eng");

const Main = () => {
	const [verb, setVerb] = useState("");
	const [isClicked, setIsClicked] = useState(false);

	//Present Simple
	const [firstPersonPresSimp, setFirstPersonPresSimp] = useState("");
	const [thirdPersonPresSimp, setThirdPersonPresSimp] = useState("");
	//Present Continuous
	const [firstPersonPresCont, setFirstPersonPresCont] = useState("");
	const [secondPersonPresCont, setSecondPersonPresCont] = useState("");
	const [thirdPersonPresCont, setThirdPersonPresCont] = useState("");
	//Past Simple
	const [pastSimp, setPastSimp] = useState("");
	//Past Continuous
	const [firstPersonPastCont, setFirstPersonPastCont] = useState("");
	const [secondPersonPastCont, setSecondPersonPastCont] = useState("");
	//Future Simple
	const [futureSimp, setFutureSimp] = useState("");
	//Future Continuous
	const [futCont, setFutCont] = useState("");
	//Present Perfect
	const [firstPersonPresPerfect, setFirstPersonPresPerfect] = useState("");
	const [thirdPersonPresPerfect, setThirdPersonPresPerfect] = useState("");
	//Past Perfect
	const [pastPerfect, setPastPerfect] = useState("");
	//Future Perfect
	const [futurePerfect, setFuturePerfect] = useState("");
	//Present Perfect Continuous
	const [firstPersonPresPerfCont, setFirstPersonPresPerfCont] = useState("");
	const [thirdPersonPresPerfCont, setThirdPersonPresPerfCont] = useState("");
	//Past Perfect Continuous
	const [pastPerfCont, setPastPerfCont] = useState("");
	//Future Perfect Continuous
	const [futurePerfCont, setFuturePerfCont] = useState("");

	function checkEnter(e: React.KeyboardEvent<HTMLDivElement>) {
		if (e.key === "Enter") {
			return conjugateVerb(verb);
		} else {
			return null;
		}
	}

	function conjugateVerb(verb: string): void {
		const lowerCasedVerb = verb.toLowerCase();

		//Choose needed options for verbs
		let opts = {
			tense: "present",
			aspect: "simple",
			negated: 0,
			person: "first",
			number: "singular",
		};

		//Present Simple
		let presSimpFirstPerson: string = engMorpho.conj(lowerCasedVerb, opts);
		setFirstPersonPresSimp(presSimpFirstPerson);
		opts.person = "third";
		let presSimpThirdPerson: string = engMorpho.conj(lowerCasedVerb, opts);
		setThirdPersonPresSimp(presSimpThirdPerson);

		//Past Simple
		opts.tense = "past";
		let pastSimp: string = engMorpho.conj(lowerCasedVerb, opts);
		setPastSimp(pastSimp);

		//Future Simple
		opts.tense = "future";
		let futureSimp: string = engMorpho.conj(lowerCasedVerb, opts);
		setFutureSimp(futureSimp);

		//Present Continuous
		opts.person = "first";
		opts.tense = "present";
		opts.aspect = "continuous";
		let presContFirstPerson: string = engMorpho.conj(lowerCasedVerb, opts);
		setFirstPersonPresCont(presContFirstPerson);
		opts.person = "second";
		let presContSecondPerson: string = engMorpho.conj(lowerCasedVerb, opts);
		setSecondPersonPresCont(presContSecondPerson);
		opts.person = "third";
		let presContThirdPerson: string = engMorpho.conj(lowerCasedVerb, opts);
		setThirdPersonPresCont(presContThirdPerson);

		//Past Continuous
		opts.person = "first";
		opts.tense = "past";
		let pastContFirstPerson: string = engMorpho.conj(lowerCasedVerb, opts);
		setFirstPersonPastCont(pastContFirstPerson);
		opts.person = "second";
		let pastContSecondPerson: string = engMorpho.conj(lowerCasedVerb, opts);
		setSecondPersonPastCont(pastContSecondPerson);

		//Future Continuous
		opts.tense = "future";
		let futureCont: string = engMorpho.conj(lowerCasedVerb, opts);
		setFutCont(futureCont);

		//Present Perfect
		opts.tense = "present";
		opts.person = "first";
		opts.aspect = "perfect";
		let presPerfectFirstPerson: string = engMorpho.conj(lowerCasedVerb, opts);
		setFirstPersonPresPerfect(presPerfectFirstPerson);
		opts.person = "third";
		let presPerfectThirdPerson: string = engMorpho.conj(lowerCasedVerb, opts);
		setThirdPersonPresPerfect(presPerfectThirdPerson);

		//Past Perfect
		opts.tense = "past";
		let pastPerfect: string = engMorpho.conj(lowerCasedVerb, opts);
		setPastPerfect(pastPerfect);

		//Future Perfect
		opts.tense = "future";
		let futurePerfect: string = engMorpho.conj(lowerCasedVerb, opts);
		setFuturePerfect(futurePerfect);

		//Present Perfect Continuous
		opts.tense = "present";
		opts.person = "first";
		opts.aspect = "perfect-continuous";
		let presPerfContFirstPerson: string = engMorpho.conj(lowerCasedVerb, opts);
		setFirstPersonPresPerfCont(presPerfContFirstPerson);
		opts.person = "third";
		let presPerfContThirdPerson: string = engMorpho.conj(lowerCasedVerb, opts);
		setThirdPersonPresPerfCont(presPerfContThirdPerson);

		//Past Perfect Continuous
		opts.tense = "past";
		let pastPerfCont: string = engMorpho.conj(lowerCasedVerb, opts);
		setPastPerfCont(pastPerfCont);

		//Future Perfect
		opts.tense = "future";
		let futurePerfCont: string = engMorpho.conj(lowerCasedVerb, opts);
		setFuturePerfCont(futurePerfCont);

		setIsClicked(true);
	}

	return (
		<>
			<header className="header">
				<h1>Verb Conjugator</h1>
				<div className="search-container">
					<input
						type="text"
						onChange={(e) => setVerb(e.target.value)}
						placeholder="Enter a verb"
						onKeyPress={(e) => checkEnter(e)}
					/>
					<button onClick={() => conjugateVerb(verb)}>Search</button>
				</div>
			</header>

			{isClicked ? (
				<div className="components">
					<FormComp
						tenseName="Present Simple"
						firstPerson={firstPersonPresSimp}
						secondPerson={firstPersonPresSimp}
						thirdPerson={thirdPersonPresSimp}
						firstPlural={firstPersonPresSimp}
						secondPlural={firstPersonPresSimp}
						thirdPlural={firstPersonPresSimp}
					/>
					<FormComp
						tenseName="Past Simple"
						firstPerson={pastSimp}
						secondPerson={pastSimp}
						thirdPerson={pastSimp}
						firstPlural={pastSimp}
						secondPlural={pastSimp}
						thirdPlural={pastSimp}
					/>
					<FormComp
						tenseName="Future Simple"
						firstPerson={futureSimp}
						secondPerson={futureSimp}
						thirdPerson={futureSimp}
						firstPlural={futureSimp}
						secondPlural={futureSimp}
						thirdPlural={futureSimp}
					/>
					<FormComp
						tenseName="Present Continuous"
						firstPerson={firstPersonPresCont}
						secondPerson={secondPersonPresCont}
						thirdPerson={thirdPersonPresCont}
						firstPlural={secondPersonPresCont}
						secondPlural={secondPersonPresCont}
						thirdPlural={secondPersonPresCont}
					/>
					<FormComp
						tenseName="Past Continuous"
						firstPerson={firstPersonPastCont}
						secondPerson={secondPersonPastCont}
						thirdPerson={firstPersonPastCont}
						firstPlural={secondPersonPastCont}
						secondPlural={secondPersonPastCont}
						thirdPlural={secondPersonPastCont}
					/>
					<FormComp
						tenseName="Future Continuous"
						firstPerson={futCont}
						secondPerson={futCont}
						thirdPerson={futCont}
						firstPlural={futCont}
						secondPlural={futCont}
						thirdPlural={futCont}
					/>
					<FormComp
						tenseName="Present Perfect"
						firstPerson={firstPersonPresPerfect}
						secondPerson={firstPersonPresPerfect}
						thirdPerson={thirdPersonPresPerfect}
						firstPlural={firstPersonPresPerfect}
						secondPlural={firstPersonPresPerfect}
						thirdPlural={firstPersonPresPerfect}
					/>
					<FormComp
						tenseName="Past Perfect"
						firstPerson={pastPerfect}
						secondPerson={pastPerfect}
						thirdPerson={pastPerfect}
						firstPlural={pastPerfect}
						secondPlural={pastPerfect}
						thirdPlural={pastPerfect}
					/>
					<FormComp
						tenseName="Future Perfect"
						firstPerson={futurePerfect}
						secondPerson={futurePerfect}
						thirdPerson={futurePerfect}
						firstPlural={futurePerfect}
						secondPlural={futurePerfect}
						thirdPlural={futurePerfect}
					/>
					<FormComp
						tenseName="Present Perfect Continuous"
						firstPerson={firstPersonPresPerfCont}
						secondPerson={firstPersonPresPerfCont}
						thirdPerson={thirdPersonPresPerfCont}
						firstPlural={firstPersonPresPerfCont}
						secondPlural={firstPersonPresPerfCont}
						thirdPlural={firstPersonPresPerfCont}
					/>
					<FormComp
						tenseName="Past Perfect Continuous"
						firstPerson={pastPerfCont}
						secondPerson={pastPerfCont}
						thirdPerson={pastPerfCont}
						firstPlural={pastPerfCont}
						secondPlural={pastPerfCont}
						thirdPlural={pastPerfCont}
					/>
					<FormComp
						tenseName="Future Perfect Continuous"
						firstPerson={futurePerfCont}
						secondPerson={futurePerfCont}
						thirdPerson={futurePerfCont}
						firstPlural={futurePerfCont}
						secondPlural={futurePerfCont}
						thirdPlural={futurePerfCont}
					/>
				</div>
			) : (
				<div className="bg"></div>
			)}
		</>
	);
};

export default Main;
