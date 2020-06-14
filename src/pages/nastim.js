import React from "react"
import Layout from "../components/Layout"
import { FaPhoneSquare, FaUserTie } from "react-icons/fa"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SEO from "../components/SEO"
import Title from "../components/Title"
export default function nastim() {
  return (
    <Layout>
      <SEO title="naštim" />
      <Title title="naš" subtitle="tim" />
      <ul className="our-team-card-list">
        <li className="our-team-card">
          <h4 className="our-team-card-titula">Predsednik</h4>
          <div className="our-team-card-content">
            <FaUserTie className="najave-font-h" />
            <div className="our-team-card-info">
              <p className="our-team-card-info-p">Branko Marković</p>
              <p>
                <FaPhoneSquare className="najave-font " />
                064/1983719
              </p>
            </div>
          </div>
        </li>
        <li className="our-team-card">
          <h4 className="our-team-card-titula">Podpredsednik</h4>
          <div className="our-team-card-content">
            <FaUserTie className="najave-font-h" />
            <div className="our-team-card-info">
              <p className="our-team-card-info-p">Dejan Jaćimović</p>
              <p>
                <FaPhoneSquare className="najave-font " />
                064/6151403
              </p>
            </div>
          </div>
        </li>
      </ul>
      <ul className="our-team-card-list">
        <li className="our-team-card">
          <h4 className="our-team-card-titula">Načelnik</h4>
          <div className="our-team-card-content">
            <FaUserTie className="najave-font-h" />
            <div className="our-team-card-info">
              <p className="our-team-card-info-p">Miloš Jeremić</p>
              <p>
                <FaPhoneSquare className="najave-font " />
                064/1776253
              </p>
            </div>
          </div>
        </li>
        <li className="our-team-card">
          <h4 className="our-team-card-titula">Sekretar</h4>
          <div className="our-team-card-content">
            <FaUserTie className="najave-font-h" />
            <div className="our-team-card-info">
              <p className="our-team-card-info-p">Romana Žmurić</p>
              <p>
                <FaPhoneSquare className="najave-font " />
                063/8234802
              </p>
            </div>
          </div>
        </li>
        <li className="our-team-card">
          <h4 className="our-team-card-titula">Via Ferrata</h4>
          <div className="our-team-card-content">
            <FaUserTie className="najave-font-h" />
            <div className="our-team-card-info">
              <p className="our-team-card-info-p">Miroslav Čolić</p>
              <p>
                <FaPhoneSquare className="najave-font " />
                064/4211441
              </p>
            </div>
          </div>
        </li>
      </ul>
      <ul className="our-team-card-list">
        <li className="our-team-card">
          <h4 className="our-team-card-titula">Član UO</h4>
          <div className="our-team-card-content">
            <FaUserTie className="najave-font-h" />
            <div className="our-team-card-info">
              <p className="our-team-card-info-p">Suzana Filipović</p>
              <p>
                <FaPhoneSquare className="najave-font " />
                065/8236952
              </p>
            </div>
          </div>
        </li>
        <li className="our-team-card">
          <h4 className="our-team-card-titula">Član UO</h4>
          <div className="our-team-card-content">
            <FaUserTie className="najave-font-h" />
            <div className="our-team-card-info">
              <p className="our-team-card-info-p">Jelena Rakić</p>
              <p>
                <FaPhoneSquare className="najave-font" />
                066/062536
              </p>
            </div>
          </div>
        </li>
        <li className="our-team-card">
          <h4 className="our-team-card-titula">Član UO</h4>
          <div className="our-team-card-content">
            <FaUserTie className="najave-font-h" />
            <div className="our-team-card-info">
              <p className="our-team-card-info-p">Angelina Jeremić</p>
              <p>
                <FaPhoneSquare className="najave-font" />
                060/5057626
              </p>
            </div>
          </div>
        </li>
      </ul>
      <AniLink fade to="/" className="btn-white">
        back to home page
      </AniLink>
    </Layout>
  )
}
