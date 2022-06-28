import React from "react";
import Choice from "./Choice";

export default function Step2({ formData, setFormData }) {
	return (
		<div className="step2 flex flex-col">
			<label>* Bagaimana pengalaman Anda di Siloam Hospital?</label>
			<label>
				<i>How was your overall experience at our hospital?</i>
			</label>
			<Choice />
			<label className="mt-5">* Apakah Anda mudah mendapatkan informasi yang Anda perlukan?</label>
			<label>
				<i>Did you find us when you need us? (Easy access to hospital's information and location)</i>
			</label>
			<div className="flex justify-around text-xs mt-5">
				<span>
					Tidak Mudah / <i>Never</i>
				</span>
				<span>
					Terkadang / <i>Sometimes</i>
				</span>
				<span>
					Cukup Mudah / <i>Most Often</i>
				</span>
				<span>
					Sangat Mudah / <i>Always</i>
				</span>
			</div>
			<div className="flex justify-around bg-gray-200 py-1.5 mb-5">
				<i className="fa-solid fa-face-smile"></i>
				<i className="fa-solid fa-face-smile"></i>
				<i className="fa-solid fa-face-smile"></i>
				<i className="fa-solid fa-face-smile"></i>
			</div>
			<label className="mt-5">* Seberapa besar kemungkinan Anda merekomendasikan Siloam Hospitals ke teman atau kolega Anda?</label>
			<label>
				<i>How likely are you to recommend Siloam Hospitals to your friends or colleagues?</i>
			</label>
			<div className="flex justify-between text-xs">
				<span>Sama sekali tidak mungkin</span>
				<span>Sangat mungkin sekali</span>
			</div>
			<div className="flex justify-around recommendation mt-2.5 font-bold">
				<span>0</span>
				<span>1</span>
				<span>2</span>
				<span>3</span>
				<span>4</span>
				<span>5</span>
				<span>6</span>
				<span>7</span>
				<span>8</span>
				<span>9</span>
				<span>10</span>
			</div>
			<img src="images/emotions.png" alt="" />
			<label>Mohon bantu kami untuk mengerti alasan dibalik rating tersebut</label>
			<label>
				<i>Please help us understand the reason behind your rating</i>
			</label>
			<textarea rows="3" className="border border-black mt-5 p-2.5" placeholder="Comments"></textarea>
		</div>
	);
}
