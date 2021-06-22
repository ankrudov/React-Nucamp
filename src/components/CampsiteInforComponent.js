import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

const CampsiteInfo = (props) => {
    renderCamspite(campsite){
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
        )
    }

    if(props.campsite){ 
        return (
        <div className="row">
            {renderCamspite(props.campsite)}
        </div>  
    )}else{
        return(
            <div/>
        )
    }   
}

export default CampsiteInfo;
