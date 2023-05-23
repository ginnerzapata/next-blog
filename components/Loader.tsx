import React from "react";

type Props = {
  show: true;
};

export default function Loader({ show }: Props) {
  return show ? <div className="loader" /> : null;
}
