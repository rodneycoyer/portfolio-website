import * as React from "react";
import { Link } from "gatsby-theme-material-ui";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import Slide from "@mui/material/Slide";
import Typography from "@mui/material/Typography";

import ArchitectureIcon from '@mui/icons-material/Architecture';

// use gatsby for internal linking
const navigationLinks = [
  {id: 0, name: "about", href: "/about"},
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

export default function NavBarModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const containerRef = React.useRef(null);

  return (
    <div style={{marginLeft: "auto"}}>
      <IconButton onClick={handleOpen}>
        <ArchitectureIcon fontSize="large" color="primary"/>
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
          >
            <Grid
              container
              direction="column"
              ref={containerRef}
            >
              {navigationLinks.map((item) => (
                <Link
                  variant="button"
                  underline="none"
                  to={item.href}
                  key={item.id}
                >
                  <Slide
                    in={open}
                    container={containerRef.current}
                    direction="up"
                    timeout={{enter: 350}}
                  >
                    <Grid item p={2} mt={1} mb={1}>
                      <Button
                        fullWidth
                        size="large"
                        variant="outlined"
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