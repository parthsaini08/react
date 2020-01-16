import React from 'react';

class MemberCard extends React.Component{
    render(){
        let img_src = "https://robosocnith.com/assets/images/img-20190524-075439-829-ankur-thakur-510x510.jpeg";
        return (
            <div>
                <img src={img_src} />
                <br />
                <strong>{this.props.details.name}</strong>
                <br />
                <strong>{this.props.details.post}</strong>
                <br />
                <strong>ECE NITH</strong>
                <br />
                <strong>Some interests</strong>
                <br />
                <strong>Social links</strong>
                <br />
            </div>
        )
    }
}

export default MemberCard;