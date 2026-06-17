import type { Metadata } from "next";
import { Phone, Clock, CheckCircle } from "lucide-react";
import AppointmentForm from "@/components/ui/AppointmentForm";
import { SITE_CONFIG } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Book Appointment",
  description: "Book an appointment at Ashwini Neuro Care Center Latur — easy online booking with expert neurologists and specialists.",
};

const steps = [
  { step: "1", title: "Fill the Form", desc: "Enter your details, department preference, and convenient time slot." },
  { step: "2", title: "Confirmation Call", desc: "Our team will call you within 30 minutes to confirm the appointment." },
  { step: "3", title: "Visit the Hospital", desc: "Arrive 10 minutes before your scheduled time with your medical records." },
];

export default function AppointmentPage() {
  return (
    <div>
      <section className="bg-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Book an Appointment</h1>
          <p className="text-teal-100 text-lg max-w-2xl mx-auto">
            Schedule your consultation with our expert specialists. Quick, easy, and confirmed within 30 minutes.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Sidebar */}
            <div className="space-y-6">
              {/* How it works */}
              <div className="card p-6">
                <h3 className="font-bold text-gray-900 text-lg mb-5">How It Works</h3>
                <div className="space-y-5">
                  {steps.map((s) => (
                    <div key={s.step} className="flex gap-4">
                      <div className="w-8 h-8 bg-teal-600 rounded-full text-white font-bold text-sm flex items-center justify-center flex-shrink-0">
                        {s.step}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{s.title}</p>
                        <p className="text-gray-500 text-xs mt-0.5">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency card */}
              <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
                <h3 className="font-bold text-red-800 mb-2">Medical Emergency?</h3>
                <p className="text-red-700 text-sm mb-3">Don&apos;t use this form — call us immediately.</p>
                <a href={`tel:${SITE_CONFIG.phone.emergency}`} className="btn-emergency w-full justify-center text-sm">
                  <Phone className="w-4 h-4" /> {SITE_CONFIG.phone.emergency}
                </a>
              </div>

              {/* OPD hours */}
              <div className="card p-5">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-teal-600" /> OPD Hours
                </h3>
                <div className="space-y-2 text-sm">
                  {[
                    { day: "Monday – Friday", time: "9:00 AM – 8:00 PM" },
                    { day: "Saturday", time: "9:00 AM – 6:00 PM" },
                    { day: "Sunday", time: "Emergency Only" },
                  ].map((h) => (
                    <div key={h.day} className="flex justify-between">
                      <span className="text-gray-600">{h.day}</span>
                      <span className="font-medium text-gray-900">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What to bring */}
              <div className="card p-5">
                <h3 className="font-bold text-gray-900 mb-3">What to Bring</h3>
                <ul className="space-y-2">
                  {["Government ID (Aadhar/PAN)", "Previous medical records", "Prescription & reports", "Insurance card (if applicable)", "List of current medications"].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="card p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Appointment Request</h2>
                <p className="text-gray-500 text-sm mb-6">Fill in the form below and we&apos;ll confirm within 30 minutes.</p>
                <AppointmentForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
