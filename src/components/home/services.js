import React, { useEffect, useState } from "react"
import InViewAnimation from "../utilities/InViewAnimation"
import { StaticQuery, graphql } from "gatsby"
import Parallax from "../utilities/Parallax"
import Separator from "../../components/separator"



export default function Companies() {
  // Set default state of parallax to enabled  
  const [parallaxDisabledState, setparallaxDisabledState] = useState(false);
  // since no .window is available until after the render, useEffect
  useEffect(() => {
    // check for small windows
    if (window.innerWidth <= 800 || window.innerHeight <= 600) {
      console.log("Parallax Disabled On Mobile")
      // Set true for small screens
      setparallaxDisabledState(true)
    } else {
      console.log("Parallax Enabled On Desktop")
    }
    // when the state changes, re-render
  }, [parallaxDisabledState])
  return (
    <StaticQuery
      query={graphql`
      {
        allAirtable(filter: {data: {Services_Name: {ne: null}}}, sort: {fields: data___Services_Order}) {
          nodes {
            data {
              Services_Image
              Services_Name
              Services_Order
            }
          }
        }
      }      
      `}

      render={data => (
        <>
          <Separator className="bg-green-dark-3" />
          <section id="services" className="v-h-center-100vh bg-green-dark-3 small-padding-top-100 small-padding-bottom-100">
            <div className="outer-container">
              <div className="inner-width-1000">
                <Parallax disabled={parallaxDisabledState}>
                  <InViewAnimation
                    delay="delay-0ms"
                    className="init-invisible"
                  >
                    <h3>Services Offered</h3>
                  </InViewAnimation>

                  <div className="services-container grid-container col-5 small-col-2">
                    {data.allAirtable.nodes.map((service, index) => (

                      <InViewAnimation
                        delay={`delay-${(index * 50) + 200}ms`}
                        className="init-invisible"
                      >
                        <div className="block service padding-top-30 padding-bottom-30 padding-left-20 padding-right-20 border border-solid border-width-1 border-color-white bg-green-dark-4 small-padding-top-20 mall-padding-bottom-20 small-padding-left-18 small-padding-right-18">
                          <img className="block center w-25" src={`https://res.cloudinary.com/billymitchell/image/upload/q_auto:best/${service.data["Services_Image"]}`} alt={service.data["Services_Name"]}></img>
                          <small className="text-center block margin-bottom-0 margin-top-20">{service.data["Services_Name"]}</small>
                        </div>
                      </InViewAnimation>
                    ))}
                  </div>

                </Parallax>
              </div>
            </div>
          </section>
        </>
      )}
    />
  )
}
