import {Text, Image, Date, EventWrapper, TextWrapper} from "../styles.js";

const Event = (props) => (
    <EventWrapper>
        <Image src={props.image} />
        
        <TextWrapper>
            <Text>{props.statement}</Text>
            <Date>{props.date}</Date>
        </TextWrapper>
    </EventWrapper>
);

export default Event;