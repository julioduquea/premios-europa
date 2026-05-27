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

const nominationCategories = [
  {
    title: "Mejor corto",
    shortTitle: "Corto",
    icon: Trophy,
    candidates: 12,
    nominations: 6,
    nominees: [
      { title: "Justo a tiempo", group: "JISOL", course: "3º ESO" },
      { title: "La ausencia que respira", group: "Estrella Co.", course: "3º ESO" },
      { title: "Plutón", group: "Lampedusa Films", course: "3º ESO" },
      { title: "Servicio público", group: "OOPS Studios", course: "3º ESO" },
      { title: "Píxeles", group: "Paralelo", course: "3º ESO · Erasmus" },
      { title: "Puntas abiertas", group: "Chandal y Tacón", course: "3º ESO · 2025" },
    ],
    entries: [
      { title: "Cuando todo era gris", group: "Las Grecas", course: "1º ESO" },
      { title: "Directo y sin filtros", group: "Opalite Studios", course: "3º ESO" },
      { title: "El secreto", group: "Spaicy Sausage", course: "1º ESO" },
      { title: "Justo a tiempo", group: "JISOL", course: "3º ESO" },
      { title: "La ausencia que respira", group: "Estrella Co.", course: "3º ESO" },
      { title: "La voz de la experiencia", group: "Moonlight", course: "3º ESO" },
      { title: "Lo abstracto", group: "Epic Screen", course: "3º ESO" },
      { title: "Plutón", group: "Lampedusa Films", course: "3º ESO" },
      { title: "Píxeles", group: "Paralelo", course: "3º ESO · Erasmus" },
      { title: "Sabores de mi tierra", group: "RBM", course: "1º ESO" },
      { title: "Servicio público", group: "OOPS Studios", course: "3º ESO" },
      { title: "Puntas abiertas", group: "Chandal y Tacón", course: "3º ESO · 2025" },
    ],
  },
  {
    title: "Mejor guion",
    shortTitle: "Guion",
    icon: ScrollText,
    candidates: 10,
    nominations: 6,
    nominees: [
      { title: "Sabores de mi tierra", group: "RBM", course: "1º ESO" },
      { title: "Justo a tiempo", group: "JISOL", course: "3º ESO" },
      { title: "La ausencia que respira", group: "Estrella Co.", course: "3º ESO" },
      { title: "La voz de la experiencia", group: "Moonlight", course: "3º ESO" },
      { title: "Plutón", group: "Lampedusa Films", course: "3º ESO" },
      { title: "Servicio público", group: "OOPS Studios", course: "3º ESO" },
    ],
    entries: [
      { title: "Cuando todo era gris", group: "Las Grecas", course: "1º ESO" },
      { title: "El fantasma del verdeo", group: "HOLIF", course: "3º ESO · 2025" },
      { title: "El secreto", group: "Spaicy Sausage", course: "1º ESO" },
      { title: "Justo a tiempo", group: "JISOL", course: "3º ESO" },
      { title: "La ausencia que respira", group: "Estrella Co.", course: "3º ESO" },
      { title: "La voz de la experiencia", group: "Moonlight", course: "3º ESO" },
      { title: "Los días sin luz", group: "CAAM", course: "3º ESO · 2025" },
      { title: "Plutón", group: "Lampedusa Films", course: "3º ESO" },
      { title: "Sabores de mi tierra", group: "RBM", course: "1º ESO" },
      { title: "Servicio público", group: "OOPS Studios", course: "3º ESO" },
    ],
  },
  {
    title: "Mejor interpretación protagonista",
    shortTitle: "Protagonista",
    icon: UserRound,
    candidates: 12,
    nominations: 6,
    nominees: [
      { title: "Julia Gamboa", role: "Almudena", work: "Justo a tiempo", group: "JISOL", course: "3º ESO" },
      { title: "Sara Camacho", role: "Sara", work: "La ausencia que respira", group: "Estrella Co.", course: "3º ESO" },
      { title: "Abel Hurtado", role: "Daniel", work: "Plutón", group: "Lampedusa Films", course: "3º ESO" },
      { title: "Reparto", role: "Pascualito", work: "Servicio público", group: "OOPS Studios", course: "3º ESO" },
      { title: "Tamara Mateo", role: "Tamara", work: "Píxeles", group: "Paralelo Films", course: "3º ESO" },
      { title: "Ana Gallegos / Alejandra Romero", role: "La Rebe / Gala", work: "Puntas abiertas", group: "Chandal y Tacón", course: "3º ESO · 2025" },
    ],
    entries: [
      { title: "Abel Hurtado", role: "Daniel", work: "Plutón", group: "Lampedusa Films", course: "3º ESO" },
      { title: "Alejandra Romero", role: "Gala", work: "Puntas abiertas", group: "Chandal y Tacón", course: "3º ESO · 2025" },
      { title: "Alonso Vázquez", role: "Lucas", work: "El secreto", group: "Spaicy Sausage", course: "1º ESO" },
      { title: "Ana Gallegos", role: "La Rebe", work: "Puntas abiertas", group: "Chandal y Tacón", course: "3º ESO · 2025" },
      { title: "Benjamín Cruces", role: "el presentador", work: "Sabores de mi tierra", group: "RBM", course: "1º ESO" },
      { title: "Carmen B / Andrea S / Laura S / Estrella P", role: "Pascualito", work: "Servicio público", group: "OOPS Studios", course: "3º ESO" },
      { title: "Hugo Bermúdez", role: "jornalero", work: "¡Corre que no llegamos!", group: "JJHH", course: "1º ESO" },
      { title: "Julia Gamboa", role: "Almudena", work: "Justo a tiempo", group: "JISOL", course: "3º ESO" },
      { title: "Lucía Toledano", role: "Celia", work: "Lo abstracto", group: "Epic Screen", course: "3º ESO" },
      { title: "Sara Camacho", role: "Sara", work: "La ausencia que respira", group: "Estrella Co.", course: "3º ESO" },
      { title: "Sofía García", role: "Natalia", work: "Cuando todo era gris", group: "Las Grecas", course: "1º ESO" },
      { title: "Tamara Mateo", role: "Tamara", work: "Píxeles", group: "Paralelo Films", course: "3º ESO" },
    ],
  },
  {
    title: "Mejor interpretación de reparto",
    shortTitle: "Reparto",
    icon: UsersRound,
    candidates: 12,
    nominations: 6,
    nominees: [
      { title: "Sara", role: "agresora choni", work: "Cuando todo era gris", group: "Las Grecas", course: "1º ESO" },
      { title: "Natalia Morales", role: "Aitana de Almudena", work: "Justo a tiempo", group: "JISOL", course: "3º ESO" },
      { title: "Reparto", role: "amigas de Sara", work: "La ausencia que respira", group: "Estrella Co.", course: "3º ESO" },
      { title: "Alba", role: "amiga de Daniel", work: "Plutón", group: "Lampedusa Films", course: "3º ESO" },
      { title: "Laura Sánchez", role: "influencer argentina", work: "Servicio público", group: "OOPS Studios", course: "3º ESO" },
      { title: "Ángel Avecilla", role: "Ángel", work: "Píxeles", group: "Paralelo Films", course: "3º ESO" },
    ],
    entries: [
      { title: "Abel Núñez", role: "Víctor", work: "Jugar para salir", group: "Horizonte Plus", course: "3º ESO" },
      { title: "Adriana M. / Beatriz M. / Naiara R.", role: "acosadoras", work: "El secreto", group: "Spaicy Sausage", course: "1º ESO" },
      { title: "Alba Gómez", role: "amiga de Daniel", work: "Plutón", group: "Lampedusa Films", course: "3º ESO" },
      { title: "Ángel Avecilla", role: "Ángel", work: "Píxeles", group: "Paralelo Films", course: "3º ESO" },
      { title: "Laura Sánchez", role: "influencer argentina", work: "Servicio público", group: "OOPS Studios", course: "3º ESO" },
      { title: "Mario Sánchez", role: "cocinero", work: "Sabores de mi tierra", group: "RBM", course: "1º ESO" },
      { title: "Natalia Morales", role: "Aitana", work: "Justo a tiempo", group: "JISOL", course: "3º ESO" },
      { title: "Raúl Romay", role: "cocinero", work: "Sabores de mi tierra", group: "RBM", course: "1º ESO" },
      { title: "Reparto", role: "amigas de Almudena", work: "Justo a tiempo", group: "JISOL", course: "3º ESO" },
      { title: "Reparto", role: "amigas de Sara", work: "La ausencia que respira", group: "Estrella Co.", course: "3º ESO" },
      { title: "Sara Mena", role: "agresora choni", work: "Cuando todo era gris", group: "Las Grecas", course: "1º ESO" },
      { title: "Saray Pérez", role: "Saray", work: "Las flechas misteriosas", group: "Film Action", course: "3º ESO" },
    ],
  },
  {
    title: "Mejor diseño de vestuario y personajes",
    shortTitle: "Vestuario",
    icon: Shirt,
    candidates: 12,
    nominations: 6,
    entries: [
      { title: "Brujas del presente", group: "Bouchee Beef", course: "3º ESO · 2025" },
      { title: "¡Corre que no llegamos!", group: "JJHH", course: "1º ESO" },
      { title: "Cuando todo era gris", group: "Las Grecas", course: "1º ESO" },
      { title: "El eco de las decisiones", group: "Fashion Films", course: "3º ESO · 2025" },
      { title: "El secreto", group: "Spaicy Sausage", course: "1º ESO" },
      { title: "Justo a tiempo", group: "JISOL", course: "3º ESO" },
      { title: "La ausencia que respira", group: "Estrella Co.", course: "3º ESO" },
      { title: "Lo abstracto", group: "Epic Screen", course: "3º ESO" },
      { title: "Los días sin luz", group: "CAAM", course: "3º ESO · 2025" },
      { title: "Lucía en el país de la magia", group: "AZEA", course: "1º ESO · 2025" },
      { title: "Puntas abiertas", group: "Chandal y Tacón", course: "3º ESO · 2025" },
      { title: "Servicio público", group: "OOPS Studios", course: "3º ESO" },
    ],
  },
  {
    title: "Mejor storyboard",
    shortTitle: "Storyboard",
    icon: Camera,
    candidates: 12,
    nominations: 6,
    entries: [
      { title: "Cuando todo era gris", group: "Las Grecas", course: "1º ESO" },
      { title: "Directo y sin filtros", group: "Opalite Studios", course: "3º ESO" },
      { title: "El eco de las decisiones", group: "Fashion Films", course: "3º ESO · 2025" },
      { title: "El fantasma del verdeo", group: "HOLIF", course: "3º ESO · 2025" },
      { title: "Justo a tiempo", group: "JISOL", course: "3º ESO" },
      { title: "La ausencia que respira", group: "Estrella Co.", course: "3º ESO" },
      { title: "La niña de las coletas", group: "Dark Films", course: "1º ESO · 2025" },
      { title: "Lo abstracto", group: "Epic Screen", course: "3º ESO" },
      { title: "Lucía en el país de la magia", group: "AZEA", course: "1º ESO · 2025" },
      { title: "Puntas abiertas", group: "Chandal y Tacón", course: "3º ESO · 2025" },
      { title: "Sabores de mi tierra", group: "RBM", course: "1º ESO" },
      { title: "Servicio público", group: "OOPS Studios", course: "3º ESO" },
    ],
  },
  {
    title: "Mejor cartel",
    shortTitle: "Cartel",
    icon: Image,
    candidates: 12,
    nominations: 6,
    entries: [
      { title: "¡Corre que no llegamos!", group: "JJHH", course: "1º ESO" },
      { title: "Directo y sin filtros", group: "Opalite Studios", course: "3º ESO" },
      { title: "El secreto", group: "Spaicy Sausage", course: "1º ESO" },
      { title: "El tarot", group: "Dark Cinema", course: "3º ESO" },
      { title: "Ganar para salir", group: "Horizonte Pluz", course: "3º ESO" },
      { title: "Justo a tiempo", group: "Chandal y Tacón", course: "3º ESO · 2025" },
      { title: "La voz de la experiencia", group: "Moonlight", course: "3º ESO" },
      { title: "Las flechas misteriosas", group: "Films Action", course: "3º ESO" },
      { title: "Lo abstracto", group: "Epic Screen", course: "3º ESO" },
      { title: "Plutón", group: "Lampedusa", course: "3º ESO" },
      { title: "Sabores de mi tierra", group: "RBM", course: "1º ESO" },
      { title: "Servicio público", group: "OOPS Studios", course: "3º ESO" },
    ],
  },
  {
    title: "Mejor logo",
    shortTitle: "Logo",
    icon: Palette,
    candidates: 20,
    nominations: 10,
    entries: [
      { title: "Aurex", course: "1º ESO" },
      { title: "Chandal y Tacón", course: "3º ESO · 2025" },
      { title: "Estrella Co.", course: "3º ESO" },
      { title: "Epic Screen", course: "3º ESO" },
      { title: "Fashion Films", course: "3º ESO · 2025" },
      { title: "Film Action", course: "1º ESO" },
      { title: "HOLIF", course: "3º ESO · 2025" },
      { title: "Indigo", course: "1º ESO" },
      { title: "JISOL", course: "3º ESO" },
      { title: "JJHH", course: "1º ESO" },
      { title: "KASK", course: "1º ESO" },
      { title: "Lampedusa", course: "3º ESO" },
      { title: "Las Grecas", course: "1º ESO" },
      { title: "Modo Avión", course: "3º ESO" },
      { title: "Moonlight", course: "3º ESO" },
      { title: "OOPS Studios", course: "3º ESO" },
      { title: "Opalite Films", course: "3º ESO" },
      { title: "RBM", course: "1º ESO" },
      { title: "Tracatá", course: "1º ESO" },
      { title: "Yako", course: "1º ESO" },
    ],
  },
  {
    title: "Mejor presupuesto",
    shortTitle: "Presupuesto",
    icon: Calculator,
    candidates: 12,
    nominations: 6,
    nominees: [
      { title: "Justo a tiempo", group: "JISOL", course: "3º ESO" },
      { title: "Lo abstracto", group: "Epic Screen", course: "3º ESO" },
      { title: "La ausencia que respira", group: "Estrella Co.", course: "3º ESO" },
      { title: "Lo que nunca dijimos", group: "Modo Avión", course: "3º ESO" },
      { title: "Servicio público", group: "OOPS Studios", course: "3º ESO" },
      { title: "Puntas abiertas", group: "Chandal y Tacón", course: "3º ESO · 2025" },
    ],
    entries: [
      { title: "Cuando todo era gris", group: "Las Grecas", course: "1º ESO" },
      { title: "Directo y sin filtros", group: "Opalite Studios", course: "3º ESO" },
      { title: "El peso de ser yo", group: "VDM Movie", course: "3º ESO · 2025" },
      { title: "El secreto", group: "Spaicy Sausage", course: "1º ESO" },
      { title: "Justo a tiempo", group: "JISOL", course: "3º ESO" },
      { title: "La ausencia que respira", group: "Estrella Co.", course: "3º ESO" },
      { title: "Lo abstracto", group: "Epic Screen", course: "3º ESO" },
      { title: "Lo que nunca dijimos", group: "Modo Avión", course: "3º ESO" },
      { title: "Los días sin luz", group: "CAAM", course: "3º ESO · 2025" },
      { title: "Las voces del pasillo", group: "Tracatá", course: "1º ESO" },
      { title: "Puntas abiertas", group: "Chandal y Tacón", course: "3º ESO · 2025" },
      { title: "Servicio público", group: "OOPS Studios", course: "3º ESO" },
    ],
  },
  {
    title: "Mejor traducción de guion",
    shortTitle: "Traducción",
    icon: ScrollText,
    candidates: 12,
    nominations: 6,
    entries: [
      { title: "Acoso sin necesidad", group: "MNM3", course: "3º ESO" },
      { title: "Directo y sin filtros", group: "Opalite Studios", course: "3º ESO" },
      { title: "El bicho raro", group: "Kinki Producciones", course: "3º ESO" },
      { title: "El tarot", group: "Dark Cinema", course: "3º ESO" },
      { title: "Ganar para salir", group: "Horizonte Pluz", course: "3º ESO" },
      { title: "Justo a tiempo", group: "JISOL", course: "3º ESO" },
      { title: "La ausencia que respira", group: "Estrella Co.", course: "3º ESO" },
      { title: "Las flechas misteriosas", group: "Film Action", course: "3º ESO" },
      { title: "Las voces del pasillo", group: "Tracatá", course: "1º ESO" },
      { title: "Sabores de mi tierra", group: "RBM", course: "1º ESO" },
      { title: "Servicio público", group: "OOPS Studios", course: "3º ESO" },
      { title: "Una semana sin móviles", group: "YAKO", course: "1º ESO" },
    ],
  },
  {
    title: "Mejor formato arriesgado",
    shortTitle: "Formato arriesgado",
    icon: Sparkles,
    candidates: 6,
    nominations: 6,
    nominees: [
      { title: "Arahal, pasado y presente", group: "Equipo participante", course: "Premios Europa 2026" },
      { title: "Sabores de mi tierra", group: "RBM", course: "1º ESO" },
      { title: "La misteriosa noche", group: "KASK", course: "1º ESO" },
      { title: "La voz de la experiencia", group: "Moonlight", course: "3º ESO" },
      { title: "Directo y sin filtros", group: "Opalite Studios", course: "3º ESO" },
      { title: "Who finds a treasure... finds a friend", group: "Aviano Films Production", course: "Erasmus Italia" },
    ],
    entries: [
      { title: "Arahal, pasado y presente", group: "Equipo participante", course: "Premios Europa 2026" },
      { title: "Directo y sin filtros", group: "Opalite Studios", course: "3º ESO" },
      { title: "La misteriosa noche", group: "KASK", course: "1º ESO" },
      { title: "La voz de la experiencia", group: "Moonlight", course: "3º ESO" },
      { title: "Sabores de mi tierra", group: "RBM", course: "1º ESO" },
      { title: "Who finds a treasure... finds a friend", group: "Aviano Films Production", course: "Erasmus Italia" },
    ],
  },
  {
    title: "Compromiso social",
    shortTitle: "Compromiso social",
    icon: Handshake,
    candidates: 8,
    nominations: 6,
    entries: [
      { title: "Acoso sin necesidad", group: "MNM3", course: "3º ESO" },
      { title: "Cuando todo era gris", group: "Las Grecas", course: "1º ESO" },
      { title: "El bicho raro", group: "Kinki Producciones", course: "3º ESO" },
      { title: "El secreto", group: "Spaicy Sausage", course: "1º ESO" },
      { title: "Justo a tiempo", group: "JISOL", course: "3º ESO" },
      { title: "La voz de la experiencia", group: "Moonlight", course: "3º ESO" },
      { title: "Lo abstracto", group: "JISOL", course: "3º ESO" },
      { title: "Plutón", group: "Lampedusa", course: "3º ESO" },
    ],
  },
  {
    title: "Premio espacio sonoro",
    shortTitle: "Espacio sonoro",
    icon: Music,
    candidates: 10,
    nominations: 6,
    entries: [
      { title: "Directo y sin filtros", group: "Opalite Studios", course: "3º ESO" },
      { title: "Cuando todo era gris", group: "Las Grecas", course: "1º ESO" },
      { title: "Justo a tiempo", group: "JISOL", course: "3º ESO" },
      { title: "La ausencia que respira", group: "Estrella Co.", course: "3º ESO" },
      { title: "Las flechas misteriosas", group: "Film Action", course: "3º ESO" },
      { title: "La misteriosa noche", group: "KASK", course: "1º ESO" },
      { title: "Lo abstracto", group: "JISOL", course: "3º ESO" },
      { title: "Plutón", group: "Lampedusa", course: "3º ESO" },
      { title: "Sabores de mi tierra", group: "RBM", course: "1º ESO" },
      { title: "Servicio público", group: "OOPS Studios", course: "1º ESO" },
    ],
  },
];

const juryPassword = "jurado2026";

const juryPlaylist = {
  title: "Lista de reproducción del jurado",
  category: "Zona privada",
  group: "YouTube privado",
  description: "Todos los cortos ocultos de YouTube solo accesibles para el jurado tras introducir la contraseña.",
  embed: "https://www.youtube.com/embed/videoseries?list=PLFe_gKuKvRXWlW1KjrPOXzjTTuEvb11z_",
  url: "https://www.youtube.com/playlist?list=PLFe_gKuKvRXWlW1KjrPOXzjTTuEvb11z_",
};

const juryPrivateMaterials = [
  juryPlaylist,
];

function JuryMediaCard({ item, index }) {
  const isHiddenItem = item.hidden;
  return (
    <motion.div
      key={item.title}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay: index * 0.08 }}
    >
      <Card className="overflow-hidden rounded-[2rem] border-[#101a36]/10 bg-white/65 shadow-xl shadow-[#101a36]/10">
        <div className="aspect-video bg-[#101a36] lg:aspect-[16/9]">
          {isHiddenItem ? (
            <div className="flex h-full items-center justify-center px-6 text-center text-sm font-semibold uppercase tracking-[0.14em] text-[#fbf7ed]">
              Vídeo por definir. Se añadirá cuando esté listo.
            </div>
          ) : (
            <iframe
              className="h-full w-full"
              src={item.embed}
              title={item.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          )}
        </div>
        <CardContent className="p-6">
          <span className="rounded-full bg-[#d5a449]/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#b56b24]">
            {item.category}
          </span>
          <h3 className="mt-4 text-xl font-semibold text-[#101a36]">{item.title}</h3>
          <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[#b56b24]">{item.group}</p>
          <p className="mt-3 leading-7 text-[#1b294e]/70">{item.description}</p>
          {item.url && !isHiddenItem && (
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex rounded-full bg-[#d5a449] px-5 py-3 text-sm font-semibold text-[#101a36] transition hover:bg-[#fbf7ed]"
            >
              Abrir playlist en YouTube
            </a>
          )}
          {isHiddenItem && (
            <p className="mt-4 rounded-2xl bg-[#f3ecd9]/80 px-4 py-3 text-sm font-semibold text-[#101a36]">
              Contenido oculto hasta que el vídeo esté disponible.
            </p>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}

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
    video: "https://youtu.be/8t3hOwGvOrM",
  },
  {
    title: "Mejor logo",
    group: "Productora Conax Films",
    award: "Mejor logo",
    description: "Proyecto reconocido por su planificación, puesta en escena y mirada audiovisual.",
    image: "/i-edicion/mejor-logo.jpg",
    video: "https://youtu.be/8t3hOwGvOrM",
  },
  {
    title: "Mejor guión",
    group: "Productora Fries Films por EspejO",
    award: "Mejor guión",
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
    //video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Mejor presupuesto",
    group: "Venganza",
    award: "Mejor presupuesto",
    description: "Corto premiado por su gestión de recursos, creatividad y eficiencia en la producción.",
    image: "/i-edicion/mejor-presupuesto.jpg",
    video: "https://youtu.be/9vXlCFxzjU4",
  },

  {
    title: "Mejor cartel",
    group: "Un sueño terrorifico",
    award: "Mejor cartel",
    description: "Corto premiado por su diseño gráfico, creatividad y capacidad de transmitir la esencia del proyecto.",
    image: "/i-edicion/mejor-cartel.jpg",
   // video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },

  {
    title: "Mejor BSO",
    group: "El precio de la victoria",
    award: "Mejor BSO",
    description: "Corto premiado por su banda sonora original, composición musical y capacidad para potenciar la narrativa audiovisual.",
    image: "/i-edicion/mejor-bso.jpg",
  //  video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
/*
  {
    title: "Premio formato arriesgado",
    group: "Equipo formato arriesgado",
    award: "Formato arriesgado",
    description: "Corto elegido por su propuesta innovadora, originalidad y valentía para explorar nuevas formas narrativas o estéticas.",
    image: "/i-edicion/premio-formato-arriesgado.jpg",
    video: "https://player.vimeo.com/video/76979871",
  },
  */
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

const filmIndustryJury = [
  {
    name: "Samantha Hudson",
    role: "Artista, cantante, actriz y creadora de contenido",
    image: "/jurado/samantha-hudson.jpg",
    imagePosition: "center 18%",
    bio: [
      {
        text: "Artista, cantante, actriz y creadora de contenido vinculada a la performance, la comunicación audiovisual, cultura pop y el activismo.",
        highlight: true,
      },
      " Ha desarrollado la mayor parte de su trayectoria profesional a nivel nacional, impulsando proyectos cinematográficos, televisivos y musicales para plataformas de streaming, productoras y grandes marcas como ",
      { text: "Netflix, RTVE, Podimo o Spotify", highlight: true },
      ", trabajando desde la sátira, el activismo LGBTIQ+ y la deconstrucción de los códigos de la cultura de masas.",
      " Su trayectoria conecta contracultura, entretenimiento masivo y transformación social, explorando el poder del medio audiovisual y el shock value como herramientas de agitación cultural y visibilidad.",
    ],
  },
  {
    name: "Beatriz Molinero",
    role: "Educadora social, arte dramático y pedagogía teatral",
    image: "/jurado/beatriz-molinero.jpeg",
    imagePosition: "center 18%",
    bio: [
      { text: "Educadora social con formación en arte dramático, pedagogía teatral, cine e interpretación.", highlight: true },
      " Ha desarrollado la mayor parte de su trayectoria profesional entre Barcelona y Sevilla, impulsando proyectos socioeducativos y de comunicación para entidades sociales, fundaciones y empresas como ",
      { text: "Coca-Cola, IKEA o Fundación La Caixa", highlight: true },
      ", especialmente con jóvenes y colectivos en situación de vulnerabilidad.",
      " Su trayectoria conecta cultura, educación y transformación social, explorando el poder del arte y la comunicación como herramientas de cambio.",
    ],
  },
  {
    name: "César Vicente",
    role: "Actor",
    image: "/jurado/cesar-vicente.jpg",
    imagePosition: "center 28%",
    bio: [
      { text: "César Vicente (Sevilla) es un actor de reconocido prestigio nacional.", highlight: true },
      " Ha sido dirigido por ",
      { text: "Pedro Almodóvar en Dolor y gloria", highlight: true },
      ", nominada al Oscar a la Mejor Película Extranjera y Premio Goya 2020 a la Mejor Película. Su último trabajo ha sido en ",
      { text: "Los tigres, de Alberto Rodríguez", highlight: true },
      ", consiguiendo una nominación para los premios Carmen del Cine Andaluz.",
      " En teatro ha colaborado en Los locos de Valencia, de la compañía El Tiempo, y Woyzeck, de la compañía Teatro Viento Sur; en televisión ha trabajado en series como Franklin, dirigida por Óscar Pedraza, Amar es para siempre, La otra mirada y Hernán Cortés, de Amazon.",
    ],
  },
  {
    name: "Luís Calderón",
    role: "Director, guionista, montador y productor audiovisual",
    image: "/jurado/luis-calderon.png",
    imagePosition: "center 18%",
    bio: [
      {
        text: "Director, guionista, montador y productor audiovisual sevillano con formación y trayectoria especializada en el cine de género y la ficción cinematográfica.",
        highlight: true,
      },
      " Ha desarrollado su carrera cinematográfica impulsando proyectos desde su productora, ",
      { text: "La Barbería Films", highlight: true },
      ", para festivales y salas comerciales, destacando la escritura y dirección de su largometraje de terror psicológico y slasher ",
      { text: "La casa en el árbol", highlight: true },
      ", una ópera prima seleccionada en el Festival de Cine Europeo de Sevilla que reúne a figuras diversas de la cultura pop y la interpretación.",
    ],
  },
  {
    name: "Lola Buzón",
    role: "Actriz",
    image: "/jurado/lola-buzon.jpg",
    imagePosition: "center 18%",
    bio: [
      {
        text: "Actriz andaluza con formación en arte dramático e interpretación cinematográfica, con una trayectoria emergente en el ámbito audiovisual y teatral.",
        highlight: true,
      },
      " Ha desarrollado sus principales proyectos desde Sevilla y Madrid, formándose en escuelas de referencia como la ESAD de Sevilla o Work in Progress y destacando en la gran pantalla por su papel de ",
      { text: "Paca en Te estoy amando locamente", highlight: true },
      ", largometraje ganador de un premio Goya y trabajo de gran repercusión con el que obtuvo la candidatura a los Premios Goya como Mejor Actriz de Reparto.",
    ],
  },
  {
    name: "David Díaz",
    role: "Locutor, DJ, técnico de sonido e iluminación",
    image: "/jurado/david-diaz.png",
    imagePosition: "center 18%",
    bio: [
      {
        text: "Nacido en Marchena, durante más de 30 años ha llevado las riendas técnicas de Cadena Dial Europa, en Arahal.",
        highlight: true,
      },
      " Esta tarea la ha compatibilizado con todo tipo de ocupaciones relacionadas con el mundo de los eventos, medios de comunicación y espectáculos: organizador de eventos, locutor, DJ, manager, técnico de sonido e iluminación. Actualmente trabaja en 101TV.",
      " David es un melómano y cinéfilo empedernido, que disfruta y conoce tanto la historia musical y cinematográfica como las últimas novedades en ambos sectores.",
    ],
  },
];

const graphicJury = [
  {
    name: "Beatriz Pavón",
    role: "Diseñadora gráfica y artista visual",
    image: "/jurado/beatriz-pavon.png",
    imagePosition: "center 28%",
    bio: [
      { text: "Diseñadora gráfica y artista visual.", highlight: true },
      " Ha desarrollado su carrera, además de en proyectos gráficos, en proyectos de arquitectura, diseño colaborativo, social y cultural. Ha trabajado en proyectos de branding como ",
      { text: "la Marca Ciudad Sevilla o la Marca Ciudad Huelva", highlight: true },
      ". Su obra ha sido expuesta en ciudades como Madrid, Barcelona, Valencia o Bélgica. En cine, ha creado ",
      { text: "el cartel de la película Elio", highlight: true },
      ".",
    ],
  },
  {
    name: "José Pedraza",
    role: "Jurado gráfico",
    image: "/jurado/jose-pedraza.png",
    imagePosition: "center 16%",
    bio: [
      {
        text: "Profesor de Diseño de Interiores en la Escuela de Arte y Superior de Diseño de Jerez, con formación como Arquitecto y experiencia como artista plástico.",
        highlight: true,
      },
      " Desde sus labores en el ámbito de la arquitectura, siempre ha trabajado en proyectos y estudios multidisciplinares dando cabida a la artesanía, el arte y la reflexión sobre la sociedad a todos los niveles. En el ámbito educativo, su docencia se centra en distintos ámbitos, desde el entrenamiento del alumnado en torno al lenguaje visual, el diseño de espacios comerciales y la impartición de Diseño en bachillerato.",
      " Actualmente gestiona una investigación en torno a la artesanía como herramienta de cohesión social y regeneración de las relaciones humanas.",
    ],
  },
  {
    name: "Emilia Jiménez",
    role: "Dirección de arte y vestuario",
    image: "/jurado/emilia-jimenez.png",
    imagePosition: "center 22%",
    bio: [
      {
        text: "Emilia Jiménez (Vejer de la Frontera, Cádiz, 1996) es graduada en Bellas Artes y Máster en Artes del Espectáculo Vivo por la Universidad de Sevilla.",
        highlight: true,
      },
      " Ha trabajado en el ámbito de la ",
      { text: "dirección de arte y vestuario", highlight: true },
      " tanto en el mundo de la moda como en el del cine.",
      " Su trabajo se ha desarrollado en múltiples proyectos, comenzando como directora de vestuario en ",
      { text: "Cuando las cigarras callen", highlight: true },
      ", corto de Bea Hohenlaiter, o Casa típica, de Jesús Pascual y Antonio Bonilla. Otros trabajos han sido Lava, de Carmen Jiménez, como ayudante de vestuario, y Pepe, el mudo, spot para Cruzcampo - Carne al Corte, como directora de vestuario.",
    ],
  },
];

const filmIndustryAwards = [
  { name: "Mejor cortometraje", icon: Trophy },
  { name: "Mejor interpretación protagonista", icon: UserRound },
  { name: "Mejor interpretación de reparto", icon: UsersRound },
  { name: "Mejor formato arriesgado", icon: Sparkles },
];

const graphicJuryAwards = [
  { name: "Mejor cartel", icon: Image },
  { name: "Mejor diseño de personajes y vestuario", icon: Shirt },
  { name: "Mejor logo de productora", icon: Palette },
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
  const [selectedCategory, setSelectedCategory] = useState(nominationCategories[0].title);
  const activeCategory = nominationCategories.find((category) => category.title === selectedCategory) ?? nominationCategories[0];
  const totalCandidates = nominationCategories.reduce((total, category) => total + category.candidates, 0);
  const totalNominations = nominationCategories.reduce((total, category) => total + category.nominations, 0);
  const ActiveIcon = activeCategory.icon;
  const activeNominees = activeCategory.nominees ?? [];

  return (
    <section id="candidaturas" className="relative overflow-hidden bg-[#101a36] px-4 py-20 text-[#fbf7ed] md:px-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d5a449]/70 to-transparent" />
      <div className="absolute -right-24 top-20 h-72 w-72 rounded-full border border-[#d5a449]/20" />
      <div className="absolute -left-24 bottom-24 h-64 w-64 rounded-full border border-[#fbf7ed]/10" />
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto mb-12 max-w-4xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#d5a449]">Selección oficial 2026</p>
          <h2 className="text-4xl font-light uppercase tracking-[0.12em] md:text-6xl">Candidaturas</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#fbf7ed]/72 md:text-lg">
            Presentación de las candidaturas por categoría, con el paso de candidaturas a nominaciones y todos los trabajos seleccionados por orden alfabético.
          </p>
        </motion.div>

        <div className="mb-8 grid gap-4 md:grid-cols-3">
          {[
            { label: "Categorías", value: nominationCategories.length },
            { label: "Candidaturas", value: totalCandidates },
            { label: "Nominaciones", value: totalNominations },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              className="border border-[#fbf7ed]/10 bg-[#fbf7ed]/[0.06] p-6 text-center shadow-xl shadow-black/10"
            >
              <p className="font-display text-5xl text-[#d5a449] md:text-6xl">{stat.value}</p>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.28em] text-[#fbf7ed]/70">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-7 lg:grid-cols-[0.64fr_1.36fr]">
          <motion.aside
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="border border-[#fbf7ed]/10 bg-[#fbf7ed]/[0.055] p-4 shadow-2xl shadow-black/20 md:p-5"
          >
            <div className="mb-4 flex items-center justify-between gap-4 border-b border-[#fbf7ed]/10 px-2 pb-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d5a449]">Categorías</p>
                <p className="mt-1 text-sm text-[#fbf7ed]/60">Elige una para ver el detalle</p>
              </div>
              <Award className="h-8 w-8 text-[#d5a449]" />
            </div>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
              {nominationCategories.map((category) => {
                const CategoryIcon = category.icon;
                const isActive = category.title === activeCategory.title;
                return (
                  <button
                    key={category.title}
                    type="button"
                    onClick={() => setSelectedCategory(category.title)}
                    className={`group flex min-h-16 items-center justify-between gap-4 border px-4 py-3 text-left transition ${
                      isActive
                        ? "border-[#d5a449] bg-[#d5a449] text-[#101a36] shadow-lg shadow-[#d5a449]/15"
                        : "border-[#fbf7ed]/10 bg-[#101a36]/40 text-[#fbf7ed] hover:border-[#d5a449]/70 hover:bg-[#fbf7ed]/10"
                    }`}
                  >
                    <span className="flex min-w-0 items-center gap-3">
                      <span className={`flex h-10 w-10 shrink-0 items-center justify-center border ${isActive ? "border-[#101a36]/15 bg-[#101a36]/10" : "border-[#fbf7ed]/10 bg-[#fbf7ed]/5"}`}>
                        <CategoryIcon className="h-5 w-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-bold uppercase leading-tight tracking-[0.08em]">{category.shortTitle}</span>
                        <span className={`mt-1 block text-xs font-semibold ${isActive ? "text-[#101a36]/65" : "text-[#fbf7ed]/50"}`}>
                          {category.candidates} candidaturas · {category.nominations} nominaciones
                        </span>
                      </span>
                    </span>
                    <ChevronRight className={`h-5 w-5 shrink-0 transition ${isActive ? "translate-x-1 text-[#101a36]" : "text-[#d5a449] group-hover:translate-x-1"}`} />
                  </button>
                );
              })}
            </div>
          </motion.aside>

          <motion.article
            key={activeCategory.title}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.45 }}
            className="relative overflow-hidden border border-[#fbf7ed]/10 bg-[#fbf7ed] text-[#101a36] shadow-2xl shadow-black/20"
          >
            <div className="grid gap-0">
              <div>
                <div className="relative border-b border-[#101a36]/10 bg-[#fbf7ed] p-6 md:p-8">
                  <div className="absolute right-6 top-6 hidden h-20 w-20 items-center justify-center text-[#d5a449]/20 md:flex">
                    <Star className="h-20 w-20 fill-current" />
                  </div>
                  <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
                    <div className="max-w-2xl">
                      <div className="mb-5 inline-flex max-w-full items-center gap-3 bg-[#101a36] px-5 py-3 text-[#fbf7ed]">
                        <Star className="h-5 w-5 fill-[#d5a449] text-[#d5a449]" />
                        <span className="text-sm font-black uppercase tracking-[0.22em]">Candidaturas</span>
                      </div>
                      <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#b56b24]">Mejor</p>
                      <h3 className="mt-2 max-w-full break-words text-3xl font-light uppercase leading-tight tracking-[0.06em] text-[#101a36] [overflow-wrap:anywhere] md:text-5xl">
                        {activeCategory.title.replace(/^Mejor\s+/i, "")}
                      </h3>
                    </div>
                    <div className="grid max-w-sm grid-cols-[1fr_auto_1fr] items-center gap-3 border border-[#101a36]/15 bg-white/60 p-4 text-center">
                      <div>
                        <p className="font-display text-5xl text-[#101a36]">{activeCategory.candidates}</p>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#101a36]/55">Candidaturas</p>
                      </div>
                      <div className="flex flex-col items-center gap-1 text-[#d5a449]">
                        <span className="h-10 w-px bg-[#d5a449]/45" />
                        <ChevronRight className="h-5 w-5 rotate-90" />
                        <span className="h-10 w-px bg-[#d5a449]/45" />
                      </div>
                      <div>
                        <p className="font-display text-5xl text-[#101a36]">{activeCategory.nominations}</p>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#101a36]/55">Nominaciones</p>
                      </div>
                    </div>
                  </div>
                </div>

                {activeNominees.length > 0 && (
                  <div className="border-b border-[#101a36]/10 bg-[#101a36] p-5 text-[#fbf7ed] md:p-8">
                    <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d5a449]">Nominaciones oficiales</p>
                        <h4 className="mt-1 text-2xl font-light uppercase tracking-[0.08em] text-[#fbf7ed]">Finalistas</h4>
                      </div>
                      <span className="w-fit border border-[#d5a449]/45 px-4 py-2 text-sm font-black text-[#d5a449]">
                        {activeNominees.length} nominadas
                      </span>
                    </div>
                    <div className="grid gap-3 md:grid-cols-2">
                      {activeNominees.map((entry, index) => (
                        <div key={`${activeCategory.title}-nominee-${entry.title}-${index}`} className="border border-[#fbf7ed]/10 bg-[#fbf7ed]/[0.06] p-4">
                          <div className="flex gap-3">
                            <Star className="mt-1 h-5 w-5 shrink-0 fill-[#d5a449] text-[#d5a449]" />
                            <div className="min-w-0">
                              <p className="break-words text-lg font-black uppercase leading-tight tracking-normal text-[#fbf7ed] [overflow-wrap:anywhere]">
                                {entry.title}
                                {entry.role && <span className="font-light normal-case text-[#fbf7ed]/82"> por {entry.role}</span>}
                              </p>
                              {entry.work ? (
                                <p className="mt-1 break-words text-sm leading-snug text-[#fbf7ed]/68 [overflow-wrap:anywhere]">
                                  en <span className="font-semibold uppercase italic text-[#d5a449]">{entry.work}</span>, de {entry.group} - {entry.course}
                                </p>
                              ) : (
                                <p className="mt-1 break-words text-sm leading-snug text-[#fbf7ed]/68 [overflow-wrap:anywhere]">
                                  {entry.group && `${entry.group} - `}
                                  {entry.course}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="grid gap-3 p-5 md:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#b56b24]">Todas las candidaturas</p>
                  {activeCategory.entries.map((entry, index) => {
                    const titleLength = entry.title.length + (entry.role?.length ?? 0);
                    const titleSize = titleLength > 58 ? "text-lg md:text-xl" : "text-xl md:text-[1.65rem]";

                    return (
                      <div
                        key={`${activeCategory.title}-${entry.title}-${index}`}
                        className="grid grid-cols-[1.7rem_minmax(0,1fr)] gap-3 border-b border-[#101a36]/10 pb-4 last:border-b-0 last:pb-0 md:grid-cols-[2.1rem_minmax(0,1fr)]"
                      >
                        <div className="pt-1 text-[#263f97]">
                          <Star className="h-5 w-5 fill-current" />
                        </div>
                        <div className="min-w-0">
                          <p className={`${titleSize} max-w-full whitespace-normal break-words font-black uppercase leading-tight tracking-normal text-[#263f97] [overflow-wrap:anywhere]`}>
                            {entry.title}
                            {entry.role && <span className="font-light normal-case tracking-normal text-[#263f97]/85"> por {entry.role}</span>}
                          </p>
                          {entry.work ? (
                            <p className="mt-1 max-w-full break-words text-base leading-snug text-[#263f97]/80 [overflow-wrap:anywhere] md:text-lg">
                              en <span className="font-semibold uppercase italic">{entry.work}</span>, de {entry.group} - {entry.course}
                            </p>
                          ) : (
                            <p className="mt-1 max-w-full break-words text-base leading-snug text-[#263f97]/75 [overflow-wrap:anywhere] md:text-lg">
                              {entry.group && `${entry.group} - `}
                              {entry.course}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="absolute bottom-5 right-5 hidden text-[#101a36]/5 md:block">
              <ActiveIcon className="h-32 w-32" />
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

function JuryMemberCard({ member, index }) {
  const initials = member.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
  const bioParts = Array.isArray(member.bio) ? member.bio : [member.bio];

  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay: index * 0.06 }}
      className="group overflow-hidden rounded-[2rem] border border-[#101a36]/10 bg-white/65 shadow-xl shadow-[#101a36]/10"
    >
      <div className="relative h-96 overflow-hidden bg-[#101a36] md:h-[28rem]">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            style={{ objectPosition: member.imagePosition || "center 22%" }}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#101a36] to-[#1b294e] text-6xl font-light tracking-[0.12em] text-[#d5a449]">
            {initials}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#101a36]/90 via-[#101a36]/10 to-transparent" />
        <div className="absolute bottom-5 left-5 right-5">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d5a449]">{member.role}</p>
          <h3 className="mt-2 text-3xl font-light uppercase tracking-[0.1em] text-[#fbf7ed]">{member.name}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="leading-7 text-[#1b294e]/75">
          {bioParts.map((part, partIndex) =>
            typeof part === "string" ? (
              <span key={`${member.name}-bio-${partIndex}`}>{part}</span>
            ) : (
              <strong key={`${member.name}-bio-${partIndex}`} className="font-semibold text-[#101a36]">
                {part.text}
              </strong>
            )
          )}
        </p>
      </div>
    </motion.article>
  );
}

function JuryAwardsPanel({ title, awards }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mb-9 overflow-hidden rounded-[2rem] border border-[#101a36]/10 bg-[#101a36] shadow-2xl shadow-[#101a36]/15"
    >
      <div className="grid gap-0 lg:grid-cols-[0.38fr_1fr]">
        <div className="flex min-h-48 flex-col justify-between bg-[#d5a449] p-6 text-[#101a36] md:p-8">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#101a36] text-[#fbf7ed] shadow-lg shadow-[#101a36]/20">
            <Award className="h-7 w-7" />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em]">Entrega de premios</p>
            <h3 className="mt-2 text-3xl font-light uppercase tracking-[0.1em] md:text-4xl">{title}</h3>
          </div>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(13rem,1fr))] gap-4 p-5 md:p-7">
          {awards.map((award) => (
            <div
              key={award.name}
              className="group flex min-h-32 flex-col justify-between rounded-[1.35rem] border border-[#fbf7ed]/10 bg-[#fbf7ed]/8 p-5 text-[#fbf7ed] transition hover:-translate-y-1 hover:border-[#d5a449]/60 hover:bg-[#fbf7ed]/12"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d5a449]"></span>
                <award.icon className="h-5 w-5 text-[#d5a449]" />
              </div>
              <p className="mt-5 text-xl font-light uppercase leading-snug tracking-[0.06em]">{award.name}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function JuryShowcase() {
  return (
    <div className="space-y-16">
      <section>
        <SectionTitle
          eyebrow="Jurado profesional"
          title="Industria del cine"
          text="Referentes de la interpretación, la creación audiovisual, la educación, la cultura pop y el cine de género acompañan la valoración de los cortos de esta edición."
        />
        <JuryAwardsPanel title="Industria del cine" awards={filmIndustryAwards} />
        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {filmIndustryJury.map((member, index) => (
            <JuryMemberCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </section>

      <section>
        <SectionTitle
          eyebrow="Jurado especializado"
          title="Jurado gráfico"
          text="Un bloque dedicado a la valoración de la identidad visual, cartel, diseño, dirección artística y propuestas gráficas de los proyectos."
        />
        <JuryAwardsPanel title="Jurado gráfico" awards={graphicJuryAwards} />
        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {graphicJury.map((member, index) => (
            <JuryMemberCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}

function JuryVotingForm() {
  const [jurorName, setJurorName] = useState("");
  const [jurorEmail, setJurorEmail] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(nominationCategories[0].title);
  const [votes, setVotes] = useState({});

  const activeCategory = nominationCategories.find((category) => category.title === selectedCategory) ?? nominationCategories[0];
  const votingEntries = activeCategory.nominees?.length ? activeCategory.nominees : activeCategory.entries;
  const scoreOptions = [10, 8, 6, 4];

  const getEntryKey = (entry, index) => `${activeCategory.title}-${entry.title}-${entry.work ?? entry.group ?? ""}-${index}`;

  const updateVote = (entryKey, field, value) => {
    setVotes((current) => ({
      ...current,
      [entryKey]: {
        ...(current[entryKey] ?? {}),
        [field]: value,
      },
    }));
  };

  const formatEntry = (entry) => {
    if (entry.work) {
      return `${entry.title}${entry.role ? ` por ${entry.role}` : ""} en ${entry.work}, de ${entry.group} - ${entry.course}`;
    }
    return `${entry.title}${entry.group ? ` - ${entry.group}` : ""} - ${entry.course}`;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = `Votación jurado Premios Europa - ${activeCategory.title}`;
    const body = [
      "Votación del jurado - Premios Europa 2026",
      "",
      `Especialidad/categoría: ${activeCategory.title}`,
      `Nombre del jurado: ${jurorName}`,
      `Email del jurado: ${jurorEmail}`,
      "",
      activeCategory.nominees?.length ? "Valoraciones de nominaciones:" : "Valoraciones:",
      ...votingEntries.flatMap((entry, index) => {
        const entryKey = getEntryKey(entry, index);
        const vote = votes[entryKey] ?? {};
        return [
          "",
          `${index + 1}. ${formatEntry(entry)}`,
          `Nota: ${vote.score || "Sin nota"}`,
          `Comentario positivo: ${vote.comment || "Sin comentario"}`,
        ];
      }),
    ].join("\n");

    window.location.assign(`mailto:abonesl857@ieseuropa.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mt-14 overflow-hidden rounded-[2rem] border border-[#101a36]/10 bg-[#fbf7ed] shadow-2xl shadow-[#101a36]/12"
    >
      <div className="grid gap-0 lg:grid-cols-[0.34fr_1fr]">
        <div className="flex min-h-72 flex-col justify-between bg-[#101a36] p-7 text-[#fbf7ed] md:p-9">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d5a449] text-[#101a36]">
            <ShieldCheck className="h-7 w-7" />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#d5a449]">Zona privada</p>
            <h3 className="mt-3 text-3xl font-light uppercase leading-tight tracking-[0.1em] md:text-4xl">Votación del jurado</h3>
            <p className="mt-4 leading-7 text-[#fbf7ed]/72">
              Valoración por especialidad con nota cerrada y comentario positivo para cada corto.
            </p>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-semibold text-[#101a36]">Nombre del jurado</span>
              <input
                value={jurorName}
                onChange={(event) => setJurorName(event.target.value)}
                required
                className="w-full rounded-2xl border border-[#101a36]/10 bg-white/70 px-4 py-3 text-[#101a36] outline-none transition focus:border-[#b56b24] focus:ring-4 focus:ring-[#d5a449]/20"
                placeholder="Nombre y apellidos"
              />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-semibold text-[#101a36]">Email del jurado</span>
              <input
                type="email"
                value={jurorEmail}
                onChange={(event) => setJurorEmail(event.target.value)}
                className="w-full rounded-2xl border border-[#101a36]/10 bg-white/70 px-4 py-3 text-[#101a36] outline-none transition focus:border-[#b56b24] focus:ring-4 focus:ring-[#d5a449]/20"
                placeholder="correo@ejemplo.com"
              />
            </label>
            <label className="space-y-2 md:col-span-2">
              <span className="text-sm font-semibold text-[#101a36]">Especialidad</span>
              <select
                value={selectedCategory}
                onChange={(event) => setSelectedCategory(event.target.value)}
                className="w-full rounded-2xl border border-[#101a36]/10 bg-white/70 px-4 py-3 text-[#101a36] outline-none transition focus:border-[#b56b24] focus:ring-4 focus:ring-[#d5a449]/20"
              >
                {nominationCategories.map((category) => (
                  <option key={category.title} value={category.title}>
                    {category.title}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="mt-8 space-y-4">
            {votingEntries.map((entry, index) => {
              const entryKey = getEntryKey(entry, index);
              const currentVote = votes[entryKey] ?? {};

              return (
                <div key={entryKey} className="rounded-[1.4rem] border border-[#101a36]/10 bg-white/65 p-5">
                  <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                    <div className="min-w-0">
                      <p className="break-words text-xl font-black uppercase leading-tight tracking-normal text-[#263f97] [overflow-wrap:anywhere]">
                        {entry.title}
                        {entry.role && <span className="font-light normal-case text-[#263f97]/85"> por {entry.role}</span>}
                      </p>
                      <p className="mt-1 break-words text-sm font-semibold uppercase tracking-[0.08em] text-[#101a36]/55 [overflow-wrap:anywhere]">
                        {entry.work ? `${entry.work} · ${entry.group} · ${entry.course}` : `${entry.group ? `${entry.group} · ` : ""}${entry.course}`}
                      </p>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      {scoreOptions.map((score) => (
                        <label
                          key={score}
                          className={`flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border text-sm font-black transition ${
                            Number(currentVote.score) === score
                              ? "border-[#101a36] bg-[#101a36] text-[#fbf7ed]"
                              : "border-[#101a36]/15 bg-[#fbf7ed] text-[#101a36] hover:border-[#d5a449]"
                          }`}
                        >
                          <input
                            type="radio"
                            name={`score-${entryKey}`}
                            value={score}
                            checked={Number(currentVote.score) === score}
                            onChange={(event) => updateVote(entryKey, "score", event.target.value)}
                            className="sr-only"
                          />
                          {score}
                        </label>
                      ))}
                    </div>
                  </div>
                  <label className="mt-4 block space-y-2">
                    <span className="text-sm font-semibold text-[#101a36]">Comentario positivo</span>
                    <textarea
                      value={currentVote.comment ?? ""}
                      onChange={(event) => updateVote(entryKey, "comment", event.target.value)}
                      className="min-h-24 w-full rounded-2xl border border-[#101a36]/10 bg-[#fbf7ed] px-4 py-3 text-[#101a36] outline-none transition focus:border-[#b56b24] focus:ring-4 focus:ring-[#d5a449]/20"
                      placeholder="Fortalezas del corto, interpretación, idea, diseño, guion..."
                    />
                  </label>
                </div>
              );
            })}
          </div>

          <Button type="submit" className="mt-7 w-full rounded-full bg-[#101a36] py-6 text-base font-semibold text-[#fbf7ed] hover:bg-[#1b294e] md:w-auto md:px-8">
            <Mail className="mr-2 h-5 w-5" />
            Enviar votación
          </Button>
        </div>
      </div>
    </motion.form>
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
          eyebrow="II Edición"
          title="Jurado Premios Europa"
          text="El jurado combina miradas profesionales del cine, la interpretación, la comunicación, el diseño y la cultura visual para acompañar la valoración de los proyectos del alumnado."
        />

        <JuryShowcase />

        <div className="mt-20">
          <SectionTitle
            eyebrow="Zona privada"
            title="Visionado del jurado"
            text="Acceso reservado para revisar los cortos de la II Edición antes de la gala. Visualización de los cortos."
          />
        </div>

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
          <>
            <div className="grid gap-8 xl:grid-cols-2">
              {juryPrivateMaterials.map((item, index) => (
                <JuryMediaCard key={item.title} item={item} index={index} />
              ))}
            </div>
            <JuryVotingForm />
          </>
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
