import React from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export class LogError {
  notify = (error) => {
    toast.error(error.response.data.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    })
  }

  render() {
    return (
      <div>
        {/* Local onde você deseja renderizar o ToastContainer */}
        <ToastContainer />
      </div>
    )
  }
}


