import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getPublicAssetPath } from "@/lib/assets";
const WA_MAIN = "https://wa.me/573244524438?text=Hola%21%20Quiero%20Coxinhas%21";
const Header = () => {
  return <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" className="inline-flex items-center" aria-label="Pastel Carioca inicio">
            <img
              src={getPublicAssetPath("/lovable-uploads/3ad68f02-9f3e-4875-99e3-d8eeff791aaf.png")}
              alt="Pastel Carioca logo"
              className="block h-14 w-auto md:h-16 object-contain object-top"
              loading="eager"
              decoding="async"
            />
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#destacados" className="hover:text-accent transition-colors">Destacados</a>
          <a href="#pedidos" className="hover:text-accent transition-colors">Pedidos</a>
          <a href="#sobre" className="hover:text-accent transition-colors">Sobre nosotros</a>
          <a href="#redes" className="hover:text-accent transition-colors">Redes</a>
        </nav>
        <div className="hidden md:block">
          <Button asChild variant="whatsapp">
            <a href={WA_MAIN} aria-label="Pedir por WhatsApp" rel="noopener noreferrer" target="_blank">Pedir por WhatsApp</a>
          </Button>
        </div>
      </div>
    </header>;
};
export default Header;