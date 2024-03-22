import { useAuth0 } from "@auth0/auth0-react"

const Login = () => {

    const {isAutenticated} = useAuth0();
    return(
        !isAutenticated && (
            <div>
                <h1>Inicio con auth0</h1>
                <h3>Registrate o Inicia secion para continuar con nosotros.</h3>
            </div>
        )
    )
}

export {Login}