import React from 'react'

class Users extends React.Component {
    constructor() {
        super();
        this.state = {users:[]}
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then
        ((data) => {
            return data.json()
        })
        .then((data) => {
            this.setState({users: data})
        })
    }
    render() {
        return(<React.Fragment>
            {this.state.users.map((data) => {
                return(<div key={data.id}>
                    <p>---------------------------------------</p>
                    <p> {data.username}</p>
                    <p>{data.name}</p>
                    <p>{data.email}</p>
                </div>)
            })}
        </React.Fragment>)
    }
}
export default Users;