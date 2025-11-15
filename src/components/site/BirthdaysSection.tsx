import { Button } from "@/components/ui/button";
import birthdayImage from "@/assets/birthday-coxinhas.jpg";
const WA_MAIN = "https://wa.me/573244524438?text=Hola%20Pastel%20Carioca%2C%20quiero%20pedir%20coxinha%20a%20domicilio%20Bogot%C3%A1";
const BirthdaysSection = () => {
  return <section id="cumpleanos" className="py-16 subtle-texture">
      <div className="container max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-semibold">Pasabocas para cumpleaños y packs infantiles</h2>
        <div className="mt-6 flex flex-col md:flex-row gap-6 items-start">
          <div className="md:w-1/2 rounded-lg overflow-hidden">
            <img src={birthdayImage} alt="Coxinhas y salgados brasileños para fiestas infantiles y cumpleaños en Bogotá" className="w-full h-auto object-cover" loading="lazy" />
          </div>
          <div className="md:w-1/2">
            <p className="text-muted-foreground max-w-prose">
              Celebra con nuestros pasteles para cumpleaños Bogotá. Ofrecemos mini coxinha para fiestas Bogotá. perfectas para niños y adultos, además de combos coxinha y Coca-Cola Bogotá que facilitan tu organización. <strong>pasteles para cumpleaños Bogotá</strong>. Ofrecemos <strong>mini coxinha para fiestas Bogotá</strong> 
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
        </div>
      </div>
    </section>;
};
export default BirthdaysSection;