import style from '../styles/Cartao.module.css'

interface CartaoProps{
    bgcolor?: string,
    children?: any
}

export default function Cartao(props: CartaoProps){
    return(
        <div className={style.cartao} 
            style={{
                backgroundColor: props.bgcolor ?? "#FFF"
            }}
        >
                {props.children}
        </div>
    )
}