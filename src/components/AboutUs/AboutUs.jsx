import './AboutUs.css'; 
import Programando from './programando.gif';

const AboutUs = () => {
  return (
        <section className="about-section">
          <div className="about-container">
            <h1>Curso-React</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem fuga qui ipsa voluptas omnis aspernatur porro illum repellat alias veritatis nihil architecto maiores officia rerum, tempore deleniti tenetur deserunt similique!
            </p>
            <div className="about-team">
              <div className="about-team-member">
                <img src={Programando} className='img-programando' />
                <h3>Lucas</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo distinctio a iure illo doloribus neque, error voluptates aspernatur quo assumenda porro nisi tenetur totam labore exercitationem sapiente id dolor inventore!</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis porro nobis repellat assumenda, aut consectetur omnis magnam. Officiis ullam molestias possimus cumque, est, aut dolorum amet nemo sapiente ad reiciendis.
                </p>
              </div>
            </div>
          </div>
        </section>
      );
    };

export default AboutUs;
