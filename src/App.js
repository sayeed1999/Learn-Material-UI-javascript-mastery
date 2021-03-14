import React from 'react'
import { Typography, Card, CardMedia, CardActions, CardContent, CssBaseline, AppBar, Grid, Toolbar, Container, Button, ButtonGroup } from '@material-ui/core'
import { PhotoCamera } from '@material-ui/icons'
import useStyles from './styles'

const items = [1,2,3,4,5,6,7,8,9];

function App() {

  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <PhotoCamera className={classes.icon}/>
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>Photo Album</Typography>
            <Typography variant="h5" align="center" color="textSecondary" gutterBottom>Hello Everyone! Welcome to your favourite Apex Footwear Online Shop! Have a nice day! :)</Typography>
            
            <div className={classes.buttons}> {/* We do positioning & responsive design in material UI using Grid component! */}
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    See my Photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary Action
                  </Button>
                </Grid>
              </Grid>
            </div>

          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
          {items.map((item) => (
            <Grid item key={item} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia className={classes.cardMedia} image="https://source.unsplash.com/random" title="image title" />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5">
                    Heading
                  </Typography>
                  <Typography>
                    this.is a media card you can use this section to describe the content
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="sm" variant="text" color="primary">View</Button>
                  <Button size="sm" variant="text" color="secondary">Edit</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center">
            Footer &copy; Javascript Mastery!
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
            Lalalalalalalalala.....
        </Typography>
      </footer>
    </>
  )
}

export default App;
