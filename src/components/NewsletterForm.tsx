'use client';

export default function NewsletterForm() {
  // Google Apps Script webhook URL for saving emails to Google Sheets
  const WEBHOOK = "https://script.google.com/macros/s/AKfycbwwf1Icej1YKxCiLk83psXmDrZDBFxPeSgiMLFzlEWP3Z8e0xmGop3SDq54WWAHkfDbyA/exec";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim();
    const website = (form.elements.namedItem('website') as HTMLInputElement).value;
    const msg = form.querySelector('#msg') as HTMLElement;
    
    if (!email) return;
    
    msg.textContent = 'Saving…';
    msg.className = 'text-sm text-sage';
    
    try {
      await fetch(WEBHOOK, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email, 
          website, 
          ua: navigator.userAgent 
        })
      });
      
      form.reset();
      msg.textContent = "Thanks! You're on the list.";
      msg.className = 'text-sm text-fern font-medium';
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        msg.textContent = '';
      }, 5000);
      
    } catch {
      msg.textContent = 'Please try again.';
      msg.className = 'text-sm text-red-600';
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <input 
            name="email" 
            type="email" 
            required 
            placeholder="your.email@example.com" 
            className="flex-1 px-4 py-3 border border-sage/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-fern focus:border-transparent text-stone placeholder-sage/60"
          />
          {/* Honeypot field - hidden from users */}
          <input 
            name="website" 
            type="text" 
            tabIndex={-1} 
            autoComplete="off" 
            style={{position:'absolute', left:'-9999px'}} 
            aria-hidden="true"
          />
          <button 
            type="submit" 
            className="px-6 py-3 bg-gold hover:bg-gold/90 text-stone font-semibold transition-colors shadow-md rounded-lg"
          >
            Subscribe
          </button>
        </div>
        <small id="msg" aria-live="polite" className="block min-h-[1.25rem]" />
      </form>
      
      <p className="text-sm text-sage mt-4 text-center">
        By subscribing, you agree to receive occasional updates. Unsubscribe anytime.
      </p>
    </div>
  );
}
