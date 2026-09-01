import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Manoj Manna — Senior UX Designer Portfolio',
  description: 'Portfolio of Manoj Manna, Senior UX Designer with 8+ years of experience in enterprise, fintech, and edtech digital products, scalable design systems, and user research.',
  openGraph: {
    title: 'Manoj Manna — Senior UX Designer Portfolio',
    description: 'Senior UX Designer specializing in enterprise systems, fintech, edtech, and scalable design architectures.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manoj Manna — Senior UX Designer Portfolio',
    description: 'Senior UX Designer specializing in enterprise systems, fintech, edtech, and scalable design architectures.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html 
      lang="en" 
      className="scroll-smooth" 
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Space+Grotesk:wght@400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (theme === 'dark' || (!theme && prefersDark)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased selection:bg-[#C25934] selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
