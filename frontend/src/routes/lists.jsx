import Header from "../components/header";
import List from "../components/list";
import NoLists from "../components/noLists";

export default function Lists() {
  return (
    <>
      <Header />
      <div className="mx-3 mx-md-5">
        {/* This component will appear when there is no list to show */}
        <NoLists />

        {/* This component shows how a single list looks like */}
        <List />
        <List />
      </div>
    </>
  );
}
