import { Disclosure } from "@headlessui/react";
import { HamburgerDisclosureButton } from "./navbar/HamburgerDisclosureButton";
import { Logo, NavbarItemsDesktop } from "./navbar/Logo";
import { Profile } from "./navbar/Profile";
import { NavLinkDisclosureButton } from "./navbar/NavLinkDisclosureButton";

export type navLink = {
  name: string;
  href: string;
  current: boolean;
};

const navLinks: navLink[] = [
  { name: "Add", href: "#", current: true },
  { name: "List", href: "#", current: false },
];

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <HamburgerDisclosureButton open={open} />
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <Logo />
                <NavbarItemsDesktop links={navLinks} />
              </div>
              <Profile />
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navLinks.map((item) => (
                <NavLinkDisclosureButton key={item.name} item={item} />
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
