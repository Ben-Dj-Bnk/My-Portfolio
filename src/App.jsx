import { useEffect, useState } from "react";
import portrait from "./assets/Ben pic.PNG";
import tulivuProject from "./assets/Tulivu project.png";
import "./App.css";

const projects = [
  {
    number: "01",
    title: "Tulivu Website",
    type: "Product design / Frontend",
    description:
      "A thoughtful web experience created to bring the Tulivu brand and its digital story to life.",
    tags: ["React", "TypeScript", "JavaScript", "CSS"],
    accent: "coral",
    href: "https://tulivuwesitets.vercel.app/",
    image: tulivuProject,
  },
  {
    number: "02",
    title: "BANK WAITING QUEUE SYSTEM",
    type: "Creative development",
    description:
      "THis is a simple waiting queue system that helps banks to manage their customers in a more efficient way.",
    tags: ["JavaScript", "DJANGO,PYTHON", "TYPESCRIPT", "CSS"],
    accent: "blue",
  },
  {
    number: "03",
    title: "MY PORTFOLIO WEBSITE",
    type: " Creative development",
    description: "A personal portfolio website to showcase my work and skills.",
    tags: ["React Native", "Tailwind CSS", "JavaScript", "CSS"],
    accent: "gold",
  },
];

const translations = {
  en: {
    navigation: { about: "About", projects: "Projects", contact: "Contact" },
    languageLabel: "Choose language",
    menuButtonLabel: "Toggle navigation",
    openProject: "Open",
    themeLabel: "Toggle color theme",
    lightMode: "Light mode",
    darkMode: "Dark mode",
    heroEyebrow: "Need good services? Contact me ·",
    heroGreeting: "Hello,",
    heroName: "I'M Benjamin MUYISA",
    heroRole: "software engineer.",
    heroIntro:
      "I'm Benjamin MUYISA, a developer and designer focused on frontend development and aspiring to become a full-stack developer. I help turn ambitious ideas into clear, useful, and memorable digital experiences.",
    exploreWork: "Explore my Work",
    letsTalk: "Let's talk",
    basedIn: "Based in RWANDA",
    workingWorldwide: "Working worldwide",
    scroll: "Scroll to explore",
    aboutLabel: "[ 01 — About me ]",
    aboutHeading: (
      <>
        I care about the space
        <br />
        between <span>function</span> and feeling.
      </>
    ),
    aboutBody:
      "Good work should make sense before it makes an impression. I bring together frontend craft, thoughtful design, and a little curiosity to build products people enjoy using.",
    moreAbout: "More about me",
    principleClarity: "Clarity",
    principleCuriosity: "Curiosity",
    principleCraft: "Craft",
    principleCollaboration: "Collaboration",
    projectsLabel: "MY PROJECTS",
    projectsNote: "A few things I've helped bring to life.",
    contactLabel: "[ 03 — Start a conversation ]",
    contactHeading: (
      <>
        Feel free
        <br />
        <em>and contact me </em> on..
      </>
    ),
    contactBody:
      "Whether you have a fully formed brief or just the start of an idea, I'd love to hear about it.",
    phoneLabel: "Call Benjamin",
    footerCredit: "Designed & built with intention",
    backToTop: "Back to top ↑",
    projects: [
      {
        title: "Tulivu Website",
        type: "Product design / Frontend",
        description:
          "A thoughtful web experience created to bring the Tulivu brand and its digital story to life.",
      },
      {
        title: "BANK WAITING QUEUE SYSTEM",
        type: "Creative development",
        description:
          "A simple waiting queue system that helps banks manage their customers more efficiently.",
      },
      {
        title: "MY PORTFOLIO WEBSITE",
        type: "Creative development",
        description: "A personal portfolio website to showcase my work and skills.",
      },
    ],
  },
  fr: {
    navigation: { about: "À propos", projects: "Projets", contact: "Contact" },
    languageLabel: "Choisir la langue",
    menuButtonLabel: "Ouvrir ou fermer la navigation",
    openProject: "Ouvrir",
    themeLabel: "Changer le thème de couleur",
    lightMode: "Mode clair",
    darkMode: "Mode sombre",
    heroEyebrow: "Besoin de services de qualité ? Contactez-moi ·",
    heroGreeting: "Bonjour,",
    heroName: "Je suis Benjamin MUYISA",
    heroRole: "ingénieur logiciel.",
    heroIntro:
      "Je suis Benjamin MUYISA, développeur et designer spécialisé dans le développement frontend, avec l'ambition de devenir développeur full-stack. Je transforme les idées ambitieuses en expériences numériques claires, utiles et mémorables.",
    exploreWork: "Découvrir mes projets",
    letsTalk: "Parlons-en",
    basedIn: "Basé au RWANDA",
    workingWorldwide: "Disponible partout",
    scroll: "Faites défiler pour explorer",
    aboutLabel: "[ 01 — À propos ]",
    aboutHeading: (
      <>
        Je prends soin de l'équilibre
        <br />
        entre <span>fonction</span> et émotion.
      </>
    ),
    aboutBody:
      "Un bon travail doit être compréhensible avant d'impressionner. J'associe savoir-faire frontend, design réfléchi et curiosité pour créer des produits agréables à utiliser.",
    moreAbout: "En savoir plus",
    principleClarity: "Clarté",
    principleCuriosity: "Curiosité",
    principleCraft: "Savoir-faire",
    principleCollaboration: "Collaboration",
    projectsLabel: "MES PROJETS",
    projectsNote: "Quelques projets auxquels j'ai contribué.",
    contactLabel: "[ 03 — Prenons contact ]",
    contactHeading: (
      <>
        N'hésitez pas
        <br />
        <em>à me contacter </em> ici.
      </>
    ),
    contactBody:
      "Que vous ayez un projet bien défini ou simplement une première idée, je serais ravi d'en discuter.",
    phoneLabel: "Appeler Benjamin",
    footerCredit: "Conçu et réalisé avec soin",
    backToTop: "Retour en haut ↑",
    projects: [
      {
        title: "Site web Tulivu",
        type: "Design produit / Frontend",
        description:
          "Une expérience web soignée qui donne vie à la marque Tulivu et à son univers numérique.",
      },
      {
        title: "SYSTÈME DE FILE D'ATTENTE BANCAIRE",
        type: "Développement créatif",
        description:
          "Un système simple de gestion des files d'attente pour aider les banques à mieux accueillir leurs clients.",
      },
      {
        title: "MON SITE PORTFOLIO",
        type: "Développement créatif",
        description: "Un portfolio personnel pour présenter mon travail et mes compétences.",
      },
    ],
  },
  sw: {
    navigation: { about: "Kuhusu", projects: "Miradi", contact: "Mawasiliano" },
    languageLabel: "Chagua lugha",
    menuButtonLabel: "Fungua au funga menyu ya urambazaji",
    openProject: "Fungua",
    themeLabel: "Badilisha mandhari ya rangi",
    lightMode: "Mandhari ya mwanga",
    darkMode: "Mandhari ya giza",
    heroEyebrow: "Unahitaji huduma nzuri? Wasiliana nami ·",
    heroGreeting: "Habari,",
    heroName: "Mimi ni Benjamin MUYISA",
    heroRole: "mhandisi wa programu.",
    heroIntro:
      "Mimi ni Benjamin MUYISA, msanidi programu na mbunifu ninayejikita katika frontend na ninayetaka kuwa msanidi full-stack. Ninabadilisha mawazo makubwa kuwa uzoefu wa kidijitali ulio wazi, wenye manufaa na wa kukumbukwa.",
    exploreWork: "Tazama kazi zangu",
    letsTalk: "Tuongee",
    basedIn: "Ninaishi RWANDA",
    workingWorldwide: "Nafanya kazi duniani kote",
    scroll: "Sogeza ili kuchunguza",
    aboutLabel: "[ 01 — Kunihusu ]",
    aboutHeading: (
      <>
        Ninajali uwiano
        <br />
        kati ya <span>utendaji</span> na hisia.
      </>
    ),
    aboutBody:
      "Kazi nzuri inapaswa kueleweka kabla haijavutia. Ninaunganisha ujuzi wa frontend, ubunifu makini na udadisi ili kujenga bidhaa zinazofurahisha watu kuzitumia.",
    moreAbout: "Zaidi kunihusu",
    principleClarity: "Uwazi",
    principleCuriosity: "Udadisi",
    principleCraft: "Ubora",
    principleCollaboration: "Ushirikiano",
    projectsLabel: "MIRADI YANGU",
    projectsNote: "Baadhi ya miradi niliyosaidia kutimiza.",
    contactLabel: "[ 03 — Tuanze mazungumzo ]",
    contactHeading: (
      <>
        Jisikie huru
        <br />
        <em>kuwasiliana nami </em> hapa.
      </>
    ),
    contactBody:
      "Iwe una maelezo kamili ya mradi au ni wazo la mwanzo tu, ningependa kusikia kutoka kwako.",
    phoneLabel: "Mpigie Benjamin",
    footerCredit: "Imesanifiwa na kujengwa kwa umakini",
    backToTop: "Rudi juu ↑",
    projects: [
      {
        title: "Tovuti ya Tulivu",
        type: "Ubunifu wa bidhaa / Frontend",
        description:
          "Tovuti iliyoundwa kwa umakini ili kuonyesha chapa ya Tulivu na simulizi yake ya kidijitali.",
      },
      {
        title: "MFUMO WA FOLENI YA BENKI",
        type: "Uendelezaji bunifu",
        description:
          "Mfumo rahisi wa foleni unaosaidia benki kuhudumia wateja wao kwa ufanisi zaidi.",
      },
      {
        title: "TOVUTI YANGU YA PORTFOLIO",
        type: "Uendelezaji bunifu",
        description: "Portfolio binafsi ya kuonyesha kazi na ujuzi wangu.",
      },
    ],
  },
  es: {
    navigation: { about: "Acerca de", projects: "Proyectos", contact: "Contacto" },
    languageLabel: "Elegir idioma",
    menuButtonLabel: "Mostrar u ocultar navegación",
    openProject: "Abrir",
    themeLabel: "Cambiar tema de color",
    lightMode: "Modo claro",
    darkMode: "Modo oscuro",
    heroEyebrow: "¿Necesitas buenos servicios? Contáctame ·",
    heroGreeting: "Hola,",
    heroName: "Soy Benjamin MUYISA",
    heroRole: "ingeniero de software.",
    heroIntro:
      "Soy Benjamin MUYISA, desarrollador y diseñador enfocado en el desarrollo frontend, con el objetivo de convertirme en desarrollador full-stack. Transformo ideas ambiciosas en experiencias digitales claras, útiles y memorables.",
    exploreWork: "Explora mi trabajo",
    letsTalk: "Hablemos",
    basedIn: "Resido en RUANDA",
    workingWorldwide: "Trabajo en todo el mundo",
    scroll: "Desplázate para explorar",
    aboutLabel: "[ 01 — Sobre mí ]",
    aboutHeading: (
      <>
        Me importa el equilibrio
        <br />
        entre <span>función</span> y emoción.
      </>
    ),
    aboutBody:
      "Un buen trabajo debe tener sentido antes de impresionar. Combino experiencia en frontend, diseño cuidado y curiosidad para crear productos que la gente disfruta usar.",
    moreAbout: "Más sobre mí",
    principleClarity: "Claridad",
    principleCuriosity: "Curiosidad",
    principleCraft: "Oficio",
    principleCollaboration: "Colaboración",
    projectsLabel: "MIS PROYECTOS",
    projectsNote: "Algunos proyectos que he ayudado a hacer realidad.",
    contactLabel: "[ 03 — Empecemos una conversación ]",
    contactHeading: (
      <>
        No dudes
        <br />
        <em>en contactarme </em> aquí.
      </>
    ),
    contactBody:
      "Tanto si tienes un plan definido como si solo tienes una primera idea, me encantará escucharte.",
    phoneLabel: "Llamar a Benjamin",
    footerCredit: "Diseñado y creado con dedicación",
    backToTop: "Volver arriba ↑",
    projects: [
      {
        title: "Sitio web de Tulivu",
        type: "Diseño de producto / Frontend",
        description:
          "Una experiencia web cuidada que da vida a la marca Tulivu y a su historia digital.",
      },
      {
        title: "SISTEMA DE COLAS BANCARIAS",
        type: "Desarrollo creativo",
        description:
          "Un sistema sencillo de turnos que ayuda a los bancos a atender a sus clientes con más eficiencia.",
      },
      {
        title: "MI PORTAFOLIO WEB",
        type: "Desarrollo creativo",
        description: "Un portafolio personal para mostrar mi trabajo y mis habilidades.",
      },
    ],
  },
};

function App() {
  const [isLight, setIsLight] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const copy = translations[language];
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <div className={isLight ? "site light-theme" : "site"}>
      <header className="site-header">
        <a
          className="brand"
          href="#top"
          onClick={closeMenu}
          aria-label="Ben home"
        >
          <span className="brand-mark">
            B<span>.</span>
          </span>
          <span className="brand-name">BENJAMIN BNK</span>
        </a>
        <button
          className="menu-button"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={copy.menuButtonLabel}
        >
          <span />
          <span />
        </button>
        <nav className={menuOpen ? "nav-links is-open" : "nav-links"}>
          <a href="#about" onClick={closeMenu}>
            {copy.navigation.about}
          </a>
          <a href="#work" onClick={closeMenu}>
            {copy.navigation.projects}
          </a>
          <a href="#contact" onClick={closeMenu}>
            {copy.navigation.contact}
          </a>
          <select
            className="language-select"
            value={language}
            onChange={(event) => setLanguage(event.target.value)}
            aria-label={copy.languageLabel}
          >
            <option value="en">English</option>
            <option value="fr">Français</option>
            <option value="sw">Kiswahili</option>
            <option value="es">Español</option>
          </select>
          <button
            className="theme-toggle"
            type="button"
            onClick={() => setIsLight(!isLight)}
            aria-label={copy.themeLabel}
          >
            {isLight ? copy.darkMode : copy.lightMode}{" "}
            <span className="toggle-dot" />
          </button>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-shell">
          <div className="hero-copy reveal-up">
            <p className="eyebrow">
              <span className="status-dot" /> {copy.heroEyebrow}
            </p>
            <h1>
              {copy.heroGreeting}
              <br />
              <em>{copy.heroName}</em> {copy.heroRole}
            </h1>
            <p className="hero-intro">
              {copy.heroIntro}
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                {copy.exploreWork}
              </a>
              <a className="text-link" href="#contact">
                {copy.letsTalk}
              </a>
            </div>
          </div>
          <div className="hero-portrait reveal-up">
            <div className="portrait-frame">
              <img src={portrait} alt="Benjamin MUYISA " />
            </div>
            <div className="portrait-caption">
              <span>{copy.basedIn}</span>
              <span className="caption-line" />
              <span>{copy.workingWorldwide}</span>
            </div>
          </div>
          <div className="scroll-cue">
            <span className="scroll-line" /> {copy.scroll}
          </div>
        </section>

        <section className="statement section-shell" id="about">
          <p className="section-label">{copy.aboutLabel}</p>
          <div className="statement-grid">
            <h2>{copy.aboutHeading}</h2>
            <div className="statement-body">
              <p>{copy.aboutBody}</p>
              <a className="text-link" href="#contact">
                {copy.moreAbout} <span>↗</span>
              </a>
            </div>
          </div>
          <div className="principles">
            <span>01 / {copy.principleClarity}</span>
            <span>02 / {copy.principleCuriosity}</span>
            <span>03 / {copy.principleCraft}</span>
            <span>04 / {copy.principleCollaboration}</span>
          </div>
        </section>

        <section className="work section-shell" id="work">
          <div className="section-heading">
            <p className="section-label">{copy.projectsLabel}</p>
            <p className="section-note">{copy.projectsNote}</p>
          </div>
          <div className="project-list">
            {projects.map((project) => {
              const Card = project.href ? "a" : "article";
              const localizedProject = copy.projects[Number(project.number) - 1];

              return (
                <Card
                  className={`project-card ${project.accent}`}
                  key={project.number}
                  {...(project.href
                    ? {
                        href: project.href,
                        target: "_blank",
                        rel: "noreferrer",
                        "aria-label": `${copy.openProject} ${localizedProject.title}`,
                      }
                    : {})}
                >
                  <div className="project-meta">
                    <span>{project.number}</span>
                    <span>{localizedProject.type}</span>
                  </div>
                  <div className="project-visual">
                    {project.image ? (
                      <img
                        className="project-image"
                        src={project.image}
                        alt={`${localizedProject.title} preview`}
                      />
                    ) : (
                      <>
                        <div className="visual-orbit" />
                        <div className="visual-window">
                          <span />
                          <span />
                          <span />
                        </div>
                      </>
                    )}
                    <div className="visual-label">{project.number} / 03</div>
                  </div>
                  <div className="project-info">
                    <h3>{localizedProject.title}</h3>
                    <p>{localizedProject.description}</p>
                    <div className="tag-list">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <span className="project-arrow" aria-hidden="true">
                    ↗
                  </span>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="contact section-shell" id="contact">
          <div>
            <p className="section-label">{copy.contactLabel}</p>
            <h2>{copy.contactHeading}</h2>
          </div>
          <div className="contact-side">
            <p>{copy.contactBody}</p>
            <a className="contact-email" href="mailto:benjaminbnk@icloud.com">
              benjaminbnk@icloud.com <span>↗</span>
            </a>
            <a
              className="contact-email"
              href="tel:+250796997406"
              aria-label={copy.phoneLabel}
            >
              📞 +250 796997406 <span>↗</span>
            </a>

            <div className="social-links">
              <a
                href="https://www.instagram.com/benjamin_mbondi/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                title="Instagram"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/6422/6422200.png"
                  alt=""
                />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                title="Facebook"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/15047/15047435.png"
                  alt=""
                />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                title="Twitter"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/12107/12107622.png"
                  alt=""
                />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/14715/14715341.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer section-shell">
        <span>© 2025 Benjamin Bnk</span>
        <span>{copy.footerCredit}</span>
        <a href="#top">{copy.backToTop}</a>
      </footer>
    </div>
  );
}

export default App;
