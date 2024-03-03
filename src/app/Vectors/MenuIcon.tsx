import * as React from "react"
import { SVGProps } from "react"
const MenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="rgba(55,53,53,1)"
    viewBox="0 0 24 24"
    {...props}
    style={{cursor:'pointer'}}
  >
    <path d="M3 4h18v2H3V4Zm0 7h18v2H3v-2Zm0 7h18v2H3v-2Z" />
  </svg>
)
export default MenuIcon