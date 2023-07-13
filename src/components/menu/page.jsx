import React from "react";
import { Drawer, Menu } from "antd";
const page = () => {
  return (
    <div style={{}}>
      <AppMenu></AppMenu>
      <Drawer open bodyStyle={{ backgroundColor: "#021530" }}>
        <AppMenu isInline></AppMenu>
      </Drawer>
    </div>
  );
};

function AppMenu({ isInline = false }) {
  return (
    <Menu
      style={{ background: "#021530", color: "white", fontSize: 14 }}
      mode={isInline ? "inline" : "horizontal"}
      items={[
        {
          label: "Home",
          key: "home",
        },
        {
          label: "Contact",
          key: "contact",
        },
        {
          label: "About",
          key: "about",
        },
      ]}
    ></Menu>
  );
}

export default page;
