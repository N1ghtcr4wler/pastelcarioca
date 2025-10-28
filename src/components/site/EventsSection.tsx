import { Button } from "@/components/ui/button";
import cateringImage from "@/assets/catering-coxinhas.png";

const WA_MAIN = "https://wa.me/573244524438?text=Hola%20Pastel%20Carioca%2C%20quiero%20pedir%20coxinha%20a%20domicilio%20Bogot%C3%A1";

const EventsSection = () => {
  return (
    <section id="eventos" className="py-16">
      <div className="container max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-semibold">Pasabocas para eventos Bogotá — Packs y catering</h2>
        <div className="mt-6 rounded-lg overflow-hidden">
          <img 
            src={cateringImage} 
            alt="Pasabocas para eventos - Coxinhas y salgados brasileños para catering en Bogotá" 
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
        <p className="text-muted-foreground mt-6 max-w-prose">
          Ofrecemos <strong>pasabocas para eventos Bogotá</strong> ideales para reuniones corporativas, coffee breaks y fiestas empresariales. 
          Nuestros packs incluyen <strong>mini coxinha para fiestas Bogotá</strong>, bolitas de queso vegetarianas y combos personalizados.
        </p>
        <p className="text-muted-foreground mt-3 max-w-prose">
          Solicita tu presupuesto por WhatsApp y arma el menú perfecto para tu evento. Entrega puntual y servicio personalizado.
        </p>
        <div className="mt-6">
          <Button asChild size="lg" variant="whatsapp">
            <a href={WA_MAIN} target="_blank" rel="noopener noreferrer" aria-label="Ver packs para eventos Bogotá">
              Ver packs para eventos
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
