import React from "react";

export default function Choice() {
	return (
		<div className=" choice flex gap-10">
			<div>
				<input type="radio" className="radio" name="experience" value="poor" />{" "}
				<span>
					Buruk / <i>poor</i>
				</span>
			</div>
			<div>
				<input type="radio" className="radio" name="experience" value="fair" />{" "}
				<span>
					Cukup / <i>fair</i>
				</span>
			</div>
			<div>
				<input type="radio" className="radio" name="experience" value="good" />{" "}
				<span>
					Baik / <i>good</i>
				</span>
			</div>
			<div>
				<input type="radio" className="radio" name="experience" value="excellent" />{" "}
				<span>
					Sangat Baik / <i>Excellent</i>
				</span>
			</div>
		</div>
	);
}
