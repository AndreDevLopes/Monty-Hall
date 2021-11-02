import { useState , useEffect } from "react"
import { criarPortas } from "../../../functions/portas"
import { atualizarPortas } from "../../../functions/portas"
import Porta from "../../../components/Porta"
import style from '../../../styles/Jogo.module.css'
import Link from 'next/link'
import { useRouter } from "next/router"

export default function Jogo(){
    const router = useRouter()
    const [portas, setPortas] = useState([])
    const [valido, setValido] = useState(false)

    useEffect(()=>{
        const numportas =  +router.query.portas
        const temPresente = +router.query.temPresente
        setPortas(criarPortas(numportas, temPresente))
    },[router?.query])

    useEffect(()=>{
        const numportas =  +router.query.portas
        const temPresente = +router.query.temPresente
        const qtdePortasValidas = numportas >= 3 && numportas <=100
        const temPresenteValido = temPresente >=1 && temPresente <= numportas
        setValido( qtdePortasValidas && temPresenteValido)
    },[portas])

    function renderizarPortas(){
        return valido && portas.map(porta => {
        return <Porta key={porta.numero} value={porta}
            onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} />
        })
    }
    return (
        <div id={style.jogo}>
            <div className={style.portas}>
                {renderizarPortas()}    
            </div>  
            <div className={style.botoes}>
                <Link href="/" passHref >
                    <button>Reiniciar jogo</button>
                </Link>
            </div>
        </div>
    )
}