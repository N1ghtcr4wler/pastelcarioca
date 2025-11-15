import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

export const PrivacyModal = () => {
  return (
    <Dialog>
      <DialogTrigger className="text-sm text-muted-foreground hover:text-foreground transition-colors">
        Privacidad
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>Política de Privacidad</DialogTitle>
          <DialogDescription>
            Última actualización: Enero 2025
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-4 text-sm">
            <section>
              <h3 className="font-semibold text-base mb-2">1. Información que Recopilamos</h3>
              <p className="text-muted-foreground">
                En Pastel Carioca, recopilamos la siguiente información cuando realizas un pedido:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                <li>Nombre completo</li>
                <li>Número de teléfono</li>
                <li>Dirección de entrega</li>
                <li>Información del pedido (productos y cantidades)</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">2. Uso de la Información</h3>
              <p className="text-muted-foreground">
                Utilizamos tu información personal únicamente para:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                <li>Procesar y entregar tus pedidos de coxinhas y salgados</li>
                <li>Comunicarnos contigo sobre el estado de tu pedido</li>
                <li>Mejorar nuestro servicio y productos</li>
                <li>Enviarte promociones especiales (solo si das tu consentimiento)</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">3. Protección de Datos</h3>
              <p className="text-muted-foreground">
                Nos comprometemos a proteger tu información personal. No vendemos, compartimos ni alquilamos 
                tu información a terceros sin tu consentimiento explícito. Implementamos medidas de seguridad 
                técnicas y organizativas para proteger tus datos contra acceso no autorizado, pérdida o alteración.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">4. Cookies y Tecnologías Similares</h3>
              <p className="text-muted-foreground">
                Nuestro sitio web utiliza Google Analytics para analizar el tráfico web y mejorar la experiencia 
                del usuario. Puedes desactivar las cookies en la configuración de tu navegador en cualquier momento.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">5. Tus Derechos</h3>
              <p className="text-muted-foreground">
                Tienes derecho a:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                <li>Acceder a tu información personal</li>
                <li>Solicitar la corrección de datos inexactos</li>
                <li>Solicitar la eliminación de tus datos</li>
                <li>Oponerte al procesamiento de tus datos personales</li>
                <li>Revocar tu consentimiento en cualquier momento</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">6. WhatsApp</h3>
              <p className="text-muted-foreground">
                Cuando realizas un pedido a través de WhatsApp, tu información se comparte con WhatsApp Inc. 
                según sus propias políticas de privacidad. Recomendamos revisar la política de privacidad de WhatsApp.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">7. Cambios en esta Política</h3>
              <p className="text-muted-foreground">
                Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. 
                Los cambios entrarán en vigor inmediatamente después de su publicación en nuestro sitio web.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">8. Contacto</h3>
              <p className="text-muted-foreground">
                Si tienes preguntas sobre esta política de privacidad o deseas ejercer tus derechos, 
                contáctanos a través de WhatsApp: +57 324 452 4438
              </p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export const TermsModal = () => {
  return (
    <Dialog>
      <DialogTrigger className="text-sm text-muted-foreground hover:text-foreground transition-colors">
        Términos
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>Términos y Condiciones</DialogTitle>
          <DialogDescription>
            Última actualización: Enero 2025
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-4 text-sm">
            <section>
              <h3 className="font-semibold text-base mb-2">1. Aceptación de Términos</h3>
              <p className="text-muted-foreground">
                Al realizar un pedido en Pastel Carioca, aceptas estos términos y condiciones en su totalidad. 
                Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestros servicios.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">2. Productos y Precios</h3>
              <p className="text-muted-foreground">
                Todos nuestros productos (coxinhas, pasteles, salgados brasileños) se preparan frescos al momento. 
                Los precios están sujetos a cambios sin previo aviso. Nos reservamos el derecho de modificar 
                o descontinuar productos en cualquier momento.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">3. Pedidos y Pagos</h3>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Los pedidos deben realizarse a través de WhatsApp con al menos 24 horas de anticipación para eventos</li>
                <li>El pago se realiza en efectivo al momento de la entrega o mediante transferencia previa para pedidos grandes</li>
                <li>Nos reservamos el derecho de rechazar pedidos por falta de disponibilidad</li>
                <li>Los pedidos mínimos pueden aplicar según la zona de entrega</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">4. Entregas y Domicilios</h3>
              <p className="text-muted-foreground">
                Realizamos entregas en Bogotá según disponibilidad. Los tiempos de entrega son estimados 
                y pueden variar según tráfico y condiciones climáticas. No nos hacemos responsables por 
                retrasos causados por circunstancias fuera de nuestro control.
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                <li>El costo de domicilio se cotiza según la zona</li>
                <li>El cliente debe estar disponible en la dirección proporcionada</li>
                <li>Si no hay nadie para recibir el pedido, se cobrará un recargo por segundo intento de entrega</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">5. Cancelaciones y Devoluciones</h3>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Cancelaciones: Deben realizarse con al menos 12 horas de anticipación</li>
                <li>Cancelaciones tardías pueden estar sujetas a un cargo del 50% del pedido</li>
                <li>Devoluciones: Solo aceptamos devoluciones por productos defectuosos o errores en el pedido</li>
                <li>Notifica cualquier problema dentro de las 2 horas posteriores a la entrega</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">6. Alergias e Intolerancias</h3>
              <p className="text-muted-foreground">
                Nuestros productos contienen gluten, lácteos y pueden contener trazas de frutos secos. 
                Es responsabilidad del cliente informar sobre alergias alimentarias antes de realizar el pedido. 
                No nos hacemos responsables por reacciones alérgicas si no se nos informa previamente.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">7. Propiedad Intelectual</h3>
              <p className="text-muted-foreground">
                Todo el contenido de este sitio web, incluyendo textos, imágenes, logos y recetas, 
                es propiedad de Pastel Carioca y está protegido por leyes de derechos de autor. 
                No está permitida la reproducción sin autorización expresa.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">8. Limitación de Responsabilidad</h3>
              <p className="text-muted-foreground">
                Pastel Carioca no se hace responsable por daños indirectos, incidentales o consecuentes 
                derivados del uso de nuestros productos o servicios. Nuestra responsabilidad máxima 
                se limitará al valor del pedido realizado.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">9. Modificaciones</h3>
              <p className="text-muted-foreground">
                Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. 
                Los cambios entrarán en vigor inmediatamente después de su publicación.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">10. Ley Aplicable</h3>
              <p className="text-muted-foreground">
                Estos términos se rigen por las leyes de Colombia. Cualquier disputa se resolverá 
                en los tribunales de Bogotá, Colombia.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">11. Contacto</h3>
              <p className="text-muted-foreground">
                Para cualquier pregunta sobre estos términos, contáctanos por WhatsApp: +57 324 452 4438
              </p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
