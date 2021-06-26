import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

const CampsiteInfo = (props) => {
    const renderCampsite=(campsite)=>{
        return(
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
    );
    }
    const renderComments=(comments)=>{
        if (comments){
            return(
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments.map(comment=>{
                        return(
                            <div key={comment.id}>
                            <p>{comment.text}</p>
                            <p>{comment.author}</p>
                            <p>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>  
                            </div>
                        );
                    })}
                </div>
            );
        }return(<div/>);
    }

    if(props.campsite){ 
        return (
        <div>
            <div className="row">
                {renderCampsite(props.campsite)}
                {renderComments(props.campsite.comments)}
            </div>
        </div>  
    )}
    return(<div/>);
}   

export default CampsiteInfo;
