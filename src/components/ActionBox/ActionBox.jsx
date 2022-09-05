import React from 'react'
import { Grid } from "@mui/material"

export default function ActionBox() {
    return (
        <Grid item xs={6}>
            <div className='action_outer_box text-center'>
                <Grid container
                >
                    <Grid item xs={6}>
                        <h4 className='grey_text text-left' style={{ marginLeft: "3rem" }}>Spam Mail Project</h4>
                    </Grid>
                    <Grid item xs={6}>
                        <h5 className='grey_text mb-1'>Author Name : Nagarajan More</h5>
                        <h5 className='grey_text mb-1 mt-1'>Author Name : Nagarajan More</h5>
                        <h5 className='grey_text mt-1'>Author Name : Nagarajan More</h5>
                    </Grid>
                </Grid>
            </div>
        </Grid>
    )
}
