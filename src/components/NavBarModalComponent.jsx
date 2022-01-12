
import * as React from "react";
import { Link } from "gatsby";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import { makeStyles } from "@mui/styles";
import Modal from "@mui/material/Modal";
import Slide from "@mui/material/Slide";
import Typography from "@mui/material/Typography";

import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";

// use gatsby for internal linking
const navigationLinks = [
  {id: 0, name: "about", href: "/"},
  {id: 1, name: "projects", href: "/projects"},
  {id: 2, name: "contact", href: "/"},
];
// nav modal
const styleModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "black",
  border: "2px solid #000",
  borderRadius: "10px",
  boxShadow: 24,
  p: 2,
};
// nav link containers
const useStyles = makeStyles((theme) => ({
  link: {
    marginLeft: 20,
    marginTop: 25,
    marginRight: 20,
    marginBottom: 25,
    "&:hover": {
        color: "#d50000"
    },
  }
}));

export default function NavBarModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const containerRef = React.useRef(null);
  const styles = useStyles();

  return (
    <div style={{marginLeft: "auto"}}>
      <IconButton onClick={handleOpen}>
        <ExploreOutlinedIcon fontSize="large" color="secondary"/>
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        disableScrollLock
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box
            sx={styleModal}
            ref={containerRef}
          >
            <Grid container direction="column" >
              {navigationLinks.map((item) => (
                <Link
                  className={styles.link}
                  color="textPrimary"
                  variant="button"
                  underline="none"
                  href={item.href}
                >
                  <Slide
                    in={open}
                    container={containerRef.current}
                    direction="up"
                    timeout={{enter: 350}}
                  >
                    <Grid item>
                      <Button
                        variant="outlined"
                        color="secondary"
                        size="large"
                        fullWidth
                        style={{padding: 30}}
                      >
                        <Typography variant="button-text" component="h1">
                          {item.name}
                        </Typography>
                      </Button>
                    </Grid>
                  </Slide>
                </Link>
              ))}
            </Grid>
			    </Box>
        </Fade>
      </Modal>
    </div>
  );
}