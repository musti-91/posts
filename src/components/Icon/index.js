// @flow
import React from "react";
import styled from "styled-components";

type Props = {
  onClick?: () => void,
  src: *,
  description?: string
};

const Image = styled.img`
  display: block;
  width: 2em;
  height: 2em;
  margin-bottom: 2em;
`;
const Icon = ({ onClick, src, description }: Props) => {
  return (
    <div onClick={onClick}>
      <Image src={src} alt={description} />
    </div>
  );
};

export default Icon;
