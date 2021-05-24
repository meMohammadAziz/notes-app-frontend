import {
    Typography,
    Button,
    TextField,
    ListItem,
    List,
    ListItemText,
  } from "@material-ui/core";
  import { makeStyles } from "@material-ui/styles";
  import { useState } from "react";
  import { useHistory, useLocation } from "react-router";
  import { Link } from "react-router-dom";
  
  
  
  const iconsSize = 40;
  const useStyles = makeStyles({
    cover: {
      background: "rgb(255, 255, 255)",
      height: "100vh",
      background: "rgb(194,194,194)",
      background: "rgb(172,172,172)",
      background:
        " linear-gradient(90deg, rgba(172,172,172,1) 0%, rgba(206,223,226,1) 49%, rgba(138,176,185,1) 100%)",
    },
    main: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "80vh",
    },
    Innermain: {
      textAlign: "center",
      boxShadow:
        "12px 12px 16px 0 rgba(0, 0, 0, 0.25),-8px -8px 12px 0 rgba(255, 255, 255, 0.3)",
      padding: "60px 50px",
      borderRadius: 5,
    },
    title: {
      paddingBottom: 20,
    },
    btnContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "start",
      marginTop: 20,
    },
    btn: {
      width: "100%",
    },
    Textfield: {
      width: "100%",
    },
    li: {
      padding: "6px 0",
    },
  });
  
  
  const SignUp = ({ users, setUsers }) => {
      const classes = useStyles();
      const [name, setName] = useState();
      const [password, setPassword] = useState();
      const [toggler, setToggler] = useState(false);
      const history = useHistory()
      
    const onSubmit = (e) => {
      e.preventDefault();
      //  console.log(name, password)
  
      users.forEach((user) => {
          
        if (user.name === name && user.password === password) {
            alert('Already have an account')
        } else {
          //  alert('Incorrect username or password')
          setUsers([...users, {name : name, password : password}])
          history.push('/login')
        }
      });
    };
  
   
  
    return (
      <div className={classes.cover}>
        <div className={classes.main}>
          <div className={classes.Innermain}>
            <div className={classes.title}>
              <Typography variant="h2">Sign Up</Typography>
            </div>
            <form onSubmit={(e) => onSubmit(e)}>
              <List>
                <ListItem className={classes.li}>
                  {/* <ListItemIcon> */}
                  {/* <AccountCircleIcon style={{ fontSize: iconsSize }} /> */}
                  {/* </ListItemIcon> */}
                  <ListItemText>
                    {toggler ? (
                      <TextField
                        error
                        required
                        className={classes.Textfield}
                        variant="outlined"
                        label="Name"
                        onChange={(e) => setName(e.target.value)}
                      ></TextField>
                    ) : (
                      <TextField
                        required
                        className={classes.Textfield}
                        variant="outlined"
                        label="Name"
                        onChange={(e) => setName(e.target.value)}
                      ></TextField>
                    )}
                  </ListItemText>
                </ListItem>
                <ListItem className={classes.li}>
                  {/* <ListItemIcon> */}
                  {/* <VpnKeyIcon style={{ fontSize: iconsSize }} /> */}
                  {/* </ListItemIcon> */}
                  <ListItemText>
                    {toggler ? (
                      <TextField
                        error
                        type="password"
                        required
                        className={classes.Textfield}
                        variant="outlined"
                        label="Password"
                        onChange={(e) => setPassword(e.target.value)}
                      ></TextField>
                    ) : (
                      <TextField
                        type="password"
                        required
                        className={classes.Textfield}
                        variant="outlined"
                        label="Password"
                        onChange={(e) => setPassword(e.target.value)}
                      ></TextField>
                    )}
                  </ListItemText>
                </ListItem>
              </List>
              <div className={classes.btnContainer}>
                <Button
                  type="submit"
                  className={classes.btn}
                  variant="contained"
                  color="primary"
                >
                  Submit
                </Button>
              </div>
            </form>
            <Typography>Already have an account ? <Link to = '/login'>Login</Link></Typography>
          </div>
        </div>
      </div>
    );
  };
  
  export default SignUp;
  