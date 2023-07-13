import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import MuiAccordion from '@material-ui/core/Accordion'
import MuiAccordionSummary from '@material-ui/core/AccordionSummary'
import MuiAccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AddIcon from '@material-ui/icons/Add'
const Accordion = withStyles({
    root: {
        '&:not(:last-child)': {
            background: '#FFFFFF',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.12)',
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            border: ' 1px solid #3d3d3d',
            background:
                'linear-gradient( 152.97deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%)',
            backdropFilter: 'blur(42px)',
        },
    },
})(MuiAccordion)

const AccordionSummary = withStyles({
    root: {
        background: "#fff",
        border: "1px solid #fff",
        boxSizing: "border-box",
        borderRadius: "10px",
        color: '#242424',
        '&$expanded': {
            minHeight: 50,
            borderBottom: '0',
            color: '#FFF',
            borderRadius: "9px",
        },
        '@media(max-width:605px)': {
            fontSize: '10px !important',
            minHeight: 50,
            '&$expanded': {
                minHeight: 40,
                borderBottom: '0',
                color: '#FFF',
            },
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {
        margin: "0"
    },
})(MuiAccordionSummary)

const AccordionDetails = withStyles((theme) => ({
    root: {
        // border: "1px solid #D7D5D5",
        // boxSizing: "border-box",
        // backdropFilter: "blur(4px)",
        // marginTop: '10px',
        "& h6": {
            color: "#000",
            paddingBottom: "15px"
        },
        "& .head":{
            fontSize: "20px",
        },

    },
}))(MuiAccordionDetails)
export default function FaqData({ data, index }) {
    const [expanded, setExpanded] = React.useState('panel1')

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false)
    }

    return (
        <div>
            <Accordion
                square
                defaultExpanded={index == 0 ? true : false}
                onChange={handleChange('panel1')}
            >
                <AccordionSummary
                    aria-controls="panel1d-content"
                    expandIcon={
                        <ExpandMoreIcon
                            style={{ fontSize: '23px', fontWeight: '400', color: '#242424' }}
                        />
                    }
                >
                    <Typography variant='h6' style={{ color: "#242424",  fontSize: "20px !important",}} className="head">{data.head}</Typography>
                </AccordionSummary>
                <AccordionDetails style={{ display: 'flex', flexDirection: "column", borderTop: "2px solid rgb(234 232 254)", }}>
                    {/* <Typography variant='h6'>{data.heading}</Typography> */}
                    <Typography variant='body1'>{data.summary}</Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
