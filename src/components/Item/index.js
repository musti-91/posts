// @flow
import React from "react";
import styled from "styled-components";

import pen from "../../styles/edit.svg";
import deleteIcon from "../../styles/delete.svg";
import Icon from "../Icon";

type Props = {
  title: string,
  id: string,
  body: string,
  checked?: boolean,
  onClick: (id: number | string) => void,
  onDelete: (id: number | string) => void,
  onChecked: (id: number | string) => void
};

const styles = {
  color: "#447",
  marginBottom: ".5em",
  backgroundColor: "grey",
  padding: ".4em",
  fontSize: "1em",
  borderRadius: ".3em",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  span: {
    width: "60%"
  }
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Item = ({ title, id, body, onClick, onChecked, onDelete }: Props) => {
  return (
    <div id={`item-${id}`} style={styles}>
      <span style={styles.span} onClick={() => onClick(id)}>
        {title}
        {body && <p>{body}</p>}
      </span>
      <Wrapper>
        <Icon
          src={deleteIcon}
          description={`delete-${title}`}
          onClick={() => onDelete(id)}
        />
        <Icon
          src={pen}
          description={"alt-" + title}
          onClick={() => onChecked(id)}
        />
      </Wrapper>
    </div>
  );
};

export default Item;
