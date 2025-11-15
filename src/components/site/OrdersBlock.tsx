import { Button } from "@/components/ui/button";
import deliveryImage from "@/assets/delivery-coxinhas.png";
import OrderForm from "./OrderForm";

const WA_MAIN = "https://wa.me/573244524438?text=Hola%20Pastel%20Carioca%2C%20quiero%20pedir%20coxinha%20brasile%C3%B1a%20a%20domicilio%20en%20Bogot%C3%A1";


const OrdersBlock = () => {
  return (
    <section id="pedidos" className="py-16 subtle-texture">
      <div className="container max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">Pedidos y Agenda para Coxinha y Salgados</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <div className="rounded-lg overflow-hidden">
              <img 
                src={deliveryImage} 
                alt="Servicio de domicilio de coxinhas y salgados brasileños en Bogotá" 
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Nuestros Servicios</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>Dine-in:</strong> Visítanos en nuestra tienda y disfruta en el lugar</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>Take out:</strong> Recoge tu pedido listo para llevar</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>Delivery:</strong> Domicilios en Bogotá con entrega puntual</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>Catering:</strong> Servicio para eventos corporativos y sociales</span>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-muted-foreground mb-4">
                Ofrecemos domicilios en Bogotá, sujetos a disponibilidad. Te atendemos en horario comercial de lunes a sábado.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" variant="whatsapp" className="flex-1">
                  <a href={WA_MAIN} target="_blank" rel="noopener noreferrer" aria-label="Pide coxinha por WhatsApp">
                    Pide por WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div>
            <OrderForm />
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-4 text-center">Nuestra Zona de Cobertura en Bogotá</h3>
          <div className="rounded-lg overflow-hidden border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127259.03535156138!2d-74.1470865!3d4.6486259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2sBogot%C3%A1%2C%20Colombia!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Zona de cobertura de delivery de coxinhas en Bogotá"
            />
          </div>
          <p className="text-sm text-muted-foreground mt-3 text-center">
            Hacemos entregas en la mayoría de localidades de Bogotá. Consulta disponibilidad para tu zona.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OrdersBlock;