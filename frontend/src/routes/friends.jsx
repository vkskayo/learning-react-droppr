import Header from "../components/header";
import UserPhoto from "../components/userphoto";

export default function Friends() {
  return (
    <>
      <Header />
      <div className="d-flex flex-column my-5">
        <UserPhoto />
        <UserPhoto />
        <UserPhoto />
      </div>
    </>
  );
}
