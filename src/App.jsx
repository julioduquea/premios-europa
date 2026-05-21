import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Award,
  Building2,
  Calculator,
  CalendarDays,
  Camera,
  ChevronLeft,
  ChevronRight,
  Film,
  Handshake,
  Image,
  ImagePlus,
  Mail,
  Menu,
  Megaphone,
  Music,
  Palette,
  PlayCircle,
  ScrollText,
  Shirt,
  Sparkles,
  Star,
  Theater,
  Trophy,
  UploadCloud,
  Users,
  UserRound,
  UsersRound,
  LockKeyhole,
  ShieldCheck,
  Video,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const COLORS = {
  navy: "#101a36",
  navySoft: "#1b294e",
  cream: "#f3ecd9",
  creamLight: "#fbf7ed",
  copper: "#b56b24",
  gold: "#d5a449",
};

const OFFICIAL_LOGO = " /logo-premios-europa.png";


const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const candidates = [
  {
    title: "El último plano",
    group: "2º ESO · Grupo Lumière",
    category: "Mejor cortometraje",
    description:
      "Una historia breve sobre amistad, decisiones y el poder de contar lo que sentimos a través de una cámara.",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=80",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Ruido en el pasillo",
    group: "3º ESO · Aula 3B",
    category: "Mejor montaje",
    description:
      "Thriller escolar construido con ritmo, silencios y una cuidada edición visual y sonora.",
    image:
      "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?auto=format&fit=crop&w=900&q=80",
    video: "https://player.vimeo.com/video/76979871",
  },
  {
    title: "Azul de tarde",
    group: "4º ESO · Equipo Atlas",
    category: "Mejor fotografía",
    description:
      "Un proyecto poético que juega con la luz natural, los reflejos y la mirada adolescente.",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80",
    video: "https://www.youtube.com/embed/tgbNymZ7vqY",
  },
];

const juryPassword = "jurado2026";

const juryShorts = [
  {
    title: "Corto 01 · Pendiente de título",
    group: "Grupo participante",
    category: "Selección oficial",
    description: "Ficha privada para que el jurado valore el corto antes de la gala.",
    embed: "https://www.youtube.com/embed/tgbNymZ7vqY",
  },
  {
    title: "Corto 02 · Pendiente de título",
    group: "Grupo participante",
    category: "Selección oficial",
    description: "Sustituye este enlace por el vídeo real cuando esté subido.",
    embed: "https://player.vimeo.com/video/76979871",
  },
  {
    title: "Corto 03 · Pendiente de título",
    group: "Grupo participante",
    category: "Selección oficial",
    description: "Espacio reservado para otra candidatura de la II Edición.",
    embed: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

const firstEditionGallery = [
  {
    title: "Alfombra roja",
    description: "Recepción del alumnado, familias e invitados durante la I Edición.",
    image: "/i-edicion/galeria-01.jpg",
  },
  {
    title: "Presentación de la gala",
    description: "Inicio de la ceremonia y presentación de los cortos finalistas.",
    image: "/i-edicion/galeria-02.jpg",
  },
  {
    title: "Entrega de premios",
    description: "Momentos destacados de la entrega de galardones.",
    image: "/i-edicion/galeria-03.jpg",
  },
  {
    title: "Foto final",
    description: "Participantes y organización al cierre de la primera gala.",
    image: "/i-edicion/galeria-04.jpg",
  },
];

const firstEditionAwardPhotos = [
  {
    title: "Entrega de premios 01",
    description: "Entrega de galardones durante la I Edición.",
    image: "/i-edicion/entrega-premios-01.jpg",
  },
  {
    title: "Entrega de premios 02",
    description: "Momento de reconocimiento a los cortos premiados.",
    image: "/i-edicion/entrega-premios-02.jpg",
  },
  {
    title: "Entrega de premios 03",
    description: "Participantes recogiendo su premio sobre el escenario.",
    image: "/i-edicion/entrega-premios-03.jpg",
  },
  {
    title: "Entrega de premios 04",
    description: "Fotografía de una de las categorías de la primera gala.",
    image: "/i-edicion/entrega-premios-04.jpg",
  },
  {
    title: "Entrega de premios 05",
    description: "Celebración de los equipos premiados en la I Edición.",
    image: "/i-edicion/entrega-premios-05.jpg",
  },
   {
    title: "Entrega de premios 06",
    description: "Celebración de los equipos premiados en la I Edición.",
    image: "/i-edicion/entrega-premios-06.jpg",
  },
   {
    title: "Entrega de premios 07",
    description: "Celebración de los equipos premiados en la I Edición.",
    image: "/i-edicion/entrega-premios-07.jpg",
  },
   {
    title: "Entrega de premios 08",
    description: "Celebración de los equipos premiados en la I Edición.",
    image: "/i-edicion/entrega-premios-08.jpg",
  },
   {
    title: "Entrega de premios 09",
    description: "Celebración de los equipos premiados en la I Edición.",
    image: "/i-edicion/entrega-premios-09.jpg",
  },
   {
    title: "Entrega de premios 10",
    description: "Celebración de los equipos premiados en la I Edición.",
    image: "/i-edicion/entrega-premios-10.jpg",
  },
   {
    title: "Entrega de premios 11",
    description: "Celebración de los equipos premiados en la I Edición.",
    image: "/i-edicion/entrega-premios-11.jpg",
  },
   {
    title: "Entrega de premios 12",
    description: "Celebración de los equipos premiados en la I Edición.",
    image: "/i-edicion/entrega-premios-12.jpg",
  },
   {
    title: "Entrega de premios 13",
    description: "Celebración de los equipos premiados en la I Edición.",
    image: "/i-edicion/entrega-premios-13.jpg",
  },
   {
    title: "Entrega de premios 14",
    description: "Celebración de los equipos premiados en la I Edición.",
    image: "/i-edicion/entrega-premios-14.jpg",
  },
   {
    title: "Entrega de premios 15",
    description: "Celebración de los equipos premiados en la I Edición.",
    image: "/i-edicion/entrega-premios-15.jpg",
  },
   {
    title: "Entrega de premios 16",
    description: "Celebración de los equipos premiados en la I Edición.",
    image: "/i-edicion/entrega-premios-16.jpg",
  },
   {
    title: "Entrega de premios 17",
    description: "Celebración de los equipos premiados en la I Edición.",
    image: "/i-edicion/entrega-premios-17.jpg",
  },
   {
    title: "Entrega de premios 18",
    description: "Celebración de los equipos premiados en la I Edición.",
    image: "/i-edicion/entrega-premios-18.jpg",
  },
   {
    title: "Entrega de premios 19",
    description: "Celebración de los equipos premiados en la I Edición.",
    image: "/i-edicion/entrega-premios-19.jpg",
  },
   {
    title: "Entrega de premios 20",
    description: "Celebración de los equipos premiados en la I Edición.",
    image: "/i-edicion/entrega-premios-20.jpg",
  },
     {
    title: "Entrega de premios 21",
    description: "Celebración de los equipos premiados en la I Edición.",
    image: "/i-edicion/entrega-premios-21.jpg",
  },
     {
    title: "Entrega de premios 22",
    description: "Celebración de los equipos premiados en la I Edición.",
    image: "/i-edicion/entrega-premios-22.jpg",
  },
     {
    title: "Entrega de premios 23",
    description: "Celebración de los equipos premiados en la I Edición.",
    image: "/i-edicion/entrega-premios-23.jpg",
  },
     {
    title: "Entrega de premios 24",
    description: "Celebración de los equipos premiados en la I Edición.",
    image: "/i-edicion/entrega-premios-24.jpg",
  },
     {
    title: "Entrega de premios 25",
    description: "Celebración de los equipos premiados en la I Edición.",
    image: "/i-edicion/entrega-premios-25.jpg",
  },
];

const firstEditionShorts = [
  {
    title: "Mejor cortometraje",
    group: "La Tarde - SONYDEAS",
    award: "Mejor cortometraje",
    description: "Corto ganador de la primera edición de los Premios Europa.",
    image: "/i-edicion/entrega-premios-20.jpg",
    video: "https://youtu.be/dj3sdt3DPNc",
  },
  {
    title: "Mejor interpretación protagonista",
    group: "Daniel Parrilla por La Tarde",
    award: "Mejor interpretación protagonista",
    description: "Reconocimiento a la interpretación principal más destacada de la I Edición",
    image: "/i-edicion/mejor-interpretacion-protagonista.jpg",
    video: "https://youtu.be/-5EsJkgyDFk",
  },
  {
    title: "Mejor interpretación de reparto",
    group: "Elenco completo de Singer Star Quiz",
    award: "Mejor interpretación de reparto",
    description: "Reconocimiento a la interpretación secundaria más destacada de la I Edición.",
    image: "/i-edicion/entrega-premios-01.jpg",
    video: "https://drive.google.com/file/d/1zyqWYDfZiAy6u5iPFA2Mw9-HdQCASlQp/view?usp=sharing",
  },
  {
    title: "Mejor logo",
    group: "Candidatura destacada",
    award: "Mejor logo",
    description: "Proyecto reconocido por su planificación, puesta en escena y mirada audiovisual.",
    image: "/i-edicion/mejor-logo.jpg",
    video: "https://www.youtube.com/embed/tgbNymZ7vqY",
  },
  {
    title: "Mejor guion",
    group: "Productora Fries Films por EspejO",
    award: "Mejor guion",
    description: "Corto premiado por la construcción de la historia, diálogos y estructura narrativa.",
    image: "/i-edicion/mejor-guion.jpg",
    //video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Mejor vestuario",
    group: "El caso de las cartas",
    award: "Mejor vestuario",
    description: "Corto premiado por su dirección artística, diseño de vestuario y ambientación visual.",
    image: "/i-edicion/mejor-vestuario.jpg",
    //video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Mejor storyboard",
    group: "Un secuestro en Charlote",
    award: "Mejor storyboard",
    description: "Corto premiado por su planificación, puesta en escena y mirada audiovisual.",
    image: "/i-edicion/mejor-storyboard.jpg",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Mejor presupuesto",
    group: "Equipo presupuesto",
    award: "Mejor presupuesto",
    description: "Corto premiado por su gestión de recursos, creatividad y eficiencia en la producción.",
    image: "/i-edicion/mejor-presupuesto.jpg",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },

  {
    title: "Mejor cartel",
    group: "Equipo cartel",
    award: "Mejor cartel",
    description: "Corto premiado por su diseño gráfico, creatividad y capacidad de transmitir la esencia del proyecto.",
    image: "/i-edicion/mejor-cartel.jpg",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },

  {
    title: "Mejor BSO",
    group: "El precio de la victoria",
    award: "Mejor BSO",
    description: "Corto premiado por su banda sonora original, composición musical y capacidad para potenciar la narrativa audiovisual.",
    image: "/i-edicion/mejor-bso.jpg",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },

  {
    title: "Premio formato arriesgado",
    group: "Equipo formato arriesgado",
    award: "Formato arriesgado",
    description: "Corto elegido por su propuesta innovadora, originalidad y valentía para explorar nuevas formas narrativas o estéticas.",
    image: "/i-edicion/premio-formato-arriesgado.jpg",
    video: "https://player.vimeo.com/video/76979871",
  },
];

const categories = [
  { name: "Mejor cortometraje", icon: Trophy },
  { name: "Mejor personaje protagonista", icon: UserRound },
  { name: "Mejor personaje de reparto", icon: UsersRound },
  { name: "Mejor logo", icon: Palette },
  { name: "Mejor guión", icon: ScrollText },
  { name: "Mejor vestuario", icon: Shirt },
  { name: "Mejor storyboard", icon: Camera },
  { name: "Mejor presupuesto", icon: Calculator },
  { name: "Mejor cartel", icon: Image },
  { name: "Mejor BSO", icon: Music },
  { name: "Formato arriesgado", icon: Sparkles },
];

const collaborationHighlights = [
  { icon: Users, title: "Impacto local", text: "Primera edición con más de 300 asistentes, 40 productoras escolares y cobertura televisiva." },
  { icon: Theater, title: "Gala 2026", text: "La II Edición se celebrará el 4 de junio en el Teatro Municipal de Arahal, con 412 butacas." },
  { icon: Sparkles, title: "Proyección cultural", text: "Festival internacional gracias a la alianza Erasmus con el Liceo de Aviano, Italia." },
  { icon: Award, title: "Jurado profesional", text: "Participación de referentes de la cultura, la interpretación, el diseño y el audiovisual." },
];

const collaborationTiers = [
  { name: "Bronce", amount: "50 €", benefits: "Marca en cartelería pequeña y difusión especial en redes sociales." },
  { name: "Plata", amount: "100 €", benefits: "Cartelería mediana, redes sociales y mención de honor durante la gala." },
  { name: "Oro", amount: "150 €", benefits: "Todo lo anterior y proyección del logotipo en la pantalla principal del teatro." },
  { name: "Premium", amount: "200 €", benefits: "Todo lo anterior y presencia destacada en cartelería de gran formato." },
  { name: "Especial", amount: "250 €", benefits: "Todo lo anterior y 2 entradas exclusivas para asistir a la gala." },
  { name: "Destacada", amount: "300 €", benefits: "Todo lo anterior y entrega de uno de los premios oficiales en el escenario." },
  { name: "Honor", amount: "400 €", benefits: "Todo lo anterior y 2 minutos de discurso ante el público asistente." },
  { name: "Patrocinador principal", amount: "500 €", benefits: "Máximo reconocimiento: dar nombre de empresa a uno de los premios oficiales." },
];

const schedule = [
  { time: "10:15 - 10:55", title: "Recepción", text: "Llegada de participantes, jurado e invitados." },
  { time: "11:00", title: "Actuación inicial", text: ""},
  { time: "11:05", title: "Presentación", text: "Bienvenida y apertura oficial de la II Edición." },
  { time: "11:15", title: "Proyección", text: "Visionado de candidaturas y piezas seleccionadas." },
  { time: "12:45", title: "Descanso", text: "Momento para comentar cortos y valoración del jurado." },
  { time: "13:15", title: "Entrega de premios", text: "Anuncio de ganadores y menciones especiales." },
  { time: "14:15", title: "Cierre de gala", text: "Foto final y despedida del festival." },
];

function PremiosEuropaLogo({ compact = false, inverted = false }) {
  return (
    <div
      className={`inline-flex items-center justify-center ${
        inverted ? "rounded-2xl bg-[#fbf7ed] p-2 shadow-lg shadow-black/10" : ""
      }`}
    >
      <img
        src={OFFICIAL_LOGO}
        alt="Logo oficial de Premios Europa"
        className={
          compact
            ? "h-11 w-auto object-contain md:h-12"
            : "h-56 w-auto object-contain drop-shadow-xl md:h-72 lg:h-80"
        }
      />
    </div>
  );
}

function SectionTitle({ eyebrow, title, text }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="mx-auto mb-10 max-w-3xl text-center"
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#b56b24]">{eyebrow}</p>
      <h2 className="text-3xl font-light tracking-[0.08em] text-[#101a36] md:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-7 text-[#1b294e]/75 md:text-lg">{text}</p>}
    </motion.div>
  );
}

function Nav({ isAdmin, onAdminLogin, onAdminLogout }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = ["Evento", "I Edición", "Candidaturas", "Colaboración", "Jurado", "Programa"];
  const getSectionHref = (link) =>
    `#${link
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-")}`;
  const getLinkHref = (link) => (link === "Jurado" ? "#/jurado" : link === "Colaboración" ? "#/colaboracion" : getSectionHref(link));

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#101a36]/10 bg-[#fbf7ed]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <a href="#inicio" className="flex items-center gap-2" aria-label="Inicio Premios Europa">
          <PremiosEuropaLogo compact />
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link}
              href={getLinkHref(link)}
              className="text-sm font-medium text-[#101a36]/75 transition hover:text-[#b56b24]"
            >
              {link}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          {isAdmin ? (
            <>
              <a
                href="#subir"
                className="hidden rounded-full border border-[#101a36]/15 bg-[#101a36] px-4 py-2 text-sm font-medium text-[#fbf7ed] shadow-lg shadow-[#101a36]/10 transition hover:-translate-y-0.5 hover:bg-[#1b294e] sm:inline-flex"
              >
                Subir cortos
              </a>
              <button
                type="button"
                onClick={onAdminLogout}
                className="hidden rounded-full border border-[#101a36]/15 bg-white/40 px-4 py-2 text-sm font-medium text-[#101a36] transition hover:bg-[#f3ecd9] sm:inline-flex"
              >
                Salir admin
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={onAdminLogin}
              className="hidden items-center gap-2 rounded-full border border-[#101a36]/15 bg-white/40 px-4 py-2 text-sm font-medium text-[#101a36] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#f3ecd9] sm:inline-flex"
            >
              <LockKeyhole className="h-4 w-4 text-[#b56b24]" />
              Admin
            </button>
          )}
          <button
            type="button"
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#101a36]/15 bg-white/50 text-[#101a36] shadow-sm transition hover:bg-[#f3ecd9] lg:hidden"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="border-t border-[#101a36]/10 bg-[#fbf7ed]/95 px-4 py-4 shadow-xl shadow-[#101a36]/10 backdrop-blur-xl lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {links.map((link) => (
              <a
                key={link}
                href={getLinkHref(link)}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-semibold text-[#101a36] transition hover:bg-[#f3ecd9] hover:text-[#b56b24]"
              >
                {link}
              </a>
            ))}
            <div className="mt-2 border-t border-[#101a36]/10 pt-3">
              {isAdmin ? (
                <div className="grid gap-2">
                  <a
                    href="#subir"
                    onClick={() => setIsMenuOpen(false)}
                    className="rounded-2xl bg-[#101a36] px-4 py-3 text-center text-sm font-semibold text-[#fbf7ed] transition hover:bg-[#1b294e]"
                  >
                    Subir cortos
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setIsMenuOpen(false);
                      onAdminLogout();
                    }}
                    className="rounded-2xl border border-[#101a36]/15 bg-white/50 px-4 py-3 text-sm font-semibold text-[#101a36] transition hover:bg-[#f3ecd9]"
                  >
                    Salir admin
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setIsMenuOpen(false);
                    onAdminLogin();
                  }}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-[#101a36]/15 bg-white/50 px-4 py-3 text-sm font-semibold text-[#101a36] transition hover:bg-[#f3ecd9]"
                >
                  <LockKeyhole className="h-4 w-4 text-[#b56b24]" />
                  Admin
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero({ isAdmin }) {
  return (
    <section id="inicio" className="relative isolate overflow-hidden px-4 pb-20 pt-32 md:px-8 md:pb-28 md:pt-40">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(213,164,73,0.25),transparent_28%),radial-gradient(circle_at_90%_20%,rgba(16,26,54,0.13),transparent_26%),linear-gradient(135deg,#fbf7ed,#f3ecd9)]" />
      <div className="absolute inset-0 -z-10 opacity-[0.19] [background-image:linear-gradient(90deg,rgba(16,26,54,.18)_1px,transparent_1px),linear-gradient(rgba(16,26,54,.13)_1px,transparent_1px)] [background-size:44px_44px]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <PremiosEuropaLogo />
          <div className="mt-12 inline-flex rotate-[-8deg] items-center rounded-sm bg-gradient-to-r from-[#9a531b] to-[#d5a449] px-5 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-white shadow-xl shadow-[#b56b24]/20">
            II Edición
          </div>
          <h1 className="font-anthony mt-7 text-5xl font-light uppercase leading-[0.95] tracking-[0.12em] text-[#101a36] md:text-7xl xl:text-8xl">
            Premios
            <span className="block">Europa</span>
          </h1>
          <p className="mt-5 max-w-xl text-xl font-light tracking-[0.08em] text-[#1b294e]/80 md:text-2xl">
            Festival de Cine Adolescente
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-[#101a36]">
            <div className="flex items-center gap-3 rounded-full border border-[#101a36]/15 bg-white/40 px-5 py-3 shadow-sm backdrop-blur">
              <CalendarDays className="h-5 w-5 text-[#b56b24]" />
              <span className="text-lg tracking-[0.16em]">Jueves 04.JUN.26</span>
            </div>
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="rounded-full bg-[#101a36] px-7 py-6 text-base text-[#fbf7ed] shadow-xl shadow-[#101a36]/15 hover:bg-[#1b294e]">
              <a href="#candidaturas">Ver candidaturas</a>
            </Button>
            {isAdmin && (
              <Button asChild variant="outline" className="rounded-full border-[#b56b24]/50 bg-white/30 px-7 py-6 text-base text-[#101a36] backdrop-blur hover:bg-[#f3ecd9]">
                <a href="#subir">Subir cortos</a>
              </Button>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-[#d5a449]/30 to-[#101a36]/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2.2rem] border border-[#101a36]/10 bg-[#fbf7ed]/75 p-6 shadow-2xl shadow-[#101a36]/20 backdrop-blur">
            <div className="aspect-[4/5] rounded-[1.6rem] border border-[#101a36]/10 bg-[#f3ecd9] p-8 shadow-inner">
              <div className="flex h-full flex-col justify-between">
                <div className="flex justify-between">
                  <Sparkles className="h-10 w-10 text-[#d5a449]" />
                  <span className="text-right text-sm uppercase tracking-[0.32em] text-[#101a36]/60">Gala</span>
                </div>
                <div>
                  <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#b56b24]">Selección oficial</p>
                  <h3 className="font-anthony text-4xl font-light uppercase tracking-[0.12em] text-[#101a36] md:text-5xl">
                    ¿Estáis preparados?
                  </h3>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {["Cine", "Gala", "Premios"].map((item) => (
                    <div key={item} className="rounded-2xl border border-[#101a36]/10 bg-white/35 p-4 text-center text-sm font-medium text-[#101a36]/70">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function EventIntro() {
  const items = [
    { icon: Film, title: "Cine hecho por adolescentes", text: "Un espacio para dar valor a historias, miradas y proyectos audiovisuales creados desde el aula." },
    { icon: Award, title: "Gala con espíritu profesional", text: "Una celebración cuidada, elegante y cercana, con proyecciones, reconocimientos y premios." },
    { icon: Users, title: "Aprendizaje compartido", text: "El alumnado presenta su trabajo, explica su proceso y comparte creatividad con toda la comunidad." },
  ];
  return (
    <section id="evento" className="px-4 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="La gala"
          title="Una mañana para celebrar el talento joven"
          text="Premios Europa es una gala para mostrar y premiar trabajos audiovisuales realizados por adolescentes, cuidando tanto el proceso creativo como la presentación final ante público."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item, index) => (
            <motion.div key={item.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.65, delay: index * 0.08 }}>
              <Card className="h-full overflow-hidden rounded-[2rem] border-[#101a36]/10 bg-white/45 shadow-xl shadow-[#101a36]/5 backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl">
                <CardContent className="p-7">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#101a36] text-[#f3ecd9] shadow-lg shadow-[#101a36]/20">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#101a36]">{item.title}</h3>
                  <p className="mt-3 leading-7 text-[#1b294e]/70">{item.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AwardPhotosCarousel() {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const selectedPhoto = firstEditionAwardPhotos[currentPhoto];
  const lastPhotoIndex = firstEditionAwardPhotos.length - 1;

  const showPreviousPhoto = () => {
    setCurrentPhoto((index) => (index === 0 ? lastPhotoIndex : index - 1));
  };

  const showNextPhoto = () => {
    setCurrentPhoto((index) => (index === lastPhotoIndex ? 0 : index + 1));
  };

  return (
    <motion.div
      id="entrega-premios-i-edicion"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mt-14 overflow-hidden rounded-[2rem] border border-[#101a36]/10 bg-white/65 shadow-2xl shadow-[#101a36]/10"
    >
      <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="relative bg-[#101a36]">
          <div className="aspect-[4/3] overflow-hidden lg:aspect-[16/10]">
            <img src={selectedPhoto.image} alt={selectedPhoto.title} className="h-full w-full object-cover" />
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#101a36]/85 to-transparent p-5 text-[#fbf7ed] md:p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d5a449]">
              {String(currentPhoto + 1).padStart(2, "0")} / {String(firstEditionAwardPhotos.length).padStart(2, "0")}
            </p>
            <h3 className="mt-2 text-2xl font-light uppercase tracking-[0.1em] md:text-3xl">{selectedPhoto.title}</h3>
          </div>
          <div className="absolute inset-y-0 left-4 flex items-center">
            <button
              type="button"
              onClick={showPreviousPhoto}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#101a36]/70 text-[#fbf7ed] shadow-lg backdrop-blur transition hover:bg-[#d5a449] hover:text-[#101a36]"
              aria-label="Foto anterior de la entrega de premios"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-4 flex items-center">
            <button
              type="button"
              onClick={showNextPhoto}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#101a36]/70 text-[#fbf7ed] shadow-lg backdrop-blur transition hover:bg-[#d5a449] hover:text-[#101a36]"
              aria-label="Foto siguiente de la entrega de premios"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#b56b24]">Galería especial</p>
          <h3 className="mt-2 text-3xl font-light uppercase tracking-[0.1em] text-[#101a36] md:text-4xl">Entrega de premios</h3>
          <p className="mt-4 leading-7 text-[#1b294e]/70">{selectedPhoto.description}</p>
          <div className="mt-7 grid grid-cols-5 gap-3">
            {firstEditionAwardPhotos.map((photo, index) => (
              <button
                key={photo.image}
                type="button"
                onClick={() => setCurrentPhoto(index)}
                className={`group aspect-square overflow-hidden rounded-2xl border transition ${
                  currentPhoto === index ? "border-[#b56b24] ring-4 ring-[#d5a449]/25" : "border-[#101a36]/10 hover:border-[#b56b24]/70"
                }`}
                aria-label={`Ver ${photo.title}`}
              >
                <img src={photo.image} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function FirstEdition() {
  return (
    <section id="i-edicion" className="relative overflow-hidden bg-gradient-to-br from-[#f3ecd9] via-[#fbf7ed] to-[#f3ecd9] px-4 py-20 md:px-8">
      <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(90deg,rgba(16,26,54,.16)_1px,transparent_1px),linear-gradient(rgba(16,26,54,.12)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="relative mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Archivo histórico"
          title="I Edición"
          text="Un espacio para recordar la primera gala: reportaje gráfico, momentos destacados y cortos ganadores."
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 overflow-hidden rounded-[2rem] border border-[#101a36]/10 bg-[#101a36] shadow-2xl shadow-[#101a36]/20"
        >
          <div className="grid items-center gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="p-8 text-[#fbf7ed] md:p-10">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#d5a449]/15 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#d5a449]">
                <Trophy className="h-4 w-4" />
                Primera gala
              </div>
              <h3 className="text-3xl font-light uppercase tracking-[0.12em] md:text-5xl">Recuerdos de la I Edición</h3>
              <p className="mt-5 max-w-2xl leading-8 text-[#fbf7ed]/75">
                Galería que muestra fotografías de la gala, entrega de premios, alumnado participante y una selección de los cortos ganadores.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#reportaje-i-edicion" className="rounded-full bg-[#fbf7ed] px-5 py-3 text-sm font-semibold text-[#101a36] transition hover:bg-[#d5a449]">
                  Ver reportaje gráfico
                </a>
                <a href="#entrega-premios-i-edicion" className="rounded-full border border-[#fbf7ed]/25 px-5 py-3 text-sm font-semibold text-[#fbf7ed] transition hover:border-[#d5a449] hover:text-[#d5a449]">
                  Ver entrega de premios
                </a>
                <a href="#ganadores-i-edicion" className="rounded-full border border-[#fbf7ed]/25 px-5 py-3 text-sm font-semibold text-[#fbf7ed] transition hover:border-[#d5a449] hover:text-[#d5a449]">
                  Ver cortos ganadores
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 p-4 md:p-6">
              {firstEditionGallery.slice(0, 4).map((photo, index) => (
                <div key={photo.title} className={`group relative overflow-hidden rounded-3xl ${index === 0 ? "row-span-2 min-h-80" : "min-h-40"}`}>
                  <img src={photo.image} alt={photo.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101a36]/85 via-[#101a36]/15 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-sm font-semibold text-[#fbf7ed]">{photo.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div id="reportaje-i-edicion" className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {firstEditionGallery.map((photo, index) => (
            <motion.article
              key={photo.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: index * 0.06 }}
              className="group overflow-hidden rounded-[1.7rem] border border-[#101a36]/10 bg-white/60 shadow-xl shadow-[#101a36]/5"
            >
              <div className="h-56 overflow-hidden bg-[#101a36]/10">
                <img src={photo.image} alt={photo.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#101a36]">{photo.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#1b294e]/70">{photo.description}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <AwardPhotosCarousel />

        <div id="ganadores-i-edicion" className="mt-14">
          <div className="mb-7 flex items-end justify-between gap-5">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#b56b24]">Palmarés</p>
              <h3 className="mt-2 text-3xl font-light uppercase tracking-[0.1em] text-[#101a36] md:text-4xl">Cortos premiados</h3>
            </div>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {firstEditionShorts.map((short, index) => (
              <motion.article
                key={short.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                className="group overflow-hidden rounded-[2rem] border border-[#101a36]/10 bg-white/65 shadow-2xl shadow-[#101a36]/10"
              >
                <div className="relative h-60 overflow-hidden">
                  <img src={short.image} alt={short.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101a36]/90 via-[#101a36]/20 to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full bg-[#d5a449] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#101a36]">
                    {short.award}
                  </span>
                </div>
                <div className="p-6">
                  <h4 className="text-2xl font-light tracking-[0.08em] text-[#101a36]">{short.title}</h4>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[#b56b24]">{short.group}</p>
                  <p className="mt-4 leading-7 text-[#1b294e]/70">{short.description}</p>
                  <Button asChild className="mt-6 rounded-full bg-[#101a36] text-[#fbf7ed] hover:bg-[#1b294e]">
                    <a href={short.video} target="_blank" rel="noreferrer">
                      <PlayCircle className="mr-2 h-4 w-4" /> Ver vídeo
                    </a>
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Candidates() {
  return (
    <section id="candidaturas" className="bg-[#101a36] px-4 py-20 text-[#fbf7ed] md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Selección oficial"
          title="Candidaturas"
          text="Los vídeos de esta edición quedan reservados para el jurado hasta la gala."
        />
        <div className="grid gap-7 md:grid-cols-3">
          {candidates.map((candidate, index) => (
            <motion.article key={candidate.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.65, delay: index * 0.08 }} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] shadow-2xl shadow-black/20">
              <div className="relative h-64 overflow-hidden">
                <img src={candidate.image} alt={`Cartel de ${candidate.title}`} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101a36] via-[#101a36]/25 to-transparent" />
                <span className="absolute left-5 top-5 rounded-full bg-[#d5a449] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#101a36]">
                  {candidate.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-light tracking-[0.08em]">{candidate.title}</h3>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[#d5a449]">{candidate.group}</p>
                <p className="mt-4 leading-7 text-[#fbf7ed]/72">{candidate.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function JuryVideos() {
  const [password, setPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === juryPassword) {
      setIsUnlocked(true);
      setError("");
      return;
    }
    setError("Clave incorrecta. Revisa la contraseña enviada al jurado.");
  };

  return (
    <section id="jurado" className="min-h-screen px-4 pb-20 pt-8 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-5 border-b border-[#101a36]/10 pb-6 md:flex-row md:items-center md:justify-between">
          <a href="/#inicio" className="inline-flex w-fit items-center gap-3" aria-label="Volver a Premios Europa">
            <PremiosEuropaLogo compact />
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#101a36]/70">Premios Europa</span>
          </a>
          <a
            href="/#inicio"
            className="inline-flex w-fit items-center justify-center rounded-full border border-[#101a36]/15 bg-white/50 px-5 py-3 text-sm font-semibold text-[#101a36] transition hover:bg-[#f3ecd9]"
          >
            Volver a la web principal
          </a>
        </div>

        <SectionTitle
          eyebrow="Zona privada"
          title="Visionado del jurado"
          text="Acceso reservado para revisar los cortos de la II Edición antes de la gala. Esta página está pensada para ver los vídeos con calma y sin el resto de contenido de la web."
        />

        {!isUnlocked ? (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-2xl rounded-[2rem] border border-[#101a36]/10 bg-[#101a36] p-7 text-[#fbf7ed] shadow-2xl shadow-[#101a36]/20 md:p-9"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d5a449] text-[#101a36] shadow-lg shadow-black/10">
              <ShieldCheck className="h-7 w-7" />
            </div>
            <h3 className="text-3xl font-light uppercase tracking-[0.12em]">Acceso con clave</h3>
            <p className="mt-4 leading-8 text-[#fbf7ed]/75">
              Introduce la contraseña privada del jurado para ver los cortos.
            </p>
            <form onSubmit={handleSubmit} className="mt-7 flex flex-col gap-3 sm:flex-row">
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="min-h-12 flex-1 rounded-full border border-[#fbf7ed]/20 bg-[#fbf7ed] px-5 text-[#101a36] outline-none transition focus:border-[#d5a449] focus:ring-4 focus:ring-[#d5a449]/20"
                placeholder="Contraseña del jurado"
                aria-label="Contraseña del jurado"
              />
              <Button type="submit" className="rounded-full bg-[#d5a449] px-7 text-[#101a36] hover:bg-[#fbf7ed]">
                Entrar
              </Button>
            </form>
            {error && <p className="mt-4 text-sm font-semibold text-[#d5a449]">{error}</p>}
          </motion.div>
        ) : (
          <div className="grid gap-8 xl:grid-cols-2">
            {juryShorts.map((short, index) => (
              <motion.div key={short.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.65, delay: index * 0.08 }}>
                <Card className="overflow-hidden rounded-[2rem] border-[#101a36]/10 bg-white/65 shadow-xl shadow-[#101a36]/10">
                  <div className="aspect-video bg-[#101a36] lg:aspect-[16/9]">
                    <iframe
                      className="h-full w-full"
                      src={short.embed}
                      title={short.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                  <CardContent className="p-6">
                    <span className="rounded-full bg-[#d5a449]/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#b56b24]">
                      {short.category}
                    </span>
                    <h3 className="mt-4 text-xl font-semibold text-[#101a36]">{short.title}</h3>
                    <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[#b56b24]">{short.group}</p>
                    <p className="mt-3 leading-7 text-[#1b294e]/70">{short.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function CollaborationPage() {
  const [formData, setFormData] = useState({
    business: "",
    contact: "",
    email: "",
    phone: "",
    collaboration: "Colaboración en material",
    message: "",
  });

  const updateField = (field, value) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = `Colaboración Premios Europa - ${formData.business || "Empresa interesada"}`;
    const body = [
      "Hola,",
      "",
      "Nos interesa colaborar con los Premios Europa.",
      "",
      `Empresa/comercio: ${formData.business}`,
      `Persona de contacto: ${formData.contact}`,
      `Email: ${formData.email}`,
      `Teléfono: ${formData.phone}`,
      `Modalidad de interés: ${formData.collaboration}`,
      "",
      "Mensaje/propuesta:",
      formData.message,
      "",
      "Gracias.",
    ].join("\n");

    window.location.href = `mailto:abonesl857@ieseuropa.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="min-h-screen px-4 pb-20 pt-8 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-5 border-b border-[#101a36]/10 pb-6 md:flex-row md:items-center md:justify-between">
          <a href="/#inicio" className="inline-flex w-fit items-center gap-3" aria-label="Volver a Premios Europa">
            <PremiosEuropaLogo compact />
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#101a36]/70">Premios Europa</span>
          </a>
          <a
            href="/#inicio"
            className="inline-flex w-fit items-center justify-center rounded-full border border-[#101a36]/15 bg-white/50 px-5 py-3 text-sm font-semibold text-[#101a36] transition hover:bg-[#f3ecd9]"
          >
            Volver a la web principal
          </a>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#d5a449]/20 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#b56b24]">
              <Handshake className="h-4 w-4" />
              Colaboración oficial
            </div>
            <h1 className="text-4xl font-light uppercase leading-tight tracking-[0.12em] text-[#101a36] md:text-6xl">
              Apoya el talento joven
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#1b294e]/75">
              Premios Europa es el festival de cine adolescente del IES Europa de Arahal. Buscamos comercios, empresas e instituciones que quieran impulsar la cultura, el emprendimiento escolar y la creatividad audiovisual del alumnado.
            </p>
            <p className="mt-4 max-w-2xl leading-8 text-[#1b294e]/70">
              La II Edición 2026 da un salto de calidad con una gala en el Teatro Municipal de Arahal, alianza Erasmus con el Liceo de Aviano y cobertura de Medial TV. También estamos abiertos a propuestas en material o colaboraciones adaptadas a cada entidad.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="overflow-hidden rounded-[2rem] border border-[#101a36]/10 bg-[#101a36] p-7 text-[#fbf7ed] shadow-2xl shadow-[#101a36]/20 md:p-8">
            <Megaphone className="mb-6 h-12 w-12 text-[#d5a449]" />
            <h2 className="text-3xl font-light uppercase tracking-[0.12em]">Por qué colaborar</h2>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {collaborationHighlights.map((item) => (
                <div key={item.title} className="rounded-2xl border border-[#fbf7ed]/10 bg-white/[0.06] p-5">
                  <item.icon className="h-7 w-7 text-[#d5a449]" />
                  <h3 className="mt-4 font-semibold text-[#fbf7ed]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#fbf7ed]/70">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-16">
          <SectionTitle
            eyebrow="Modalidades"
            title="Formas de colaboración"
            text="Puedes elegir una modalidad económica, proponer una colaboración en material o plantearnos una fórmula personalizada."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {collaborationTiers.map((tier, index) => (
              <motion.article
                key={tier.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.04 }}
                className="rounded-[1.5rem] border border-[#101a36]/10 bg-white/60 p-6 shadow-xl shadow-[#101a36]/5"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#b56b24]">{tier.name}</p>
                <p className="mt-3 text-3xl font-light text-[#101a36]">{tier.amount}</p>
                <p className="mt-4 text-sm leading-6 text-[#1b294e]/70">{tier.benefits}</p>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.7 }} className="rounded-[2rem] border border-[#101a36]/10 bg-white/60 p-7 shadow-2xl shadow-[#101a36]/10 md:p-8">
            <Building2 className="mb-6 h-12 w-12 text-[#b56b24]" />
            <h2 className="text-3xl font-light uppercase tracking-[0.12em] text-[#101a36]">Hablemos</h2>
            <p className="mt-5 leading-8 text-[#1b294e]/70">
              Si representas a una empresa, comercio local, librería, asociación o entidad cultural, puedes escribirnos para valorar una colaboración. Escuchamos propuestas económicas, aportaciones en material y acuerdos especiales.
            </p>
            <div className="mt-7 rounded-2xl bg-[#101a36] p-5 text-[#fbf7ed]">
              <Mail className="mb-3 h-6 w-6 text-[#d5a449]" />
              <p className="text-sm text-[#fbf7ed]/65">Persona de contacto</p>
              <p className="mt-1 break-all font-semibold"> Antonio Miguel Bonilla Eslava</p>
            </div>
          </motion.div>

          <motion.form onSubmit={handleSubmit} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="rounded-[2rem] border border-[#101a36]/10 bg-white/65 p-6 shadow-2xl shadow-[#101a36]/10 md:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm font-semibold text-[#101a36]">Empresa o comercio</span>
                <input value={formData.business} onChange={(event) => updateField("business", event.target.value)} required className="w-full rounded-2xl border border-[#101a36]/10 bg-[#fbf7ed] px-4 py-3 outline-none transition focus:border-[#b56b24] focus:ring-4 focus:ring-[#d5a449]/20" placeholder="Nombre de la empresa" />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold text-[#101a36]">Persona de contacto</span>
                <input value={formData.contact} onChange={(event) => updateField("contact", event.target.value)} required className="w-full rounded-2xl border border-[#101a36]/10 bg-[#fbf7ed] px-4 py-3 outline-none transition focus:border-[#b56b24] focus:ring-4 focus:ring-[#d5a449]/20" placeholder="Nombre y apellidos" />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold text-[#101a36]">Email</span>
                <input type="email" value={formData.email} onChange={(event) => updateField("email", event.target.value)} required className="w-full rounded-2xl border border-[#101a36]/10 bg-[#fbf7ed] px-4 py-3 outline-none transition focus:border-[#b56b24] focus:ring-4 focus:ring-[#d5a449]/20" placeholder="correo@empresa.com" />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold text-[#101a36]">Teléfono</span>
                <input value={formData.phone} onChange={(event) => updateField("phone", event.target.value)} className="w-full rounded-2xl border border-[#101a36]/10 bg-[#fbf7ed] px-4 py-3 outline-none transition focus:border-[#b56b24] focus:ring-4 focus:ring-[#d5a449]/20" placeholder="Teléfono de contacto" />
              </label>
              <label className="space-y-2 md:col-span-2">
                <span className="text-sm font-semibold text-[#101a36]">Tipo de colaboración</span>
                <select value={formData.collaboration} onChange={(event) => updateField("collaboration", event.target.value)} className="w-full rounded-2xl border border-[#101a36]/10 bg-[#fbf7ed] px-4 py-3 outline-none transition focus:border-[#b56b24] focus:ring-4 focus:ring-[#d5a449]/20">
                  <option>Colaboración en material</option>
                  {collaborationTiers.map((tier) => (
                    <option key={tier.name}>{tier.name} - {tier.amount}</option>
                  ))}
                  <option>Propuesta personalizada</option>
                </select>
              </label>
              <label className="space-y-2 md:col-span-2">
                <span className="text-sm font-semibold text-[#101a36]">Mensaje o propuesta</span>
                <textarea value={formData.message} onChange={(event) => updateField("message", event.target.value)} className="min-h-36 w-full rounded-2xl border border-[#101a36]/10 bg-[#fbf7ed] px-4 py-3 outline-none transition focus:border-[#b56b24] focus:ring-4 focus:ring-[#d5a449]/20" placeholder="Cuéntanos cómo te gustaría colaborar" />
              </label>
            </div>
            <Button type="submit" className="mt-6 w-full rounded-full bg-[#101a36] py-6 text-base text-[#fbf7ed] hover:bg-[#1b294e] md:w-auto md:px-8">
              Enviar propuesta
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function AdminUploadSection() {
  const [fileName, setFileName] = useState("");
  const [videoFileName, setVideoFileName] = useState("");

  return (
    <section id="subir" className="px-4 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Zona privada"
          title="Panel de subida de cortos"
          text="Esta sección solo se muestra cuando el usuario está identificado como administrador. El formulario queda preparado para añadir los vídeos que después verá el jurado en su zona privada."
        />
        <div className="grid items-start gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.7 }} className="rounded-[2rem] border border-[#101a36]/10 bg-[#101a36] p-8 text-[#fbf7ed] shadow-2xl shadow-[#101a36]/20">
            <ImagePlus className="mb-6 h-12 w-12 text-[#d5a449]" />
            <h3 className="text-3xl font-light uppercase tracking-[0.12em]">Vídeos de la II Edición</h3>
            <p className="mt-5 leading-8 text-[#fbf7ed]/75">
              Añade cartel, enlace privado o archivo del corto y descripción del proyecto. La zona de carga está simulada para esta landing, pero el componente ya separa los campos para una integración real.
            </p>
          </motion.div>

          <motion.form variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="rounded-[2rem] border border-[#101a36]/10 bg-white/60 p-6 shadow-2xl shadow-[#101a36]/10 backdrop-blur md:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm font-semibold text-[#101a36]">Nombre de la candidatura</span>
                <input className="w-full rounded-2xl border border-[#101a36]/10 bg-[#fbf7ed] px-4 py-3 outline-none transition focus:border-[#b56b24] focus:ring-4 focus:ring-[#d5a449]/20" placeholder="Ej. El último plano" />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold text-[#101a36]">Participante o grupo</span>
                <input className="w-full rounded-2xl border border-[#101a36]/10 bg-[#fbf7ed] px-4 py-3 outline-none transition focus:border-[#b56b24] focus:ring-4 focus:ring-[#d5a449]/20" placeholder="Ej. Grupo Lumière" />
              </label>
              <label className="space-y-2 md:col-span-2">
                <span className="text-sm font-semibold text-[#101a36]">Categoría</span>
                <select className="w-full rounded-2xl border border-[#101a36]/10 bg-[#fbf7ed] px-4 py-3 outline-none transition focus:border-[#b56b24] focus:ring-4 focus:ring-[#d5a449]/20">
                  {categories.map((category) => (
                    <option key={category.name}>{category.name}</option>
                  ))}
                </select>
              </label>
              <label className="space-y-2 md:col-span-2">
                <span className="text-sm font-semibold text-[#101a36]">Imagen/cartel de la candidatura</span>
                <div className="relative flex min-h-48 cursor-pointer flex-col items-center justify-center rounded-[1.5rem] border-2 border-dashed border-[#b56b24]/45 bg-[#fbf7ed] p-8 text-center transition hover:border-[#b56b24] hover:bg-[#f3ecd9]">
                  <UploadCloud className="mb-4 h-12 w-12 text-[#b56b24]" />
                  <p className="font-semibold text-[#101a36]">Arrastra y suelta tu imagen aquí</p>
                  <p className="mt-1 text-sm text-[#1b294e]/65">o haz clic para seleccionar un archivo</p>
                  {fileName && <p className="mt-4 rounded-full bg-[#101a36] px-4 py-2 text-sm text-[#fbf7ed]">{fileName}</p>}
                  <input type="file" accept="image/*" className="absolute inset-0 opacity-0" onChange={(event) => setFileName(event.target.files?.[0]?.name || "")} />
                </div>
              </label>
              <label className="space-y-2 md:col-span-2">
                <span className="text-sm font-semibold text-[#101a36]">Enlace privado del vídeo</span>
                <input className="w-full rounded-2xl border border-[#101a36]/10 bg-[#fbf7ed] px-4 py-3 outline-none transition focus:border-[#b56b24] focus:ring-4 focus:ring-[#d5a449]/20" placeholder="Ej. enlace privado de YouTube, Vimeo o Drive" />
              </label>
              <label className="space-y-2 md:col-span-2">
                <span className="text-sm font-semibold text-[#101a36]">Archivo del corto</span>
                <div className="relative flex min-h-40 cursor-pointer flex-col items-center justify-center rounded-[1.5rem] border-2 border-dashed border-[#101a36]/25 bg-[#fbf7ed] p-8 text-center transition hover:border-[#b56b24] hover:bg-[#f3ecd9]">
                  <Video className="mb-4 h-12 w-12 text-[#b56b24]" />
                  <p className="font-semibold text-[#101a36]">Arrastra y suelta el vídeo aquí</p>
                  <p className="mt-1 text-sm text-[#1b294e]/65">MP4, MOV o enlace externo si pesa demasiado</p>
                  {videoFileName && <p className="mt-4 rounded-full bg-[#101a36] px-4 py-2 text-sm text-[#fbf7ed]">{videoFileName}</p>}
                  <input type="file" accept="video/*" className="absolute inset-0 opacity-0" onChange={(event) => setVideoFileName(event.target.files?.[0]?.name || "")} />
                </div>
              </label>
              <label className="space-y-2 md:col-span-2">
                <span className="text-sm font-semibold text-[#101a36]">Descripción breve</span>
                <textarea className="min-h-32 w-full rounded-2xl border border-[#101a36]/10 bg-[#fbf7ed] px-4 py-3 outline-none transition focus:border-[#b56b24] focus:ring-4 focus:ring-[#d5a449]/20" placeholder="Resume el proyecto en pocas líneas" />
              </label>
            </div>
            <Button type="button" className="mt-6 w-full rounded-full bg-[#101a36] py-6 text-base text-[#fbf7ed] hover:bg-[#1b294e] md:w-auto md:px-8">
              Guardar corto
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function AwardCategories() {
  return (
    <section id="categorias" className="bg-gradient-to-br from-[#f3ecd9] to-[#fbf7ed] px-4 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Reconocimientos" title="Categorías de premios" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <motion.div key={category.name} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.05 }} className="group rounded-[1.6rem] border border-[#101a36]/10 bg-white/55 p-6 shadow-lg shadow-[#101a36]/5 transition hover:-translate-y-1 hover:bg-[#101a36]">
              <category.icon className="h-9 w-9 text-[#b56b24] transition group-hover:text-[#d5a449]" />
              <h3 className="mt-5 text-lg font-semibold text-[#101a36] transition group-hover:text-[#fbf7ed]">{category.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Schedule() {
  return (
    <section id="programa" className="px-4 py-20 md:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionTitle eyebrow="04.JUN.26" title="Programa de la gala" />
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute bottom-0 left-5 top-0 hidden w-px bg-gradient-to-b from-[#d5a449] via-[#101a36]/30 to-[#d5a449] md:block" />
          <div className="space-y-5">
            {schedule.map((item, index) => (
              <motion.div key={item.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.65, delay: index * 0.08 }} className="relative rounded-[1.6rem] border border-[#101a36]/10 bg-white/55 p-6 shadow-xl shadow-[#101a36]/5 md:ml-14">
                <div className="absolute -left-[3.9rem] top-6 hidden h-10 w-10 items-center justify-center rounded-full border border-[#d5a449]/60 bg-[#101a36] text-[#d5a449] shadow-lg md:flex">
                  <Star className="h-4 w-4 fill-current" />
                </div>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-2xl font-light uppercase tracking-[0.1em] text-[#101a36]">{item.title}</h3>
                  <span className="rounded-full bg-[#d5a449]/20 px-4 py-1 text-sm font-bold text-[#b56b24]">{item.time}</span>
                </div>
                <p className="mt-3 leading-7 text-[#1b294e]/70">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#101a36]/10 bg-[#101a36] px-4 py-12 text-[#fbf7ed] md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <PremiosEuropaLogo compact inverted />
          <div>
            <p className="text-xl font-light uppercase tracking-[0.16em]">Premios Europa</p>
            <p className="mt-1 text-sm text-[#fbf7ed]/65">II Edición · Festival de Cine Adolescente</p>
          </div>
        </div>
        <div className="text-left md:text-right">
          <p className="text-lg tracking-[0.18em] text-[#d5a449]">04.JUN.26</p>
          <p className="mt-2 text-sm text-[#fbf7ed]/60">Design by Julio Duque</p>
        </div>
      </div>
    </footer>
  );
}

export default function PremiosEuropaLanding() {
  const year = useMemo(() => new Date().getFullYear(), []);
  const [isAdmin, setIsAdmin] = useState(false);
  const getCurrentPage = () => {
    if (window.location.hash === "#/jurado") return "/jurado";
    if (window.location.hash === "#/colaboracion") return "/colaboracion";
    return window.location.pathname;
  };
  const [currentPage, setCurrentPage] = useState(getCurrentPage);
  const isJuryPage = currentPage === "/jurado";
  const isCollaborationPage = currentPage === "/colaboracion";

  useEffect(() => {
    const handleRouteChange = () => setCurrentPage(getCurrentPage());
    window.addEventListener("hashchange", handleRouteChange);
    window.addEventListener("popstate", handleRouteChange);
    return () => {
      window.removeEventListener("hashchange", handleRouteChange);
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  const handleAdminLogin = () => {
    const password = window.prompt("Introduce la clave de administrador");
    if (password === "europa2026") {
      setIsAdmin(true);
    } else if (password) {
      window.alert("Clave incorrecta");
    }
  };

  if (isJuryPage) {
    return (
      <main className="min-h-screen scroll-smooth bg-[#fbf7ed] font-sans text-[#101a36] selection:bg-[#d5a449]/40">
        <style>{`
          @font-face {
            font-family: "Anthony Regular";
            src: url("/fonts/Anthony-Regular.woff2") format("woff2");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
          }
          .font-anthony { font-family: "Anthony Regular", serif; }
          html { scroll-behavior: smooth; }
          body { background: ${COLORS.creamLight}; }
          section { scroll-margin-top: 88px; }
        `}</style>
        <JuryVideos />
        <div className="sr-only">Premios Europa zona de jurado {year}</div>
      </main>
    );
  }

  if (isCollaborationPage) {
    return (
      <main className="min-h-screen scroll-smooth bg-[#fbf7ed] font-sans text-[#101a36] selection:bg-[#d5a449]/40">
        <style>{`
          @font-face {
            font-family: "Anthony Regular";
            src: url("/fonts/Anthony-Regular.woff2") format("woff2");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
          }
          .font-anthony { font-family: "Anthony Regular", serif; }
          html { scroll-behavior: smooth; }
          body { background: ${COLORS.creamLight}; }
          section { scroll-margin-top: 88px; }
        `}</style>
        <CollaborationPage />
        <div className="sr-only">Premios Europa página de colaboración {year}</div>
      </main>
    );
  }

  return (
    <main className="min-h-screen scroll-smooth bg-[#fbf7ed] font-sans text-[#101a36] selection:bg-[#d5a449]/40">
      <style>{`
        @font-face {
          font-family: "Anthony Regular";
          src: url("/fonts/Anthony-Regular.woff2") format("woff2");
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }
        .font-anthony { font-family: "Anthony Regular", serif; }
        html { scroll-behavior: smooth; }
        body { background: ${COLORS.creamLight}; }
        section { scroll-margin-top: 88px; }
      `}</style>
      <Nav isAdmin={isAdmin} onAdminLogin={handleAdminLogin} onAdminLogout={() => setIsAdmin(false)} />
      <Hero isAdmin={isAdmin} />
      <EventIntro />
      <FirstEdition />
      <Candidates />
      {isAdmin && <AdminUploadSection />}
      <AwardCategories />
      <Schedule />
      <Footer />
      <div className="sr-only">Premios Europa landing page {year}</div>
    </main>
  );
}
