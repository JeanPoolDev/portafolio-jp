import { Slider } from "./components/Slider";
import { ArrowUpRigth, Github, Linkedin, Youtu } from "./icons";

const links = [
  { path: '#', name: 'HOME' },
  { path: '#projects', name: 'PROJECTS' },
  { path: '#aboutme', name: 'ABOUT US' },
];

const redes = [
  { path: '#', logo: <Youtu /> },
  { path: '#', logo: <Linkedin /> },
  { path: '#', logo: <Github /> },
]

const projects = [
  { path: 'https://journal-app-drab-zeta.vercel.app/', title: 'Journal App', description: 'Escribe el dia a día en un solo lugar', fondo: '/project1.png' }
]
export function Portafolio() {
  return (
    <div className="mx-10 2xl:mx-20 space-y-16">

      <section className="h-auto">

        <header className="h-[100px] flex justify-between items-center">
          <div className="text-lg font-bold">JP DEV</div>
          <nav className="flex gap-4">
            {
              links.map(link => (
                <a
                  key={link.name}
                  href={link.path}
                  className="font-medium px-6 py-2 border rounded-3xl  hover:bg-[#c8ff00] transition-all">
                  {link.name}
                </a>
              ))
            }
          </nav>
          <div className="flex gap-1">
            {
              redes.map(rede => (
                <a
                  className="p-2 bg-black rounded-full"
                  href={rede.logo}
                  key={rede.logo}>
                  {rede.logo}
                </a>
              ))
            }
          </div>
        </header>

        <div className="h-screen">

          <div className="w-full rounded-2xl h-[60%] mb-4">
            <img
              className="object-cover w-full h-full rounded-2xl"
              src="/home.png"
              alt="fondo"
            />
          </div>

          <div className="w-full h-[40%] flex gap-4" >

            <div className="w-1/3 rounded-2xl p-6 space-y-4 bg-black text-white">
              <div className="flex justify-between">
                <h1 className="text-2xl 2xl:text-4xl font-bold w-[60%]">
                  PROYECTOS DESTACADOS
                </h1>
                <a href="#" className="w-[30%] flex justify-end">
                  <ArrowUpRigth />
                </a>
              </div>
              <p className="text-sm 2xl:text-xl">
                EXPLORA MIS PROYECTOS MÁS DESTACADOS COMO PETICIONES DE API CON REACT O UN E-COMMERCE CON MEDERNO DISEÑO RESPONSIVO Y FUNCIONALIDADES AVANZADAS.
              </p>

              <p className="text-sm 2xl:text-xl">
                CADA PROYECTO REFLEJA MI PASIÓN POR CREAR INTERFACES EFICIENTES
              </p>
            </div>

            <div className="w-1/3 border rounded-2xl p-6 space-y-4">
              <div className="flex justify-between">
                <h1 className="text-2xl 2xl:text-4xl font-bold w-[60%]">
                  STACK TECNOLÓGICO
                </h1>
                <a href="#" className="w-[30%] flex justify-end">
                  <ArrowUpRigth />
                </a>
              </div>
              <p className="text-sm 2xl:text-xl">
                EXPERTO EN REACT, JAVACRIPT, TAILWIND, HTML, CSS Y DISEÑO RESPONSIBO. CREANDO INTERFACES LIMPIAS Y FUNCIONALES.
              </p>
              <div className="flex -space-x-4">

                {
                  [1, 2, 4, 5].map(index => (
                    <div
                      key={index}
                      className="w-15 h-15 2xl:w-25 2xl:h-25 rounded-full bg-black border-white border"></div>
                  ))
                }

              </div>
            </div>

            <div className="w-1/3 border rounded-2xl p-6 flex flex-col justify-between">
              <div className="flex justify-between">
                <h1 className="text-2xl 2xl:text-4xl font-bold w-[60%]">
                  ¿QUIÉN ES JP DEV?
                </h1>
                <a href="#" className="w-[30%] flex justify-end">
                  <ArrowUpRigth />
                </a>
              </div>

              <div className="flex justify-between">
                <h1 className="text-lg 2xl:text-xl font-semibold w-[90%] 2xl:w-[70%]">
                  <b className="text-2xl">{'"'}</b>
                  ¿TIENES CONFIANZA? NO ES CONFIANZA, ES EXPERIENCIA <b className="text-2xl">{'"'}</b>
                </h1>
              </div>
            </div>
          </div>

        </div>



      </section>

      <section className="h-auto space-y-10 w-full" id="projects">

        <div>
          <h1 className="text-4xl font-bold">PROJECTOS</h1>
          <span className="bg-black text-[#C8FF00] text-lg tracking-[.40em] px-[35px]">
            PROJECTS
          </span>
        </div>

        <div className="grid grid-cols-3 grid-rows-2 gap-4">
          {
            projects.map((project) => (
              <div
                className={`bg-cover rounded-2xl h-[300px]`}
                key={project.title}
                style={{ backgroundImage: `url(${project.fondo})` }}>
                <a
                  href={project.path}
                  target="_blank"
                  className="flex flex-col justify-end h-full opacity-0 
                hover:opacity-100 p-6 degradado transition-all ease-in-out">
                  <h1 className="text-[#C8FF00] text-xl font-bold">
                    {project.title}
                  </h1>
                  <p className="text-white font-semibold text-lg">
                    {project.description}
                  </p>
                </a>
              </div>
            ))
          }
        </div>
      </section>

      <section className="h-auto w-full border bg-[url('/about.png')] rounded-2xl p-10 bg-cover" id="aboutme">
        <div className="flex">
          <div className="w-1/2">
            <h1 className="text-4xl text-[#C8FF00] font-bold">PROJECTOS</h1>
            <span className="bg-white text-lg tracking-[.40em] px-[35px]">
              PROJECTS
            </span>

            <div className="text-white">
              <h1 className="text-7xl 2xl:text-8xl my-10">
                Hola soy JP, ¡Encantado de Conocerte!
              </h1>
              <div className="text-2xl 2xl:text-3xl space-y-5">
                <p>
                  Profesional con más de 1 año de experiencia en el diseño y desarrollo de aplicaciones web.
                </p>
                <p>
                  Especializado en diseño de interfaces (UI/UX) y con dominio de tecnologías modernas como JavaScript, React, TypeScript, CSS y otras herramientas del ecosistema frontend.
                </p>
              </div>
            </div>

          </div>

          <Slider />

        </div>
      </section>

      <footer className="h-[150px] flex justify-between items-center">
        <h1 className="text-xl font-semibold tracking-[.30em] border-b-2">
          @ PORTFOLIO WEB | JP
        </h1>
        <div className="flex gap-1">
          {
            redes.map(rede => (
              <a
                className="p-2 bg-black rounded-full"
                href={rede.path}
                key={rede.logo}>
                {rede.logo}
              </a>
            ))
          }
        </div>
      </footer>

    </div>
  )
}