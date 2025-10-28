import { Button } from "@/components/ui/button";

const WA_MAIN = "https://wa.me/573244524438?text=Hola%20Pastel%20Carioca%2C%20quiero%20pedir%20coxinha%20a%20domicilio%20Bogot%C3%A1";

const NovenasSection = () => {
  return (
    <section id="novenas" className="py-16">
      <div className="container max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-semibold">Paquetes para novenas Bogotá</h2>
        <p className="text-muted-foreground mt-4 max-w-prose">
          Reserva tu pack para <strong>novenas Bogotá</strong> con entrega puntual cada día. Ofrecemos opciones económicas y premium 
          con <strong>coxinha para novenas Bogotá</strong>, pasabocas variados y bebidas.
        </p>
        <p className="text-muted-foreground mt-3 max-w-prose">
          Packs especiales de 9 días con descuento. Planifica tu novena con anticipación y recibe pasabocas frescos y calientes en cada jornada.
        </p>
        <div className="mt-6">
          <Button asChild size="lg" variant="whatsapp">
            <a href={WA_MAIN} target="_blank" rel="noopener noreferrer" aria-label="Ver packs para novenas Bogotá">
              Ver packs para novenas
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NovenasSection;
