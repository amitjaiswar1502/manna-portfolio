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
