import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { DeleteOutline } from "@material-ui/icons";
import { makeStyles, Avatar } from "@material-ui/core";
import { blue, green, pink, red, yellow } from "@material-ui/core/colors";

const useStyles = makeStyles({
  cardbg: {
    background: " rgba( 255, 255, 255, 0.25 )",
    boxShadow: " 0 8px 32px 0 rgba( 31, 38, 135, 0.27 )",
    borderRadius: " 10px",
    border: " 1px solid rgba( 255, 255, 255, 0.18 )",
    transition: "transform 100ms",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  card: {
    backgroundColor: (note) => {
      if (note.category == "work") {
        return yellow[700];
      }
      if (note.category == "reminders") {
        return red[600];
      }
      if (note.category == "todos") {
        return green[500];
      }
      if (note.category == "money") {
        return blue[500];
      }

      return pink[500];
    },
  },
});

const NoteCard = ({ note, onDelete }) => {
  const classes = useStyles(note);
  return (
    <div>
      <Card className={classes.cardbg} elevation={1}>
        <CardHeader
          avatar={
            <Avatar className={classes.card}>
              {note.category[0].toUpperCase()}
            </Avatar>
          }
          title={note.title}
          subheader={note.category}
          action={
            <IconButton onClick={() => onDelete(note.id)}>
              <DeleteOutline />
            </IconButton>
          }
        />

        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default NoteCard;
