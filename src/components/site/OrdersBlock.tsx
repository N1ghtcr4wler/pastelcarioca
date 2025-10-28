import { Button } from "@/components/ui/button";
import deliveryImage from "@/assets/delivery-coxinhas.png";

const WA_MAIN = "https://wa.me/573244524438?text=Hola%20Pastel%20Carioca%2C%20quiero%20pedir%20coxinha%20a%20domicilio%20Bogot%C3%A1";


const OrdersBlock = () => {
  return (
    <section id="pedidos" className="py-16 subtle-texture">
      <div className="container max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-semibold">Pedidos y agenda</h2>
        <div className="mt-4 flex flex-col md:flex-row gap-4 items-start">
          <div className="md:w-1/2 rounded-lg overflow-hidden">
            <img 
              src={deliveryImage} 
              alt="Servicio de domicilio de coxinhas y salgados brasileños en Bogotá" 
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-muted-foreground">
              Ofrecemos domicilios en Bogotá, sujetos a disponibilidad. Te atendemos en horario comercial. Contáctanos para tu consulta.
            </p>
            <div className="mt-4 flex flex-col sm:flex-row items-center gap-4">
              <Button asChild size="lg" variant="whatsapp">
                <a href={WA_MAIN} target="_blank" rel="noopener noreferrer" aria-label="Pide por WhatsApp — coxinha a domicilio Bogotá">
                  Pide por WhatsApp — coxinha a domicilio Bogotá
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrdersBlock;