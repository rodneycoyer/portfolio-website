import React from "react";
import {
    Backdrop, Box, Button,
    Modal, Fade, makeStyles, Grid
} from "@material-ui/core";
import Link from "@material-ui/core/Link";

const styleModal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: 500,
  width: 400,
  bgcolor: 'black',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const useStyles = makeStyles((theme) => ({
  link: {
    marginTop: 30,
    "&:hover": {
        color: '#d50000'
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
  const styles = useStyles();

  return (
    <div>
      <Button onClick={handleOpen}> Menu </Button>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
			    <Box sx={styleModal}>
            <Grid container direction="column" spacing={2}>
                {navigationLinks.map((item) => (
                  <Link
                    className={styles.link}
                    color="textPrimary"
                    variant="button"
                    underline="none"
                    href={item.href}
                  >
                    <Grid item>
                      <Button
                        variant="outlined"
                        color="primary"
                        size="large"
                        fullWidth
                      >
                        {item.name}
                      </Button>
                    </Grid>
                  </Link>
                ))}
            </Grid>
			    </Box>
        </Fade>
      </Modal>
    </div>
  );
}