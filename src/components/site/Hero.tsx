import heroImg from "@/assets/hero-coxinhas.jpg";
import { Button } from "@/components/ui/button";

const WA_MAIN = "https://wa.me/573244524438?text=Hola%21%20Quiero%20Coxinhas%21";

const Hero = () => {
  return (
    <section aria-label="Hero" className="relative overflow-hidden">
      <div className="relative">
        <img
          src={heroImg}
          alt="Coxinhas doradas y crujientes sobre pizarra, apetitosas"
          className="absolute inset-0 size-full object-cover"
          loading="eager"
          decoding="async"
        />
        <div className="relative hero-scrim-16">
          <div className="container min-h-[72vh] md:min-h-[80vh] flex items-center">
            <div className="max-w-2xl py-24">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-accent text-outline">
                Calentito, crocante y carioca.
              </h1>
              <p className="mt-4 text-lg md:text-xl text-foreground max-w-prose">
                Hecho al momento, con ingredientes honestos. Coxinhas y pasabocas brasileños que invitan a bailar.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <Button asChild size="lg" variant="whatsapp">
                  <a href={WA_MAIN} target="_blank" rel="noopener noreferrer" aria-label="Pedir por WhatsApp">
                    Pedir por WhatsApp
                  </a>
                </Button>
                <Button asChild size="lg" variant="hero">
                  <a href="#menu">Ver menú</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;