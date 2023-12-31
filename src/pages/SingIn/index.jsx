import { useState } from "react"
import { useAuth } from "../../hooks/auth"
import { FiMail, FiLock } from "react-icons/fi"
import { Link } from "react-router-dom"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Container, Form, Background } from "./style"


export function SingIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { signIn } = useAuth()

  function handleSingIn() {
    signIn({ email, password })
  }
const notify = () => toast("Wow so easy !")

  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerneciar seus links uteis</p>

        <h2>Faça seu login</h2>

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

        <Button title="Entrar" onClick={(handleSingIn)} />
        

        <Link to="/register">Criar conta</Link>
      </Form>

      <Background />
    </Container>
  )
}
