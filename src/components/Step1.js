import React from "react";

export default function Step1({ formData, setFormData }) {
	return (
		<div className="step1 flex flex-col">
			<label>
				* Nama / <i>Name</i>
			</label>
			<input required type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
			<label>
				* Tanggal Lahir / <i>Date of Birth</i>
			</label>
			<label>Masukkan tanggal lahir pasien dengan format tanggal/bulan/tahun.</label>
			<label>
				<i>Please insert patient's D.O.B with DD/MM/YY format.</i>
			</label>
			<input required type="date" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
			<label>
				* No Ponsel / <i>Phone number</i>
			</label>
			<input required type="text" placeholder="Phone number" value={formData.phoneNumber} onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })} />
			<label>* Email</label>
			<input required type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
			<label>
				* Saya setuju bahwa data dan segala informasi yang saya berikan dalam feedback ini akan disimpan oleh PT Siloam International Hospitals Tbk dan/atau anak perusahaannya dan/atau pihak lain yang
				ditunjuk oleh Siloam dan Siloam berhak untuk melakukan pengolahan data tersebut untuk peningkatan layanan Siloam kepada Pasien.
			</label>
			<label>
				<i>
					I agree that the data and all information that I provide in this feedback will be stored by PT Siloam International Hospitals Tbk and/or its subsidiaries and/or other parties appointed by
					Siloam and Siloam has the right to process the data to improve Siloam's services to patients.
				</i>
			</label>
			<div className="flex gap-2.5">
				<input required type="radio" name="agreement" value="agree" className="radio" />
				<span>
					Ya, Saya setuju / <i>Yes, I Agree</i>
				</span>
			</div>
		</div>
	);
}
