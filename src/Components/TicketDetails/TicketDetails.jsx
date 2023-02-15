import React from 'react'
import { Avatar, Box, Card, Divider, List, ListItem, ListSubheader, Stack, Typography } from '@mui/material'
import { RiPlaneFill } from 'react-icons/ri'
import { AnchorText, BlueButton } from '../../Lib/MuiThemes/MuiComponents'
import TicketDetailsCard from './TicketDetailsFragments/TicketDetailsCard'

function TicketDetails() {
  return (
    <Box sx={{
        height: "auto",
        width: "auto",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "common.background",
        px: {
            xs: 1,
            md: 10
        }
    }}>
        <Stack sx={{width: "100%"}} spacing={2} py={3}>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <Typography variant='h5' color="text.main">Emirates A380 Airbus</Typography>
                <AnchorText variant="h4">$104</AnchorText>
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <Typography variant='subtitle2' color="text.main">Inonu cad. No: 8, Istanbul 34437</Typography>
                <BlueButton>Download Ticket</BlueButton>
            </Box>
        </Stack>
        <TicketDetailsCard/>
        <Stack spacing={2} py={3}>
            <Typography variant='h5' color="text.main">Terms and Conditions</Typography>
            <Box>
                <Typography variant='h6' color="text.main">Payments</Typography>
                <List sx={{ listStyleType: 'disc', pl: 2,
                    '& .MuiListItem-root': {
                        display: 'list-item',
                    }, 
                }}>
                    <ListItem><Typography color="text.main">If you are purchasing your ticket using a debit or credit card via the Website, we will process these payments via the automated secure common payment gateway which will be subject to fraud screening purposes.</Typography></ListItem>

                    <ListItem><Typography color="text.main">If you do not supply the correct card billing address and/or cardholder information, your booking will not be confirmed and the overall cost may increase. We reserve the right to cancel your booking if payment is declined for any reason or if you have supplied incorrect card information. If we become aware of, or is notified of, any fraud or illegal activity associated with the payment for the booking, the booking will be cancelled and you will be liable for all costs and expenses arising from such cancellation, without prejudice to any action that may be taken against us.</Typography></ListItem>

                    <ListItem><Typography color="text.main">Errances Voyages may require the card holder to provide additional payment verification upon request by either submitting an online form or visiting the nearest Errances Voyages office, or at the airport at the time of check-in. Errances Voyages reserves the right to deny boarding or to collect a guarantee payment (in cash or from another credit card) if the card originally used for the purchase cannot be presented by the cardholder at check-in or when collecting the tickets, or in the case the original payment has been withheld or disputed by the card issuing bank. Credit card details are held in a secured environment and transferred through an internationally accepted system.</Typography> </ListItem>
                </List>
            </Box>
            <Box>
                <Typography variant='h6' color="text.main">Contact us</Typography>
                <Box>
                    <Typography color="text.main">
                        If you have any questions about our Website or our Terms of Use, please contact:
                    </Typography>
                    <Typography color="text.main">
                        Errances Voyages,
                    </Typography>
                    <Typography color="text.main">
                        XXXX,
                    </Typography>
                    <Typography color="text.main">
                        YYYY,
                    </Typography>
                    <Typography color="text.main">     
                        ZZZZ.
                    </Typography>
                    <Typography color="text.main">
                        Further contact details can be found at errancesvoyages.com/help  
                    </Typography>
                </Box>
            </Box>
        </Stack>

    </Box>
  )
}

export default TicketDetails