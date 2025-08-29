import { Twitter, Facebook, Instagram, Mail } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="py-8 bg-muted/40 text-center flex flex-col gap-2 items-center">
      <div className="flex gap-4 justify-center mb-2">
        <a href="mailto:info@gigafy.com" className="hover:underline flex items-center gap-1">
          <Mail size={18} /> info@gigafy.com
        </a>
        <a href="#" className="hover:underline flex items-center gap-1">
          <Twitter size={18} /> Twitter
        </a>
        <a href="#" className="hover:underline flex items-center gap-1">
          <Facebook size={18} /> Facebook
        </a>
        <a href="#" className="hover:underline flex items-center gap-1">
          <Instagram size={18} /> Instagram
        </a>
      </div>
      <div className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} Gigafy. All rights reserved.</div>
    </footer>
  );
}
