// ─────────────────────────────────────────────────────────────────────────────
// DATASET DE CATEGORÍAS
// Edita este archivo para actualizar el contenido de cada categoría.
// Cada objeto sigue la misma estructura — no cambies los nombres de las keys.
// ─────────────────────────────────────────────────────────────────────────────

export interface Course {
  title: string;
  instructor: string;
  duration: string; // e.g. "8 horas"
  level: "Básico" | "Intermedio" | "Avanzado";
  tag?: string;     // etiqueta opcional, e.g. "Nuevo", "Popular"
}

export interface Director {
  name: string;
  role: string;     // cargo dentro del programa
  bio: string;      // 2-3 oraciones
  photo: string;    // URL de la foto (puede ser Unsplash u otro)
}

export interface Category {
  slug: string;          // identificador en la URL — no uses espacios ni mayúsculas
  label: string;         // nombre que aparece en la UI
  count: string;         // total de cursos, e.g. "639+"
  description: string;   // párrafo de presentación de la categoría
  subcategories: string[];
  director: Director;
  courses: Course[];
}

// ─────────────────────────────────────────────────────────────────────────────
// DATOS
// ─────────────────────────────────────────────────────────────────────────────

export const categories: Category[] = [
  {
    slug: "diseno-y-creatividad",
    label: "Diseño y Creatividad",
    count: "639+",
    description:
      "Desarrolla tu mirada creativa y domina las herramientas que usan los profesionales del diseño. Desde fundamentos visuales hasta motion graphics y diseño de producto, nuestros programas te preparan para crear experiencias que impactan.",
    subcategories: [
      "UI/UX Design",
      "Graphic Design",
      "Motion Graphics",
      "3D Modeling",
      "Illustration",
      "Typography",
    ],
    director: {
      name: "Andrea Molina",
      role: "Directora de Carrera — Diseño & Creatividad",
      bio:
        "Andrea tiene más de 15 años de experiencia en diseño de producto en empresas como Google y Spotify. Es apasionada por democratizar el acceso a la educación creativa y ha formado a más de 20,000 estudiantes en toda Latinoamérica.",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH-7Qc3waCWnD_FNeiEUSSq_VGgGEws0LcuVOR5-B4ng&s",
    },
    courses: [
      { title: "Fundamentos de UI/UX Design", instructor: "Andrea Molina", duration: "12 horas", level: "Básico", tag: "Popular" },
      { title: "Figma para Diseñadores", instructor: "Carlos Vera", duration: "8 horas", level: "Básico" },
      { title: "Design Systems de cero a cien", instructor: "Lucía Torres", duration: "10 horas", level: "Intermedio", tag: "Nuevo" },
      { title: "Motion Graphics con After Effects", instructor: "Diego Restrepo", duration: "15 horas", level: "Intermedio" },
      { title: "Ilustración Digital con Procreate", instructor: "Valeria Ríos", duration: "6 horas", level: "Básico" },
      { title: "3D Product Design con Blender", instructor: "Mateo Gómez", duration: "20 horas", level: "Avanzado" },
    ],
  },

  {
    slug: "tech-y-programacion",
    label: "Tech & Programming",
    count: "261+",
    description:
      "Aprende a programar desde cero o lleva tus habilidades técnicas al siguiente nivel. Nuestros programas cubren desde desarrollo web y mobile hasta inteligencia artificial, siempre con proyectos prácticos y mentores de la industria.",
    subcategories: [
      "Web Development",
      "Mobile Apps",
      "Data Science",
      "Machine Learning",
      "DevOps",
      "Cybersecurity",
    ],
    director: {
      name: "Sebastián Quiroga",
      role: "Director de Carrera — Tech & Programación",
      bio:
        "Sebastián es ingeniero de software con experiencia en Meta y Mercado Libre. Es autor de tres libros sobre arquitectura de software y colabora con universidades en Buenos Aires y Ciudad de México para modernizar sus currículums tecnológicos.",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    },
    courses: [
      { title: "JavaScript Moderno (ES2024)", instructor: "Sebastián Quiroga", duration: "18 horas", level: "Básico", tag: "Popular" },
      { title: "React & Next.js desde cero", instructor: "Paula Jiménez", duration: "22 horas", level: "Intermedio" },
      { title: "Python para Data Science", instructor: "Andrés Salcedo", duration: "16 horas", level: "Básico", tag: "Nuevo" },
      { title: "Machine Learning con TensorFlow", instructor: "Isabela Nunes", duration: "25 horas", level: "Avanzado" },
      { title: "DevOps & CI/CD con GitHub Actions", instructor: "Omar Pérez", duration: "12 horas", level: "Intermedio" },
      { title: "Ciberseguridad Ofensiva y Defensiva", instructor: "Natalia Cruz", duration: "20 horas", level: "Avanzado" },
    ],
  },

  {
    slug: "business-y-marketing",
    label: "Business & Marketing",
    count: "1,529+",
    description:
      "Domina las estrategias de negocio y marketing que impulsan a las empresas más exitosas del mundo. Desde emprendimiento y finanzas hasta growth hacking y ventas, aquí encontrarás todo lo que necesitas para crecer profesionalmente.",
    subcategories: [
      "Digital Marketing",
      "SEO",
      "Social Media",
      "Entrepreneurship",
      "Finance",
      "Sales",
    ],
    director: {
      name: "Camila Herrera",
      role: "Directora de Carrera — Business & Marketing",
      bio:
        "Camila es MBA por IESE Business School y ex-VP de Marketing en una unicornio latinoamericana. Ha asesorado a más de 50 startups y es conferencista habitual en eventos como Forbes Mujeres Poderosas y Cannes Lions.",
      photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    },
    courses: [
      { title: "Marketing Digital de Alto Impacto", instructor: "Camila Herrera", duration: "14 horas", level: "Básico", tag: "Popular" },
      { title: "SEO Técnico y de Contenidos", instructor: "Felipe Morales", duration: "10 horas", level: "Intermedio" },
      { title: "Growth Hacking para Startups", instructor: "Renata Alves", duration: "8 horas", level: "Avanzado", tag: "Nuevo" },
      { title: "Finanzas Personales y Empresariales", instructor: "Jorge Medina", duration: "12 horas", level: "Básico" },
      { title: "Ventas Consultivas B2B", instructor: "Diana Ospina", duration: "9 horas", level: "Intermedio" },
      { title: "Emprendimiento: del 0 al MVP", instructor: "Tomás Vidal", duration: "16 horas", level: "Básico" },
    ],
  },

  {
    slug: "fotografia-y-artes-visuales",
    label: "Photography & Visual Arts",
    count: "975+",
    description:
      "Captura el mundo con una mirada única. Nuestros programas de fotografía y artes visuales te enseñan técnica, estética y narrativa visual, desde la fotografía de retrato hasta la edición profesional y el cine.",
    subcategories: [
      "Photography",
      "Video Editing",
      "Color Grading",
      "Documentary",
      "Portrait",
      "Product Photography",
    ],
    director: {
      name: "Rafael Montoya",
      role: "Director de Carrera — Fotografía & Artes Visuales",
      bio:
        "Rafael es fotógrafo premiado por National Geographic y director de fotografía con créditos en producciones de Netflix y HBO Latinoamérica. Desde 2018 dirige talleres intensivos en toda la región.",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    },
    courses: [
      { title: "Fotografía de Retrato Profesional", instructor: "Rafael Montoya", duration: "10 horas", level: "Básico", tag: "Popular" },
      { title: "Edición en Lightroom & Photoshop", instructor: "Sofía Ramírez", duration: "8 horas", level: "Básico" },
      { title: "Color Grading con DaVinci Resolve", instructor: "Emilio Castro", duration: "12 horas", level: "Intermedio", tag: "Nuevo" },
      { title: "Fotografía de Producto para e-Commerce", instructor: "Marcela Fuentes", duration: "6 horas", level: "Básico" },
      { title: "Cine Documental: Narrativa y Técnica", instructor: "Paulo Salave", duration: "18 horas", level: "Avanzado" },
      { title: "Video para Redes Sociales", instructor: "Juliana Bravo", duration: "7 horas", level: "Básico" },
    ],
  },

  {
    slug: "desarrollo-personal",
    label: "Personal Development",
    count: "820+",
    description:
      "Invierte en ti mismo. Nuestros programas de desarrollo personal te dan las herramientas para ser más productivo, comunicarte con confianza, liderar equipos y alcanzar tus metas con claridad y propósito.",
    subcategories: [
      "Productivity",
      "Leadership",
      "Communication",
      "Mindfulness",
      "Public Speaking",
      "Time Management",
    ],
    director: {
      name: "Valentina Soto",
      role: "Directora de Carrera — Desarrollo Personal",
      bio:
        "Valentina es psicóloga organizacional, coach ejecutiva certificada por ICF y autora del bestseller 'Lidera desde adentro'. Ha acompañado procesos de transformación en más de 100 organizaciones en 12 países.",
      photo: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop&crop=face",
    },
    courses: [
      { title: "Productividad Real: método GTD", instructor: "Valentina Soto", duration: "5 horas", level: "Básico", tag: "Popular" },
      { title: "Liderazgo Transformacional", instructor: "Gonzalo Paredes", duration: "9 horas", level: "Intermedio" },
      { title: "Oratoria y Hablar en Público", instructor: "Sandra Leal", duration: "7 horas", level: "Básico", tag: "Nuevo" },
      { title: "Mindfulness en el Trabajo", instructor: "Alejandro Ruiz", duration: "4 horas", level: "Básico" },
      { title: "Gestión del Tiempo con IA", instructor: "Valentina Soto", duration: "6 horas", level: "Intermedio" },
      { title: "Comunicación No Violenta", instructor: "Paola Méndez", duration: "5 horas", level: "Básico" },
    ],
  },

  {
    slug: "musica-y-audio",
    label: "Music & Audio",
    count: "412+",
    description:
      "Del silencio al sonido: aprende producción musical, diseño de audio y todo lo que necesitas para crear música profesional desde tu estudio en casa o lanzar tu propio podcast.",
    subcategories: [
      "Music Production",
      "Sound Design",
      "Mixing & Mastering",
      "Songwriting",
      "DJing",
      "Podcast",
    ],
    director: {
      name: "Nicolás Arango",
      role: "Director de Carrera — Música & Audio",
      bio:
        "Nicolás es productor musical con más de 20 años de carrera, créditos en álbumes platino y fundador del estudio Bajo Tierra en Medellín. Ha colaborado con artistas como J Balvin, Karol G y Bomba Estéreo.",
      photo: "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=400&h=400&fit=crop&crop=face",
    },
    courses: [
      { title: "Producción Musical con Ableton Live", instructor: "Nicolás Arango", duration: "20 horas", level: "Básico", tag: "Popular" },
      { title: "Mixing & Mastering Profesional", instructor: "Cristian Varela", duration: "14 horas", level: "Avanzado" },
      { title: "Diseño de Sonido para Video y Juegos", instructor: "Laura Peña", duration: "12 horas", level: "Intermedio", tag: "Nuevo" },
      { title: "Crea tu Podcast desde Cero", instructor: "Marcelo Ibáñez", duration: "6 horas", level: "Básico" },
      { title: "DJ: técnica y performance", instructor: "Tatiana Vega", duration: "10 horas", level: "Básico" },
      { title: "Composición y Songwriting", instructor: "Andrés Cepeda Jr.", duration: "8 horas", level: "Intermedio" },
    ],
  },

  {
    slug: "salud-y-bienestar",
    label: "Health & Wellness",
    count: "340+",
    description:
      "Tu salud es tu mayor activo. Nuestros programas combinan ciencia, práctica y hábitos sostenibles para que alcances tu mejor versión física y mental, con la guía de expertos certificados.",
    subcategories: [
      "Fitness",
      "Nutrition",
      "Yoga",
      "Mental Health",
      "Meditation",
      "Sports",
    ],
    director: {
      name: "Daniela Ríos",
      role: "Directora de Carrera — Salud & Bienestar",
      bio:
        "Daniela es médica deportóloga, especialista en nutrición funcional y entrenadora de yoga certificada en India. Colabora con la selección nacional colombiana de atletismo y es columnista de salud en El País.",
      photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
    },
    courses: [
      { title: "Fitness Funcional para Principiantes", instructor: "Daniela Ríos", duration: "8 horas", level: "Básico", tag: "Popular" },
      { title: "Nutrición Basada en Evidencia", instructor: "Carlos Mendoza", duration: "10 horas", level: "Básico" },
      { title: "Yoga: del Principiante al Intermedio", instructor: "Priya Sharma", duration: "12 horas", level: "Básico", tag: "Nuevo" },
      { title: "Salud Mental en la Era Digital", instructor: "Beatriz Lagos", duration: "6 horas", level: "Básico" },
      { title: "Meditación y Neurociencia", instructor: "Raúl Espinoza", duration: "5 horas", level: "Básico" },
      { title: "Entrenamiento de Fuerza Avanzado", instructor: "Ernesto Campos", duration: "16 horas", level: "Avanzado" },
    ],
  },

  {
    slug: "idiomas-y-comunicacion",
    label: "Language & Communication",
    count: "198+",
    description:
      "Abre puertas en todo el mundo dominando un nuevo idioma o perfeccionando tu escritura. Nuestros programas usan metodologías comunicativas modernas para que aprendas rápido y en contexto real.",
    subcategories: [
      "English",
      "Spanish",
      "Portuguese",
      "French",
      "Writing",
      "Copywriting",
    ],
    director: {
      name: "Sophie Beaumont",
      role: "Directora de Carrera — Idiomas & Comunicación",
      bio:
        "Sophie es lingüista graduada en la Sorbona con maestría en lingüística aplicada de la Universidad de Cambridge. Ha diseñado programas de idiomas para embajadas, multinacionales y más de 30,000 estudiantes independientes.",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    },
    courses: [
      { title: "Inglés de Negocios: nivel B2 a C1", instructor: "Sophie Beaumont", duration: "18 horas", level: "Intermedio", tag: "Popular" },
      { title: "Escritura Creativa en Español", instructor: "Pablo Neruda Jr.", duration: "8 horas", level: "Básico" },
      { title: "Copywriting que Convierte", instructor: "Renata Flores", duration: "7 horas", level: "Intermedio", tag: "Nuevo" },
      { title: "Portugués Brasileño desde Cero", instructor: "Ana Beatriz Costa", duration: "14 horas", level: "Básico" },
      { title: "Francés para Viajeros y Negocios", instructor: "Sophie Beaumont", duration: "12 horas", level: "Básico" },
      { title: "Comunicación Técnica en Inglés", instructor: "James Whitfield", duration: "9 horas", level: "Avanzado" },
    ],
  },
];

// Helper para buscar por slug
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
