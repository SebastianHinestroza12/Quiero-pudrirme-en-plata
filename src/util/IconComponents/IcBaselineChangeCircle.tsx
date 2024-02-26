import React from "react";
import type { SVGProps } from "react";

export function IcBaselineChangeCircle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="3em"
      height="3em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="orange"
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m.06 17v-2.01H12c-1.28 0-2.56-.49-3.54-1.46a5.006 5.006 0 0 1-.64-6.29l1.1 1.1c-.71 1.33-.53 3.01.59 4.13c.7.7 1.62 1.03 2.54 1.01v-2.14l2.83 2.83zm4.11-4.24l-1.1-1.1c.71-1.33.53-3.01-.59-4.13A3.482 3.482 0 0 0 12 8.5h-.06v2.15L9.11 7.83L11.94 5v2.02c1.3-.02 2.61.45 3.6 1.45c1.7 1.7 1.91 4.35.63 6.29"
      ></path>
    </svg>
  );
}
