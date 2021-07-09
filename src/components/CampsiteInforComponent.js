import React, { Component} from 'react';
import { Card, CardImg,CardText, CardBody, CardTitle,Breadcrumb,BreadcrumbItem,Button,Modal, ModalHeader, ModalBody,Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import {Control,LocalForm,Errors} from 'react-redux-form';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;


function RenderCampsite({campsite}){
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
function RenderComments({comments}){
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
                <CommentForm/> 
            </div>
        );
    }return(<div/>);
}

    function CampsiteInfo (props) {
        if(props.campsite){ 
            return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.campsite.name}</h2>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    <RenderCampsite campsite={props.campsite}/>
                    <RenderComments comments={props.comments}/>
                </div>
            </div>  
        )}
        return(<div/>);
}   

class CommentForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            isModalOpen: false,
            };
    
            this.toggleModal = this.toggleModal.bind(this);
    }
    handleSubmit(values){
        this.toggleModal();
        this.props.postComment(this.props.campsiteId, values.rating, values.author, values.text);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
    });
    }

    render(){
        return(
            <React.Fragment>
                <Button outline onClick={this.toggleModal}>
                    <i className="fa fa-pencil fa-lg"/>Submit Comment
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Saturday 7/3/21</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <div className="form-group">
                                <label htmlFor='rating'>Rating</label>
                                <Control.Select
                                    className="form-control"
                                    model="rating"
                                    id="rating"
                                    name="rating"
                                >
                                    <option value="option1">1</option>
                                    <option value="option2">2</option>
                                    <option value="option3">3</option>
                                    <option value="option4">4</option>
                                    <option value="option5">5</option>
                                
                                </Control.Select>
                            </div>
                            <div className='form-group'>
                                <Label htmlFor='author'>Your Name</Label>
                                 <Control.Text
                                className='form-control'
                                model='.author'
                                id='author'
                                name='author'
                                validators={{
                                    required,
                                    minLength: minLength(2),
                                    maxLength: maxLength(15),
                                }}
                            />
                                <Errors
                                    className='text-danger'
                                    model='.author'
                                    show='touched'
                                    component='div'
                                    messages={{
                                    required: 'Required',
                                    minLength: 'Must be at least 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                    }}
                                />
                            </div>
                            <div className='form-group'>
                                <Label htmlFor='text'>Comment</Label>
                                <Control.textarea
                                className='form-control'
                                rows='6'
                                model='.text'
                                id='text'
                                name='text'
                                />
                            </div>

                            <div>
                                <Button
                                onClick={this.submitForm}
                                type='submit'
                                value='submit'
                                color='primary'
                                >
                                Submit
                                </Button>
                            </div>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default CampsiteInfo;
