import React from 'react';
import MemberCard from './MemberCard';

class MembersList extends React.Component{
    render(){
        // let arr =
        let arr = [];
        this.props.data.map( (member) =>{
            arr.push(
                <MemberCard details={member} />
            );
        })
        return (
            <div>
                <p>List of members</p>
                {arr}
            </div>
        )
    }
}

export default MembersList;