export default function SiteFooter() {
  const contacts = [
    {
      label: "LinkedIn",
      value: "linkedin.com/in/alaa-alzhrani94",
      href: "https://linkedin.com/in/alaa-alzhrani94",
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden>
          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
        </svg>
      ),
    },
    {
      label: "Email",
      value: "L.zhrani94@gmail.com",
      href: "mailto:L.zhrani94@gmail.com",
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      ),
    },
    {
      label: "Phone",
      value: "+966 50 565 1930",
      href: "tel:+966505651930",
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="mt-32 px-6 md:px-14 pb-10">
      <div className="hairline mb-10" />
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 text-center md:text-right">
        <div>
          <p className="font-display text-3xl md:text-4xl text-deep">
            ألاء هاشم الزهراني
          </p>
          <p className="text-plum mt-2 text-sm">
            مصممة تعليمية · ماجستير تقنيات التعليم
          </p>

          <ul className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-2.5">
            {contacts.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={`${c.label}: ${c.value}`}
                  className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-cream border border-deep/15 text-deep hover:bg-deep hover:text-cream hover:border-deep transition-all duration-300 text-sm shadow-sm"
                >
                  <span className="opacity-80 group-hover:opacity-100">{c.icon}</span>
                  <span dir="ltr" className="font-mono text-xs md:text-[13px]">{c.value}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-mauve text-sm">© 2026 — جميع الحقوق محفوظة</p>
      </div>
    </footer>
  );
}
