import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Body() {
    return (
        <div style={{ marginTop: '25vh' }}>
            <Box
                sx={{
                    height: '415px',
                    width: '100%',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Box
                    sx={{
                        height: '80%',
                        width: '40%',
                        position: 'absolute',
                        zIndex: 1,
                        top: '5%',
                        left: '2%'
                    }}
                >
                    <img src="https://cdn11.bigcommerce.com/s-9p889rxpkb/product_images/uploaded_images/hp-about-mobile.jpg" width='500px' />
                </Box>

                <Box
                    sx={{
                        height: '93%',
                        width: '70%',
                        background: "linear-gradient(to left,#5F549B, #FA637F)",
                        position: 'absolute',
                        top: '10%',
                        right: 0
                    }}
                >
                    <Typography
                        sx={{
                            textAlign: 'right',
                            justifyContent: 'center',
                            paddingTop: 2,
                            paddingRight: 8,
                            color: 'white',
                            fontSize: '120px'
                        }}
                    >
                        HI,<br />IT'S BLISS!
                    </Typography>
                </Box>
            </Box>

            <Box
                sx={{
                    height: '80px',
                    background: 'white'
                }}
            ></Box>

            <Box
                sx={{
                    height: '200px',
                    background: '#F3F8FE'
                }}
            >
                <Typography
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        color: '#5F549B',
                        fontSize: '60px',
                        letterSpacing: '3px'
                    }}
                >
                    ESTEE LAUDER
                </Typography>
            </Box>
        </div>
    );
}