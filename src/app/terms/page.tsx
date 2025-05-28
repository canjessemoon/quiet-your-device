export default function Terms() {
  return (
    <main className="bg-beige min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-sm p-8 md:p-12">
          <h1 className="text-4xl font-bold text-fern mb-6">📄 Terms of Use</h1>
          <p className="text-stone mb-8">
            <strong>Effective Date:</strong> May 28, 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-fern mb-4">1. Acceptance</h2>
            <p className="text-stone leading-relaxed">
              By accessing QuietYourDevice.com ("QYD"), you agree to these terms. If you do not agree, please do not use the site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-fern mb-4">2. Purpose</h2>
            <p className="text-stone leading-relaxed">
              QYD provides information and tools to support healthier screen habits. It is not a substitute for professional medical or mental health advice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-fern mb-4">3. Use of Content</h2>
            <p className="text-stone leading-relaxed">
              All content is for personal, non-commercial use. You may download or print our resources for personal use only. Please do not redistribute or resell.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-fern mb-4">4. User Conduct</h2>
            <p className="text-stone leading-relaxed mb-4">By using our site, you agree not to:</p>
            <ul className="space-y-2 text-stone ml-6">
              <li className="flex items-start">
                <span className="text-fern mr-3">•</span>
                Use it for illegal purposes
              </li>
              <li className="flex items-start">
                <span className="text-fern mr-3">•</span>
                Disrupt our site or server
              </li>
              <li className="flex items-start">
                <span className="text-fern mr-3">•</span>
                Attempt unauthorized access
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-fern mb-4">5. Intellectual Property</h2>
            <p className="text-stone leading-relaxed">
              All original content (text, images, logos) is owned by QuietYourDevice.com unless otherwise credited. Please request permission to reuse anything beyond personal use.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-fern mb-4">6. External Links</h2>
            <p className="text-stone leading-relaxed">
              We link to helpful third-party resources, but we are not responsible for their content, availability, or practices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-fern mb-4">7. Changes</h2>
            <p className="text-stone leading-relaxed">
              We may update these terms from time to time. If we do, we'll update the date at the top of this page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-fern mb-4">8. Contact</h2>            <p className="text-stone leading-relaxed">
              Questions? Get in touch:<br />
              📧 <a href="mailto:hello@quietyourdevice.com" className="text-fern hover:text-sage transition-colors">hello@quietyourdevice.com</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
