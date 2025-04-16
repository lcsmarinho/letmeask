import illustationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';
import { Button } from '../components/Button';
import  '../styles/auth.scss';


export function Home(){
    return(
        <div id="page-auth">
            <aside>
                <img src={illustationImg}  alt="Illustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div className='main-content'>
                <img src={logoImg} width="250" height="250" alt="Letmeask" />
                <button className='create-room'>
                    <img  src={googleIconImg} alt="Logo do Google" />
                    Criar sala com o Google
                </button>
                <div className='separator'>
                    ou entre em uma sala
                </div>
                <form>
                    <input 
                        type="text" 
                        placeholder='Digite o código da sala'
                    />
                    <Button type='submit'>
                        Submit para entrar na sala
                    </Button>
                </form>
                </div>
            </main>
        </div>
    )
}