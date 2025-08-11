import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-background/80">
      <section id="redes" className="container py-10">
        <h2 className="text-xl font-semibold">Síguenos</h2>
        <p className="text-muted-foreground mt-1">Instagram y Facebook @PastelCariocaCol</p>
        <div className="mt-4 flex items-center gap-4">
          <a
            href="https://instagram.com/PastelCariocaCol"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-accent transition-colors"
            aria-label="Abrir Instagram de Pastel Carioca"
          >
            <Instagram className="size-5" />
            <span>@PastelCariocaCol</span>
          </a>
          <a
            href="https://facebook.com/PastelCariocaCol"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-accent transition-colors"
            aria-label="Abrir Facebook de Pastel Carioca"
          >
            <Facebook className="size-5" />
            <span>@PastelCariocaCol</span>
          </a>
        </div>
      </section>
      <div className="container py-6 border-t border-border/40 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Pastel Carioca. Todos los derechos reservados.</p>
        <nav className="flex items-center gap-6">
          <a href="#privacidad" className="hover:text-accent">Privacidad</a>
          <a href="#cookies" className="hover:text-accent">Cookies</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;