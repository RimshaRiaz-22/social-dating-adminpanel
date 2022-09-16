import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom'
import { SearchOutlined, EyeTwoTone, DeleteTwoTone, ExclamationCircleOutlined, EditTwoTone, CheckCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons';
import { Button, Input, Space, Table, Form } from 'antd';
import React, { useRef, useState, useEffect } from 'react';
import Highlighter from 'react-highlight-words';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@mui/material';
import { Modal } from 'antd';
import axios from "axios";
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import {
    CButton,
    CFormInput
  } from '@coreui/react'

import Box from '@mui/material/Box';
import '../tableStyle.css'
import url from '../url'
import PropTypes from 'prop-types';

const { confirm } = Modal;

const iconFont = {
    fontSize: '20px'
}

const marginTop = {
    marginTop: '-50px'
}
const addbtn = {
    height: '50px',
    borderRadius: '10px',
    border:'none',
    // backgroundColor: '#ff0047',
    color: 'white',
    backgroundImage: 'linear-gradient(to right,rgb(217 43 91 ),rgb(253 103 91) )'
    // borderRadius:'50px'
}

function Item(props) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                p: 1,
                m: 1,
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? 'transparent' : 'transparent'),
                color: (theme) => (theme.palette.mode === 'dark' ? 'black' : 'black'),
                borderColor: (theme) =>
                    theme.palette.mode === 'dark' ? 'white' : 'white',
                borderRadius: 2,
                fontSize: '0.875rem',
                fontWeight: '700',
                ...sx,
            }}
            {...other}
        />
    );
}

Item.propTypes = {
    sx: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
        ),
        PropTypes.func,
        PropTypes.object,
    ]),
};
function SubscriptionData2() {
    let navigate = useNavigate();
    //Get API Axios
    // const [data, setData] = useState([]);
    const [status1, setStatus1] = useState(false);
    const [status2, setStatus2] = useState(false);
    const data = [
        {
            key: '1',
            subId: '12343',
            UserName: 'User1',
            email: 'user@gmail.com',
            SubscriptionType: 'Monthly',
            status:{status1}
    
        },
    ]



    // const [loading, setLoading] = useState(false);
    const getAllData = () => {
        //     axios.get(`${url}admin/get-all-promo`)
        //         .then((response) => {
        //             const allData = response.data;
        //             console.log(allData);
        //             setData(response.data);
        //             setLoading(true)
        //         })
        //         .catch(error => console.error(`Error:${error}`));

    }
    useEffect(() => {
        getAllData();

    }, []);
    // Add 
    function handleClick(event) {
        event.preventDefault();
        // navigate('/drawer');
        window.location.reload();

        console.info('You clicked a breadcrumb.');
    }
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div
                style={{
                    padding: 8,
                }}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1890ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });
    const checkbox1 = () => {
        // console.log(Did);
        setStatus1(false)
    }
    const checkbox = () => {
        setStatus1(true)

        // console.log(Did);

        // axios.put(`${url}admin/verify-user`, {
        //     _id: Did
        // }, { headers }).then(response => {
        //     console.log(response);
        //     console.log('Company Approved')
        //    getAllData();
        //    Modal.success({
        //     content: 'User Verified Successfully',
        // });
        // })
        //     .catch(err => {
        //         console.log(err)
        //     })
    }
    const columns = [
        {
            title: 'SubscriptionId',
            dataIndex: 'subId',
            key: 'subId',
            width: '20%',
        },
        {
            title: 'UserName',
            dataIndex: 'UserName',
            key: 'UserName',
            width: '20%',
            ...getColumnSearchProps('UserName'),
        },
        {
            title: 'email',
            dataIndex: 'email',
            key: 'email',
            width: '20%',
            ...getColumnSearchProps('email'),
        }, {
            title: 'SubscriptionType',
            dataIndex: 'SubscriptionType',
            key: 'SubscriptionType',
            width: '20%',
            ...getColumnSearchProps('SubscriptionType'),
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            width: '20%',
            render: (_, record) => (
                <Space size="middle">
                    {/* Verify User */}
                    {record.status ?<div>Approved</div> : <div>UnApproved</div>}
                </Space>
            ),
        },
        // {
        //     title: 'Walk Time',
        //     dataIndex: 'walktime',
        //     key: 'walktime',
        //     width: '20%',
        //     ...getColumnSearchProps('walktime'),
        // },
        {
            title: 'Action',
            width: '20%',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    {record.status ? <a
                        onClick={() => {
                            // console.log(row._id)
                            setStatus1(false)
                        }}
                    >
                        <CloseCircleTwoTone  style={iconFont} twoToneColor="red" /></a>
                        :
                        <a
                            onClick={() => {
                                setStatus1(true)

                            }}
                        >

                            <CheckCircleTwoTone style={iconFont} twoToneColor="green" /></a>

                    }
                    <a
                        onClick={() => {
                            // console.log(row._id)
                            deleteData(record._id)
                        }}
                    ><DeleteTwoTone style={iconFont} twoToneColor="red" /></a>
                    <a
                        onClick={() => {
                            // console.log(row._id)
                            onToggleView("sghdjhas")
                            // showModalAdd
                        }}
                    ><EditTwoTone style={iconFont} twoToneColor="green" /></a>
                    <a
                        onClick={() => {
                            // console.log(row._id)
                            onToggleView("record._id")
                        }}
                    >< EyeTwoTone style={iconFont} twoToneColor="orange" /></a>

                </Space>

            ),
            //   ...getColumnSearchProps('age'),
        },
    ];
    //   View 
    const [visibleView, setVisibleView] = useState(false);
    const [confirmLoadingView, setConfirmLoadingView] = useState(false);
    const [modalTextView, setModalTextView] = useState('Content of the modal');

    const showModalView = () => {
        setVisibleView(true);
    };

    const handleOkView = () => {
        setModalTextView('The modal will be closed after two seconds');
        setConfirmLoadingView(true);
        setTimeout(() => {
            setVisibleView(false);
            setConfirmLoadingView(false);
        }, 2000);
    };

    const handleCancelView = () => {
        console.log('Clicked cancel button');
        setVisibleView(false);
    };
    const onToggleView = async (id) => {
        // setOpenUpdate(true);
        setVisibleView(true);

        console.log(id);

        // await axios.get(`${url}doctor/get-doctor`, {
        //     params: {
        //         _id: id
        //     }
        // }, { headers }).then(response => {
        //     console.log('response')
        //     console.log(response.data);
        //     // setIdData(response.data._id);
        //     // setUserName(response.data.username);
        //     // setEmail(response.data.email);
        //     // setStartTime(response.data.startTime);
        //     // setEndTime(response.data.endTime);
        //     // setLocation(response.data.location);
        //     // setDoctorFee(response.data.doctorFee)
        //     // setSubscriptionType(response.data.price)
        //     // setImgData(response.data.image)
        //     // setDetail(response.data.detail)
        //     // setValueRate(response.data.totalRating)

        // })
        //     .catch(err => {
        //         console.log(err)
        //     })
    }
    const headers = {
        'Content-Type': 'application/json'
    }
    // Delete 
    const showDeleteConfirm = (IdData) => {
        confirm({
            title: 'Are you sure delete this Subscription?',
            icon: <ExclamationCircleOutlined />,
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',

            onOk() {
                console.log('OK');

            },

            onCancel() {
                console.log('Cancel');
            },
        });
    };
    const deleteData = (IdData) => {
        console.log(IdData)
        showDeleteConfirm(IdData)

    }
    // Add 
    const [visibleAdd, setVisibleAdd] = useState(false);
    const [confirmLoadingAdd, setConfirmLoadingAdd] = useState(false);
    const [modalTextAdd, setModalTextAdd] = useState('Content of the modal');

    const showModalAdd = () => {
        setVisibleAdd(true);
    };

    const handleOkAdd = () => {
        setModalTextAdd('Creating Subscription');
        setVisibleAdd(false);
        setConfirmLoadingAdd(false);
        Modal.success({
            content: 'Created Subscription Successfully',
        });

    };

    const handleCancelAdd = () => {
        console.log('Clicked cancel button');
        setVisibleAdd(false);
    };
    const [discount, setdiscount] = useState("");

    return (
        <div >
           
            <div style={marginTop}>
                <Grid container spacing={2}>

                    <Grid item xs={12} md={12}>
                        <Box
                            sx={{ display: 'flex', p: 1, bgcolor: 'transparent', borderRadius: 1 }}
                        >
                            <Item sx={{ flexGrow: 2 }}>
                                <Typography variant='h6' style={{ fontWeight: 700 }} >Subscriptions</Typography>
                            </Item>
                            <Item>
                                <Button variant="contained" style={addbtn}
                                    onClick={showModalAdd}
                                >
                                    + Subscription
                                </Button>
                                <Modal
                                    title="Add Subscription"
                                    visible={visibleAdd}
                                    // onOk={handleOkAdd}
                                    confirmLoading={confirmLoadingAdd}
                                    onCancel={handleCancelAdd}
                                    footer={null}
                                >
                                    <Form
                                        labelCol={{
                                            span: 4,
                                        }}
                                        wrapperCol={{
                                            span: 14,
                                        }}
                                        layout="horizontal"
                                    >
                                          <Grid container spacing={2}>
               
                <Grid item xs={12} md={4} >
                  <h6>Id</h6>
                </Grid>
                <Grid item xs={12} md={8} >
                  <CFormInput
                    type="text"
                    required
                    className='itemPadding'
                  />
                  </Grid>
                  <Grid item xs={12} md={4} >
                  <h6>User Name</h6>
                </Grid>
                <Grid item xs={12} md={8} >
                  <CFormInput
                    type="text"
                    required
                    className='itemPadding'
                  />
                  </Grid><Grid item xs={12} md={4} >
                  <h6>Email</h6>
                </Grid>
                <Grid item xs={12} md={8} >
                  <CFormInput
                    type="text"
                    required
                    className='itemPadding'
                  />
                  </Grid><Grid item xs={12} md={4} >
                  <h6>Subscription Type</h6>
                </Grid>
                <Grid item xs={12} md={8} >
                  <CFormInput
                    type="text"
                    required
                    className='itemPadding'
                  />
                  </Grid>
                  <Grid item xs={12} md={12} >
                  <Button type="primary" className='btnBg' htmlType="submit" onClick={handleOkAdd}>
                                                Submit
                                            </Button>
                  </Grid>
                  </Grid>
                                      
                                        {/* <Form.Item
                                            wrapperCol={{
                                                offset: 8,
                                                span: 16,
                                            }}
                                        > */}
                                           
                                        {/* </Form.Item> */}

                                    </Form>
                                </Modal>

                            </Item>
                        </Box>

                    </Grid>
                    <Grid item xs={12} md={12}>
                        <div className='tableResponsive'>
                            <Table columns={columns} dataSource={data} />
                        </div>
                        <Modal
                            title="Subscription Details"
                            visible={visibleView}
                            // onOk={handleOkView}
                            confirmLoading={confirmLoadingView}
                            onCancel={handleCancelView}
                            footer={null}
                        >


                            <Grid container spacing={2}>
                                <Grid item xs={12}>


                                </Grid>
                                <Grid item xs={6}>
                                    <Typography >SubscriptionId :</Typography>

                                </Grid>
                                <Grid item xs={6}>
                                    <Typography >1234</Typography>

                                </Grid>
                                <Grid item xs={6}>
                                    <Typography >SubscriptionId :</Typography>

                                </Grid>
                                <Grid item xs={6}>
                                    <Typography >1234</Typography>

                                </Grid> <Grid item xs={6}>
                                    <Typography >Name :</Typography>

                                </Grid>
                                <Grid item xs={6}>
                                    <Typography >User1</Typography>

                                </Grid> <Grid item xs={6}>
                                    <Typography >Email :</Typography>

                                </Grid>
                                <Grid item xs={6}>
                                    <Typography >user@gmail.com</Typography>

                                </Grid>
                                <Grid item xs={6}>
                                    <Typography >Subscription Type :</Typography>

                                </Grid>
                                <Grid item xs={6}>
                                    <Typography >Monthly</Typography>

                                </Grid>

                            </Grid>
                            {/* </Form> */}

                        </Modal>
                    </Grid>

                </Grid>


            </div>
        </div>
    )
}

export default SubscriptionData2
