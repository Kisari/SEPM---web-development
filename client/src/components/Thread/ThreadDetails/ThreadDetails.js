import React from 'react'
import { ButtonGroup, Button, Container, Grid, Typography, Avatar, List, ListItem, ListItemText, ListItemIcon, Stack, TextField } from '@mui/material'
import { useParams } from 'react-router-dom'
import useStyle from './style'
import Answer from './Answer/Answer'
import star from '../../../images/star.png'
import notification from '../../../images/notification.png'
import share from '../../../images/share.png'

const ThreadDetails = () => {
    const routeParams = useParams();
    console.log(routeParams); // this will use for indicate the post 
    const myStyle = useStyle();
    return (
        <>
            <Container component="main" disableGutters={true} className={myStyle.text}>
                <Grid container className='headBar'>
                    <Grid item xs={12} sx={{ float: 'right', padding: '12px 28px' }} display='flex' justifyContent='right' alignItems='right'>
                        <Button variant='contained' size='medium'>
                            Create thread
                        </Button>
                    </Grid>
                </Grid>
                <Grid container p={3} xs={10} className='headBar'>
                    <Grid item xs={2} display='flex' justifyContent='start' alignItems='center' flexDirection='column'>
                        <Avatar alt="Star icon" src={star} />
                        <Typography component='span'>
                            983
                        </Typography>
                    </Grid>
                    <Grid item xs={10} className={myStyle.list}>
                        <List>
                            <ListItem
                                className={myStyle.listItemText}
                            >
                                <ListItemText
                                    primary="Posted by Ordinary-Accident351"
                                    secondary="Animated By Column Using 2 df's with GGAnimate"
                                />
                                <ListItemIcon>
                                    <ButtonGroup>
                                        <Button sx={{ borderRadius: 10 }}
                                            variant="text"
                                            startIcon={<img alt="Notification icon" src={notification} />}
                                            className={myStyle.startIcon}
                                            size="small">

                                        </Button>
                                        <Button sx={{ borderRadius: 10 }}
                                            variant="text"
                                            startIcon={<img alt="Share icon" src={share} />}
                                            className={myStyle.startIcon}
                                            size="small">
                                        </Button>
                                    </ButtonGroup>
                                </ListItemIcon>
                            </ListItem>
                        </List>
                        <Typography component="div" className='bodyText'>
                            I am currently trying to use gganimate to animate bond yield curves over time. In essence, I have 2 data frames, each formatted the same way: Maturity 1/1/2020 1/1/2021 1/1/2022 3M 3.4 3.4 3.4 6M 4....
                        </Typography>
                        <Typography component="div" className='commentCount'>
                            1.4k comments
                        </Typography>
                        <Grid item xs={12} sx={{ padding: "0 16px 0 16px" }} display='flex' justifyContent='space-between'>
                            <Stack spacing={1} direction="row" className={myStyle.tags}>
                                <Button
                                    variant="contained"
                                    size="small">
                                    Animate
                                </Button>
                                <Button
                                    variant="contained"
                                    size="small">
                                    gglot2
                                </Button>
                                <Button
                                    variant="contained"
                                    size="small">
                                    Spring
                                </Button>
                            </Stack>
                            <Typography component="span" className='times'>
                                8 days ago
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid >
                <Grid container xs={10}>
                    <Grid item sx={12} className='headBar'>
                        <Answer></Answer>
                    </Grid>
                    <Grid item sx={12} className='headBar'>
                        <Answer></Answer>
                    </Grid>
                </Grid>
                <Grid container xs={10} p={4} rowSpacing={2}>
                    <Grid item xs={12}>
                        <Typography component='div' variant='body2'>
                            Your answer
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField multiline fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <Button size="small" variant='contained' sx={{ color: "white" }}> Post your answer</Button>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default ThreadDetails