import React, { useState } from "react";
import {
  Button,
  Typography,
  Container,
  makeStyles,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@material-ui/core";
import KeyboardArrowRightRoundedIcon from "@material-ui/icons/KeyboardArrowRightRounded";
import { useHistory } from "react-router-dom";

export default function Create() {
  const useStyles = makeStyles({
    field: {
      display: "block",
      marginBottom: 20,
      marginTop: 20,
    },
  });

  const history = useHistory();
  const [title, setTitle] = useState("");
  const [details, setDes] = useState("");
  const [titleErr, setTitleErr] = useState(false);
  const [desErr, setDesErr] = useState(false);
  const [category, setCatagory] = useState("todos");

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitleErr(false);
    setDesErr(false);

    if (title === "") {
      setTitleErr(true);
    }
    if (details === "") {
      setDesErr(true);
    }

    if (title && details) {
      console.log(title, details, category);
      fetch("http://localhost:8000/notes", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ title, details, category }),
      }).then(history.push("/"));
    }
  };

  const classes = useStyles();
  return (
    <Container style={{ height: "84vh" }}>
      <Typography
        color="textSecondary"
        variant="h6"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          label="Title"
          variant="outlined"
          fullWidth
          required
          error={titleErr}
        />
        <TextField
          onChange={(e) => setDes(e.target.value)}
          className={classes.field}
          label="Des"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          error={desErr}
          required
        />
        <FormControl className={classes.field}>
          <FormLabel>Notes Catagory </FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCatagory(e.target.value)}
          >
            <FormControlLabel value="money" control={<Radio />} label="Money" />
            <FormControlLabel value="todos" control={<Radio />} label="Todos" />
            <FormControlLabel
              value="reminder"
              control={<Radio />}
              label="Reminder"
            />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </RadioGroup>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            endIcon={<KeyboardArrowRightRoundedIcon />}
          >
            Submit
          </Button>
        </FormControl>
      </form>
    </Container>
  );
}

// <Typography variant = 'h1' color = 'primary' align = 'center'>
//   Create a New Note
// </Typography>
// <Typography gutterBottom = 'true' noWrap color = 'secondary'>
//   Quis adipisicing cupidatat officia non proident et mollit nostrud eiusmod laborum. Occaecat veniam non cupidatat incididunt dolor sit anim consectetur velit duis nostrud. Et enim ex Lorem id cupidatat reprehenderit cupidatat proident.
// </Typography>
