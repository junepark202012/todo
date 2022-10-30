import { navLink } from "../Navbar";

export function Logo() {
  return (
    <div className="flex flex-shrink-0 items-center">
      <h1 className="font-semibold text-gray-50">TODO</h1>
    </div>
  );
}

export function NavbarItemsDesktop({ links }: { links: navLink[] }) {
  return (
    <div className="hidden sm:ml-6 sm:block">
      <div className="flex space-x-4">
        {links.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={
              (item.current
                ? "bg-gray-900 text-gray-50"
                : "text-gray-300 hover:bg-gray-700 hover:text-gray-50") +
              " rounded-md px-3 py-2 text-sm font-medium"
            }
            aria-current={item.current ? "page" : undefined}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}
