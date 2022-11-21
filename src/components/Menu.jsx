import { RiHome7Line, RiNotification4Line, RiFileList2Line } from "react-icons/Ri";
import { FaHashtag, FaTwitter } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsBookmarkStar } from "react-icons/bs";
import { HiOutlineUser } from "react-icons/hi";
import { CiCircleMore } from "react-icons/ci";
import { MdMoreHoriz } from "react-icons/md"
import fotoPerfil from "../assets/images/perfil.png"

export function Menu() {
    return (
        <div className="menu">
            <div>
                <FaTwitter className="iconMenu" />
                <a href={"/"} className='itemMenu'>
                    <RiHome7Line className="iconMenu" />
                    <span>
                        Página Inicial
                    </span>
                </a>
                <a href={"/"} className='itemMenu'>
                    <FaHashtag className="iconMenu" />
                    <span>
                        Explorar
                    </span>
                </a>
                <a href={"/"} className='itemMenu'>
                    <RiNotification4Line className="iconMenu" />
                    <span>
                        Notificações
                    </span>
                </a>
                <a href={"/"} className='itemMenu'>
                    <AiOutlineMail className="iconMenu" />
                    <span>
                        Mensagens
                    </span>
                </a>
                <a href={"/"} className='itemMenu'>
                    <BsBookmarkStar className="iconMenu" />
                    <span>
                        Itens Salvos
                    </span>
                </a>
                <a href={"/"} className='itemMenu'>
                    <RiFileList2Line className="iconMenu" />
                    <span>
                        Listas
                    </span>
                </a>
                <a href={"/"} className='itemMenu'>
                    <HiOutlineUser className="iconMenu" />
                    <span>
                        Perfil
                    </span>
                </a>
                <a href={"/"} className='itemMenu'>
                    <CiCircleMore className="iconMenu" />
                    <span>
                        Mais
                    </span>
                </a>
                <button className="btnTweetar">
                    Tweetar
                </button>
            </div>
            <div className="menuPerfil">
                <img src={fotoPerfil} alt="Foto de Perfil" />
                <div>
                    <p>
                        Riddle
                        <br />
                        <span>
                            @Riddle__2003
                        </span>
                    </p>
                    <MdMoreHoriz className="iconMenu" />
                </div>
            </div>
        </div>
    )
}