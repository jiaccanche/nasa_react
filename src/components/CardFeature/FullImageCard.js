import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import withStyles from "@material-ui/core/styles/withStyles";
import { makeStyles } from "@material-ui/styles";

export const FiCard = withStyles({
  root: {
    position: "relative"
  }
})(Card);

export const FiCardActionArea = withStyles({
  root: {
    position: "relative"
  }
})(CardActionArea);

export const FiCardActions = withStyles({
  root: {
    position: "relative"
  }
})(CardActions);

export const FiCardContent = withStyles({
  root: {
    position: "relative",
    backgroundColor: "transparent"
  }
})(CardContent);

export const FiCardMedia = withStyles({
  root: {
    backgroundColor: "rgba(0,0,0,.24)",
    position: "absolute",
    top: 0,
    right: 0,
    height: "100%",
    width: "100%"
  }
})(CardMedia);

// --- Style --- //
export const cardFeatureStyle = makeStyles({

  card: {
    margin:"1em",
    minWidth: 350,
    minHeight:350,
    overflow:"hidden",
    display:"flex",
    justifyContent:"flex-end",
    flexDirection:"column"
  },

  fiCardContent: {
    width:"100%",
    color: "#ffffff"
  },
  fiCardContentTextSecondary: {
    color: "rgba(255,255,255,0.78)",
  }
});

export default {
  FiCard,
  FiCardActionArea,
  FiCardActions,
  FiCardContent,
  FiCardMedia
};
