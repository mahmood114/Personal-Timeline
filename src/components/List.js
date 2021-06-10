import data from "../data.js";
import Event from "./Event.js";
import {ListWrapper} from "../styles.js"

const List = () => {

    const info = data.map(info => (
        <Event date={info.date} statement={info.statement} image={info.image}/>
    ));

    return <ListWrapper>{info}</ListWrapper>;
  }

export default List;