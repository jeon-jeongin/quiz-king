import logoImg from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img src={logoImg} alt="퀴즈 로고이미지" />
      <h1>퀴즈왕</h1>
    </header>
  );
}
