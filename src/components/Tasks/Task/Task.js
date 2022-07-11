import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Task = (props) => {
  const { id, name, description } = props.task;

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${id}-content`}
        id={`${id}-header`}
      >
        <Typography>{name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{description}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};
  
export default Task;
