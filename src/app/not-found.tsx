import Link from "next/link";
import { Home, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-lg">
        <div className="text-8xl font-bold gradient-text mb-4">404</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Page Not Found</h2>
        <p className="text-gray-500 mb-8">
          The page you&apos;re looking for doesn&apos;t exist. If this is a medical emergency, please call us immediately.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn-primary">
            <Home className="w-4 h-4" /> Go Home
          </Link>
          <a href={`tel:${SITE_CONFIG.phone.emergency}`} className="btn-emergency">
            <Phone className="w-4 h-4" /> Emergency
          </a>
        </div>
      </div>
    </div>
  );
}
