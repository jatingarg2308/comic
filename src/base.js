import React, { Component } from 'react';
import Comic from './pages/comic';
import { Grid, CircularProgress, TextField, Button } from '@material-ui/core';
import Details from './pages/details';
import _ from 'lodash';
import axios from 'axios';

const apiEndPoint="https://www.superheroapi.com/api.php/10220045643565165"

class Base extends Component {
    state={
        details: [],
        allpost: [],
        post: [],
        search: '',
        loader: true,
        start: 1,
        end: 10
    }

    async componentDidMount() {
        this.setState({loader: true, post:[]})
        let post=[];
        let allpost=this.state.allpost;
        for(let i=this.state.start; i<=this.state.end; i++){
           const {data}=await axios.get(apiEndPoint + `/${i}`);
           post.push(data);
           allpost.push(data)
           this.setState({post, allpost})
        }
        this.setState({loader: false})
    }

    handlePrev=()=>{
        this.setState({post: this.state.allpost.filter(x=> x.id>=this.state.start && x.id<=this.state.end)})
    }

    handleNext=()=>{
        if (this.state.loader){
            alert("Please let the 10 Post be Displyed")
        } else{
            this.setState({start: this.state.end+1, end: this.state.end+10}, this.next)
            
        }
    }

    next=()=>{
        if(this.state.allpost.length>=this.state.end){
            this.setState({post: this.state.allpost.filter(x=> x.id>=this.state.start && x.id<=this.state.end)})
        } else {
            this.componentDidMount()
        }
    }

     handleCardClick=(id)=>{
         const postdetail=_.find(this.state.post, {id})
         this.setState({details: [postdetail]});
     }

     handleBack=()=>{
         this.setState({details: []})
     }

     handleSearch=(e)=>{
        this.setState({search: e.target.value, post: [], loader: true})
        let post=this.state.allpost.filter(x=> x.id>=this.state.start && x.id<=this.state.end);
        console.log(post);
        const filterpost=post.filter(x => x.name.toLowerCase().includes(e.target.value));
        if(filterpost.length>0){
            this.setState({post: filterpost, error: "", loader: false});
        }
        else{
            this.setState({error: "No Data Found for this page", loader: false, post: []})
        }
     }

     handleSearchClick=async ()=>{
        const search=this.state.search;
        const {data}= await axios.get(apiEndPoint+`/search/${search}`)
        if (data.response==="error"){
            this.setState({error: data.error, loader: false})
        } else {
            this.setState({error: "", post: data.results, loader: false})
        }
     }

    render() { 
        return ( 
            <div>
            {this.state.details.length===1 ? <Details handleDetails={this.handleBack} {...this.state.details[0]} />:
            <Grid container direction="column" >
                <Grid continer direction="row" wrap="nowrap" justify="space-between" style={{margin: "2%", width: "100%"}}>
                    <Grid container >
                        <TextField style={{ width: "30%"}} variant="outlined"  value={this.state.search} onChange={this.handleSearch} label="Search" />
                        <Button onClick={this.handleSearchClick} color="primary" variant="contained" disableElevation>Search-All</Button>
                    </Grid>
                </Grid>
                {this.state.error!=="" && <p style={{color: "red", fontSize: "11px",margin: "2%" ,marginTop: "-2%"}}>{this.state.error}</p>}   
            <Grid container direction="row" >
               {this.state.post.map(post => {
                   return (<Comic handleCardClick={this.handleCardClick} {...post} />)
               })}
               {this.state.loader && <CircularProgress style={{marginLeft: "10%", marginTop: "10%"}} />}
            </Grid>
            <Grid container direction="row" style={{margin: "1%"}} justify="space-between">
                <Button disabled={this.state.start===1} onClick={()=>{this.setState({start: this.state.start-10, end: this.state.start-1}, this.handlePrev)}} style={{width: "25%"}} color="primary" variant="contained">Previous</Button>
                <Button disabled={this.state.end===740} onClick={this.handleNext} style={{width: "25%"}} color="primary" variant="contained">Next</Button>
            </Grid>
            </Grid>}
            </div>
         );
    }
}
 
export default Base;