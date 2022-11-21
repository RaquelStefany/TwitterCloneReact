import fotoPerfil from "../assets/images/perfil.png";

export function Tweet(props) {
    return(
        /* {props.text} */
        <div className="tweet">
            <div className="top">
                <img src={fotoPerfil} alt="Foto de Perfil" />
                <input type="text" name="txtTweet" id="txtTweet" placeholder="O que está acontecendo?"/>
            </div>
            <div>
                
            </div>
        </div>
    )
}