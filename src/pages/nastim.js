import React from "react"
import Layout from "../components/Layout"
import { FaPhoneSquare, FaUserTie } from "react-icons/fa"
import { Link } from "gatsby"
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
              <p className="our-team-card-info-p">Dejan Kostadinović</p>
              <p>
                <FaPhoneSquare className="najave-font " />
                063/510915
              </p>
            </div>
          </div>
        </li>
        <li className="our-team-card">
          <h4 className="our-team-card-titula">Podpredsednik</h4>
          <div className="our-team-card-content">
            <FaUserTie className="najave-font-h" />
            <div className="our-team-card-info">
              <p className="our-team-card-info-p">Jelena Radosavljeić</p>
              <p>
                <FaPhoneSquare className="najave-font " />
                069/1747111
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
              <p className="our-team-card-info-p">Dejan Jaćimović</p>
              <p>
                <FaPhoneSquare className="najave-font " />
                 064/6151403
              </p>
            </div>
          </div>
        </li>
        <li className="our-team-card">
          <h4 className="our-team-card-titula">Sekretar</h4>
          <div className="our-team-card-content">
            <FaUserTie className="najave-font-h" />
            <div className="our-team-card-info">
              <p className="our-team-card-info-p">Slobodanka Maksimović</p>
              <p>
                <FaPhoneSquare className="najave-font " />
                064/2818369
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
              <p className="our-team-card-info-p">Saša Dobrić</p>
              <p>
                <FaPhoneSquare className="najave-font " />
                06x/xxxxxxx
              </p>
            </div>
          </div>
        </li>
        <li className="our-team-card">
          <h4 className="our-team-card-titula">Član UO</h4>
          <div className="our-team-card-content">
            <FaUserTie className="najave-font-h" />
            <div className="our-team-card-info">
              <p className="our-team-card-info-p">Stojan Nikolić</p>
              <p>
                <FaPhoneSquare className="najave-font" />
                06x/xxxxxxx
              </p>
            </div>
          </div>
        </li>
        <li className="our-team-card">
          <h4 className="our-team-card-titula">Član UO</h4>
          <div className="our-team-card-content">
            <FaUserTie className="najave-font-h" />
            <div className="our-team-card-info">
              <p className="our-team-card-info-p">Ivana Stojanović</p>
              <p>
                <FaPhoneSquare className="najave-font" />
                06x-xxxxxx
              </p>
            </div>
          </div>
        </li>
      </ul>
      <Link to="/" className="btn-white">
        back to home page
      </Link>
    </Layout>
  )
}
