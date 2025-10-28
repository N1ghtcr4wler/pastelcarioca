import { Button } from "@/components/ui/button";

const WA_MAIN = "https://wa.me/573244524438?text=Hola%20Pastel%20Carioca%2C%20quiero%20pedir%20coxinha%20a%20domicilio%20Bogot%C3%A1";

const BirthdaysSection = () => {
  return (
    <section id="cumpleanos" className="py-16 subtle-texture">
      <div className="container max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-semibold">Pasabocas para cumpleaños y packs infantiles</h2>
        <p className="text-muted-foreground mt-4 max-w-prose">
          Celebra con nuestros <strong>pasteles para cumpleaños Bogotá</strong>. Ofrecemos <strong>mini coxinha para fiestas Bogotá</strong> 
          perfectas para niños y adultos, además de <strong>combos coxinha y Coca-Cola Bogotá</strong> que facilitan tu organización.
        </p>
        <p className="text-muted-foreground mt-3 max-w-prose">
          Packs desde 25 hasta 100 unidades. Arma tu combo ideal y sorprende a tus invitados con el auténtico sabor brasileño.
        </p>
        <div className="mt-6">
          <Button asChild size="lg" variant="whatsapp">
            <a href={WA_MAIN} target="_blank" rel="noopener noreferrer" aria-label="Pedir pasteles para cumpleaños Bogotá">
              Pedir para tu cumpleaños
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BirthdaysSection;
