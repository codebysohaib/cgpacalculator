import { SiTiktok, SiFacebook, SiInstagram } from "react-icons/si";

const socialLinks = [
  {
    name: "TikTok",
    icon: SiTiktok,
    href: "https://www.tiktok.com/@mughalsab_0",
  },
  {
    name: "Facebook",
    icon: SiFacebook,
    href: "https://www.facebook.com/share/1UenwYd2Rf/",
  },
  {
    name: "Instagram",
    icon: SiInstagram,
    href: "https://www.instagram.com/mughalsab_0",
  },
];

export default function Footer() {
  return (
    <footer className="py-8 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center space-x-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
              title={link.name}
            >
              <link.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
        <p className="text-center text-sm text-foreground/60 mt-4">
          © {new Date().getFullYear()} Muhammad Sohaib Asif. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
