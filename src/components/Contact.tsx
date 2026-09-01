import { useState } from 'react';
import { site } from '@/data/site';
import { useMagnetic } from '@/hooks/useMagnetic';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const sendRef = useMagnetic<HTMLButtonElement>(0.2);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.message.trim()) e.message = 'Message is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1200);
  };

  const fieldClass = (field: string) =>
    `w-full bg-transparent border-b px-0 py-3 font-mono text-sm text-paper-100 placeholder:text-ink-500 transition-colors duration-300 focus:outline-none ${
      errors[field] ? 'border-red-500' : 'border-ink-600 focus:border-accent-400'
    }`;

  return (
    <section id="contact" className="relative py-32 lg:py-48">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
          {/* Left: Heading + info */}
          <div className="lg:col-span-6">
            <div className="reveal mb-4">
              <span className="label-accent">/ Contact</span>
            </div>
            <h2 className="reveal-blur font-display text-section font-bold leading-[0.9] tracking-tightest text-paper-50">
              LET'S BUILD
              <br />
              SOMETHING.
            </h2>
            <p className="reveal mt-8 max-w-md text-sm leading-relaxed text-paper-400">
              Interested in connecting or discussing an opportunity? Get in touch.
            </p>

            {/* Contact details */}
            <div className="reveal mt-12 space-y-6">
              <a
                href={`mailto:${site.email}`}
                className="group flex items-center gap-3 text-paper-200 transition-colors duration-300 hover:text-accent-400"
              >
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-paper-400">Email</span>
                <span className="h-px w-8 bg-ink-600 transition-colors duration-300 group-hover:bg-accent-400" />
                <span className="font-mono text-sm">{site.email}</span>
              </a>
              <a
                href={`tel:${site.phone}`}
                className="group flex items-center gap-3 text-paper-200 transition-colors duration-300 hover:text-accent-400"
              >
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-paper-400">Phone</span>
                <span className="h-px w-8 bg-ink-600 transition-colors duration-300 group-hover:bg-accent-400" />
                <span className="font-mono text-sm">{site.phone}</span>
              </a>
              <div className="flex items-center gap-3 text-paper-200">
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-paper-400">Location</span>
                <span className="h-px w-8 bg-ink-600" />
                <span className="font-mono text-sm">{site.location}</span>
              </div>
            </div>

            {/* Social links */}
            <div className="reveal mt-12 flex gap-6">
              <a
                href={site.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline font-mono text-xs uppercase tracking-[0.15em] text-paper-300 transition-colors duration-300 hover:text-accent-400"
              >
                GitHub ↗
              </a>
              <a
                href={site.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline font-mono text-xs uppercase tracking-[0.15em] text-paper-300 transition-colors duration-300 hover:text-accent-400"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-5 lg:col-start-8">
            <form onSubmit={handleSubmit} className="reveal space-y-8">
              <div>
                <label className="label mb-2 block" htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={fieldClass('name')}
                  placeholder="Your name"
                />
                {errors.name && <p className="mt-2 font-mono text-xs text-red-500">{errors.name}</p>}
              </div>

              <div>
                <label className="label mb-2 block" htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={fieldClass('email')}
                  placeholder="your@email.com"
                />
                {errors.email && <p className="mt-2 font-mono text-xs text-red-500">{errors.email}</p>}
              </div>

              <div>
                <label className="label mb-2 block" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${fieldClass('message')} resize-none`}
                  placeholder="Your message"
                />
                {errors.message && <p className="mt-2 font-mono text-xs text-red-500">{errors.message}</p>}
              </div>

              <button
                ref={sendRef}
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="group inline-flex items-center gap-2 rounded-full bg-accent-400 px-7 py-3.5 font-mono text-xs font-medium uppercase tracking-[0.15em] text-ink-950 transition-colors duration-300 hover:bg-accent-300 disabled:opacity-60"
              >
                {status === 'loading' && 'Sending...'}
                {status === 'success' && 'Sent ✓'}
                {status === 'idle' && (
                  <>
                    Send Message
                    <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                  </>
                )}
              </button>

              {status === 'success' && (
                <p className="font-mono text-xs text-accent-400">
                  Thank you! Your message has been recorded.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
