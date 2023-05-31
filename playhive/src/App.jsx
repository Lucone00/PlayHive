import ProfileBanner from "./components/ProfileBanner";
import Error404 from './components/Error404.jsx'
import NewPost from "./components/NewPost";
function App() {
  return (
    <>
      <ProfileBanner />
      <Error404/>
      <NewPost/>
    </>
  );
}

export default App;
