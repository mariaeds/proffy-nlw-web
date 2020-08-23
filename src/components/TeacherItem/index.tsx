import React from 'react';
import './style.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';


export interface Teacher{
    subject : string;
    cost: number;
    id: number;
    name: string;
    avatar: string
    whatsapp: string;
    bio: string
}

interface TeacherItemProps{
    teacher: Teacher;
}

const Teacheritem : React.FC<TeacherItemProps>  = ({ teacher }) => {
    function createNewConnection(){
        api.post('connections',{
            user_id : teacher.id
        })
    }

    return(
        <article className="teacher-item">
        <header>
            <img src={teacher.avatar} alt={teacher.name}/>
            <div>
                <strong>{teacher.name}</strong>
                <span>{teacher.subject}</span>
            </div>
        </header>
        <p>
            {teacher.bio}
        </p>
        <footer>
            <p>Preco/hora
            <strong>{teacher.cost}</strong>
            </p>
            <a target="_blanck" onClick={createNewConnection} href={`https://wa.me/${teacher.whatsapp}`}>
                <img src={whatsappIcon} alt="whatsapp"/>
                Entrar em contato
            </a>
        </footer>
    </article>
    );
}

export default Teacheritem;