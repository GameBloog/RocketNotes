import { useState } from "react"
import { FiMail, FiLock, FiUser } from "react-icons/fi"
import { Link, useNavigate } from "react-router-dom"

import { api } from "../../services/api"

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Container, Form, Background } from "./style"

import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#3E3B47",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
}

export function SingUp() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const navigade = useNavigate()

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  function handleSingUp() {
    if (!name || !email || !password) {
      const notify = () =>
        toast.error("Preencha todos os campos", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })

      return notify()
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        handleOpen()
      })
      .catch((error) => {
        if (error.response) {
          const notify = () =>
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

          notify()
          handleClose()
        } else {
          const notify = () =>
            toast.error("Não foi possível cadastrar", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            })

          notify()
          handleClose()
        }
      })
  }

  return (
    <Container>
      <Background />
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerneciar seus links uteis</p>

        <h2>Crie sua conta</h2>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title="Cadastrar" onClick={handleSingUp} />

        <Link to="/">Voltar para o login</Link>
      </Form>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Usuário cadastrado com sucesso?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Sua conta foi criada com sucesso.
          </Typography>
          <Button title="Ok" onClick={() => navigade("/")} />
        </Box>
      </Modal>
    </Container>
  )
}
