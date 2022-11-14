import { BsFillKeyboardFill, BsLinkedin, BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-dark d-flex p-4 footer gap-5 mt-4">
      <div className="d-flex flex-column align-items-center">
        <h2>Developers</h2>
        <BsFillKeyboardFill color="aliceblue" size={50} />
      </div>

      <div className="d-flex justify-content-around col-7">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <p>Aluno</p>
          <p>Vinicius Kayo</p>
          <div className="d-flex flex-column gap-3">
            <BsGithub size={40} />
            <BsLinkedin size={40} />
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <p>Aluno</p>
          <p>Raúl Gomes</p>
          <div className="d-flex flex-column gap-3">
            <BsGithub size={40} />
            <BsLinkedin size={40} />
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <p>Aluno</p>
          <p>Lucas Rocha</p>
          <div className="d-flex flex-column gap-3">
            <BsGithub size={40} />
            <BsLinkedin size={40} />
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <p>Aluno</p>
          <p>Raphael Monteiro</p>
          <div className="d-flex flex-column gap-3">
            <BsGithub size={40} />
            <BsLinkedin size={40} />
          </div>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center mx-auto">
        <p>Professor</p>
        <p>Diogo</p>
        <div className="d-flex flex-column gap-3">
          <BsGithub size={40} />
          <BsLinkedin size={40} />
        </div>
      </div>
    </footer>
  );
}
