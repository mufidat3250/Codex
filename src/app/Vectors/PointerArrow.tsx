import * as React from "react"
import { SVGProps } from "react"

type props = {
  color: string
}& SVGProps<SVGSVGElement>
const PointerArrow = (props:props) => (
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width={24}
  height={22}
  fill="none"
  {...props}
>
  <path
    fill={ props.color ||"#4D9D0E"}
    d="M0 19.564c0-3.83.833-6.89 2.476-9.102 1.983-2.67 5.116-4.111 9.32-4.29V0L24 10.76 11.796 21.523v-6.137c-2.553.071-4.48.453-6.015 1.186-1.659.792-2.862 1.976-4.159 3.51L0 22v-2.436Z"
  />
</svg>
)
export default PointerArrow
