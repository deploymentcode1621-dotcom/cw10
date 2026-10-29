import { Eye, Target, CheckCircle2 } from "lucide-react";

const missionPoints = [
  "To base clinical decisions on medical assessment, relevant evidence and each patient's needs.",
  "To explain proposed investigations, treatment options, potential benefits, risks and alternatives.",
  "To respect patient dignity, privacy, confidentiality and informed consent.",
  "To support patient safety through clinical protocols and periodic review of care practices.",
  "To provide clear information about services, consultation timings and applicable charges.",
  "To support health awareness through factual information about prevention and when to seek medical care.",
  "To coordinate follow-up and referral when a patient's needs require care beyond the hospital's available services.",
];

export default function VisionAndMission() {
  return (
    <section
      aria-labelledby="vision-mission-heading"
      className="bg-gray-50 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-teal-800">
            Our Purpose
          </p>

          <h2
            id="vision-mission-heading"
            className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl"
          >
            Vision &amp; Mission
          </h2>

          <p className="mx-auto mt-3 max-w-xl leading-relaxed text-gray-600">
            Our aims for ethical medical practice, informed decisions
            and respectful patient care.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          {/* Vision */}
          <div className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 lg:col-span-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50">
              <Eye
                aria-hidden="true"
                className="h-6 w-6 text-teal-800"
              />
            </div>

            <h3 className="text-xl font-bold text-gray-900">
              Our Vision
            </h3>

            <p className="text-sm leading-relaxed text-gray-600">
              To support the healthcare needs of the community through
              ethical medical practice, respect for patient dignity
              and access to information that helps patients and
              families make informed decisions about care.
            </p>

            <p className="text-sm leading-relaxed text-gray-600">
              We aim to develop our services in response to community
              needs, with attention to patient safety, continuity of
              care and responsible use of healthcare resources.
            </p>
          </div>

          {/* Mission */}
          <div className="flex flex-col gap-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 lg:col-span-3">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-50">
                <Target
                  aria-hidden="true"
                  className="h-6 w-6 text-teal-800"
                />
              </div>

              <h3 className="text-xl font-bold text-gray-900">
                Our Mission
              </h3>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {missionPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2.5 rounded-xl bg-teal-50/50 p-4"
                >
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-0.5 h-4 w-4 shrink-0 text-teal-800"
                  />

                  <span className="text-sm leading-relaxed text-gray-700">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}