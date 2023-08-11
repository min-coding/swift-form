import { Table, Button } from "antd"
import { useState } from "react"
import { UserState } from "./features/userSlice"
import { Key } from "antd/es/table/interface"

export default function UserTable({
  users,
  setUsers,
}: {
  users: UserState[]
  setUsers: React.Dispatch<React.SetStateAction<UserState[] | null>>
}) {
  function removeUser() {
    const updatedUsers = users.filter(
      (user) => !selectedRowKeys.includes(user.id),
    )
    setUsers(updatedUsers)
    localStorage.setItem("users", JSON.stringify(updatedUsers))
    setSelectedRowKeys([])
  }
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([])

  const onSelectChange = (newSelectedRowKeys: Key[]) => {
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
        compare: (a: UserState, b: UserState) =>
          a.firstname.localeCompare(b.firstname),
        multiple: 4,
      },
    },
    {
      title: "gender",
      dataIndex: "gender",
      key: "gender",
      sorter: {
        compare: (a: UserState, b: UserState) =>
          a.gender.localeCompare(b.gender),
        multiple: 3,
      },
    },
    {
      title: "Mobile Number",
      dataIndex: "mobile_number",
      key: "mobile_number",
      sorter: {
        compare: (a: UserState, b: UserState) =>
          a.mobile_number.localeCompare(b.mobile_number),
        multiple: 2,
      },
    },

    {
      title: "Nationality",
      dataIndex: "nationality",
      key: "nationality",
      sorter: {
        compare: (a: UserState, b: UserState) =>
          a.nationality.localeCompare(b.nationality),
        multiple: 1,
      },
    },
  ]
  return (
    <>
      <Button
        type="primary"
        onClick={removeUser}
        style={{ marginBottom: "2em" }}
      >
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
