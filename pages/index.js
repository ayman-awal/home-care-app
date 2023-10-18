import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import { Passion2Purpose } from "../components/Passion2Purpose"
import { Services } from "../components/Services"
import {Reviews} from "../components/Reviews"
import { Engage } from "../components/Engage"
import HomeVideo from "../components/HomeVideo"

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />

      <div className="right_section">
        <div className="video-thumb">

          <HomeVideo />


        </div>
      </div>
      
      <Passion2Purpose />
      <Services />
      <Reviews />
      <Engage />

      <Footer />
    </div>
  )
}
