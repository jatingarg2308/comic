import React from "react";
import Card from "@material-ui/core/Card";
import {
  CardHeader,
  CardContent,
  Chip,
  Grid,
  Typography,
  CardMedia,
  CardActionArea,
} from "@material-ui/core";

const Comic = (props) => {
  
  return (
    <div key={props.id} onClick={()=> props.handleCardClick(props.id)} style={{padding: "0.5%"}}>
      <Card key={props.id} style={{ width: "255px", height: "255px" }}>
        <CardActionArea key={props.id}>
          <CardMedia
            style={{height: "100px" }}
            image={props.image.url}
          />
          <CardHeader title={props.name} subheader={`Publisher: ${props.biography.publisher}`} />
          <CardContent>
            <Grid container wrap="nowrap" justify="space-between" direction="row" style={{ width: "100%", marginTop: '-15px' }}>
              <Grid item  style={{ width: "65%", fontSize: "13px" }}>
                <Typography variant="body2" color="textSecondary" component="p">
                  Height: {props.appearance['height'][1]==="0 cm" ? "N/A" : props.appearance['height'][1]}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Weight: {props.appearance['weight'][1]==="0 kg" ? "N/A" : props.appearance['weight'][1]}
                </Typography>
  
              </Grid>
              <Grid item>
                {props.biography.alignment === "good" ? (
                  <Chip label="SuperHero" size="small" color="primary" />
                ) : (
                  <Chip label="SuperVillian" size="small" color="secondary" />
                )}
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Comic;
