import * as React from 'react';
import { Grid, IconButton, InputBase, Paper, Box, Typography, InputAdornment } from "@mui/material";
import TextField from '@mui/material/TextField';

import logo from "../../images/logo.png";

import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';

import { color } from '@mui/system';

export default function Header() {
    return (
        <div style={{
            overflow: 'hidden',
            position: 'fixed',
            top: 0,
            width: '100%',
            zIndex: 3,
            height: '30vh'
        }}>
            <Grid container style={{ background: "linear-gradient(to left,#8CD0E3, #EC8ECE)" }} height="120px" justifyContent={'space-between'}>
                <Grid item paddingTop='10px'>
                    <Box display="flex" alignItems="center">
                        <TextField
                            size="small"
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    "& label": {
                                        color: 'white',
                                    },
                                    "& label.Mui-forcused": {
                                        color: 'white',
                                    },
                                    "& fieldset": {
                                        borderColor: 'white',
                                        borderWidth: '2px'
                                    },
                                    "&:hover fieldset": {
                                        borderColor: '#62559B',
                                        borderWidth: '2px'
                                    },
                                    "&.Mui-focused fieldset": {
                                        borderColor: '#62559B',
                                        borderWidth: '2px'
                                    },
                                },
                                '& .MuiInputBase-input': {
                                    color: '#62559B'
                                },
                                marginLeft: "14px",
                                backgroundColor: 'white',
                                borderRadius: '6px',
                            }}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">
                                    <IconButton>
                                        <ClearRoundedIcon sx={{color: '#62559B'}}/>
                                    </IconButton>
                                </InputAdornment>,
                            }}
                        />
                        <IconButton>
                            <SearchRoundedIcon sx={{
                                color: "white",
                                fontSize: '35px',
                                "&:hover": {
                                    color: "#805794",
                                    cursor: "pointer"
                                }
                            }}
                            />
                        </IconButton>
                    </Box>
                </Grid>

                <Grid item paddingTop={5} paddingRight={25}>
                    <img src={logo.src} height="75px" />
                </Grid>

                <Grid item xs='auto' paddingTop='5px'>
                    <IconButton>
                        <AccountCircleRoundedIcon sx={{
                            color: "white",
                            fontSize: '40px',
                            "&:hover": {
                                color: "#805794",
                                cursor: "pointer"
                            }
                        }}
                        />
                    </IconButton>
                    <IconButton>
                        <ShoppingBagRoundedIcon sx={{
                            color: "white",
                            fontSize: '40px',
                            "&:hover": {
                                color: "#805794",
                                cursor: "pointer"
                            }
                        }}
                        />
                    </IconButton>
                </Grid>
            </Grid>

            <Box display='flex' alignItems='baseline' justifyContent='center' style={{ background: "linear-gradient(to left,#8CD0E3, #EC8ECE)", position: 'relative' }} height='30px'>
                <Box
                    className="dropdown"
                    sx={{
                        width: '13vw',
                        position: 'relative',
                        display: 'inline-block',

                        ".dropbtn": {
                            color: 'white',
                            fontFamily: 'sans-serif',
                            fontSize: '20px',
                            fontWeight: 'bold'
                        },
                        ".dropdown-content": {
                            background: 'white',
                            width: '100vw',
                            height: 0,
                            marginLeft: '-23.5vw',
                            transition: 'height 0.7s',
                        },
                        ".dropdown-hidden": {
                            display: 'none',
                            padding: '4% 5%',
                            transition: '1s',
                        },

                        "&:hover": {
                            ".dropdown-content": {
                                position: 'fixed',
                                width: '100vw',
                                height: 200,
                                marginLeft: '-23.5vw'
                            },
                            ".dropbtn": {
                                color: 'white'
                            },
                            ".dropdown-hidden": {
                                display: 'block',
                            },
                        },
                    }}
                >

                    <Box className='dropbtn' display='flex' justifyContent='center'>ESTEE LAUDER</Box>

                    <Box className='dropdown-content'>
                        <Box className='dropdown-hidden'>
                            <a href='#'
                                style={{
                                    color: '#805794',
                                    fontFamily: 'sans-serif',
                                    fontSize: '15px',
                                    textDecoration: 'none'
                                }}>
                                Skincare
                            </a>
                            <br />

                            <a href='#'
                                style={{
                                    color: '#805794',
                                    fontFamily: 'sans-serif',
                                    fontSize: '15px',
                                    textDecoration: 'none'
                                }}>
                                Body & Hair care
                            </a>
                            <br />

                            <a href='#'
                                style={{
                                    color: '#805794',
                                    fontFamily: 'sans-serif',
                                    fontSize: '15px',
                                    textDecoration: 'none'
                                }}>
                                Sets & Kits
                            </a>
                        </Box>
                    </Box>
                </Box>

                <Typography sx={{
                    color: 'white',
                    fontSize: '20px'
                }}>•</Typography>

                <Box
                    className="dropdown"
                    sx={{
                        width: '7.5vw',
                        position: 'relative',
                        display: 'inline-block',

                        ".dropbtn": {
                            color: 'white',
                            fontFamily: 'sans-serif',
                            fontSize: '20px',
                            fontWeight: 'bold'
                        },
                        ".dropdown-content": {
                            background: 'white',
                            width: '100vw',
                            height: 0,
                            marginLeft: '-36.5vw',
                            transition: 'height 0.7s',
                        },
                        ".dropdown-hidden": {
                            display: 'none',
                            padding: '4% 5%',
                            transition: '1s',
                        },

                        "&:hover": {
                            ".dropdown-content": {
                                position: 'fixed',
                                width: '100vw',
                                height: 200,
                                marginLeft: '-37vw',
                            },
                            ".dropbtn": {
                                color: 'white',
                            },
                            ".dropdown-hidden": {
                                display: 'block',
                            },
                        },
                    }}
                >

                    <Box className='dropbtn' display='flex' justifyContent='center'>KIEHL'S</Box>

                    <Box className='dropdown-content'>
                        <Box className='dropdown-hidden'>
                            <a href='#'
                                style={{
                                    color: '#805794',
                                    fontFamily: 'sans-serif',
                                    fontSize: '15px',
                                    textDecoration: 'none'
                                }}>
                                Skincare
                            </a>
                            <br />

                            <a href='#'
                                style={{
                                    color: '#805794',
                                    fontFamily: 'sans-serif',
                                    fontSize: '15px',
                                    textDecoration: 'none'
                                }}>
                                Body & Hair care
                            </a>
                            <br />

                            <a href='#'
                                style={{
                                    color: '#805794',
                                    fontFamily: 'sans-serif',
                                    fontSize: '15px',
                                    textDecoration: 'none'
                                }}>
                                Sets & Kits
                            </a>
                        </Box>
                    </Box>
                </Box>

                <Typography sx={{
                    color: 'white',
                    fontSize: '20px'
                }}>•</Typography>

                <Box
                    className="dropdown"
                    sx={{
                        width: '9.5vw',
                        position: 'relative',
                        display: 'inline-block',

                        ".dropbtn": {
                            color: 'white',
                            fontFamily: 'sans-serif',
                            fontSize: '20px',
                            fontWeight: 'bold'
                        },
                        ".dropdown-content": {
                            background: 'white',
                            width: '100vw',
                            height: 0,
                            marginLeft: '-50vw',
                            transition: 'height 0.7s',
                        },
                        ".dropdown-hidden": {
                            display: 'none',
                            padding: '4% 5%',
                            transition: '1s',
                        },

                        "&:hover": {
                            ".dropdown-content": {
                                position: 'fixed',
                                width: '100vw',
                                height: 200,
                                marginLeft: '-50vw',
                            },
                            ".dropbtn": {
                                color: 'white',
                            },
                            ".dropdown-hidden": {
                                display: 'block',
                            },
                        },
                    }}
                >

                    <Box className='dropbtn' display='flex' justifyContent='center'>LANCOME</Box>

                    <Box className='dropdown-content'>
                        <Box className='dropdown-hidden'>
                            <a href='#'
                                style={{
                                    color: '#805794',
                                    fontFamily: 'sans-serif',
                                    fontSize: '15px',
                                    textDecoration: 'none'
                                }}>
                                Skincare
                            </a>
                            <br />

                            <a href='#'
                                style={{
                                    color: '#805794',
                                    fontFamily: 'sans-serif',
                                    fontSize: '15px',
                                    textDecoration: 'none'
                                }}>
                                Body & Hair care
                            </a>
                            <br />

                            <a href='#'
                                style={{
                                    color: '#805794',
                                    fontFamily: 'sans-serif',
                                    fontSize: '15px',
                                    textDecoration: 'none'
                                }}>
                                Sets & Kits
                            </a>
                        </Box>
                    </Box>
                </Box>

                <Typography sx={{
                    color: 'white',
                    fontSize: '20px'
                }}>•</Typography>

            <Box
                    className="dropdown"
                    sx={{
                        width: '9.5vw',
                        position: 'relative',
                        display: 'inline-block',

                        ".dropbtn": {
                            color: 'white',
                            fontFamily: 'sans-serif',
                            fontSize: '20px',
                            fontWeight: 'bold'
                        },
                        ".dropdown-content": {
                            background: 'white',
                            width: '100vw',
                            height: 0,
                            marginLeft: '-65vw',
                            transition: 'height 0.7s',
                        },
                        ".dropdown-hidden": {
                            display: 'none',
                            padding: '4% 5%',
                            transition: '1s',
                        },

                        "&:hover": {
                            ".dropdown-content": {
                                position: 'fixed',
                                width: '100vw',
                                height: 200,
                                marginLeft: '-65vw',
                            },
                            ".dropbtn": {
                                color: 'white',
                            },
                            ".dropdown-hidden": {
                                display: 'block',
                            },
                        },
                    }}
                >

                    <Box className='dropbtn' display='flex' justifyContent='center'>ABOUT US</Box>

                    <Box className='dropdown-content'>
                        <Box className='dropdown-hidden'>
                            
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    );
}