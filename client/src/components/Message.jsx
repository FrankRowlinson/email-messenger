import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Grid,
} from '@mui/material'
import moment from 'moment'

function Message(props) {
  const { receivedAt, from, theme, text } = props.message

  return (
    <Accordion>
      <AccordionSummary>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Typography variant="caption">
              {moment(receivedAt).format('LLL')}
            </Typography>
            <Typography variant="h5">{from}</Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography sx={{paddingTop: "20px"}} noWrap variant="h6">{theme}</Typography>
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{text}</Typography>
      </AccordionDetails>
    </Accordion>
  )
}

export default Message
