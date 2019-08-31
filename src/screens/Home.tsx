import * as React from "react";
import { makeStyles, Box, Typography, Button } from "@material-ui/core";
import { animated, useSpring, useChain } from "react-spring";

interface IProps {}

const Home: React.FC<IProps> = props => {
  const classes = useStyles();
  const initSpringRef = React.useRef();
  const initSpring = useSpring({
    width: "100%",
    ref: initSpringRef,
    from: { width: "0%" }
  });

  const bannerSpringRef = React.useRef();
  const bannerSpring = useSpring({
    height: 300,
    opacity: 1,
    ref: bannerSpringRef,
    from: { height: 0, opacity: 0 }
  });

  const heroSpringRef = React.useRef();
  const heroSpring = useSpring({
    left: 300,
    right: 0,
    opacity: 1,
    ref: heroSpringRef,
    from: { left: 300, right: 400, opacity: 0 }
  });

  useChain([initSpringRef, bannerSpringRef, heroSpringRef]);

  return (
    <animated.div className={classes.root} style={initSpring}>
      <Box display="flex" alignItems="center" height="100%" pl="50px">
        <animated.div className={classes.banner} style={bannerSpring}>
          <Typography>Photo shoot</Typography>
          <Box flex="1 1 0">
            <Typography>lorem ipsum</Typography>
          </Box>
          <Button variant="text">See all</Button>
        </animated.div>
        <animated.div className={classes.hero} style={heroSpring} />
      </Box>
    </animated.div>
  );
};

const useStyles = makeStyles({
  root: {
    background: "wheat",
    position: "absolute",
    right: 0,
    height: "100vh"
  },
  banner: {
    width: 400,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    background: "white",
    zIndex: 1
  },
  hero: {
    position: "absolute",
    zIndex: 0,

    height: "80%",
    background: "purple"
  }
});

export default Home;
