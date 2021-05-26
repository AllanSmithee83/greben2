import React from "react"
import {FaFilePdf, FaUserTie } from "react-icons/fa"
import statut from "../images/files/statut.pdf"
import pravilnik from "../images/files/pravilnik.pdf"

export default [
  {
    icon: <FaUserTie />,
    title: "naš tim",
    text: "Članovi uprave Planinarskog Kluba Grebn - Kontakt podaci.",
  },
  {
    icon: <FaFilePdf />,
    title: "statut",
    text: "Statut PK Greben 2017",
    link: statut,
  },

  {
    icon: <FaFilePdf />,
    title: "pravilnik",
    text: "Pravilnik o bezvednom izvodjenju planianrskih aktivnosti",
    link: pravilnik,
  },

]
