import "./App.css"
import UserForm from "./Form"
import UserTable from "./UserTable"
import { useState } from "react"
import { Layout, Space } from "antd"
import { Header, Content, Footer } from "antd/es/layout/layout"

function App() {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")!) || [],
  )

  return (
    <div className="App">
      <Space
        direction="vertical"
        style={{
          width: "100%",
        }}
      >
        <Layout style={{ background: "transparent" }}>
          <Header style={{ background: "transparent" }}>Manage Form</Header>
          <div className="form-container">
            <Content style={{ background: "transparent" }}>
              <UserForm users={users} setUsers={setUsers}></UserForm>
            </Content>
          </div>
          <Footer style={{ background: "transparent" }}>
            <UserTable users={users} setUsers={setUsers}></UserTable>
          </Footer>
        </Layout>
      </Space>
    </div>
  )
}

export default App
