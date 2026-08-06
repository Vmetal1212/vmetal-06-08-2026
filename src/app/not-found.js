/* eslint-disable @next/next/no-html-link-for-pages */
import { redirect } from "next/navigation";

export default function NotFound() {
  return (
    <div class="container-fluid padd-x thank-container">
      <div class="thanks">
        <h1>404</h1>
        <h5>Oops! Page Not Found</h5>
        <p>It looks like the page you&apos;re trying to reach doesn&apos;t exist or may have been moved. But don&apos;t worry — we&apos;re here to guide you.</p>
        <div className="d-flex align-items-center gap-2">
          <a href="/" class="button"><span>Go Home</span></a>
          <a href="/contact" class="button"><span>Contact Us</span></a>
        </div>
      </div>
    </div>
  );
}
