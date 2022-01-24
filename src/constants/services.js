import React from "react"
import { FaMountain, FaCalendarAlt, FaUserTie } from "react-icons/fa"
import plan from "../images/files/plan.pdf"
import vrhovi from "../images/files/NasiVrhovi.pdf"

export default [
  {
    icon: <FaCalendarAlt />,
    title: "godišnji plan",
    text: "Godišnji Plan akcija PK Greben za tekuću kalendarsku godinu.",
    link: plan,
  },

  {
    icon: <FaMountain />,
    title: "naši vrhovi",
    text: "Značajni vrhovi koje smo popeli.",
    link: vrhovi,
  },
  {
    icon: <FaUserTie />,
    title: "naš tim",
    text: "Članovi uprave Planinarskog Kluba Greben - Kontakt podaci.",
  },
]
