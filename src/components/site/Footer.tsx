import { Instagram, Facebook } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";


const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-background/80">
      <section id="redes" className="container py-10">
        <h2 className="text-xl font-semibold">Síguenos</h2>
        <p className="text-muted-foreground mt-1">Instagram y Facebook @PastelCariocaCol</p>
        <div className="mt-4 flex items-center gap-4">
          <a
            href="https://instagram.com/PastelCariocaCol"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-accent transition-colors"
            aria-label="Abrir Instagram de Pastel Carioca"
          >
            <Instagram className="size-5" />
            <span>@PastelCariocaCol</span>
          </a>
          <a
            href="https://facebook.com/PastelCariocaCol"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-accent transition-colors"
            aria-label="Abrir Facebook de Pastel Carioca"
          >
            <Facebook className="size-5" />
            <span>@PastelCariocaCol</span>
          </a>
        </div>
      </section>
      <div className="container py-6 border-t border-border/40 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Pastel Carioca. Todos los derechos reservados.</p>
        <nav className="flex items-center gap-6">
          <Dialog>
            <DialogTrigger asChild>
              <button type="button" className="hover:text-accent">Privacidad</button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Política de Privacidad</DialogTitle>
                <DialogDescription>
                  Cómo Brazoom Colombia SAS recolecta, usa, comparte y protege tus datos personales.
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 text-foreground">
                <p className="text-muted-foreground">
                  Esta Política de Privacidad describe cómo Brazoom Colombia SAS ("Brazoom", "nosotros")
                  recolecta, usa, comparte y protege tus datos personales cuando interactúas con nuestro sitio web,
                  canales de pedido y servicios de entrega en Bogotá, así como tus derechos y cómo ejercerlos.
                </p>

                <section>
                  <h3 className="text-base font-semibold">1. Responsable del tratamiento</h3>
                  <dl className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                    <dt className="font-medium">Responsable</dt><dd>Brazoom Colombia SAS</dd>
                    <dt className="font-medium">NIT</dt><dd>901956960-7</dd>
                    <dt className="font-medium">Domicilio</dt><dd>Calle 24 #84-66, Bogotá, Colombia</dd>
                    <dt className="font-medium">Correo de contacto</dt><dd>pastelcariocacol@gmail.com</dd>
                    <dt className="font-medium">Teléfono</dt><dd>324 4524438</dd>
                  </dl>
                </section>

                <section>
                  <h3 className="text-base font-semibold">2. Datos que recolectamos</h3>
                  <ul className="mt-2 list-disc space-y-2 pl-5 text-sm">
                    <li>Datos de identificación (nombre, número de documento de forma opcional).</li>
                    <li>Contacto (teléfono, email, dirección).</li>
                    <li>Datos de entrega y facturación.</li>
                    <li>Historial y preferencias de compra.</li>
                    <li>Comunicaciones y soporte.</li>
                    <li>Datos de navegación y dispositivo (IP, tipo de navegador, páginas visitadas, cookies).</li>
                  </ul>
                  <p className="mt-2 text-muted-foreground text-sm">
                    Los datos de pago son procesados por pasarelas seguras de terceros; no almacenamos
                    información completa de tarjetas.
                  </p>
                </section>

                <section>
                  <h3 className="text-base font-semibold">3. Cómo los obtenemos</h3>
                  <ul className="mt-2 list-disc space-y-2 pl-5 text-sm">
                    <li>Cuando haces un pedido o creas una cuenta.</li>
                    <li>Cuando nos contactas por nuestros canales.</li>
                    <li>Al suscribirte a comunicaciones o participar en promociones.</li>
                    <li>Al navegar nuestro sitio (incluidas cookies y tecnologías similares).</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-base font-semibold">4. Finalidades del tratamiento</h3>
                  <ul className="mt-2 list-disc space-y-2 pl-5 text-sm">
                    <li>Procesar y entregar pedidos.</li>
                    <li>Brindar soporte y atención.</li>
                    <li>Gestionar cobros, facturación y contabilidad.</li>
                    <li>Personalizar tu experiencia y nuestras comunicaciones.</li>
                    <li>Realizar analítica y mejora del servicio.</li>
                    <li>Cumplir obligaciones legales y responder a requerimientos de autoridades.</li>
                    <li>Prevenir fraudes y garantizar la seguridad.</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-base font-semibold">5. Base legal</h3>
                  <ul className="mt-2 list-disc space-y-2 pl-5 text-sm">
                    <li>Tu consentimiento.</li>
                    <li>La ejecución de un contrato (por ejemplo, atender tu pedido).</li>
                    <li>El cumplimiento de obligaciones legales.</li>
                    <li>Nuestro interés legítimo en operar, asegurar y mejorar los servicios, respetando tus derechos.</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-base font-semibold">6. Conservación</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Conservamos los datos por el tiempo necesario para cumplir las finalidades descritas y por los plazos exigidos
                    por la ley (por ejemplo, obligaciones contables y fiscales). Posteriormente, los suprimimos o anonimizamos de forma segura.
                  </p>
                </section>

                <section>
                  <h3 className="text-base font-semibold">7. Encargados, destinatarios y transferencias</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Podemos compartir datos con proveedores que actúan por cuenta de Brazoom (logística, pasarelas de pago, comunicaciones,
                    analítica) bajo acuerdos de confidencialidad y protección de datos. Si se realizan transferencias internacionales, se harán
                    conforme a la normativa aplicable y con garantías adecuadas.
                  </p>
                </section>

                <section>
                  <h3 className="text-base font-semibold">8. Seguridad</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Aplicamos medidas técnicas y organizativas razonables para proteger tus datos contra acceso, pérdida o uso no autorizado.
                    Aunque ningún sistema es infalible, en caso de incidentes significativos actuaremos conforme a la ley y a nuestras políticas internas.
                  </p>
                </section>

                <section>
                  <h3 className="text-base font-semibold">9. Tus derechos</h3>
                  <ul className="mt-2 list-disc space-y-2 pl-5 text-sm">
                    <li>Acceso, actualización, rectificación y supresión de datos.</li>
                    <li>Conocer la prueba de la autorización y ser informado sobre el uso dado.</li>
                    <li>Presentar quejas ante la autoridad competente.</li>
                    <li>Revocar tu consentimiento y/o oponerte al tratamiento cuando proceda.</li>
                    <li>Solicitar la portabilidad cuando aplique.</li>
                  </ul>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Para ejercerlos, escribe a
                    {" "}
                    <a href="mailto:pastelcariocacol@gmail.com" className="underline underline-offset-4">pastelcariocacol@gmail.com</a>
                    {" "}
                    indicando tu nombre, medio de contacto y la solicitud. Atenderemos en los plazos legales.
                  </p>
                </section>

                <section>
                  <h3 className="text-base font-semibold">10. Menores de edad</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Nuestros servicios no están dirigidos a menores sin la autorización de sus representantes legales. Si identificamos
                    tratamiento sin consentimiento válido, procederemos a eliminar los datos.
                  </p>
                </section>

                <section>
                  <h3 className="text-base font-semibold">11. Actualizaciones de esta Política</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Podemos actualizar esta Política para reflejar cambios en la ley o en nuestras prácticas. Publicaremos la versión vigente
                    con su fecha. Si hay cambios sustanciales, te notificaremos por medios razonables.
                  </p>
                </section>

                <section>
                  <h3 className="text-base font-semibold">12. Contacto</h3>
                  <dl className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                    <dt className="font-medium">Email</dt><dd>pastelcariocacol@gmail.com</dd>
                    <dt className="font-medium">Teléfono</dt><dd>324 4524438</dd>
                    <dt className="font-medium">Domicilio</dt><dd>Calle 24 #84-66, Bogotá, Colombia</dd>
                  </dl>
                </section>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <button type="button" className="hover:text-accent">Cookies</button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Política de Cookies</DialogTitle>
                <DialogDescription>
                  Qué son las cookies, qué tipos utilizamos y cómo gestionarlas en nuestros canales digitales.
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 text-foreground">
                <p className="text-muted-foreground">
                  Esta Política explica qué son las cookies, qué tipos utilizamos y cómo puedes gestionarlas cuando visitas
                  nuestros sitios y canales digitales operados por Brazoom Colombia SAS ("Brazoom", "nosotros").
                </p>

                <section>
                  <h3 className="text-base font-semibold">1. Responsable</h3>
                  <dl className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                    <dt className="font-medium">Responsable</dt><dd>Brazoom Colombia SAS</dd>
                    <dt className="font-medium">NIT</dt><dd>901956960-7</dd>
                    <dt className="font-medium">Domicilio</dt><dd>Calle 24 #84-66, Bogotá, Colombia</dd>
                    <dt className="font-medium">Correo de contacto</dt><dd>pastelcariocacol@gmail.com</dd>
                    <dt className="font-medium">Teléfono</dt><dd>324 4524438</dd>
                  </dl>
                </section>

                <section>
                  <h3 className="text-base font-semibold">2. ¿Qué son las cookies?</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Las cookies son pequeños archivos que un sitio web coloca en tu dispositivo para reconocerlo, recordar tus
                    preferencias y mejorar tu experiencia de navegación. Tecnologías similares incluyen píxeles, etiquetas,
                    almacenamiento local y SDKs en apps.
                  </p>
                </section>

                <section>
                  <h3 className="text-base font-semibold">3. Tipos de cookies que utilizamos</h3>
                  <ul className="mt-2 list-disc space-y-2 pl-5 text-sm">
                    <li><span className="font-medium">Esenciales:</span> permiten funciones básicas del sitio y la seguridad (por ejemplo, proceso de compra, inicio de sesión).</li>
                    <li><span className="font-medium">Preferencias:</span> recuerdan elecciones como idioma o direcciones guardadas.</li>
                    <li><span className="font-medium">Analíticas:</span> nos ayudan a entender el uso del sitio y mejorar nuestros servicios de forma agregada.</li>
                    <li><span className="font-medium">Marketing:</span> muestran anuncios relevantes y miden campañas.</li>
                  </ul>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Algunas cookies pueden ser colocadas por terceros que prestan servicios de analítica o publicidad. Estos terceros
                    pueden combinar información con otros datos que les hayas proporcionado o que hayan recopilado a partir del uso de
                    sus servicios.
                  </p>
                </section>

                <section>
                  <h3 className="text-base font-semibold">4. Base legal y consentimiento</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Instalamos cookies no esenciales (preferencias, analíticas y marketing) únicamente con tu consentimiento, que puedes
                    otorgar, ajustar o retirar en cualquier momento mediante nuestro banner o centro de preferencias. Las cookies esenciales
                    se activan por ser necesarias para el funcionamiento del sitio o la prestación del servicio que solicitas.
                  </p>
                </section>

                <section>
                  <h3 className="text-base font-semibold">5. Plazos de conservación</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Las cookies de sesión se eliminan cuando cierras el navegador. Las cookies persistentes permanecen en tu dispositivo
                    por un período que puede variar (por ejemplo, de 1 día a 24 meses), salvo que las borres antes o que retires tu consentimiento.
                  </p>
                </section>

                <section>
                  <h3 className="text-base font-semibold">6. Cómo gestionar las cookies</h3>
                  <ul className="mt-2 list-disc space-y-2 pl-5 text-sm">
                    <li>Gestiona tus preferencias desde nuestro banner/centro de consentimiento.</li>
                    <li>Configura tu navegador para bloquear, limitar o eliminar cookies.</li>
                    <li>Ten en cuenta que bloquear ciertas cookies puede afectar el funcionamiento del sitio y el proceso de compra.</li>
                    <li>En tu navegador, visita "Privacidad y seguridad" → "Cookies y datos del sitio".</li>
                    <li>En dispositivos móviles, revisa los ajustes de privacidad y publicidad para limitar el rastreo.</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-base font-semibold">7. Cookies de terceros y transferencias</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Trabajamos con proveedores que pueden colocar sus propias cookies cuando visitas nuestro sitio. Si ello implica
                    transferencias internacionales de datos, se realizarán conforme a la normativa aplicable y con garantías adecuadas de protección.
                  </p>
                </section>

                <section>
                  <h3 className="text-base font-semibold">8. Actualizaciones de esta Política</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Podemos actualizar esta Política para reflejar cambios legales o en nuestras prácticas. Publicaremos la versión vigente
                    con su fecha de entrada en vigor y, cuando corresponda, te notificaremos cambios relevantes.
                  </p>
                </section>

                <section>
                  <h3 className="text-base font-semibold">9. Contacto</h3>
                  <dl className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                    <dt className="font-medium">Email</dt><dd>pastelcariocacol@gmail.com</dd>
                    <dt className="font-medium">Teléfono</dt><dd>324 4524438</dd>
                    <dt className="font-medium">Domicilio</dt><dd>Calle 24 #84-66, Bogotá, Colombia</dd>
                  </dl>
                </section>
              </div>
            </DialogContent>
          </Dialog>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;