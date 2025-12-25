import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const PostaniClan = () => {
  return (
    <Layout>
      <SEO title="Učlanjenje | PK Greben" />

      {/* INLINE STYLES – same as your HTML */}
      <style>{`
        :root {
          --primary: #1f4d36;
          --secondary: #f3f6f4;
          --accent: #2f7d57;
          --text: #1c1c1c;
          --muted: #666;
          --border: #dcdcdc;
        }

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, Helvetica, Arial, sans-serif;
          color: var(--text);
          background: var(--secondary);
          line-height: 1.6;
        }

        .container {
          max-width: 900px;
          margin: 40px auto;
          padding: 0 20px;
        }

        h1 {
          font-size: 2.2rem;
          color: var(--primary);
          margin-bottom: 10px;
        }

        h2 {
          font-size: 1.6rem;
          color: var(--primary);
          margin-top: 50px;
          margin-bottom: 15px;
        }

        h3 {
          font-size: 1.1rem;
          margin: 0 0 5px;
          color: var(--accent);
        }

        p {
          margin: 0 0 12px;
        }

        .card {
          background: #fff;
          border-radius: 12px;
          padding: 25px;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
          margin-top: 25px;
        }

        .steps {
          display: grid;
          gap: 20px;
        }

        .step {
          display: flex;
          gap: 15px;
        }

        .step-number {
          flex-shrink: 0;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--primary);
          color: #fff;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .note {
          background: #f9faf9;
          border-left: 4px solid var(--accent);
          padding: 15px 18px;
          margin-top: 15px;
          border-radius: 6px;
          color: var(--muted);
        }

        ul {
          margin: 10px 0 0 18px;
          padding: 0;
        }

        li {
          margin-bottom: 8px;
        }

        .uplatnica {
          width: 600px;
          background: #fff;
          padding: 20px;
          border: 2px solid #000;
          border-radius: 4px;
          box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
          margin: 0 auto;
        }

        .uplatnica h2 {
          text-align: center;
          margin-bottom: 20px;
          font-size: 22px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .payment-row {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid #000;
          padding: 8px 0;
        }

        .payment-row:last-child {
          border-bottom: none;
        }

        .label {
          font-weight: bold;
          width: 180px;
        }

        .value {
          flex: 1;
          text-align: left;
          padding-left: 10px;
        }

        .payment-row:nth-child(odd) {
          background: #f9f9f9;
        }

        .uplatnica .value {
          min-height: 18px;
        }
      `}</style>

      {/* CONTENT – 100% preserved */}
      <div className="container">
        <h1>Postanite član PK Greben</h1>
        <p>
          Pridružite se Planinarskom Klubu Greben i postanite deo
          planinarske zajednice u Srbiji.
        </p>

        <div className="card">
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <div>
                <h3>Preuzmite i popunite formular</h3>
                <a
                  href="https://pss.rs/wp-content/uploads/2019/01/obrazac-4-karton-clana.docx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  -Obrazac-
                </a>
                <p>
                  Formular popunite koristeći ćirilicu ili latinicu sa svim
                  pripadajućim slovima (đ, ž, ć, č, dž, š).
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">2</div>
              <div>
                <h3>Pošaljite popunjen formular</h3>
                <p>
                  Formular poslati na adresu:
                  <strong> greben.pk@gmail.com</strong>
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">3</div>
              <div>
                <h3>Izvršite uplatu za učlanjenje</h3>
                <p>Detaljne instrukcije za uplatu nalaze se ispod.</p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">4</div>
              <div>
                <h3>Preuzmite člansku karticu</h3>
                <p>
                  Člansku karticu možete preuzeti sredom od
                  <strong> 20.00 do 21.00 h</strong> u prostorijama kluba.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h2>Napomene</h2>
        <div className="card">
          <ul>
            <li>
              Članarina za 2026. godinu iznosi <b>2.000 dinara za odrasle i
              1.000 dinara za decu</b>.
            </li>
            <li>
              Novi članovi plaćaju i <b>jednokratnu naknadu od 200 dinara</b>.
            </li>
            <li>
              Člansku karticu možete preuzeti najkasnije do kraja kalendarske godine.
            </li>
            <li>
              Karticu vam može doneti vodič na planinarsku akciju.
            </li>
            <li>
              Proceduru možete obaviti lično sredom od 20.00 do 21.00 h.
            </li>
          </ul>
        </div>

        <h2>Instrukcije za uplatu</h2>
        <div className="card">
          <div className="uplatnica">
            <h2>Uplatnica</h2>

            <div className="payment-row">
              <div className="label">Uplatilac</div>
              <div className="value"></div>
            </div>

            <div className="payment-row">
              <div className="label">Svrha uplate</div>
              <div className="value">Članarina za 2026 godinu</div>
            </div>

            <div className="payment-row">
              <div className="label">Primalac</div>
              <div className="value">
                PK Greben, Kralja Petra I 175, 11400 Mladenovac
              </div>
            </div>

            <div className="payment-row">
              <div className="label">Šifra plaćanja</div>
              <div className="value">289</div>
            </div>

            <div className="payment-row">
              <div className="label">Valuta</div>
              <div className="value">RSD</div>
            </div>

            <div className="payment-row">
              <div className="label">Iznos</div>
              <div className="value">
                2.000 (odrasli) / 1.000 (deca ispod 18)
              </div>
            </div>

            <div className="payment-row">
              <div className="label">Račun primaoca</div>
              <div className="value">160-0000000374878-60</div>
            </div>

            <div className="payment-row">
              <div className="label">Model</div>
              <div className="value"></div>
            </div>

            <div className="payment-row">
              <div className="label">Poziv na broj</div>
              <div className="value"></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PostaniClan
