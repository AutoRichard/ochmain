import React from 'react';
import { image } from './../api/api-user';
import auth from './../auth/auth-helper';
import swal from 'sweetalert';




class PicBox extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            id: 'client/assets/images/crop-pic.jpg',
            loading: false
        }
    }

    componentDidMount = () => {
        this.userData = new FormData();
    }

    _handleChange = (event) => {
        const value = event.target.name === 'photo'
            ? event.target.files[0]
            : event.target.value

        //this.userData.set(event.target.name, value)
        //this.setState({ id: URL.createObjectURL(event.target.files[0]) });

        var img = new Image;
        img.src = URL.createObjectURL(event.target.files[0]);
        img.uploadImage = this.uploadValidate
        img.value = value

        img.onload = function () {
            var picWidth = this.width;
            var picHeight = this.height;

            if (picHeight == 700 && picWidth == 700) {
                this.uploadImage(this.src, this.value)
            } else {
                swal("IMAGE RESOLUTION REQUIRED IS 700x700")
            }
        }
    }

    uploadValidate = (src, value) => {
        this.userData.set("photo", value)


        this.setState({ id: src });
    }

    componentDidUpdate(prevProps) {
        if (this.props._id !== prevProps._id) {
            //const link = 'http://localhost:8080/api/usersPhoto/' + this.props._id;
            const link = 'https://ochback.herokuapp.com/api/usersPhoto/' + this.props._id;
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
                swal(data.error);
            } else {
                console.log(data)
                location.reload()
            }
        });
    }

    submitImage = () => {
        this.updateUserParent_()
        this.setState({ loading: true });
        this.props.renderImage(this.state.id)
    }

    render() {

        const imageStyle = {
            width: '60%',
            height: '60%'
        }

        const loadingStyle = {
            width: '30%',
            height: '30%'
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
                                <input name="photo" onChange={this._handleChange} id="profilePhoto" type="file" style={{ position: "unset" }} />
                            </div>

                            <span>IMAGE RESOLUTION (700x700)</span>
                            <div className="btn-b e-wd">
                                <label for="profilePhoto"><a className="outline-btn">CHOOSE PICTURE</a></label>
                                <label><a onClick={this.submitImage} className="cancel-small">SAVE</a></label>
                            </div>

                            <div className="text-center">
                                {this.state.loading === true ? (<img style={loadingStyle} src="/client/assets/images/loading.gif" />) : ('')}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default PicBox