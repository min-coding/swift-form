import { Table, Button } from "antd"
import { useState } from "react"

export default function UserTable({ users, setUsers }) {
  function removeUser() {
    const updatedUsers = users.filter(
      (user) => !selectedRowKeys.includes(user.id),
    )
    setUsers(updatedUsers)
    localStorage.setItem("users", JSON.stringify(updatedUsers))
    setSelectedRowKeys([])
  }
  const [selectedRowKeys, setSelectedRowKeys] = useState([])

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys)
  }

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  }

  const columns = [
    {
      title: "Firstname",
      dataIndex: "firstname",
      key: "firstname",
      sorter: {
        compare: (a, b) => a.firstname.localeCompare(b.firstname),
        multiple: 4,
      },
    },
    {
      title: "gender",
      dataIndex: "gender",
      key: "gender",
      sorter: {
        compare: (a, b) => a.gender.localeCompare(b.gender),
        multiple: 3,
      },
    },
    {
      title: "Mobile Number",
      dataIndex: "mobile_number",
      key: "mobile_number",
      sorter: {
        compare: (a, b) => a.mobile_number.localeCompare(b.mobile_number),
        multiple: 2,
      },
    },

    {
      title: "Nationality",
      dataIndex: "nationality",
      key: "nationality",
      sorter: {
        compare: (a, b) => a.nationality.localeCompare(b.nationality),
        multiple: 1,
      },
    },
  ]
  return (
    <>
      <div>This is a table</div>

      <Button type="primary" onClick={removeUser}>
        Remove
      </Button>
      <span
        style={{
          marginLeft: 8,
        }}
      ></span>

      <Table
        rowKey="id"
        columns={columns}
        dataSource={users}
        pagination={{
          pageSize: 10,
        }}
        rowSelection={rowSelection}
      ></Table>
    </>
  )
}

// const App = () => <Table columns={columns} dataSource={data} />;
