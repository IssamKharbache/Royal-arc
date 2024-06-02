import React from "react";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";

export function EvervaultCardSnippet() {
  return (
    <div className="border border-white/[40]  flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 " />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 " />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 " />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 " />

      <EvervaultCard text="hover" />

      <h2 className=" mt-4 text-sm font-semibold">
        Hover over this card to reveal an awesome effect
      </h2>
      <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 dark:text-white px-2 py-0.5">
       Awesome
      </p>
    </div>
  );
}
