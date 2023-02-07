import React, { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer, toast } from "react-toastify"

export const SendFormRU = React.memo(({ darkTheme }) => {
  const form = useRef()
  const [sendingMail, setSendingMail] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    setSendingMail(true)
    emailjs
      .sendForm(
        "service_72bis6t",
        "template_16u6n6u",
        form.current,
        "-STd4qBb-1GmEldb8"
      )
      .then(
        (result) => {
          document.getElementById("contact-form").reset()
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: darkTheme ? "dark" : "light",
          })
          console.log(result.text)
          setSendingMail(false)
        },
        (error) => {
          toast.error("Something went wrong!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: darkTheme ? "dark" : "light",
          })
          console.log(error.text)
          setSendingMail(false)
        }
      )
  }

  return (
    <div className="col-md-8 col-xl-9 order-0 order-md-1">
      <h2 className={"mb-3 text-5 text-uppercase text-center text-md-start " + (darkTheme ? "text-white" : "")}>
        Напишите мне
      </h2>
      <form
        className={darkTheme ? "form-dark" : ""}
        id="contact-form"
        action="php/mail.php"
        method="post"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="row g-4">
          <div className="col-xl-6">
            <input
              name="user_name"
              type="text"
              className="form-control"
              required
              placeholder="Имя"
            />
          </div>
          <div className="col-xl-6">
            <input
              name="user_email"
              type="email"
              className="form-control"
              required
              placeholder="Эл.почта"
            />
          </div>
          <div className="col">
            <textarea
              name="message"
              className="form-control"
              rows={5}
              required
              placeholder="Расскажите мне больше о ваших потребностях"
              defaultValue={""}
            />
          </div>
        </div>
        <p className="text-center mt-4 mb-0">
          <button id="submit-btn" className="btn btn-primary rounded-pill d-inline-flex" type="submit">
            {sendingMail
              ?
              <>
                <span role="status" aria-hidden="true" className="spinner-border spinner-border-sm align-self-center me-2"></span>
                Отправляется.....
              </>
              :
              <>Отправить</>
            }
          </button>
        </p>
        <ToastContainer />
      </form>
    </div>
  )
})