import { useContext } from "react"
import ReactDOM from "react-dom/client";
const UserContext = createContext()
const Usecontext = () => {
    const [user, setUser] = useState("Jesse Hall");

    return (
      <UserContext.Provider value={user}>
        <h1>{`Hello ${user}!`}</h1>
        <Calendrier user={user} />
      </UserContext.Provider>
    );
}
export default Usecontext
