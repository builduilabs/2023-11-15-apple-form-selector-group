"use client";

import { useState } from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";

let options = [
  { value: "1tb", label: "1TB SSD Storage", price: 0 },
  { value: "2tb", label: "2TB SSD Storage", price: 400 },
  { value: "4tb", label: "4TB SSD Storage", price: 1000 },
  { value: "8tb", label: "8TB SSD Storage", price: 2200 },
];

export default function Page() {
  let [selectedValue, setSelectedValue] = useState(options[0].value);
  let selectedOption = options.find((o) => o.value === selectedValue);

  return (
    <div className="max-w-sm w-full">
      <div className="p-4">
        <p className="font-medium">Storage</p>

        <form
          className="mt-4"
          action={(formData) => {
            alert(JSON.stringify(Object.fromEntries(formData)));
          }}
        >
          <RadioGroup.Root
            className="space-y-4"
            name="storage"
            required
            value={selectedValue}
            onValueChange={setSelectedValue}
          >
            {options.map((option) => (
              <RadioGroup.Item
                className="flex w-full border rounded-lg border-gray-500 p-4 data-[state=checked]:border-blue-500 data-[state=checked]:ring-1 data-[state=checked]:ring-inset data-[state=checked]:ring-blue-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-blue-500"
                key={option.value}
                value={option.value}
              >
                <span className="font-semibold text-white">{option.label}</span>

                {selectedOption && option.value !== selectedValue && (
                  <span className="ml-auto tabular-nums text-gray-400">
                    {option.price > selectedOption.price ? "+ " : "- "}
                    {toCurrency(option.price - selectedOption.price)}
                  </span>
                )}
              </RadioGroup.Item>
            ))}
          </RadioGroup.Root>

          <div className="mt-8 text-right">
            <button className="focus:outline-none focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-500 bg-blue-500 hover:bg-blue-400 text-white text-sm px-3 py-1 font-semibold rounded">
              Buy
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function toCurrency(v: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    signDisplay: "never",
  }).format(v);
}
