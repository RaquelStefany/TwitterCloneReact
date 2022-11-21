import { BiSearch } from 'react-icons/bi'

export function Assuntos(){
    return (
        <div className="assuntos">
            <div className="pesquisa">
                <BiSearch className='icon'/>
                <input type="text" name="txtPesquisa" id="txtPesquisa" />
            </div>
        </div>
    )
}