import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import { useEffect, useState } from "react";
import SignUp from "./pages/SignUp"

function App() {
  const theme = createMuiTheme({
    // palette: {
    //   primary: {
    //     main: "#000",
    //   },
    // },
  });

  const [authenticator, setAuthenticator] = useState(false);
  const location = useLocation();
  const history = useHistory();
  const [users, setUsers] = useState([
    {
      name: "mohammad",
      password: "1234",
    },
    {
      name: "abdullah",
      password: "4321",
    },
  ]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/login">
            <Login users={users} setAuth={setAuthenticator} />
          </Route>
          <Route exact path="/signup">
            <SignUp users={users} setUsers = {setUsers} />
          </Route>
          <Route path="/">
            <Layout auth={authenticator}>
              <Route exact path="/">
                <Notes />
              </Route>
              <Route path="/create">
                <Create />
              </Route>
            </Layout>
          </Route>
        </Switch>
      </ThemeProvider>
    </>
  );
}

export default App;

// import { Switch, Route, useLocation, useHistory } from "react-router-dom";
// import Notes from "./pages/Notes";
// import Create from "./pages/Create";
// import { createMuiTheme, ThemeProvider } from "@material-ui/core";
// import Layout from "./pages/Layout";
// import Login from "./pages/Login";
// import { useEffect, useState } from "react";

// function App() {
//   const theme = createMuiTheme({
//     // palette: {
//     //   primary: {
//     //     main: "#000",
//     //   },
//     // },
//   });

//   const [authenticator, setAuthenticator] = useState(false);
//   const location = useLocation();
//   const history = useHistory();
//   const [users, setUsers] = useState([
//     {
//       name: "mohammad",
//       password: "1234",
//     },
//     {
//       name: "abdullah",
//       password: "4321",
//     },
//   ]);

//   useEffect(() => {
//     history.push("/login");
//   }, []);

//   return (
//     <>
//       <ThemeProvider theme={theme}>
//         <Switch>
//           {authenticator ? (
//             <Route path="/">
//               <Layout auth = {authenticator}>
//                 <Route exact path="/">
//                   <Notes />
//                 </Route>
//                 <Route path="/create">
//                   <Create />
//                 </Route>
//               </Layout>
//             </Route>
//           ) : null}

//           <Route exact path="/login">
//             <Login users={users} setAuth={setAuthenticator} />
//           </Route>
//         </Switch>
//       </ThemeProvider>
//     </>
//   );
// }

// export default App;
