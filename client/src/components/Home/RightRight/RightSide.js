import React, { useState } from 'react'
import { Button, Container, Grid, Link } from '@mui/material'
// import useStyle from './style.js'
import ThreadList from './ThreadList/ThreadList.js'
import Filter from '../LeftSide/Filter.js'
import CreateThreadForm from '../../Form/CreateThreadForm.js'

const RightSide = () => {
    const myStyle = [
        {
            text: {
                "& .MuiContainer-root": {
                    fontWeight: "bold",
                },
                "& .headBar": {
                    boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 3px 0px",
                }
            },
            navigation: {
                "& .MuiGrid-root": {
                    padding: "10px 50px"
                },
                " & .MuiGrid-item": {
                    border: "2px solid transparent",
                    transition: "all 0.2s ease-in-out"

                },
                " & .MuiGrid-item:hover": {
                    borderBottom: "2px solid #081ff7",
                },

            }
        }
    ];
    const [open, setOpen] = useState(false);
    const toggleOpenModal = (parameter) => {
        setOpen(parameter);
    }
    return (
        <>
            <Container component="main" disableGutters={true} className={myStyle.text}>
                <Grid container className='headBar'>
                    <Grid item xs={12} sx={{ float: 'right' }} display='flex' justifyContent='right' alignItems='right'>
                        <Button variant='contained' size='medium' onClick={() => toggleOpenModal(true)}>
                            Create thread
                        </Button>
                    </Grid>
                    <CreateThreadForm toggleOpenModal={toggleOpenModal} isOpen={open} />
                    <Grid item xs={12} display='flex' justifyContent='left' alignItems='left' className={myStyle.navigation}>
                        <Grid item >
                            <Link href="#" underline="none" variant="body1" >
                                NEWEST
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" underline="none" variant="body1">
                                UNANSWERED
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" underline="none" variant="body1">
                                MOST VOTED
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container p={3}
                    direction={{ xs: "column-reverse", md: "column-reverse", lg: "row" }}>
                    <Grid item xs={12} md={12} lg={9}>
                        <ThreadList />
                    </Grid>
                    <Grid item xs={12} md={12} lg={3}> <Filter /></Grid>
                </Grid>
            </Container>
        </>
    )
}

export default RightSide