import React from "react";
import Choice from "./Choice";

export default function Step3({ formData, setFormData }) {
	return (
		<div className="step3 flex flex-col">
			<div className="h2 -mt-5 mb-5">
				Mohon memilih minimal 1 kategori / <i>Please choose minimum of 1 category</i>
			</div>
			<label>
				Pengalaman Pembuatan Perjanjian di Siloam / <i>Appointment Experience</i>
			</label>
			<Choice />
			<label>
				Pendaftaran & Pengalaman Pembayaran / <i>Registration/Billing Experience</i>
			</label>
			<Choice />
			<label>
				Pengalaman Konsultasi dengan Dokter / <i>Doctor Consultation Experience</i>
			</label>
			<Choice />
			<label>
				Layanan Perawat / <i>Nursing Experience</i>
			</label>
			<Choice />
			<label>
				Layanan Laboratorium & Diagnostik / <i>Laboratory Services *if applicable</i>
			</label>
			<Choice />
			<label>
				Layanan Radiologi / <i>Radiology & Diagnostic Services *if applicable</i>
			</label>
			<Choice />
			<label>
				Layanan Apotek / <i>Pharmacy *if applicable</i>
			</label>
			<Choice />
			<label>
				Layanan <i>Pre-Operative Clinic/ Pre-Operative Clinic Services *If Applicable</i>
			</label>
			<Choice />
			<label>
				Fasilitas & Layanan Umum Rumah Sakit / <i>General Hospital Facility & Services</i>
			</label>
			<Choice />
		</div>
	);
}
