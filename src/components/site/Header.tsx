import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getPublicAssetPath } from "@/lib/assets";
const WA_MAIN = "https://wa.me/573244524438?text=Hola%21%20Quiero%20Coxinhas%21";
const Header = () => {
  return <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-start justify-between">
        <div className="flex items-start gap-3 pt-2">
          <Link to="/" className="inline-flex items-start" aria-label="Pastel Carioca inicio">
            <img
              src={getPublicAssetPath("/lovable-uploads/logo-carioca.png")}
              alt="Pastel Carioca logo"
              className="block h-20 w-auto md:h-24 object-contain object-top"
              loading="eager"
              decoding="async"
            />
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-3 pt-2">
          <Button asChild variant="gold" size="sm">
            <a href="#destacados">Destacados</a>
          </Button>
          <Button asChild variant="gold" size="sm">
            <a href="#pedidos">Pedidos</a>
          </Button>
          <Button asChild variant="gold" size="sm">
            <a href="#sobre">Sobre nosotros</a>
          </Button>
          <Button asChild variant="gold" size="sm">
            <a href="#redes">Redes</a>
          </Button>
        </nav>
        <div className="hidden md:flex items-center pt-2">
          <Button asChild variant="whatsapp">
            <a href={WA_MAIN} aria-label="Pedir por WhatsApp" rel="noopener noreferrer" target="_blank">Pedir por WhatsApp</a>
          </Button>
        </div>
      </div>
    </header>;
};
export default Header;