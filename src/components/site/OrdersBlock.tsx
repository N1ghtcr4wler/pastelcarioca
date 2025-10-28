import { Button } from "@/components/ui/button";

const WA_MAIN = "https://wa.me/573244524438?text=Hola%20Pastel%20Carioca%2C%20quiero%20pedir%20coxinha%20a%20domicilio%20Bogot%C3%A1";


const OrdersBlock = () => {
  return (
    <section id="pedidos" className="py-16 subtle-texture">
      <div className="container max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-semibold">Pedidos y agenda</h2>
        <p className="text-muted-foreground mt-2">
          Ofrecemos domicilios en Bogotá, sujetos a disponibilidad. Te atendemos en horario comercial. Contáctanos para tu consulta.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
          <Button asChild size="lg" variant="whatsapp">
            <a href={WA_MAIN} target="_blank" rel="noopener noreferrer" aria-label="Pide por WhatsApp — coxinha a domicilio Bogotá">
              Pide por WhatsApp — coxinha a domicilio Bogotá
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OrdersBlock;