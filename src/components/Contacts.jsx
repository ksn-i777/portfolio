import React from "react"
import "react-toastify/dist/ReactToastify.css"
import { SectionHeader } from "./other/SectionHeader"
import { TooltipComponent } from "./other/TooltipComponent"
import { SendFormEN } from "./other/SendFormEN"
import { SendFormRU } from "./other/SendFormRU"

export const Contacts = ({ headerTop, darkTheme, languageEN }) => {

  return (
    <section id="contacts" className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}>
      <div className={"container " + (headerTop ? "" : "px-lg-5")}>

        {languageEN
          ? <SectionHeader darkTheme={darkTheme} section={"Contacts"} title={"Get in touch with me"}/>
          : <SectionHeader darkTheme={darkTheme} section={"Контакты"} title={"Связаться со мной"}/>
        }

        <div className="row gy-5">
          <div className="col-md-4 col-xl-3 order-1 order-md-0 text-center text-md-start">

            {languageEN
              ?
              <>
                <h2 className={"mb-3 text-5 text-uppercase " + (darkTheme ? "text-white" : "")}>Address</h2>
                <p className={"text-3 mb-4 " + (darkTheme ? "text-light" : "")}>Minsk, Belarus</p>
              </>
              : 
              <>
                <h2 className={"mb-3 text-5 text-uppercase " + (darkTheme ? "text-white" : "")}>Адрес</h2>
                <p className={"text-3 mb-4 " + (darkTheme ? "text-light" : "")}>Минск, Беларусь</p>
              </>
            }
            
            <p className={"text-3 mb-1 " + (darkTheme ? "text-light" : "")}>
              <span className="text-primary text-4 me-2"><i className="fas fa-phone" /></span>
              ----------------
            </p>
            <p className={"text-3 mb-4 " + (darkTheme ? "text-light" : "")}>
              <span className="text-primary text-4 me-2"><i className="fas fa-envelope" /></span>
              ksn_i777@mail.ru
            </p>

            <ul className={"social-icons justify-content-center justify-content-md-start " + (darkTheme ? "social-icons-muted" : "")}>
              <TooltipComponent title={'linkedin'} href={"https://www.linkedin.com/in/ksn-i777/"} iClassname={"fa-brands fa-linkedin"}/>
              <TooltipComponent title={'github'} href={"https://github.com/ksn-i777"} iClassname={"fa-brands fa-github"}/>
              <TooltipComponent title={'codewars'} href={"https://www.codewars.com/users/ksn-i777"} iClassname={"fa-solid fa-code"}/>
            </ul>
            
          </div>

          {languageEN
            ? <SendFormEN darkTheme={darkTheme}/>
            : <SendFormRU darkTheme={darkTheme}/>
          }
          
        </div>
      </div>
    </section>
  )
}