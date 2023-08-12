import React from "react"
import Layout from "../components/Layout"
import Image from "gatsby-image"
import SEO from "../components/SEO"
import { graphql } from "gatsby"
import styles from "../css/about.module.css"
import Title from "../components/Title"
import {FaMap, FaMapMarked } from "react-icons/fa"
import mapa from "../images/files/mapa.webp"



// import Banner from "../components/Banner"
// import { Link } from "gatsby"
export default function stazeKosmaja({ data }) { 
   return (
    <Layout>
      <SEO title="Staze Kosmaja"/>
      <div >
      <Image fluid={data.stazeKosmaja.childImageSharp.fluid} alt="pkgreben" />
      <section className={styles.services}>
        <div className={styles.center}>
            <article className={styles.service}>
                <a href="/Staze_Kosmaja.gpx" download className={styles.links}>
                  <span><FaMapMarked /></span>
                </a>
              <h4>Staze Kosmaja</h4>
              <p>Preuzmi Staze .gpx</p>
            </article>
            <article className={styles.service}>
                <a href={mapa} download className={styles.links}>
                  <span><FaMap /></span>
                </a>
              <h4>Mapa Kosmaja</h4>
              <p>Preuzmi Mapu image</p>
            </article>
          
        
      </div>
    </section>
      <div className={styles.viaferrataOpis} style={{marginTop: "50px"}}>
              <Title  title="Aktivnost" subtitle="PK Grebena" />
        <section>
        <p>S obzirom da Kosmaj spada u niže planine, staze su pogodne za šetnju i aktivnosti osoba različitih fizičkih sposobnosti. Od lakših i kraćih do dužih i težih.
        To su, uglavnom, šumske staze i blage zaravni sa povremenim strmijim delovima. Na Kosmaju postoji oko 50 km pešačkih staza koje su početkom 2023.god markirali planinari PK Grebena uz podršku Gradske Opštine Mladenovac
        i javnog preduzeća Srbijašume. PK Greben je osnovan 24.aprila 2012.god. Osnovna misija kluba je da svojim delovanjem doprinese afirmaciji i promociji planinarenja kao sportske discipline, obrazovne i vaspitne funkcije
        sporta, fer pleja, razumevanja, tolerancije i odgovornosti kroz bavljenje sportom i planinarenjem.
        Klub je od osnivanja organizovao ok 500 akcija, kako u zemlji tako i u inostranstvu, učestvovao na brojnim republički m akcijama i memorijalima. U godišnjem klupskom planu svake godine su zastupljene lakše,
        srednje teške i teške staze, kako bi se svakome ko je zainteresovan za planinarenje omogućila aktivnost.
        Najveće uspehe klub je do sada zabeležio u disciplini visokogorstva (usponi preko 2000 mnv) u vidu penjanja sledećih vrhova:
        </p>
        <li>-Akonkagva (6962mnv) ,najviši vrh Južne Amerike</li>
        <li>-Himalaji-Island Peak (6189mnv)</li>
        <li>-Chachani (6057mnv), Peru.</li>
        <li>-Kilimandzaro (5895mnv), najviši vrh afričkog kontinenta, Kenije i Tanzanije</li>
        <li>-Damanvald ( 5610mnv), najviši stratovulkan Azije i Irana</li>
        <li>-Kavkaz-Zapadni Elbrus (5642mnv), najviši vrh evropskog kontinenta i Rusije</li>
        <li>- Monte Bianco (5510mnv), Peru</li>
        <li>-Ararat (5137mnv), najviši vrh Turske</li>
        <li>-Alpi-Mont Blanc (4810mnv) ,najviši vrh Evropske unije, Francuske i Italije</li>
        <li>-Suphan (4058 mnv), Turska.</li>
        <li>-Jebel Toubkal (4165mnv) Najviši vrh Maroka </li>
        <li>-Teide (3715mnv) ,najviši vrh Španije</li>
        <li>-Olimp (2918mnv)</li>
        <li>-Sinajska Gora (2285mnv)</li>
        <li> -najviši vrhovi Austrije, Slovenije, Poljske, Slovačke,Albanije,Bugarske, Makedonije,Crnegore, Rumunije,</li>
        </section>
        <section style={{marginTop: "20px"}}>
        <p> <span className={styles.viaferataOpisHead}> Glavne aktivnosti kluba </span>od osnivanja do danas ostaju usmerene ka promociji Kosmaja kao sportske i turističke destinacije od značaja. Činjenica je da je godišnjim klupskim planom neizostavno obuhvaćeno više
        akcija na Kosmaju i da su kako tokom, tako i mimo njih članovi kluba posvećeni otkrivanju novih staza i upoznavanja Kosmaja iz što više pravaca. Takođe, klub dva puta godišnje vrši čišćenje i održavanje postojećih
        staza. U julu 2020.god.,zahvaljujući angažovanju i aktivnošću kluba, Kosmaj je postao jedna od retkih planina koja poseduje markiranu noćnu stazu. Početak staze je od česme koja se nalazi u četinarima, 
        pored bazena, spušta se u šumu i dolazi do spomen kosturnice Beli kamen. Produžava do manastira Tresije, preko izvora Orlovac, Spomenika borcima Kosmajskog odreda i spušta se do početne tačke.
        Dužine je 6 km i obeležena je fluorescentnom markacijom. Krajem aprila 2023.god planinari su markirali staze na Kosmaju uz podršku GO Mladenovac i javnog preduzeća "Srbijašume" kako bi Kosmaj učinio bezbedniji i
        dostupnijim za sve posetioce.
        Ono, čime se klub najviše ponosi su dve centralne akcije:</p>
        <li>"Grebenčići"</li>
        <li>"S Grebenom Despotovim stazama"</li>
        </section>
        <section style={{marginTop: "20px"}}>
        <span className={styles.viaferataOpisHead}> "Grebenčići" </span> se realizuju kao jednodnevna akcija namenjena učenicima četvrtog razredasa teritorije opština Mladenovac i Sopot. Primarni cilj ove akcije je približavanje dece prirodi na zabavan i edukativan način i
        planinarenju kao sportu. Planinarski savez Srbije je 2019.god prepoznao značaj i odličnu organizaciju ove akcije, te "Grebenčići" bivaju proglašeni prvom republičkom akcijom za mlade u istoriji Planinarskog saveza
        Srbije. Akcija je organizovana kao šetnja tokom koje deca posećuju četiri baze: prva pomoć u planini, alpinizam, visokogorstvo i orijentiring. Na ovim bazama deca su u prilici da se okrepe uz posluženje i da se
        kroz kratka predavanja od strane članova kluba i predstavljanjem improvizovanih uslova upoznaju sa boravkom u planini, bezbednim kretanjem na visokim planinama, potrebnom opremom, korišćenjem mape i kompasa radi
        pronalaženje željenih tačaka, kao i da čuju direktno od članova Gorske službe spašavanja Srbije nešto više o prvoj pomoći u planini, isprobaju za tu priliku postavljen zip line, kao i veštačku stenu koja približava 
        upoznavanje sa osnovama alpinizma uz asistenciju članova kluba. Ovu akciju planinari uvek rado organizuju, o čemu svedoči sve veće broj učesnika.
        </section>
        <section style={{marginTop: "20px"}}>
        <span className={styles.viaferataOpisHead}> "S Grebenom Despotovim stazama" </span> je akcija PK Greben koja postoji od osnivanja kluba. Višegodišnji kontinuitet kvaliteta ove akcije doprineo je tome da 2022. god. bude uvrštena u spisak republičkih akcija
        Planinarskog saveza Srbije. Glavni cilj ove akcije je, kako joj samo ime kaže, upoznavanje kulturno-istorijskog nasleđa Kosmaja kroz šetnju i boravak u prirodi. Staza je koncipirana tako da obuhvati najznačajnije
        lokalitete Kosmaja: manastir Pavlovac, manastir Kasteljan, spomen kosturnica Beli Kamen, manastir Tresije i Spomenik Kosmajskom partizanskom odredu. Na svakoj od lokacija učesnici akcije imaju priliku da čuju
        kratke priče vezane za iste. Gosti su brojni planinarski klubovi iz zemlje i regiona, kao i svi zainteresovani pojedinci. U proseku na ovoj akciji klub ugosti oko 300 planinara iz zemlje i regiona. 
        Start akcije je u zaseoku Petkaći, atar sela Koraćica i delom prolazi kroz potok, zavisno od vodostaja nije preporučljivo ići tuda do kraja juna. Prva znamenitost je manastir Pavlovac, gde učesnici mogu čuti
        kratki istorijat ovog kraja. Put nas vodi do manastira Kasteljan, pa do spomenika Beli Kamen. Nastavljamo do manastira Tresije, pa šumskim putem do Spomenika borcima Kosmajskog odreda i završavamo kod igrališta
        i info table. Ukupna dužina je oko 13 km. Ova akcija u planinarskom krugovima već godinama uživa imidž izuzetno cenjene hvaljene zbog gostoprimstva i sadržajnosti, usled čega se broj učesnika iz godine u godinu
        povećava. Kao i pri organizaciji "Grebenčića", klub neguje dugogodišnju uspešnu saradnju sa Gradskom Opštinom Mladenovac, Lovačkim udruženjem "Varovnice" iz Mladenovca, Sportskim savezom Mladenovca,
        mladenovačkim kulturno-umetničkim društvima i lokalnim privatnim preduzetnicima.
          </section>
          </div>
        
      
      </div>
    </Layout>
  )
}


export const query = graphql`
  query {
    stazeKosmaja: file(relativePath: { eq: "stazeKosmaja.webp" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
