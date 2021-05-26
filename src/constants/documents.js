import React from "react"
import {FaFilePdf, FaUserTie } from "react-icons/fa"
import statut from "../images/files/statut.pdf"
import pravilnik from "../images/files/pravilnik.pdf"

export default [
  {
    icon: <FaUserTie />,
    title: "naš tim",
    text: "Članovi uprave Planinarskog Kluba Greben - Kontakt podaci.",
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
    text: "Pravilnik o bezbednom izvodjenju planinarskih aktivnosti",
    link: pravilnik,
  },

]
