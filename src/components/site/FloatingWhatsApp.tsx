const WA_MAIN = "https://wa.me/573244524438?text=Hola%21%20Quiero%20Coxinhas%21";

const FloatingWhatsApp = () => {
  return (
    <div className="md:hidden">
      <a
        href={WA_MAIN}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Pedir por WhatsApp"
        className="fixed bottom-5 right-5 z-50"
      >
        <span className="sr-only">Pedir por WhatsApp</span>
        <div className="rounded-full bg-primary text-primary-foreground shadow-lg ring-1 ring-primary/30 hover:ring-accent transition-all p-4">
          {/* Simple icon using emoji to avoid extra assets; can replace with logo/mascota */}
          <span className="text-xl leading-none">💬</span>
        </div>
      </a>
    </div>
  );
};

export default FloatingWhatsApp;