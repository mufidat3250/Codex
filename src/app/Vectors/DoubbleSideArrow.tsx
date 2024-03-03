import * as React from "react"
import { SVGProps } from "react"
type arrowProp = {
    color?:string;
}& SVGProps<SVGSVGElement>
const SvgComponent = (props:arrowProp) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={178}
    height={7}
    fill="none"
    {...props}
  >
    <path
      fill={ props.color || "#51565E"}
      d="m0 3.5 5 2.887V.613L0 3.5Zm178 0-5-2.887v5.774l5-2.887ZM4.5 4h169V3H4.5v1Z"
      mask="url(#)"
    />
  </svg>
)
export default SvgComponent