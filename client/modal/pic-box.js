import React from 'react';
import { image } from './../api/api-user';
import auth from './../auth/auth-helper';




class PicBox extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            id: 'client/assets/images/crop-pic.jpg'
        }
    }

    componentDidMount = () => {
        this.userData = new FormData();


    }

    handleChange = (event) => {
        const value = event.target.name === 'photo'
            ? event.target.files[0]
            : event.target.value

        this.userData.set(event.target.name, value)
        this.setState({ id: URL.createObjectURL(event.target.files[0]) });
    }

    componentDidUpdate(prevProps) {
        if (this.props._id !== prevProps._id) {
            //const link = 'http://localhost:8080/api/usersPhoto/' + this.props._id;
            const link = 'https://ochbackend.herokuapp.com' + this.props._id;
            this.setState({ id: link })
        }
    }

    updateUserParent_ = () => {

        if (!auth.isAuthenticated()) {
            return
        }
        const jwt = auth.isAuthenticated();
        const userId = jwt.user._id;
        const token = jwt.token;

        image({
            userId: userId
        }, {
            t: token
        }, this.userData).then((data) => {
            if (data.error) {
                alert(data.error);
            } else {
                console.log(data)
                location.reload()
            }
        });
    }

    submitImage = () => {
        this.updateUserParent_()
        this.props.renderImage(this.state.id)
    }

    render() {

        const imageStyle = {
            width: '60%',
            height: '60%'
        }
        return (
            <div className="modal" id="pic-box" >
                <div className="modal-dialog modal-dialog-centered small">
                    <div className="modal-content">

                        <div className="modal-header">

                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body bg-w pic-area">
                            <div className="pic-cvr">
                                <img style={imageStyle} src={this.state.id} />
                                <input name="photo" onChange={this.handleChange} id="profile" type="file" style={{ position: "unset" }} />
                            </div>
                            <div className="btn-b e-wd">
                                <label for="profile"><a className="outline-btn">CHOOSE PICTURE</a></label>
                                <label><a onClick={this.submitImage} className="cancel-small">SAVE</a></label>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default PicBox