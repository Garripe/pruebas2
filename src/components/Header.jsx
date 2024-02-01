import Navbar from "./NavLink";

export default function Header() {
    return (
        <>
            <header className="bg-slate-300 w-full h-[10rem] flex justify-around items-center py-[1.5rem] px-[2rem] ">
                <img src="https://s2grupo.es/wp-content/uploads/2023/07/S2grupo_logo_ciberseguridad.png" alt="" className="w-[10rem] h-[4rem]" />
                <Navbar />
            </header>
        </>
    )
}

