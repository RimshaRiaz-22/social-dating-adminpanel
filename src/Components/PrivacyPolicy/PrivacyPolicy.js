import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import { useNavigate } from 'react-router-dom'
import { SearchOutlined, EyeTwoTone, DeleteTwoTone, ExclamationCircleOutlined, CheckCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons';
import { Button, Input, Space, Table, Form } from 'antd';
import React, { useRef, useState, useEffect } from 'react';
import Highlighter from 'react-highlight-words';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@mui/material';
import WcIcon from '@mui/icons-material/Wc';
import { Modal } from 'antd';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import axios from "axios";
import Box from '@mui/material/Box';
import '../tableStyle.css'
import url from '../url'
import PropTypes from 'prop-types';

const { confirm } = Modal;

const iconFont = {
    fontSize: '20px'
}

const marginTop = {
    marginTop: '10px'
}
const addbtn = {
    height: '50px',
    borderRadius: '20px',
    backgroundColor: '#1A513B',
    color: 'white',
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
function PrivacyPolicy() {
    let navigate = useNavigate();
    //Get API Axios
    // const [data, setData] = useState([]);
    const [status1, setstatus1] = useState([]);

    const data = [
        {
            key: '1',
            startingRoute: 'User',
            endingRoute: 'user@gmail.com',
            distance: '0300000',
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

    const columns = [
        {
            title: 'Name',
            dataIndex: 'startingRoute',
            key: 'startingRoute',
            width: '20%',
            ...getColumnSearchProps('startingRoute'),
        },
        {
            title: 'Email',
            dataIndex: 'endingRoute',
            key: 'endingRoute',
            width: '20%',
            ...getColumnSearchProps('endingRoute'),
        },
        {
            title: 'Phone Number',
            dataIndex: 'distance',
            key: 'distance',
            width: '20%',
            ...getColumnSearchProps('distance'),
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            width: '20%',
            render: (_, record) => (
                <Space size="middle">
                    {/* Verify User */}
                    {record.status ?<div>Verified</div> : <div>Blocked</div>}
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
                            setstatus1(false)
                        }}
                    >
                        <CloseCircleTwoTone  style={iconFont} twoToneColor="red" /></a>
                        :
                        <a
                            onClick={() => {
                                setstatus1(true)

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
                    {/* <a
                        onClick={() => {
                            // console.log(row._id)
                            onToggleView("sghdjhas")
                            // showModalAdd
                        }}
                    ><EditTwoTone style={iconFont} twoToneColor="green" /></a> */}
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
            title: 'Are you sure delete this User?',
            icon: <ExclamationCircleOutlined />,
            //   content: 'Some descriptions',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',

            onOk() {
                console.log('OK');
                // axios.delete(`${url}admin/delete-promocode`, {
                //     data: {
                //         _id: IdData
                //     }
                // }, { headers })
                //     .then(res => {
                //         console.log(res);
                //         getAllData()
                //     }).catch(err => {
                //         console.log(err)
                //     })
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
    // Add 
    const [visibleAdd, setVisibleAdd] = useState(false);
    const [confirmLoadingAdd, setConfirmLoadingAdd] = useState(false);
    const [modalTextAdd, setModalTextAdd] = useState('Content of the modal');

    const showModalAdd = () => {
        setVisibleAdd(true);
    };

    const handleOkAdd = () => {
        setModalTextAdd('Creating Discount');
        // submitHandler
        // setConfirmLoadingAdd(true);
        setVisibleAdd(false);
        setConfirmLoadingAdd(false);
        Modal.success({
            content: 'Created User Successfully',
        });
        // setTimeout(() => {
        // setVisibleAdd(false);
        // setConfirmLoadingAdd(false);
        // Modal.success({
        //     content: 'Created Route Successfully',
        // });
        // if (discount > 100) {
        //     Modal.error({
        //         title: 'Discount should be in percentage',
        //     });
        //     setdiscount("");

        // } else {
        //     axios.post(`${url}admin/create-promocode`, {
        //         discount: discount,
        //     }, { headers }).then(response => {
        //         console.log(response)
        //         setdiscount("");
        //         getAllData()
        //         // Clear Dta 
        //         Modal.success({
        //             content: 'PromoCode Generated Successfully',
        //         });
        //         // setOpenAdd(false);

        //     })
        //         .catch(err => {
        //             console.log(err)
        //         })
        // }

        // }, 2000);
    };

    const handleCancelAdd = () => {
        console.log('Clicked cancel button');
        setVisibleAdd(false);
    };
    const [discount, setdiscount] = useState("");

    return (
        <div style={{ marginBottom: '300px' }}>
            <div role="presentation">
                <Breadcrumbs aria-label="breadcrumb">
                    <Link
                        underline="hover"
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="inherit"
                        onClick={handleClick}
                    //   href="/drawer"
                    >
                        <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                        Home
                    </Link>
                    <Link
                        underline="hover"
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="text.primary"
                    //   href="/material-ui/getting-started/installation/"
                    >
                        <LockOutlinedIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                        Privacy Policy
                    </Link>
                </Breadcrumbs>
            </div>
            <div style={marginTop}>
                <Grid container spacing={2}>

                    <Grid item xs={12} md={12}>
                        <Box
                            sx={{ display: 'flex', p: 1, bgcolor: 'transparent', borderRadius: 1 }}
                        >
                            <Item sx={{ flexGrow: 2 }}>
                                <Typography variant='h6' style={{ fontWeight: 700 }} >Privacy Policy</Typography>
                            </Item>
                            <Item>
                                {/* <Button variant="contained" style={addbtn}
                                    onClick={showModalAdd}
                                >
                                    + PrivacyPolicy
                                </Button> */}
                                <Modal
                                    title="Add Route"
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
                                        <Form.Item label="Starting ">
                                            <Input value={discount} placeholder="Enter Starting Location"
                                                onChange={(e) => setdiscount(e.target.value)
                                                } />
                                        </Form.Item>
                                        <Form.Item label="Ending ">
                                            <Input
                                                // value={discount}
                                                //     onChange={(e) => setdiscount(e.target.value)
                                                //     } 
                                                placeholder="Enter Ending Location" />
                                        </Form.Item>
                                        <Form.Item label="Distance">
                                            <Input
                                                // value={discount}
                                                //     onChange={(e) => setdiscount(e.target.value)
                                                //     } 
                                                placeholder="Enter Distance" />
                                        </Form.Item>
                                        <Form.Item label=" Walk Time">
                                            <Input
                                                // value={discount}
                                                //     onChange={(e) => setdiscount(e.target.value)
                                                //     } 
                                                placeholder="Enter Time of Walk" />
                                        </Form.Item>
                                        <Form.Item
                                            wrapperCol={{
                                                offset: 8,
                                                span: 16,
                                            }}
                                        >
                                            <Button type="primary" htmlType="submit" onClick={handleOkAdd} style={{ backgroundColor: '#ff0047', border: 'none' }}>
                                                Submit
                                            </Button>
                                        </Form.Item>

                                    </Form>
                                </Modal>

                            </Item>
                        </Box>

                    </Grid>
                    <Grid item xs={12} md={12}>
                        {/* <div className='tableResponsive'>
                            <Table columns={columns} dataSource={data} />
                        </div> */}
                        <Modal
                            title="User Details"
                            visible={visibleView}
                            // onOk={handleOkView}
                            confirmLoading={confirmLoadingView}
                            onCancel={handleCancelView}
                            footer={null}
                        >
                            {/* <Form
                            labelCol={{
                                span: 4,
                            }}
                            wrapperCol={{
                                span: 14,
                            }}
                            layout="horizontal"
                        // onValuesChange={onFormLayoutChange}
                        // disabled={componentDisabled}
                        > */}

                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    {/* <Image
                                            width={200}
                                            src={`${url}${Img}`}
                                        /> */}

                                </Grid>
                                <Grid item xs={6}>
                                    <Typography >Name :</Typography>

                                </Grid>
                                <Grid item xs={6}>
                                    <Typography >name</Typography>

                                </Grid>
                                <Grid item xs={6}>
                                    <Typography >Email :</Typography>

                                </Grid>
                                <Grid item xs={6}>
                                    <Typography >user@gmail.com</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography >Phone Number :</Typography>

                                </Grid>
                                <Grid item xs={6}>
                                    <Typography >0300000</Typography>
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

export default PrivacyPolicy
