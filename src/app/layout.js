import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Head from "next/head";
import Contact from '@/components/contact/ContactLayout';
import Navbar from "@/components/home/Navbar";

export const metadata = {
  title: "Karan Kumar | Full-Stack Developer & Digital Vision Architect",
  description:
    "Portfolio of Karan Kumar, showcasing futuristic web design, 3D & animated interfaces, and full-stack development expertise.",
  url: "https://karankumar.dev", // replace with your domain
  image: "/og-image.png", // replace with your OG image
  author: "Karan Kumar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="author" content={metadata.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:image" content={metadata.image} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Karan Kumar",
              url: metadata.url,
              sameAs: [
                "https://www.linkedin.com/in/karan-kumar/",
                "https://github.com/karankumar",
                "https://twitter.com/karankumar",
              ],
              jobTitle: "Full-Stack Developer & Digital Vision Architect",
              description: metadata.description,
            }),
          }}
        />
      </Head>

      <body className={`cursor-none`}>
        <CustomCursor />
        <Navbar />
        {children}
        <Contact />
      </body>
    </html>
  );
}
