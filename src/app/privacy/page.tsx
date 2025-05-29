export default function Privacy() {
  return (
    <main className="bg-beige min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-sm p-8 md:p-12">
          <h1 className="text-4xl font-bold text-fern mb-6">📄 Privacy Policy</h1>
          <p className="text-stone mb-8">
            <strong>Effective Date:</strong> May 28, 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-fern mb-4">1. Introduction</h2>            <p className="text-stone leading-relaxed">
              At QuietYourDevice.com (&ldquo;QYD&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), your privacy matters. This policy explains how we collect, use, and protect your information when you visit our site or interact with our tools and content.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-fern mb-4">2. What We Collect</h2>
            <p className="text-stone leading-relaxed mb-4">We may collect:</p>
            <ul className="space-y-2 text-stone ml-6">
              <li className="flex items-start">
                <span className="text-fern mr-3">•</span>
                Email address (if you subscribe to our newsletter)
              </li>
              <li className="flex items-start">
                <span className="text-fern mr-3">•</span>
                Anonymous site usage data (e.g., via privacy-first analytics like Plausible)
              </li>
            </ul>
            <p className="text-stone leading-relaxed mt-4">
              We do not collect sensitive personal information, and we do not sell or share your data with third parties for marketing.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-fern mb-4">3. How We Use Your Info</h2>
            <p className="text-stone leading-relaxed mb-4">We use your information to:</p>
            <ul className="space-y-2 text-stone ml-6">
              <li className="flex items-start">
                <span className="text-fern mr-3">•</span>
                Send occasional wellness emails (if you opt-in)
              </li>
              <li className="flex items-start">
                <span className="text-fern mr-3">•</span>
                Improve our website experience
              </li>
              <li className="flex items-start">
                <span className="text-fern mr-3">•</span>
                Understand how visitors engage with our content
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-fern mb-4">4. Cookies & Analytics</h2>
            <p className="text-stone leading-relaxed">
              We may use cookies or local storage for functionality (e.g., remembering preferences). If we use analytics, they are privacy-first and anonymized.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-fern mb-4">5. Third-Party Links</h2>            <p className="text-stone leading-relaxed">
              We may link to tools like Calm or Forest. We&apos;re not responsible for their privacy practices, so please review their policies separately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-fern mb-4">6. Your Rights</h2>
            <p className="text-stone leading-relaxed mb-4">You can:</p>
            <ul className="space-y-2 text-stone ml-6">
              <li className="flex items-start">
                <span className="text-fern mr-3">•</span>
                Unsubscribe from our emails at any time
              </li>              <li className="flex items-start">
                <span className="text-fern mr-3">•</span>
                Request deletion of your data (email us at hello@quietyourdevice.com)
              </li>
              <li className="flex items-start">
                <span className="text-fern mr-3">•</span>
                Ask us what information we hold about you
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-fern mb-4">7. Contact</h2>            <p className="text-stone leading-relaxed">
              For privacy questions or requests:<br />
              📧 <a href="mailto:hello@quietyourdevice.com" className="text-fern hover:text-sage transition-colors">hello@quietyourdevice.com</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
