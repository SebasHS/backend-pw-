import user from '../../../assets/1430453.png'

const bandeja = new Array(3).fill(0).map((_, index) => ({
    id: `${index + 1}`,
    nombre: 'Franchesca Maldini',
    comentario: 'Y aserejé-ja-dejé De jebe tu de jebere seibiunouva majavi an de bugui an de güididípi Aserejé-ja-de jé De jebe tu de jebere seibiunouva majavi an de bugui an de güididípi Aserejé-ja-dejé De jebe tu de jebere seibiunouva majavi an de bugui an de güididípi'
}))

const CardComentario = ({nombre, comentario}) =>{
    return(
        <div className="doctor_comments">
        <div className="user_comment">
            <div className="user_info">
            <div className="card_info_img_2">
                <img src={user} alt=""/>
            </div>
                {nombre}
            </div>
            <div>
            {comentario}
            </div>
        </div>
    </div>                  
    )
}


const ComDoc_ID = () => {
    return(
        <section>
            <div>Comentarios sobre el doctor:</div>
            {bandeja.map((pregunta) => {
                return <CardComentario key={pregunta.id} {...pregunta} />
                })}
        </section>
    )
}

export default ComDoc_ID 