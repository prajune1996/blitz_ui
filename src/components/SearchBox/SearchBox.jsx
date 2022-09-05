import React from 'react'
import { TextField, Grid, IconButton } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBox() {
  return (
    <Grid item xs={6}>
      <div className='search_outer_box'>
        <IconButton
          disableRipple={true}
          className="search_button"
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
        >
          <SearchIcon style={{ fill: "#8b8b8b" }} />
        </IconButton>
        <TextField
          className="search_box"
          id="outlined-basic"
          label=""
          variant="outlined"
          placeholder='Spam Mail Project'
          sx={{
            background: "white", borderRadius: "6px",
            "& fieldset": { border: 'none', },
          }}
        />
      </div>
    </Grid >
  )
}
