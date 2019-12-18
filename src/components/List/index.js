// @flow
import React from "react";
import Item from "../Item";

type ID = number | string;
type Props = {
  data: *,
  onClick: (id: ID) => void,
  onChecked: (id: ID) => void,
  onDelete: (id: ID) => void
};

const styles = {
  color: "red",
  fontFamily: "Fira Code",
  fontSize: "1em",
  padding: ".4em",
  margin: "0 auto",
  width: "50em"
};
const List = ({ data, onDelete, onChecked, onClick }: Props) => {
  return (
    <div style={styles}>
      {data &&
        typeof data === "object" &&
        data.map(item => (
          <div key={item.id}>
            <Item
              title={item.title}
              id={item.id}
              body={item.body ? item.body : ""}
              checked={item.completed}
              onClick={id => onClick(id)}
              onChecked={id => onChecked(id)}
              onDelete={id => onDelete(id)}
            />
          </div>
        ))}
    </div>
  );
};

export default List;
