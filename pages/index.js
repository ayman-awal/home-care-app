import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import { Passion2Purpose } from "../components/Passion2Purpose"
import { Services } from "../components/Services"
import {Reviews} from "../components/Reviews"
import { Engage } from "../components/Engage"

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Passion2Purpose />
      <Services />
      <Reviews />
      <Engage />

      <Footer />
    </div>
  )
}
