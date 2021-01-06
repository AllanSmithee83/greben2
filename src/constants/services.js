import React from "react"
import { FaMountain, FaCalendarAlt, FaUserTie } from "react-icons/fa"
import plan from "../images/files/plan2021.pdf"
import vrhovi from "../images/files/NasiVrhovi.pdf"

export default [
  {
    icon: <FaCalendarAlt />,
    title: "godišnji plan",
    text: "Godišnji Plan akcija PK Greben za kalendarsku 2021. godinu.",
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
    text: "Članovi uprave Planinarskog Kluba Grebn - Kontakt podaci.",
  },
]
