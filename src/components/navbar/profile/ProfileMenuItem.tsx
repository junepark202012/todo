import { Menu } from "@headlessui/react";

type ProfileMenuProps = {
  href: string;
  name: string;
};

export function ProfileMenuItem({ href, name }: ProfileMenuProps) {
  return (
    <Menu.Item>
      {({ active }) => (
        <a
          href={href}
          className={
            (active ? "bg-gray-100" : "") +
            " block px-4 py-2 text-sm text-gray-700"
          }
        >
          {name}
        </a>
      )}
    </Menu.Item>
  );
}
