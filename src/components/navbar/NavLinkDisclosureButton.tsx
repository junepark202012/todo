import { Disclosure } from "@headlessui/react";
import { navLink } from "../Navbar";

export function NavLinkDisclosureButton(props: { item: navLink }) {
  return (
    <Disclosure.Button
      as="a"
      href={props.item.href}
      className={
        (props.item.current
          ? "bg-gray-900 text-gray-50"
          : "text-gray-300 hover:bg-gray-700 hover:text-gray-50") +
        " block rounded-md px-3 py-2 text-base font-medium"
      }
      aria-current={props.item.current ? "page" : undefined}
    >
      {props.item.name}
    </Disclosure.Button>
  );
}
