import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Card } from '@material-ui/core';
import { Usercontroller } from '../Controller/Usercontroller';
import { Snackbar, IconButton } from '@material-ui/core';


class Registration extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            mobileNumber: '',
            email: '',
            password: '',
            openSnackBar: '',
            Error: false,
            message: "",

        }
    }
    snackBarClose = () => {
        this.setState({
            Error: false
        })
    }
    onChangeName = async (event) => {
        var name = event.target.value;
        this.setState({
            name: name,

        })

    }

    onChangeEmail = (event) => {
        var email = event.target.value;
        this.setState({
            email: email,

        })

    }
    onChangePassword = (event) => {
        var password = event.target.value;
        this.setState({
            password: password,

        })

    }

    onChangeMobileNumber = (event) => {
        var mobileNumber = event.target.value;
        this.setState({
            mobileNumber: mobileNumber,

        })
    }
   


    handleSubmit = (event) => {
      
        if (this.state.name === "" || this.state.name.length < 4) {
            this.setState({
                Error: true,
                message: "Name can't be null or should be greater Than 4"
            })
        }

        else if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.state.email)) {
            this.setState({
                Error: true,
                message: 'Please provide a valid email address'
            })
        }
        else if (this.state.password === null || this.state.password.length < 5) {
            this.setState({
                Error: true,
                message: "Password length should be min 5"
            })
        }
        else {
            var userRegister = {
                "name": this.state.name,
                "email": this.state.email,
                "mobileNumber": this.state.mobileNumber,
                "password": this.state.password,
            }
            console.log("register", userRegister)
            Usercontroller(userRegister).then(res => {
                console.log(res.data);
                this.setState({
                    Error: true,
                    message: 'User already registered!',
                    name: '',
                    mobileNumber: '',
                    email: '',
                    password: '',
                });
                this.props.history.push('/registersuccess');
            }).catch((err) => {
                let msg = err.response.data.message;
                console.log("error", err.response.data.message);
                this.setState({
                    Error: true,
                    message: 'User already registered!',
                    name: '',
                    mobileNumber: '',
                    email: '',
                    password: '',
                });

            })
        }



    }


    render() {
        return (


            <div className='registerPage'>
                <Snackbar anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center"
                }}
                    open={this.state.Error}
                    autoHideDuration={6000}
                    onClose={this.snackBarClose}
                    message={this.state.message}
                    action={
                        <IconButton
                            onClick={this.snackBarClose}>
                        </IconButton>
                    } />


                <Card className="registerCard" style={{ width: "50%" }}>
                    <AppBar >
                        <Toolbar>

                            <Typography variant="h4" className='title' >
                                Fundoo Note App
                            </Typography>
                        </Toolbar>
                    </AppBar>

                    <div className="cardView">
                        <div className="register-h2"><h1>Sign up for Fundoo!</h1></div>
                        <div className="dispaly-box">
                            <div className='register-names'>

                                <div className="field-pos">

                                    <TextField
                                        className="name"
                                        required
                                        id="name"
                                        label="Name"

                                        type="text"
                                        margin="normal"
                                        variant="outlined"
                                        value={this.state.name}
                                        onChange={this.onChangeName}
                                        errorText={this.state.NameError}

                                    />

                                </div>


                                <div className="field-pos">

                                    <TextField
                                        className="mobilenumber"
                                        required
                                        id="mobilenumber"
                                        label="Mobile number"

                                        type="text"
                                        margin="normal"
                                        variant="outlined"
                                        value={this.state.mobileNumber}
                                        onChange={this.onChangeMobileNumber}
                                        errorText={this.state.mobileNumberError}

                                    />

                                </div>

                                <div className="field-pos">

                                    <TextField
                                        className="email"
                                        required
                                        id="email"
                                        label="email"

                                        type="email"
                                        margin="normal"
                                        variant="outlined"
                                        value={this.state.email}
                                        onChange={this.onChangeEmail}
                                        errorText={this.state.emailError}


                                    />

                                </div>

                                <div className="field-pos">

                                    <TextField
                                        className="password"
                                        required
                                        id="password"
                                        label="password"

                                        type="password"
                                        margin="normal"
                                        variant="outlined"
                                        value={this.state.password}
                                        onChange={this.onChangePassword}
                                        errorText={this.state.passwordError}



                                    />

                                </div>

                                <div >
                                    <Button onClick={this.handleSubmit} color='primary' variant="contained">
                                        submit
                             </Button>
                                    {/* <Button class="cancel-button" onClick={this.cancelSubmit} color='primary' variant="contained">
                                    cancel
                             </Button> */}

                                </div>
                            </div>
                        </div>

                    </div>
                </Card>





            </div >

        );
    }

}
export default withRouter(Registration);
