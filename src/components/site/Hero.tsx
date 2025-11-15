// Hero image served from public lovable-uploads
import { Button } from "@/components/ui/button";
import { getPublicAssetPath } from "@/lib/assets";
const WA_MAIN = "https://wa.me/573244524438?text=Hola%20Pastel%20Carioca%2C%20quiero%20pedir%20coxinha%20a%20domicilio%20Bogot%C3%A1";
const Hero = () => {
  return <section aria-label="Hero" className="relative overflow-hidden">
      <div className="relative">
        <img src={getPublicAssetPath("/lovable-uploads/9d24aac6-1463-401e-8ee8-9b18d458ebce.png")} alt="Coxinhas doradas y crujientes sobre pizarra, apetitosas" className="absolute inset-0 size-full object-cover" loading="eager" decoding="async" />
        <div className="relative hero-scrim-16">
          <div className="container min-h-[72vh] md:min-h-[80vh] flex items-center">
            <div className="max-w-2xl py-24">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-foreground">Crujiente, calientica y Carioca.</h1>
              <p className="mt-4 text-lg md:text-xl text-foreground max-w-prose">
                Descubre la auténtica coxinha brasileña: masa ligera dorada, relleno de pollo sazonado con un toque secreto. Ideal para dine-in (visítanos), take out, delivery o eventos corporativos en Bogotá. Hecho al momento con ingredientes frescos. Pide coxinha a domicilio y recibe entrega puntual.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <Button asChild size="lg" variant="whatsapp">
                  <a href={WA_MAIN} target="_blank" rel="noopener noreferrer" aria-label="Pedir por WhatsApp">
                    Pedir por WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;