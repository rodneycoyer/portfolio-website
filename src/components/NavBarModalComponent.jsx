import React from "react";
import { Link } from "gatsby";
import {
    Backdrop, Box, Button,
  Modal, Fade, makeStyles,
  Grid, Typography, Slide
} from "@material-ui/core";

const styleModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "black",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

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

const navigationLinks = [
  {id: 0, name: "about", href: "/"},
  {id: 1, name: "projects", href: "/projects"},
  {id: 2, name: "contact", href: "/"},
];

export default function NavBarModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const containerRef = React.useRef(null);
  const styles = useStyles();

  return (
    <div>
      <Button onClick={handleOpen}> Menu </Button>
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
            style={{ borderRadius: 8 }}
            ref={containerRef}
          >
              <Grid container direction="column" spacing={4}>
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
                        direction="up"
                        container={containerRef.current}
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