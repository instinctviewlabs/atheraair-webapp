import React, { useState } from 'react';
import { Stack, Typography, Box, Grid, IconButton } from '@mui/material'
import { CgTrash } from 'react-icons/cg'
import { FaCcVisa } from 'react-icons/fa';
import { IoIosAddCircleOutline } from "react-icons/io"
import { AddNewCard, SavedCard, WhiteCard } from '../../../Lib/MuiThemes/MuiComponents'
import { useTranslation } from 'react-i18next';
import AddNewPaymentCard from '../Modals/AddNewPaymentCard';


function PaymentMethods() {

  const { t } = useTranslation();
  const [addNewCardModal, setAddNewCardModal] = useState(false);

  return (
    <>
    <Stack width={{xs: "100%", md: "80%"}} spacing={2}>
        <Typography color="text.main" variant='h4'>{t("paymentMethods")}</Typography>
        <WhiteCard>
            <Grid 
                container
                direction={{xs: "column", sm: "row"}} 
                rowSpacing={2} 
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
                <Grid item xs={4}>
                    <SavedCard>
                        <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                            <Box>
                                <Typography variant='body1'>**** **** **** ****</Typography>
                                <Typography variant='h4'>4321</Typography>
                            </Box>
                            <Box>
                                <IconButton size='large' sx={{color: 'text.white'}}>
                                    <CgTrash />
                                </IconButton>
                            </Box>
                        </Box>
                        <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                            <Box>
                                <Typography variant='subtitle1'>Valid Thru</Typography>
                                <Typography variant='h5'>02/27</Typography>
                            </Box>
                            <Box>
                                <IconButton size='large' sx={{color: 'text.white'}}>
                                    <FaCcVisa/>
                                </IconButton>
                            </Box>
                        </Box>
                    </SavedCard>
                </Grid>
                <Grid item xs={4}>
                    <AddNewCard onClick={() => setAddNewCardModal(true)}>
                        <IoIosAddCircleOutline fontSize={40}/>
                        <Typography variant='subtitle1'>{t("addNewCard")}</Typography>
                    </AddNewCard>
                </Grid>
            </Grid>
        </WhiteCard>
    </Stack>
    <AddNewPaymentCard open={addNewCardModal} handleClose={setAddNewCardModal}></AddNewPaymentCard>
    </>
  )
}

export default PaymentMethods