import { Grid, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { display } from "@mui/system";
import { Inter } from '@next/font/google'

//Icon
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer(){
    return(
        <>
            <Grid container style={{background: "linear-gradient(to right,#8CD0E3, #EC8ECE)"}} height="250px">
                <Grid item xs={1.5} style={{display: "flex", justifyContent: "center"}}>
                    <img src="https://www.blissworld.com/content/assets/bcorp.svg"
                    style={{width: "120px", height: "80"}}/>
                </Grid>

                <Grid item xs={3} paddingTop={3} paddingLeft={5}>
                    <Typography variant="h5" gutterBottom
                    style={{
                        color: "#fff",
                        fontFamily: 'CeraStencilPRO',
                        fontWeight: '500'}}>
                            CUSTOMER CARE
                    </Typography>
                    <Typography
                    sx={{
                        color: "white",
                        paddingLeft: '10px',
                        fontFamily: 'Archer A',
                        fontSize: '18px',
                        fontWeight: '400',
                        "&:hover": {
                            color: "#805794",
                            cursor: "pointer"
                        }
                        }}>
                            Contact Us
                    </Typography>
                    <Typography
                    sx={{
                        color: "white",
                        paddingLeft: '10px',
                        fontFamily: 'Archer A',
                        fontSize: '18px',
                        fontWeight: '400',
                        "&:hover": {
                            color: "#805794",
                            cursor: "pointer"
                        }
                        }}>
                            Shipping
                    </Typography>
                    <Typography
                    sx={{
                        color: "white",
                        paddingLeft: '10px',
                        fontFamily: 'Archer A',
                        fontSize: '18px',
                        fontWeight: '400',
                        "&:hover": {
                            color: "#805794",
                            cursor: "pointer"
                        }
                        }}>
                            Returns
                    </Typography>
                    <Typography
                    sx={{
                        color: "white",
                        paddingLeft: '10px',
                        fontFamily: 'Archer A',
                        fontSize: '18px',
                        fontWeight: '400',
                        "&:hover": {
                            color: "#805794",
                            cursor: "pointer"
                        }
                        }}>
                            Ordering & Payment
                    </Typography>
                </Grid>

                <Grid item xs={3} paddingTop={3}>
                    <Typography variant="h5" gutterBottom
                        style={{
                            color: "#fff",
                            fontFamily: 'CeraStencilPRO',
                            fontWeight: '500'}}>
                                THE DRY STUFF
                        </Typography>
                        <Typography
                        sx={{
                            color: "white",
                            paddingLeft: '10px',
                            fontFamily: 'Archer A',
                            fontSize: '18px',
                            fontWeight: '400',
                            "&:hover": {
                                color: "#805794",
                                cursor: "pointer"
                            }
                            }}>
                                Privacy Policy
                        </Typography>
                        <Typography
                        sx={{
                            color: "white",
                            paddingLeft: '10px',
                            fontFamily: 'Archer A',
                            fontSize: '18px',
                            fontWeight: '400',
                            "&:hover": {
                                color: "#805794",
                                cursor: "pointer"
                            }
                            }}>
                                Terms & Conditions
                        </Typography>
                        <Typography
                        sx={{
                            color: "white",
                            paddingLeft: '10px',
                            fontFamily: 'Archer A',
                            fontSize: '18px',
                            fontWeight: '400',
                            "&:hover": {
                                color: "#805794",
                                cursor: "pointer"
                            }
                            }}>
                                Accessibility Statement
                    </Typography>
                </Grid>

                <Grid item xs={3} paddingTop={3}>
                    <Typography variant="h5" gutterBottom
                    style={{
                        color: "#fff",
                        fontFamily: 'CeraStencilPRO',
                        fontWeight: '500'}}>
                            OUR FUN STUFF
                    </Typography>
                    <InstagramIcon sx={{
                        color: "white",
                        paddingLeft: '10px',
                        fontSize: '35px',
                        "&:hover": {
                            color: "#805794",
                            cursor: "pointer"
                        }
                        }}
                    />
                    <YouTubeIcon sx={{
                        color: "white",
                        fontSize: '35px',
                        paddingLeft: '10px',
                        "&:hover": {
                            color: "#805794",
                            cursor: "pointer"
                        }
                        }}
                    />
                </Grid>
            </Grid>
        </>
    );
}