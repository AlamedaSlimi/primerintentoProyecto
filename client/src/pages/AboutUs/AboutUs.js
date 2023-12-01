import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import aboutus from "./aboutus.jpg"

import "./AboutUs.scss"

const AboutUs = () => {
    return (
        <section className="about">
        <h2 className="about__title">Sobre nosotros</h2>

        <div className="about__details">

        <div className="about__left">
        <h3 className="about__mainlefttitle">Un viaje filosófico colectivo hacia la comprensión profunda.</h3>
                <p className="about__paragraph">Bienvenidos a nuestro rincón de reflexión, donde la búsqueda del conocimiento se entrelaza con la pasión por la filosofía. En este espacio, nos sumergimos en las corrientes del pensamiento, explorando las profundidades de las grandes ideas que han dado forma a la humanidad. Somos un colectivo de pensadores apasionados que buscan desentrañar los misterios de la existencia y compartir las revelaciones que surgen en el camino. Únete a nosotros mientras navegamos por las aguas de la filosofía, desafiando las convenciones y ampliando los horizontes de la comprensión humana. Juntos, aspiramos a fomentar un diálogo enriquecedor que inspire, cuestione y celebre la maravilla del pensamiento filosófico. ¡Bienvenidos a nuestro viaje intelectual!</p>
                <div className="about__social">
            <FontAwesomeIcon className="about__socialicons" icon={faInstagram} />
            <FontAwesomeIcon className="about__socialicons" icon={faLinkedin} />
            <FontAwesomeIcon className="about__socialicons" icon={faTwitter} />
            </div>
            </div>
        
        </div>
            
        </section>
    )
}

export default AboutUs;
