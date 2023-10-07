"use client";
import { Listbox, Transition } from "@headlessui/react";
import { IconChevronDown } from "@tabler/icons-react";
// import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Fragment, useState } from "react";

type Props = {
  options: { label: string }[];
};

export default function SelectBox({ options }: Props) {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="select-box">
      <Listbox value={selected} onChange={setSelected}>
        <div>
          <Listbox.Button className="select-box">
            <span>{selected.label}</span>
            <span>
              <IconChevronDown aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options>
              {options.map((option, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) => ` ${active ? "active" : ""}`}
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span className={` ${selected ? "selected" : ""}`}>
                        {option.label}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
