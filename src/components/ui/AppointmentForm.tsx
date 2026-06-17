"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, Loader2, AlertCircle } from "lucide-react";
import { doctors } from "@/data/doctors";
import { services } from "@/data/services";

const schema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  email: z.string().email("Enter a valid email").or(z.literal("")),
  age: z.coerce.number().min(1, "Enter valid age").max(120, "Enter valid age"),
  gender: z.enum(["male", "female", "other"]),
  department: z.string().min(1, "Please select a department"),
  doctor: z.string().optional(),
  preferredDate: z.string().min(1, "Please select a date"),
  preferredTime: z.string().min(1, "Please select a time"),
  message: z.string().optional(),
  isEmergency: z.boolean().default(false),
});

type FormData = z.infer<typeof schema>;

export default function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 1500));
    console.log("Appointment:", data);
    setSubmitted(true);
    reset();
  };

  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "12:00 PM", "02:00 PM",
    "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM",
    "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM",
  ];

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center px-4">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-5">
          <CheckCircle className="w-10 h-10 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Appointment Requested!</h3>
        <p className="text-gray-500 max-w-sm mb-6">
          We&apos;ve received your appointment request. Our team will call you within 30 minutes to confirm.
        </p>
        <button onClick={() => setSubmitted(false)} className="btn-primary">
          Book Another Appointment
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Emergency checkbox */}
      <label className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl cursor-pointer hover:bg-red-100 transition-colors">
        <input type="checkbox" {...register("isEmergency")} className="w-5 h-5 accent-red-500" />
        <div>
          <p className="font-semibold text-red-700 text-sm">This is an Emergency</p>
          <p className="text-xs text-red-500">Check if you need urgent same-day care</p>
        </div>
        <AlertCircle className="w-5 h-5 text-red-400 ml-auto" />
      </label>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
          <input {...register("fullName")} placeholder="Your full name" className="input-field" />
          {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number *</label>
          <input {...register("phone")} placeholder="10-digit mobile number" className="input-field" />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
          <input {...register("email")} placeholder="your@email.com" type="email" className="input-field" />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Age *</label>
          <input {...register("age")} placeholder="Your age" type="number" className="input-field" />
          {errors.age && <p className="text-red-500 text-xs mt-1">{errors.age.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Gender *</label>
          <select {...register("gender")} className="input-field">
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Department *</label>
          <select {...register("department")} className="input-field">
            <option value="">Select department</option>
            {services.map((s) => (
              <option key={s.id} value={s.title}>{s.title}</option>
            ))}
          </select>
          {errors.department && <p className="text-red-500 text-xs mt-1">{errors.department.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Preferred Doctor</label>
          <select {...register("doctor")} className="input-field">
            <option value="">Any available doctor</option>
            {doctors.map((d) => (
              <option key={d.id} value={d.name}>{d.name} — {d.specialization}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Preferred Date *</label>
          <input {...register("preferredDate")} type="date" min={minDate} className="input-field" />
          {errors.preferredDate && <p className="text-red-500 text-xs mt-1">{errors.preferredDate.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time *</label>
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
          {timeSlots.map((slot) => (
            <label key={slot} className="cursor-pointer">
              <input type="radio" {...register("preferredTime")} value={slot} className="sr-only peer" />
              <span className="block text-center text-xs py-2 px-1 rounded-lg border border-gray-200 peer-checked:bg-teal-600 peer-checked:text-white peer-checked:border-teal-600 hover:border-teal-400 transition-colors">
                {slot}
              </span>
            </label>
          ))}
        </div>
        {errors.preferredTime && <p className="text-red-500 text-xs mt-1">{errors.preferredTime.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Message / Symptoms</label>
        <textarea
          {...register("message")}
          rows={3}
          placeholder="Briefly describe your symptoms or reason for visit..."
          className="input-field resize-none"
        />
      </div>

      <button type="submit" disabled={isSubmitting} className="btn-primary w-full justify-center py-4 text-base">
        {isSubmitting ? (
          <><Loader2 className="w-5 h-5 animate-spin" /> Submitting...</>
        ) : (
          "Confirm Appointment Request"
        )}
      </button>

      <p className="text-xs text-gray-400 text-center">
        By submitting, you agree to be contacted by our team. For emergencies, call{" "}
        <a href="tel:+919999999999" className="text-red-500 font-semibold">+91-9999999999</a> immediately.
      </p>
    </form>
  );
}
