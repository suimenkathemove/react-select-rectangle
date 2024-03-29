import { Meta, StoryObj } from "@storybook/react";
import { range } from "@suimenkathemove/utils";
import { forwardRef } from "react";

import { ItemProps, ReactSelectRectangle } from ".";

export default {
  component: ReactSelectRectangle,
} satisfies Meta;

export const Default: StoryObj = {
  render: () => {
    return (
      <ReactSelectRectangle
        Container={(props) => (
          <div
            onPointerDown={props.onPointerDown}
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            {props.children}
          </div>
        )}
        Item={forwardRef<HTMLDivElement, ItemProps<HTMLDivElement>>(
          (props, ref) => (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 40,
                height: 40,
                margin: 4,
                backgroundColor: props.selected ? "#4af" : "#eee",
                borderRadius: 4,
                userSelect: "none",
              }}
              ref={ref}
            >
              {props.id}
            </div>
          ),
        )}
        items={range(100).map((i) => ({ id: i.toString() }))}
        onSelect={(ids) => {
          // eslint-disable-next-line no-console
          console.log(ids);
        }}
        selectionStyle={{
          backgroundColor: "rgba(68, 170, 255, 0.5)",
          border: "1px solid #4af",
        }}
      />
    );
  },
};
