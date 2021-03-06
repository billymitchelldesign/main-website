import React from "react"
import { Helmet } from "react-helmet"

export default function HeaderScripts() {
  return (
    <Helmet>
      {/* Lottie Animation Loader */}
      <script src="https://unpkg.com/@lottiefiles/lottie-player@0.4.0/dist/lottie-player.js"></script>
      {/* Smooth Scrolling */}
      <script src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15/dist/smooth-scroll.polyfills.min.js"></script>
      {/* Icons */}
      <script
        src="https://kit.fontawesome.com/da815149ed.js"
        SameSite="None"
        Secure
        crossorigin="anonymous"
      ></script>
    </Helmet>
  )
}

