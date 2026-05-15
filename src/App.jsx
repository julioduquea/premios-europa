import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Award,
  CalendarDays,
  Camera,
  Clapperboard,
  Crown,
  Film,
  ImagePlus,
  PlayCircle,
  Sparkles,
  Star,
  Trophy,
  UploadCloud,
  Users,
  LockKeyhole,
  ShieldCheck,
  Video,
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

const OFFICIAL_LOGO = "/logo-premios-europa.png";

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

const videos = [
  {
    title: "Making of · Premios Europa",
    description: "Proceso creativo, ensayos y rodajes realizados por el alumnado.",
    embed: "https://www.youtube.com/embed/tgbNymZ7vqY",
  },
  {
    title: "Selección oficial · Tráiler",
    description: "Avance de las candidaturas finalistas de la II Edición.",
    embed: "https://player.vimeo.com/video/76979871",
  },
  {
    title: "Entrevistas a participantes",
    description: "Voces jóvenes explicando sus ideas, referentes y aprendizajes.",
    embed: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

const categories = [
  { name: "Mejor cortometraje", icon: Trophy },
  { name: "Mejor dirección", icon: Clapperboard },
  { name: "Mejor interpretación", icon: Star },
  { name: "Mejor guion", icon: Film },
  { name: "Mejor montaje", icon: Video },
  { name: "Mejor fotografía", icon: Camera },
  { name: "Premio del público", icon: Crown },
];

const schedule = [
  { time: "18:00", title: "Recepción", text: "Llegada de participantes, familias e invitados." },
  { time: "18:20", title: "Presentación", text: "Bienvenida y apertura oficial de la II Edición." },
  { time: "18:40", title: "Proyección", text: "Visionado de candidaturas y piezas seleccionadas." },
  { time: "20:00", title: "Entrega de premios", text: "Anuncio de ganadores y menciones especiales." },
  { time: "20:30", title: "Cierre de gala", text: "Foto final y despedida del festival." },
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
  const links = ["Evento", "Candidaturas", "Vídeos", "Programa"];
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
              href={`#${link.toLowerCase().replace("í", "i")}`}
              className="text-sm font-medium text-[#101a36]/75 transition hover:text-[#b56b24]"
            >
              {link}
            </a>
          ))}
        </div>
        {isAdmin ? (
          <div className="flex items-center gap-2">
            <a
              href="#subir"
              className="hidden rounded-full border border-[#101a36]/15 bg-[#101a36] px-4 py-2 text-sm font-medium text-[#fbf7ed] shadow-lg shadow-[#101a36]/10 transition hover:-translate-y-0.5 hover:bg-[#1b294e] sm:inline-flex"
            >
              Subir material
            </a>
            <button
              type="button"
              onClick={onAdminLogout}
              className="rounded-full border border-[#101a36]/15 bg-white/40 px-4 py-2 text-sm font-medium text-[#101a36] transition hover:bg-[#f3ecd9]"
            >
              Salir admin
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={onAdminLogin}
            className="inline-flex items-center gap-2 rounded-full border border-[#101a36]/15 bg-white/40 px-4 py-2 text-sm font-medium text-[#101a36] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#f3ecd9]"
          >
            <LockKeyhole className="h-4 w-4 text-[#b56b24]" />
            Admin
          </button>
        )}
      </nav>
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
          <h1 className="mt-7 text-5xl font-light uppercase leading-[0.95] tracking-[0.12em] text-[#101a36] md:text-7xl xl:text-8xl">
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
                <a href="#subir">Subir material</a>
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
                  <h3 className="text-4xl font-light uppercase tracking-[0.12em] text-[#101a36] md:text-5xl">
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
          title="Una noche para celebrar el talento joven"
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

function Candidates() {
  return (
    <section id="candidaturas" className="bg-[#101a36] px-4 py-20 text-[#fbf7ed] md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Selección oficial"
          title="Candidaturas"
          text="Tarjetas preparadas para sustituir fácilmente imágenes, títulos, categorías, descripciones y enlaces a vídeos."
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
                <Button asChild className="mt-6 rounded-full bg-[#fbf7ed] text-[#101a36] hover:bg-[#d5a449]">
                  <a href={candidate.video} target="_blank" rel="noreferrer">
                    <PlayCircle className="mr-2 h-4 w-4" /> Ver vídeo
                  </a>
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoGallery() {
  return (
    <section id="videos" className="px-4 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Proyecciones"
          title="Galería de vídeos"
          text="Compatible con vídeos incrustados de YouTube, Vimeo o rutas locales. Solo hay que cambiar el valor embed en el listado de datos."
        />
        <div className="grid gap-7 lg:grid-cols-3">
          {videos.map((video, index) => (
            <motion.div key={video.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.65, delay: index * 0.08 }}>
              <Card className="overflow-hidden rounded-[2rem] border-[#101a36]/10 bg-white/55 shadow-xl shadow-[#101a36]/10">
                <div className="aspect-video bg-[#101a36]">
                  <iframe
                    className="h-full w-full"
                    src={video.embed}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[#101a36]">{video.title}</h3>
                  <p className="mt-2 leading-7 text-[#1b294e]/70">{video.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AdminUploadSection() {
  const [fileName, setFileName] = useState("");

  return (
    <section id="subir" className="px-4 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Zona privada"
          title="Panel de subida de imágenes"
          text="Esta sección solo se muestra cuando el usuario está identificado como administrador. El formulario visual queda preparado para conectarse más adelante a Firebase, Supabase o una API propia."
        />
        <div className="grid items-start gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.7 }} className="rounded-[2rem] border border-[#101a36]/10 bg-[#101a36] p-8 text-[#fbf7ed] shadow-2xl shadow-[#101a36]/20">
            <ImagePlus className="mb-6 h-12 w-12 text-[#d5a449]" />
            <h3 className="text-3xl font-light uppercase tracking-[0.12em]">Material de candidatura</h3>
            <p className="mt-5 leading-8 text-[#fbf7ed]/75">
              Añade cartel, imagen destacada y descripción del proyecto. La zona de carga está simulada para esta landing, pero el componente ya separa campos y archivo para una integración real.
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
                <span className="text-sm font-semibold text-[#101a36]">Descripción breve</span>
                <textarea className="min-h-32 w-full rounded-2xl border border-[#101a36]/10 bg-[#fbf7ed] px-4 py-3 outline-none transition focus:border-[#b56b24] focus:ring-4 focus:ring-[#d5a449]/20" placeholder="Resume el proyecto en pocas líneas" />
              </label>
            </div>
            <Button type="button" className="mt-6 w-full rounded-full bg-[#101a36] py-6 text-base text-[#fbf7ed] hover:bg-[#1b294e] md:w-auto md:px-8">
              Guardar candidatura
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
          <p className="mt-2 text-sm text-[#fbf7ed]/60">Diseño inspirado en la imagen oficial de la gala.</p>
        </div>
      </div>
    </footer>
  );
}

export default function PremiosEuropaLanding() {
  const year = useMemo(() => new Date().getFullYear(), []);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleAdminLogin = () => {
    const password = window.prompt("Introduce la clave de administrador");
    if (password === "europa2026") {
      setIsAdmin(true);
    } else if (password) {
      window.alert("Clave incorrecta");
    }
  };

  return (
    <main className="min-h-screen scroll-smooth bg-[#fbf7ed] font-sans text-[#101a36] selection:bg-[#d5a449]/40">
      <style>{`
        html { scroll-behavior: smooth; }
        body { background: ${COLORS.creamLight}; }
        section { scroll-margin-top: 88px; }
      `}</style>
      <Nav isAdmin={isAdmin} onAdminLogin={handleAdminLogin} onAdminLogout={() => setIsAdmin(false)} />
      <Hero isAdmin={isAdmin} />
      <EventIntro />
      <Candidates />
      <VideoGallery />
      {isAdmin && <AdminUploadSection />}
      <AwardCategories />
      <Schedule />
      <Footer />
      <div className="sr-only">Premios Europa landing page {year}</div>
    </main>
  );
}

