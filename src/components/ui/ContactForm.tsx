"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  AlertCircle,
  Building2,
  Mail,
  ArrowRight,
} from "lucide-react";

import { SITE_CONFIG } from "@/lib/utils";

const schema = z.object({
  name: z.string().trim().min(2, "Enter your full name"),
  phone: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),
  email: z.string().trim().email("Enter a valid email address"),
  subject: z
    .string()
    .trim()
    .min(3, "Please enter a subject")
    .max(150, "Keep the subject under 150 characters"),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Keep the message under 2,000 characters"),
});

type FormData = z.infer<typeof schema>;

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 transition-colors placeholder:text-slate-400 focus:border-teal-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-100";

function ContactFormContent() {
  const searchParams = useSearchParams();

  const facility = (searchParams.get("facility") ?? "")
    .replace(/[\r\n]/g, " ")
    .trim()
    .slice(0, 100);

  const [draftOpened, setDraftOpened] = useState(false);
  const [deliveryError, setDeliveryError] = useState("");

  const {
    register,
    handleSubmit,
    getFieldState,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  useEffect(() => {
    // Preserve a subject the visitor has already edited.
    if (!getFieldState("subject").isDirty) {
      setValue(
        "subject",
        facility ? `Facility enquiry: ${facility}` : "",
      );
    }

  
  }, [facility, getFieldState, setValue]);

  const onSubmit = (data: FormData) => {
    setDeliveryError("");

    const recipient = SITE_CONFIG.email.info?.trim();
    const validRecipient = z.string().email().safeParse(recipient);

    if (!validRecipient.success) {
      setDeliveryError(
        "The hospital email address is unavailable. Please contact the hospital by phone.",
      );
      return;
    }

    const body = [
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email}`,
      "",
      data.message,
    ].join("\n");

    const mailto =
      `mailto:${encodeURIComponent(validRecipient.data)}` +
      `?subject=${encodeURIComponent(data.subject)}` +
      `&body=${encodeURIComponent(body)}`;

   window.location.assign(mailto);
    setDraftOpened(true);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      onChange={() => setDraftOpened(false)}
      className="space-y-5"
    >
      {/* Selected facility */}
      {facility && (
        <div className="flex items-start gap-3 rounded-2xl border border-teal-200 bg-teal-50 p-4">
          <div className="rounded-xl bg-white p-2.5 text-teal-800">
            <Building2
              aria-hidden="true"
              className="h-5 w-5"
            />
          </div>

          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-800">
              Facility Enquiry
            </p>
            <p className="mt-1 break-words font-semibold text-teal-950">
              {facility}
            </p>
            <p className="mt-1 text-xs leading-5 text-slate-600">
              The subject below has been filled in for you.
            </p>
          </div>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-name"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Your Name *
          </label>

          <input
            id="contact-name"
            {...register("name")}
            autoComplete="name"
            placeholder="Full name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={
              errors.name ? "contact-name-error" : undefined
            }
            className={inputClass}
          />

          {errors.name && (
            <p
              id="contact-name-error"
              className="mt-1 text-xs text-red-700"
            >
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="contact-phone"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Phone Number *
          </label>

          <input
            id="contact-phone"
            {...register("phone")}
            type="tel"
            inputMode="numeric"
            autoComplete="tel-national"
            maxLength={10}
            placeholder="10-digit mobile number"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={
              errors.phone ? "contact-phone-error" : undefined
            }
            className={inputClass}
          />

          {errors.phone && (
            <p
              id="contact-phone-error"
              className="mt-1 text-xs text-red-700"
            >
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-email"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Email Address *
        </label>

        <input
          id="contact-email"
          {...register("email")}
          type="email"
          autoComplete="email"
          placeholder="your@email.com"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={
            errors.email ? "contact-email-error" : undefined
          }
          className={inputClass}
        />

        {errors.email && (
          <p
            id="contact-email-error"
            className="mt-1 text-xs text-red-700"
          >
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="contact-subject"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Subject *
        </label>

        <input
          id="contact-subject"
          {...register("subject")}
          maxLength={150}
          placeholder="What would you like to enquire about?"
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={
            errors.subject ? "contact-subject-error" : undefined
          }
          className={inputClass}
        />

        {errors.subject && (
          <p
            id="contact-subject-error"
            className="mt-1 text-xs text-red-700"
          >
            {errors.subject.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Message *
        </label>

        <textarea
          id="contact-message"
          {...register("message")}
          rows={5}
          maxLength={2000}
          placeholder="Ask about availability, timings, preparation or fees."
          aria-invalid={Boolean(errors.message)}
          aria-describedby="contact-message-help contact-message-error"
          className={`${inputClass} resize-y`}
        />

        <p
          id="contact-message-help"
          className="mt-2 text-xs leading-5 text-slate-500"
        >
          For general enquiries only. Please avoid including detailed
          medical records or sensitive health information.
        </p>

        <p
          id="contact-message-error"
          className="mt-1 text-xs text-red-700"
        >
          {errors.message?.message}
        </p>
      </div>

      {deliveryError && (
        <p
          role="alert"
          className="rounded-xl bg-red-50 p-4 text-sm text-red-800"
        >
          {deliveryError}
        </p>
      )}

      {draftOpened && (
        <div
          role="status"
          className="rounded-xl border border-teal-200 bg-teal-50 p-4 text-sm leading-6 text-teal-950"
        >
          Your email app was requested to open a draft. Please send
          it there to complete your enquiry. If no draft opens,
          contact the hospital directly. Your message has not been
          sent by this website.
        </div>
      )}

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-teal-700 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700"
      >
        <Mail aria-hidden="true" className="h-4 w-4" />
        Open Email Draft
        <ArrowRight aria-hidden="true" className="h-4 w-4" />
      </button>

      <p className="text-center text-xs leading-5 text-slate-500">
        Opens your email app. Review and send the message there.
      </p>

      <div className="flex items-start gap-2 rounded-xl bg-amber-50 p-4 text-xs leading-6 text-amber-950">
        <AlertCircle
          aria-hidden="true"
          className="mt-1 h-4 w-4 shrink-0"
        />
        In an emergency, seek immediate medical assistance.
        Do not wait for an online or email response.
      </div>
    </form>
  );
}

export default function ContactForm() {
  return (
    <Suspense
      fallback={
        <p className="py-8 text-sm text-slate-600">
          Loading enquiry form…
        </p>
      }
    >
      <ContactFormContent />
    </Suspense>
  );
}