import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { flexbox, sizeHeight } from '@mui/system';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import background from "../Images/bkrf.jpg"
const axios = require('axios')


export default class RecipeForm extends React.Component {
  state = {
    recipeName: '',
    ingredients: '',
    cookingTime: '',
    instructions: '',
    equipment: '',
    picture: '',
    selectedFile: null

  }


  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  fileChangedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    })
  }





  handleSubmit = event => {
    event.preventDefault();


    console.log(this.state.selectedFile)
    const recipe = new FormData()
    recipe.append('picture', this.state.selectedFile)
    recipe.append('recipeName', this.state.recipeName)
    recipe.append('ingredients', this.state.ingredients)
    recipe.append('cookingTime', this.state.cookingTime)
    recipe.append('instructions', this.state.instructions)
    recipe.append('equipment', this.state.equipment)


    axios.post(`/upload`, recipe)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }


  render() {
    return (
      <Grid container justifyContent="center" style={{ backgroundImage: `url(${background})`, color: 'Black', fontWeight: 'bold', paddingTop: '310px', paddingBottom: '200px', backgroundSize: 'cover' }}>
        <form onSubmit={this.handleSubmit}>
          <Grid item paddingBottom="25px" paddingTop="25px">
            Recipe Name:
            <Grid item>
              <TextField type="text" inputProps={{ 'aria-label': 'instructions' }} style={{ width: '300px', marginTop: '7px', color: 'black', backgroundColor: 'lightgrey', opacity: '70%' }} id="recipeName" onChange={this.handleChange} />
            </Grid>
          </Grid>
          <Grid item paddingTop="25px">
            Image:
            <input type="file" style={{ height: '50px', width: '200px', paddingLeft: '25px' }} id='file' name="picture" onChange={this.fileChangedHandler} />
          </Grid>
          <Grid item paddingBottom="25px" display="flex" alignItems="center">
            Cooking Time:
            <Grid item>
              <OutlinedInput type="number" style={{ height: '25px', width: '200px', marginTop: '7px', marginLeft: '10px', opacity: '80%', backgroundColor: 'lightgrey' }} endAdornment={<InputAdornment position="end">Minutes</InputAdornment>} id="cookingTime" onChange={this.handleChange} />
            </Grid>
          </Grid>
          <Grid item paddingBottom="37px">
            Equipment:
            <Grid item>
              <TextField type="text" multiline rows={3} inputProps={{ 'aria-label': 'instructions' }} style={{ width: '600px', backgroundColor: 'lightgrey', opacity: '70%', marginTop: '5px' }} id="equipment" onChange={this.handleChange} />
            </Grid>
          </Grid>
          <Grid item paddingBottom="25px">
            Ingredients:
            <Grid item>
              <TextField type="text" multiline rows={3} inputProps={{ 'aria-label': 'instructions' }} style={{ width: '600px', color: 'black', backgroundColor: 'lightgrey', opacity: '70%', marginTop: '5px' }} id="ingredients" onChange={this.handleChange} />
            </Grid>
          </Grid>
          <Grid item paddingBottom="25px">
            Instructions:
            <Grid item>
              <TextField type="text" multiline rows={3} inputProps={{ 'aria-label': 'instructions' }} style={{ width: '600px', color: 'black', backgroundColor: 'lightgrey', opacity: '70%', marginTop: '5px' }} id="instructions" onChange={this.handleChange} />
            </Grid>
          </Grid>
          <Grid Container>
            <Grid item>
              <button type="submit" style={{ height: '90px', width: '598px', fontSize: '25px', marginBottom: '25px', marginTop: '5px' }}>Post Recipe</button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    )
  }


}