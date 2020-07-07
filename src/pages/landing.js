import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Card from '../components/cards.js'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
            <Card/>
        </Grid>
        <Grid item xs={4}>
            <Card/>
        </Grid>
        <Grid item xs={4}>
            <Card/>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div>
        <div style={{float: "left", width: "50%"}}>
            <div className="flexBox">
                <p>Logo</p>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <a href="signin"><button type="button">Sign In</button></a>
                    <a href="signup"><button type="button">Sign Up</button></a>
                </div>
                <h2>Welcome!</h2>
                <form>
                <input
                    type="text"
                    placeholder="Full Name"
                    />
                <br/>
                <input
                    type="email"
                    placeholder="Email"
                    />
                <br/>
                <input
                    type="password"
                    placeholder="Password"
                    />
                <p>BIRTHDATE</p>
                <input
                    type="date"
                    />
                <p>Gender</p>
                    <input type="radio" id="male" name="gender" value="male"/>
                    <label for="male">Male</label>
                    <input type="radio" id="female" name="gender" value="female"/>
                    <label for="female">Female</label> &nbsp;
                    <input type="text" id="other" name="gender" placeholder="other"/>
                <p>ZipCode</p>
                <input
                    type="text"
                    />
                <br/><br/>
                <input type="checkbox" id="terms.agreement" name="terms.agreement" value="Reviewed"/>
                <label for="terms.agreement"> Reviewed Terms & Agreement</label><br/>
                <input type="checkbox" id="privacy.policy" name="privacy.policy" value="Reviewerd"/>
                <label for="privacy.policy"> Reviewerd Privacy Policy</label><br/><br/>
                <input
                    type='submit'
                    value="Sign Up"
                />
                </form>
            </div>
        </div>
        <div style={{float: "right", width: "50%"}}>
            <div className={classes.root}>
                <Grid container spacing={1}>
                    <Grid container item xs={12} spacing={3}>
                    <FormRow />
                    </Grid>
                    <Grid container item xs={12} spacing={3}>
                    <FormRow />
                    </Grid>
                    <Grid container item xs={12} spacing={3}>
                    <FormRow />
                    </Grid>
                </Grid>
            </div>
            
        </div>
        
    </div>
  );
}