import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

export default function Form() {
	const [page, setPage] = useState(0);
	const [formData, setFormData] = useState({
		email: "",
		password: "",
		confirmPassword: "",
		firstName: "",
		lastName: "",
		username: "",
		nationality: "",
		other: "",
	});
	const FormTitles = ["Siloam Patient Digital Feedback - OPD Department", "Siloam Patient Digital Feedback - OPD Department", "Siloam Patient Digital Feedback - OPD Department"];

	function PageDisplay() {
		if (page === 0) {
			return <Step1 formData={formData} setFormData={setFormData} />;
		} else if (page === 1) {
			return <Step2 formData={formData} setFormData={setFormData} />;
		} else {
			return <Step3 formData={formData} setFormData={setFormData} />;
		}
	}

	return (
		<div className="form">
			<img src="images/logo.png" alt="" m className="w-[300px]" />
			<div className="form-container my-[5%] mx-[15%]">
				<div>
					<div className="h1">{FormTitles[page]}</div>
				</div>
				<div className="body">{PageDisplay()}</div>
				<div className="footer flex justify-center gap-5">
					<button
						className="btn"
						disabled={page === 0}
						onClick={() => {
							setPage((currPage) => currPage - 1);
						}}>
						Back
					</button>
					<button
						className="btn"
						onClick={() => {
							if (page === FormTitles.length - 1) {
								alert("Form submitted");
								console.log(formData);
							} else {
								setPage((currPage) => currPage + 1);
							}
						}}>
						{page === FormTitles.length - 1 ? "Submit" : "Next"}
					</button>
				</div>
			</div>
		</div>
	);
}
