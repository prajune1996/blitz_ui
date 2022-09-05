
import { Grid } from "@mui/material"
import BackIcon from "./BackIcon"
import DatabaseIcon from "./DatabaseIcon"
import SidebarArrow from "./SidebarArrow"

export default function Sidebar() {
    return (
        <Grid item xs={3}>
            <ul className="sidebar_outer_box">
                <BackIcon />
                <li><DatabaseIcon />Experiments <SidebarArrow /></li>
                <li><DatabaseIcon />Data <SidebarArrow /></li>
                <li><DatabaseIcon />Data Sources <SidebarArrow /></li>
                <li><DatabaseIcon />Model Factory <SidebarArrow /></li>
                <li><DatabaseIcon />Model Tunning <SidebarArrow /></li>
            </ul>
        </Grid>
    )
}
