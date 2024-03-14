import React from "react";
import { GITHUB_API } from "../utils/contants";
class UserClass extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            userInfo:{
                name:"Sandy",
                location:"Default"
            },
        }
    }

    async componentDidMount(){
        const data=await fetch(GITHUB_API);
        const json=await data.json();
        this.setState({
            userInfo:json,

        });
        console.log(json);
    }
    render() {
        const { name, location,avatar_url } = this.state.userInfo;

        return (
            <div className="user-card">
            <h1>Avatar:{avatar_url}</h1>
            <h1>Name:{name}</h1>
            <h2>Location:{location}</h2>
            <h4>
                Contact:Sandy@07;
            </h4>
            </div>
        )
    }
} 
export default UserClass;