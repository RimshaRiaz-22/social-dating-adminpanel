import { useState, useEffect } from "react";
import axios from 'axios';
import { Avatar, Grid } from '@mui/material'
import image from '../Components/Images/LOGOApp.png'
import { useNavigate } from 'react-router-dom'
import ClipLoader from "react-spinners/ClipLoader";
import url from '../Components/url'
import background from '../Components/Images/bgImg.png'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import 'antd/dist/antd.css'
import './stylesheet.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import { Modal } from 'antd';

const logoStyle = {
    width: '300px',
    height: '300px',

    marginBottom: '-50px',
    marginTop: '-50px'
}
const logo = {
    marginBottom: '50px',
    marginTop: '70px',
    // width: '300px',
    // height: '300px',
    fontSize:'32px',
    color:'#ff0047'
}
const ContainerStyle = {
   
    color: 'black',
    height: '110vh',
    backgroundImage: 'linear-gradient(to right, rgb(247 93 91), rgb(222 52 91))',
}
const backgroundDiv = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 800px'
}
const ContainerStyle3 = {
    paddingTop: '150px',
    justifyContent: 'center',
    color: '#1A513B',
    height: '110vh',
    // backgroundColor: '#ff0047',
    backgroundImage: 'linear-gradient(to right, rgb(253 103 91), rgb(217 43 91))',

}
const divImg={
        backgroundImage: `url(${background})` ,
width:'100%',
height:'100%',
margin:0,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
}

const headingStyle = {
    fontSize: '20px',
    fontFamily: 'Roboto Slab',
    color: 'black',
    margin:'0'

}
const gridCont = {
    backgroundColor: 'transparent',
    paddingTop: '120px'
}
const override = {
    display: ' block',
    margin: '0 auto',
}
const color = "#1A513B"
const colorBtn = "white"
const ContainerCardStyle = {
padding:0
}

const heading = "ADMIN LOGIN"
function Login2() {
    // Loading 
    const [loading, setLoading] = useState("");
    const [loading1, setLoading1] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)

        }, 3000)
    }, [])

    //    Get 
    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [session, setSession] = useState("");
    const headers = {
        'Content-Type': 'application/json'
    }

    const onFinish = (values) => {
        // console.log('Received values of form: ', values);
        // setLoading1(true)
        // setTimeout(() => {
        //     setLoading1(false)
        //     navigate('/drawer');
        // }, 3000)
        // console.log('Received values of form: ', values);
        setLoading1(true)
        setTimeout(() => {
            setLoading1(false)
            navigate('/home'
                ,
                {
                    state: {
                        ID: 'Id',
                        email: 'admin@gmail.com',
                    }
                }
            );
            //  axios.put(`${url}admin/Login2-admin`, {
            //    email: email,
            //    password: password
            //  }, { headers }).then(response => {
            //    console.log(response)
            //    const session1 = response.data.session;
            //    const Id = response.data._id;

            //    setSession(response.data.session);
            //    console.log(session1);

            //    navigate('/home'
            //      ,
            //      {
            //        state: {
            //          ID: Id,
            //          email: email,
            //        }
            //      }
            //    );
            //    //   navigate('/home');
            //  })
            //    .catch(err => {
            //      console.log(err)
            //      Modal.error({
            //        title: 'This is an error message',
            //        content: 'Invalid Credentials',
            //      });
            //    })
        }, 3000)
    };
    return (
        <div >
            {loading ?
                < Grid container spacing={2} style={ContainerStyle3}>
                    <ClipLoader color={color} loading={loading} css={override} size={30} />
                </Grid>
                :
                < Grid container spacing={2} style={ContainerStyle}>

                    <Grid item xs={12} md={2} > </Grid>

                    <Grid item xs={12} md={8} style={gridCont}>
                        <Card sx={{ minWidth: 275 }}>
                                < Grid container spacing={2} style={ContainerCardStyle}>

                                    <Grid item xs={12} md={6} >
                                        <div style={divImg}></div>
                                     
                                        </Grid>
                                    <Grid item xs={12} md={6} >
                                    <Grid align='center' >
                                    <h6 style={logo}>Social Dating</h6>

                                        {/* <Avatar src={image} variant="square" style={logoStyle} ></Avatar> */}
                                        <h6 style={headingStyle}>{heading}</h6>

                                        <Form
                                            name="normal_login"
                                            className="login-form"
                                            initialValues={{
                                                remember: true,
                                            }}
                                            onFinish={onFinish}
                                        >
                                            <Form.Item
                                                name="email"

                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input your Email!',
                                                    },
                                                ]}
                                            >
                                                <Input prefix={<UserOutlined className="site-form-item-icon" />}
                                                    className="inputField"
                                                    value={email}
                                                    onChange={
                                                        (e) => setEmail(e.target.value)
                                                    }
                                                    placeholder="Email" />
                                            </Form.Item>
                                            <Form.Item
                                                name="password"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input your Password!',
                                                    },
                                                ]}
                                            >
                                                <Input

                                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                                    type="password"
                                                    value={password}
                                                    onChange={
                                                        (e) => setPassword(e.target.value)
                                                    }
                                                    placeholder="Password"
                                                    className="inputField"
                                                />
                                            </Form.Item>
                                            <Form.Item>
                                                <Button type="primary" htmlType="submit" className="login-form-button" >
                                                    {loading1 ? <ClipLoader color={colorBtn} loading={loading1} css={override} size={10} /> : <h6 style={{ color: 'white' }}>
                                                        Login</h6>}
                                                </Button>
                                            </Form.Item>
                                        </Form>
                                        </Grid>

                                    </Grid>

                                </Grid>


                        </Card>

                    </Grid>
                    <Grid item xs={12} md={2} > </Grid>

                </Grid>
            }
        </div>

    )
}

export default Login2