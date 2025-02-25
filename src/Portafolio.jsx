import { ArrowUpRigth, Github, Linkedin, Youtu } from "./icons";

const links = [
 {path: '#', name: 'HOME'},
 {path: '#', name: 'HISTORY'},
 {path: '#', name: 'PROJECTS'},
 {path: '#', name: 'ABOUT US'},
];

const redes = [
 {path: '#',logo: <Youtu />},
 {path: '#',logo: <Linkedin />},
 {path: '#',logo: <Github />},
]

export function Portafolio(){
 return (
  <div className="mx-10">

   <section className="h-screen">

    <header className="h-[100px]  flex justify-between items-center">
     <div className="text-lg font-bold">JP DEV</div>
      <nav className="flex gap-4">
       {
        links.map(link => (
         <a 
          key={link.path}
          href="#" 
          className="px-6 py-2 border rounded-3xl hover:text-white hover:bg-black transition-all">
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
         href={rede.path} 
         key={rede.logo}>
         {rede.logo}
        </a>
       ))
      }
     </div>  
    </header>

    <div className="h-screen grid grid-cols-3 grid-rows-2 gap-4 pb-5">
     <div 
      className="border-[3px] rounded-2xl col-span-3 w-full h-full">
       <img
        className="w-full h-full" 
        src="/fondo.png" 
        alt="fondo" />
      </div>
     
     <div className="bg-[#121212] text-white rounded-2xl row-start-2 p-6 space-y-4">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold w-[60%]">LA ESENCIA DEL BRUTALISMO</h1>
        <a href="#" className="w-[30%] flex justify-end">
         <ArrowUpRigth />
        </a>
      </div>
       <p>
       RAW, UTILITARIAN ARCHITECTURE REVEALS THE TRUE NATURE OF MATERIALS. BOLD, CONCRETE MONOLITHS MERGE WITH
       LANDSCAPES, REFLECTING HONESTY AND FUNCTIONALITY.
       </p>
     </div>

     <div className="border-[3px] rounded-2xl row-start-2 p-6 space-y-4">
      <div className="flex justify-between">
       <h1 className="text-2xl font-bold w-[60%]">LA ESENCIA DEL BRUTALISMO</h1>
       <a href="#" className="w-[30%] flex justify-end">
        <ArrowUpRigth />
       </a>
      </div>
       <p>
       RAW, UTILITARIAN ARCHITECTURE REVEALS THE TRUE NATURE OF MATERIALS. BOLD, CONCRETE MONOLITHS MERGE WITH
       </p>
       <div className="flex -space-x-4">
        
        {
         [1,2,4,5].map(index => (
          <div 
           key={index}
           className="w-18 h-18 rounded-full bg-black border-white border"></div>
         ))
        }
        
       </div>
     </div>

     <div className="border-[3px] rounded-2xl row-start-2 p-6 space-y-4 flex flex-col justify-between">
      <div className="flex justify-between">
         <h1 className="text-2xl font-bold w-[60%]">LA ESENCIA DEL BRUTALISMO</h1>
         <a href="#" className="w-[30%] flex justify-end">
          <ArrowUpRigth />
         </a>
      </div>

      <div className="flex justify-between">
         <h1 className="text-lg font-semibold w-[90%]">
          <b className="text-2xl">"</b> 
          EXPERIENCE THE POWERFUL  
          COMEBACK OF BRUTALIST 
          ARCHITECTURE. <b className="text-2xl">"</b>
         </h1>
      </div>
      
     </div>
      
     </div>

   </section>




  </div> 
 )
}