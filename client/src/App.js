import React from 'react';
import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';

import Posts from './components/posts/Posts';
import Form from './components/form/Form';
import success from './images/success.png';

const App = () => {
    return(
        <Container maxWidth = "lg">
            <AppBar position = "static" color = "inherit">
                <Typography variant="h2" align = "center">Success Stories</Typography>
                <img src={success} alt = "success" height = "60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify = "space-between" alignItems = "stretch" spacing = {3}>
                        <Grid item xs = {12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs = {12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;