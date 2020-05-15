import React, { useState } from 'react';
import { Tabs, Tab, Grid, TextField, LinearProgress, Typography, Paper, Button } from '@material-ui/core';
import Comic from './comic';


const Details = (props) => {
    const [Value, setValue] = useState(0);

    const handleChange=(e, newValue)=>{
        setValue(newValue);
    }

    const handleCardClick=() =>{}
    
    const {biography, powerstats, appearance, work, connections}=props;
    return (
      <div>
        <Grid container justify="space-between" direction="row" style={{width: "55%"}}>
        <Button style={{margin: "1%"}} variant="outlined" onClick={()=>props.handleDetails()}>  
           BACK
        </Button>
        <h1 style={{textAlign: "center"}}>{props.name}</h1>
        </Grid>
        <Paper square>
          <Tabs
            value={Value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="Biography" />
            <Tab label="PowerStatus" />
            <Tab label="Appearance" />
            <Tab label="Work" />
            <Tab label="Connections" />
          </Tabs>
        </Paper>
        {/* ==============================Biography=============================== */}
        {Value === 0 && (
          <Grid container justify="space-between"  direction="row">
          <Grid container style={{ padding: "1%", width:"60%" }} direction="column">
            <TextField
              style={{ margin: "1%" }}
              fullWidth
              id="outline-basics"
              variant="outlined"
              value={biography["full-name"] ? biography["full-name"] : "N/A"}
              label="Full Name"
              disabled
            />
            <TextField
              style={{ margin: "1%" }}
              fullWidth
              id="outline-basics"
              variant="outlined"
              value={biography["place-of-birth"]}
              label="Place Of Birth"
              disabled
            />
            <TextField
              style={{ margin: "1%" }}
              fullWidth
              id="outline-basics"
              variant="outlined"
              value={biography["publisher"]}
              label="Publisher"
              disabled
            />
            <TextField
              style={{ margin: "1%" }}
              fullWidth
              id="outline-basics"
              variant="outlined"
              value={biography["aliases"].join(", ")}
              label="Aliases"
              disabled
            />
          </Grid>
          <Grid item style={{padding: "1%"}}>
              <Comic handleCardClick={handleCardClick} {...props} />
            </Grid>
          </Grid>
        )}
        {/* ==================================PowerStats=============================== */}
        {Value === 1 && (
          <Grid container direction="row" justify="space-between">
          <Grid container direction="column" style={{width: "60%"}}>
            <Grid direction="row" style={{ margin: "1%" }}>
              <Typography style={{ fontStyle: "italic" }}>
                Intelligence:
              </Typography>
                <LinearProgress
                  style={{ height: "10px" }}
                  color={powerstats.intelligence <50 ? "secondary" : "primary"}
                  variant="determinate"
                  value={powerstats.intelligence}
                />
            </Grid>

            <Grid direction="row" style={{ margin: "1%" }}>
              <Typography style={{ fontStyle: "italic" }}>Strength:</Typography>
                <LinearProgress
                  style={{ height: "10px" }}
                  color={powerstats.strength <50 ? "secondary" : "primary"}
                  variant="determinate"
                  value={powerstats.strength}
                />
            </Grid>

            <Grid direction="row" style={{ margin: "1%" }}>
              <Typography style={{ fontStyle: "italic" }}>Speed:</Typography>
                <LinearProgress
                  style={{  height: "10px" }}
                  color={powerstats.speed <50 ? "secondary" : "primary"}
                  variant="determinate"
                  value={powerstats.speed}
                />
            </Grid>

            <Grid direction="row" style={{ margin: "1%" }}>
              <Typography style={{ fontStyle: "italic" }}>
                Durability:
              </Typography>
                <LinearProgress
                  style={{ height: "10px" }}
                  color={powerstats.durability <50 ? "secondary" : "primary"}
                  variant="determinate"
                  value={powerstats.durability}
                />
            </Grid>

            <Grid direction="row" style={{ margin: "1%" }}>
              <Typography style={{ fontStyle: "italic" }}>Power:</Typography>
              
                <LinearProgress
                  style={{  height: "10px" }}
                  color={powerstats.power <50 ? "secondary" : "primary"}
                  variant="determinate"
                  value={powerstats.power}
                />
            </Grid>

            <Grid direction="row" style={{ margin: "1%" }}>
              <Typography style={{ fontStyle: "italic" }}>Combat:</Typography>
                <LinearProgress
                  style={{ height: "10px" }}
                  color={powerstats.combat <50 ? "secondary" : "primary"}
                  variant="determinate"
                  value={powerstats.combat}
                />
              </Grid>
          </Grid>
          <Grid item style={{padding: "1%"}}>
              <Comic handleCardClick={handleCardClick} {...props} />
            </Grid>
          </Grid>
        )}
        {/* =====================================Appearance=============================== */}
        {Value === 2 && (
          <Grid container direction="row" justify="space-between">
          <Grid
            container
            style={{ padding: "1%", width: "50%" }}
            direction="column"
          >
            <Grid container justify="space-between" direction="row">
              <TextField
                style={{ margin: "1%", width: "30%" }}
                id="outline-basics"
                variant="outlined"
                value={appearance.gender}
                label="Gender"
                disabled
              />
              <TextField
                style={{ margin: "1%", width: "30%" }}
                id="outline-basics"
                variant="outlined"
                value={appearance.race}
                label="Race"
                disabled
              />
            </Grid>

            <Grid container justify="space-between" direction="row">
              <TextField
                style={{ margin: "1%", width: "30%" }}
                id="outline-basics"
                variant="outlined"
                value={appearance.height[0] / appearance.height[1]}
                label="Height"
                disabled
              />
              <TextField
                style={{ margin: "1%", width: "30%" }}
                id="outline-basics"
                variant="outlined"
                value={appearance.weight[0] / appearance.weight[1]}
                label="Weight"
                disabled
              />
            </Grid>

            <Grid container justify="space-between" direction="row">
              <TextField
                style={{ margin: "1%", width: "30%" }}
                id="outline-basics"
                variant="outlined"
                value={appearance["hair-color"]}
                label="Hair Color"
                disabled
              />
              <TextField
                style={{ margin: "1%", width: "30%" }}
                id="outline-basics"
                variant="outlined"
                value={appearance["eye-color"]}
                label="Eye Color"
                disabled
              />
            </Grid>
          </Grid>
          <Grid item style={{padding: "1%"}}>
              <Comic handleCardClick={handleCardClick} {...props} />
            </Grid>
          
          </Grid>
        )}
        {Value === 3 && (
          <Grid container direction="row" justify="space-between">
          <Grid container style={{ padding: "1%", width: "60%" }} direction="column">
            <TextField
              style={{ margin: "1%" }}
              fullWidth
              id="outline-basics"
              variant="outlined"
              value={work.occupation}
              label="Occupation"
              disabled
            />
            <TextField
              style={{ margin: "1%" }}
              fullWidth
              id="outline-basics"
              variant="outlined"
              value={work.base}
              label="Base Station"
              disabled
            />
          </Grid>
          <Grid item style={{padding: "1%"}}>
              <Comic handleCardClick={handleCardClick} {...props} />
            </Grid>
          </Grid>
        )}

        {Value === 4 && (
          <Grid container direction="row" justify="space-between">
          <Grid container style={{ padding: "1%", width: "60%" }} direction="column">
            <TextField
              style={{ margin: "1%" }}
              fullWidth
              id="outline-basics"
              variant="outlined"
              value={connections["group-affiliation"]}
              label="Group Affiliation"
              disabled
            />
            <TextField
              style={{ margin: "1%" }}
              fullWidth
              id="outline-basics"
              variant="outlined"
              value={work.relatives ? work.relatives : "N/A"}
              label="Relatives"
              disabled
            />
          </Grid>
          <Grid item style={{padding: "1%"}}>
              <Comic handleCardClick={handleCardClick} {...props} />
            </Grid>
          </Grid>
        )}
      </div>
    );
}
 
export default Details;