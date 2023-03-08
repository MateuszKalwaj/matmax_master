import React from "react";

// https://material.io/resources/icons/?style=baseline -> icons

export const Icon = ({icon, classes}) => {
    const _classes = classes.concat(['material-icons']).join(" ");

    return (
      <span className={_classes}>
          {icon}
      </span>
    )
}