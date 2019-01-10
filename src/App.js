import React, { Component } from 'react';
import { AppBar, Button, FormControl, FormLabel, FormGroup, Checkbox, FormControlLabel, Tab, Tabs, Typography, Paper } from '@material-ui/core';
import './App.css';
import 'typeface-roboto';

function Paperi() {
  return (
    <Paper elevation={1}>
      <Typography variant="h5" component="h3">
        Data goes here, right?
        </Typography>
      <Typography component="p">
        Data data blah blah
        </Typography>
    </Paper>
  );
}

function Paperi2() {
  return (
    <Paper elevation={1}>
      <Typography variant="overline" align="left" gutterBottom>
        INSERT INTO table (student_number, first_name, surname, birth_date, gender, email, street, city, postcode) VALUES
(sn-010, Kaija, Pervo, undefined, Kaikukatu 35, 00400, Helsinki, 1, sn-010@outlook.com),
(sn-010, Nyyrikki, Laakso, undefined, Karinkuja 37, 21200, Turku, 1, sn-010@gmail.com),
(sn-010, Lassi, Huopainen, undefined, Linnunniitty 39, 01200, Vantaa, 2, sn-010@takkula.fi),
(sn-010, Rauha, Kukri, undefined, Lohipolku 44, 21330, Turku, 2, sn-010@outlook.com),
(sn-010, Sini, Kustula, undefined, Tammikuja 2, 02920, Espoo, 2, sn-010@outlook.com),
(sn-010, Mira, Kirkko-Jaakkola, undefined, Ruisniitty 39, 33100, Tampere, 1, sn-010@hotmail.com),
(sn-010, Aslak, Alapuro, undefined, Kaikuniitty 38, 20520, Turku, 1, sn-010@takkula.fi),
(sn-010, Jaakkima, Annunen, undefined, Vaakarinne 28, 21200, Turku, 2, sn-010@hotmail.com),
(sn-010, Maila, Pehkonen, undefined, Ruisrinne 38, 20900, Turku, 2, sn-010@gmail.com),
(sn-010, Kerttuli, Marko, undefined, Karhukuja 19, 01710, Vantaa, 2, sn-010@gmail.com);
        </Typography>
    </Paper>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      test: false,
      firstname: false,
      lastname: false,
      birthdate: false
    }
  }

  handleChange = (event, newValue) => {
    this.setState({ value: newValue })
  }

  handleCheckBox  = (event) => {
    this.setState({[event.target.name]: event.target.checked})
  }

  render() {
    return (
      <div className="App">
        <div className="columns">
        {/*<Button variant="contained" onClick={this.test} >
          Default
    </Button>*/}
          <FormControl required component="fieldset" >
            <FormLabel component="legend">Pick columns</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox onChange={this.handleCheckBox} name="firstname" />}
                label="First name"
              />
              <FormControlLabel
                control={<Checkbox onChange={this.handleCheckBox} name="lastname" />}
                label="Last name"
              />
              <FormControlLabel
                control={
                  <Checkbox onChange={this.handleCheckBox} name="birthdate" />
                }
                label="Birth date"
              />
            </FormGroup>
          </FormControl>
        </div>
        <div className="main">
          <Typography variant="h2" align="left" gutterBottom>
            h1. Heading
      </Typography>
          <AppBar position="static">
            <Tabs value={this.state.value} onChange={this.handleChange}>
              <Tab label="Item One" />
              <Tab label="Item Two" />
              <Tab label="Item Three" />
            </Tabs>
          </AppBar>
          {this.state.value === 0 && <Paperi />}
          {this.state.value === 1 && <Paperi2 />}
        </div>
      </div>
    );
  }
}

export default App;


/*

  Typography
  Paper
  Tabs
  Menus
  Selection Controls
  Buttons


*/