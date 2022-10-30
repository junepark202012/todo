import { Menu, Transition } from "@headlessui/react";
import { MenuButton } from "./profile/MenuButton";
import { Fragment } from "react";
import { ProfileMenuItem } from "./profile/ProfileMenuItem";

export function Profile() {
  return (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      {/* Profile dropdown */}
      <Menu as="div" className="relative ml-3">
        <div>
          <MenuButton />
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-50 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <ProfileMenuItem href="#" name="Your Profile" />
            <ProfileMenuItem href="#" name="Settings" />
            <ProfileMenuItem href="#" name="Sign out" />
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
