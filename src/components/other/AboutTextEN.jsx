import React from "react"

export const AboutTextEN = ({ darkTheme }) => {
  return (
    <div className="col-lg-7 col-xl-8 text-center text-lg-start">
      <h2 className={"text-7 fw-600 mb-3 " + (darkTheme ? "text-white" : "")}><span>From design to programming</span></h2>
      <p className={darkTheme ? "text-white-50" : ""}>
        I started my career path in 2014 as a design engineer for medical and radiation facilities, being a 6th year student at the International State Ecological University named after. A.D. Sakharov. Having received a diploma of higher education with a degree in nuclear and radiation safety engineer, I continued to design medical and radiation facilities for 4 years. For 4 years I have well studied the norms for designing such objects, and I have mastered the design software "AutoCAD" to perfection.
      </p>
      <p className={darkTheme ? "text-white-50" : ""}>
        However, life turned out in such a way that I had to change the scope of design from medical to commercial, and at the same time I had to study the design standards for retail facilities from scratch. It was difficult, but doable. For another 4 years I was engaged in the design of retail facilities, 3 of which as the head of this direction. I achieved good results, but the results were not the ultimate dream, and I increasingly understood that it was necessary to move on.
      </p>
      <p className={darkTheme ? "text-white-50" : ""}>
        And now I'm a front-end developer. Behind many hours of study and as many hours of practice. There is much more to be explored. I am sure that I will succeed in this direction, because I am hardworking, diligent and moderately pedantic!
      </p>
    </div>
  )
}