export default function Navbar() {
    const links = [
        { name: "Home", href: "#" },
        { name: "About", href: "#" },
        { name: "Pricing", href: "#" },
        { name: "Blog", href: "#" },
    ]
    return (
        <nav className="flex w-full justify-end gap-4 items-center">
            {links.map((link, index) => (
                <div key={link.name}  className="flex flex-row items-center gap-4">
                    <a href={link.href} key={link.name} className="text-blue-500">{link.name}</a>
                    {index !== links.length -1 && <hr className="border-l h-4 border-black " />}
                </div>
            ))}
        </nav>
    )

}