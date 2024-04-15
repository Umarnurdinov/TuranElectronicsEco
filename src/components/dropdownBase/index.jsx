import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import React from "react";
// e.domEvent.target.textContent
function DropdownBase({ props, onValueChange, className }) {
  function dropDownHandler(e) {
    onValueChange(e.domEvent.target.textContent);
  }

  let name = props && props[0] ? props[0].name : null;
  return (
    <>
      <Dropdown
        className={`${className}`}
        menu={{
          items: props,
          onClick: dropDownHandler,
        }}
      >
        <Space>
          {name}
          <DownOutlined />
        </Space>
      </Dropdown>
    </>
  );
}

export default DropdownBase;
