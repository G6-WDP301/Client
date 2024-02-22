import {
  Button,
  CardMedia,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import Navbar from '../../layout/Navbar';
import img from '../../images/image_hotel(1).jpg';
import img1 from '../../images/image_hotel(2).jpg';
import img2 from '../../images/image_hotel(3).jpg';
import img3 from '../../images/image_hotel(4).jpg';
import maldivies from '../../images/maldives1.jpg';
import canada from '../../images/canada1.jpg';
import map from '../../images/map.jpg';
import france from '../../images/france1.jpg';
import Footer from '../../layout/Footer';
import { useState } from 'react';
import EventIcon from '@mui/icons-material/Event';
import GroupsIcon from '@mui/icons-material/Groups';

const tour = [
  {
    id: 1,
    imgSrc: img,
    destTitle:
      'Đông Bắc: Hà Nội - Hà Giang - Lũng Cú - Đồng Văn - Mã Pí Lèng - Mèo Vạc - Cao Bằng - Thác Bản Giốc - Hồ Ba Bể',
    type: 'NDSGN307-008-080224VU-F',
    start_time: '31/1/2024',
    end_time: '3/2/2024',
    start_location: 'Hà Nội',
    number: '3',
    locations: [
      {
        location: 'SB NỘI BÀI – HÀ NỘI',
        time: '31/01/2024',
        details:
          'Quý khách tập trung tại sân bay Tân Sơn Nhất (Ga nội địa), hướng dẫn viên hỗ trợ khách làm thủ tục đáp chuyến bay đi Hà Nội. Đến sân bay Nội Bài, xe và HDV Vietravel đón Quý khách đi Hà Nội nhận phòng khách sạn nghỉ ngơi hoặc tự do đi tham quan.',
      },
      {
        location: 'HÀ NỘI - HÀ GIANG 01 bữa ăn: (Sáng)',
        time: '01/02/2024',
        details:
          'Quý khách tập trung tại sân bay Tân Sơn Nhất (Ga nội địa), hướng dẫn viên hỗ trợ khách làm thủ tục đáp chuyến bay đi Hà Nội. Đến sân bay Nội Bài, xe và HDV Vietravel đón Quý khách đi Hà Nội nhận phòng khách sạn nghỉ ngơi hoặc tự do đi tham quan.',
      },
      {
        location: 'HÀ GIANG - QUẢN BẠ - YÊN MINH – ĐỒNG VĂN 01 bữa ăn: (Sáng)',
        time: '02/02/2024',
        details:
          'Quý khách tập trung tại sân bay Tân Sơn Nhất (Ga nội địa), hướng dẫn viên hỗ trợ khách làm thủ tục đáp chuyến bay đi Hà Nội. Đến sân bay Nội Bài, xe và HDV Vietravel đón Quý khách đi Hà Nội nhận phòng khách sạn nghỉ ngơi hoặc tự do đi tham quan.',
      },
      {
        location: 'ĐỒNG VĂN – MÈO VẠC – CAO BẰNG 01 bữa ăn: (Sáng)',
        time: '03/02/2024',
        details:
          'Quý khách tập trung tại sân bay Tân Sơn Nhất (Ga nội địa), hướng dẫn viên hỗ trợ khách làm thủ tục đáp chuyến bay đi Hà Nội. Đến sân bay Nội Bài, xe và HDV Vietravel đón Quý khách đi Hà Nội nhận phòng khách sạn nghỉ ngơi hoặc tự do đi tham quan.',
      },
      {
        location:
          'THÁC BẢN GIỐC – ĐỘNG NGƯỜM NGAO – LÀNG ĐÁ KHUỔI KY 01 bữa ăn: (Sáng)',
        time: '0/042/2024',
        details:
          'Quý khách tập trung tại sân bay Tân Sơn Nhất (Ga nội địa), hướng dẫn viên hỗ trợ khách làm thủ tục đáp chuyến bay đi Hà Nội. Đến sân bay Nội Bài, xe và HDV Vietravel đón Quý khách đi Hà Nội nhận phòng khách sạn nghỉ ngơi hoặc tự do đi tham quan.',
      },
      {
        location: 'CAO BẰNG – KHU DI TÍCH PÁC PÓ – BA BỂ 01 bữa ăn: (Sáng)',
        time: '04/02/2024',
        details:
          'Quý khách tập trung tại sân bay Tân Sơn Nhất (Ga nội địa), hướng dẫn viên hỗ trợ khách làm thủ tục đáp chuyến bay đi Hà Nội. Đến sân bay Nội Bài, xe và HDV Vietravel đón Quý khách đi Hà Nội nhận phòng khách sạn nghỉ ngơi hoặc tự do đi tham quan.',
      },
      {
        location: 'BA BỂ - BẮC CẠN – HÀ NỘI – SB NỘI BÀI 01 bữa ăn: (Sáng)',
        time: '04/02/2024',
        details:
          'Quý khách tập trung tại sân bay Tân Sơn Nhất (Ga nội địa), hướng dẫn viên hỗ trợ khách làm thủ tục đáp chuyến bay đi Hà Nội. Đến sân bay Nội Bài, xe và HDV Vietravel đón Quý khách đi Hà Nội nhận phòng khách sạn nghỉ ngơi hoặc tự do đi tham quan.',
      },
    ],
    panoramaImages: [img, img, img],
    price: '720000',
    Time: '2 ngày 1 đêm',
  },
];

const itemData = [
  {
    img: img,
    title: 'Bed',
  },
  {
    img: maldivies,
    title: 'Bed',
  },
  {
    img: map,
    title: 'Bed',
  },
  {
    img: canada,
    title: 'Bed',
  },
  {
    img: france,
    title: 'Bed',
  },
  {
    img: img1,
    title: 'Bed',
  },
  {
    img: img2,
    title: 'Bed',
  },
  {
    img: img3,
    title: 'Bed',
  },
];

const BookingTour = () => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price);
  };
  const [numberPeople, setNumberPeople] = useState(1);
  const [type, setType] = useState('option1');
  const [option1Check, setOption1Checked] = useState(false);
  const [option2Check, setOption2Checked] = useState(false);
  const [textComment, setTextComment] = useState('');
  const [birthDate, setBirthDate] = useState('');

  const handleBirthDateChange = (event) => {
    const selectedDate = new Date(event.target.value);
    const currentDate = new Date();

    if (selectedDate > currentDate) {
      setBirthDate(event.target.value);
    }
  };

  const calculateTotalCost = (price, numberPeople) => {
    return price * numberPeople;
  };

  const handleOption1Change = () => {
    setType('option1');
    setOption1Checked(true);
    setOption2Checked(false);
  };

  const handleOption2Change = () => {
    setType('option2');
    setOption2Checked(true);
    setOption1Checked(false);
  };

  return (
    <>
      <Navbar />
      <Container
        style={{ padding: '2px', marginTop: '20px', marginBottom: '20px' }}
      >
        <Grid container spacing={3}>
          {tour.map((tourItem) => (
            <Grid key={tourItem.id} item xs={12} sm={12}>
              <Grid
                container
                style={{
                  padding: '16px',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                }}
              >
                <Grid item xs={12} sm={4} sx={{ textAlign: 'left' }}>
                  <CardMedia
                    component="img"
                    image={tourItem?.imgSrc}
                    alt="Live from space album cover"
                    sx={{ borderRadius: '10px 0px 0px 10px' }}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={8}
                  sx={{ textAlign: 'left', backgroundColor: '#f2f1ed' }}
                >
                  <Typography
                    sx={{
                      marginBottom: '8px',
                      fontFamily: 'Arial',
                      fontSize: '20px',
                      fontWeight: 'bold',
                      color: '#fa4807',
                      paddingLeft: '20px',
                    }}
                  >
                    {tourItem.destTitle}
                  </Typography>
                  <Typography
                    sx={{
                      marginBottom: '8px',
                      fontFamily: 'Arial',
                      fontSize: '15px',
                      color: '#000000',
                      paddingLeft: '20px',
                    }}
                  >
                    Mã tour: <b>{tourItem.type}</b>
                  </Typography>
                  <Typography
                    sx={{
                      marginBottom: '8px',
                      fontFamily: 'Arial',
                      fontSize: '15px',
                      color: '#000000',
                      paddingLeft: '20px',
                    }}
                  >
                    Giá vé: <b>{formatPrice(tourItem.price)}/khách</b>
                  </Typography>
                  <Typography
                    sx={{
                      marginBottom: '8px',
                      fontFamily: 'Arial',
                      fontSize: '15px',
                      color: '#000000',
                      paddingLeft: '20px',
                    }}
                  >
                    Khởi hành: <b>{tourItem.start_time}</b>
                  </Typography>
                  <Typography
                    sx={{
                      marginBottom: '8px',
                      fontFamily: 'Arial',
                      fontSize: '15px',
                      color: '#000000',
                      paddingLeft: '20px',
                    }}
                  >
                    Nơi khởi hành: <b>{tourItem.start_location}</b>
                  </Typography>
                  <Typography
                    sx={{
                      marginBottom: '8px',
                      fontFamily: 'Arial',
                      fontSize: '15px',
                      color: '#000000',
                      paddingLeft: '20px',
                    }}
                  >
                    Số chỗ còn nhận: <b>{tourItem.number}</b>
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item md={8} xs={12} className="left">
                  <Typography
                    variant="h2"
                    sx={{
                      marginBottom: '33px',
                      marginTop: '45px',
                      fontSize: '30px',
                      fontWeight: '700',
                      color: '#2d4271',
                      lineHeight: '38px',
                      width: '100%',
                    }}
                  >
                    Tổng quan chuyến đi
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{
                      marginBottom: '33px',
                      marginTop: '45px',
                      fontSize: '20px',
                      lineHeight: '40px',
                      fontWeight: '700',
                      color: '#2d4271',
                      width: '100%',
                    }}
                  >
                    Thông tin liên lạc
                  </Typography>
                  <Grid
                    sx={{
                      textAlign: 'left',
                      backgroundColor: '#f2f1ed',
                      borderRadius: '10px',
                    }}
                  >
                    <FormGroup
                      sx={{
                        alignItems: 'center',
                        borderRadius: '10px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        padding: '1rem',
                      }}
                    >
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            id="additionalText1"
                            label="Họ và tên"
                            fullWidth
                            sx={{
                              mt: 2,
                              display: 'flex',
                              flexDirection: 'column',
                              marginBottom: '20px',
                              backgroundColor: '#ffffff',
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            id="email"
                            label="Emai;"
                            fullWidth
                            sx={{
                              mt: 2,
                              display: 'flex',
                              flexDirection: 'column',
                              marginBottom: '20px',
                              backgroundColor: '#ffffff',
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            id="sdt"
                            label="Số điện thoại"
                            fullWidth
                            sx={{
                              mt: 2,
                              display: 'flex',
                              flexDirection: 'column',
                              marginBottom: '20px',
                              backgroundColor: '#ffffff',
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            id="additionalText4"
                            label="Địa chỉ"
                            fullWidth
                            sx={{
                              mt: 2,
                              display: 'flex',
                              flexDirection: 'column',
                              marginBottom: '20px',
                              backgroundColor: '#ffffff',
                            }}
                          />
                        </Grid>
                      </Grid>
                    </FormGroup>
                  </Grid>
                  <Typography
                    variant="h3"
                    sx={{
                      marginBottom: '33px',
                      marginTop: '45px',
                      fontSize: '25px',
                      lineHeight: '40px',
                      fontWeight: '700',
                      color: '#2d4271',
                      width: '100%',
                    }}
                  >
                    Hành khách
                  </Typography>
                  <TextField
                    fullWidth
                    id="number-people"
                    label="Số lượng hành khách"
                    placeholder="1"
                    type="number"
                    onKeyDown={(e) =>
                      ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault()
                    }
                    InputProps={{
                      inputProps: {
                        min: 1,
                        max: tourItem.number,
                      },
                    }}
                    customvalue={numberPeople}
                    customsetvalue={setNumberPeople}
                  />

                  <Typography
                    variant="h3"
                    sx={{
                      marginBottom: '33px',
                      marginTop: '45px',
                      fontSize: '25px',
                      lineHeight: '40px',
                      fontWeight: '700',
                      color: '#2d4271',
                      width: '100%',
                    }}
                  >
                    Lựa chọn thông tin tư vấn
                  </Typography>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={type === 'option1'}
                        onChange={handleOption1Change}
                      />
                    }
                    label="Nhập danh sách khách hàng"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={type === 'option2'}
                        onChange={handleOption2Change}
                      />
                    }
                    label="Tôi cần được nhân viên tư vấn Vietravel trợ giúp nhập thông tin đăng ký dịch vụ"
                  />
                  <Grid
                    sx={{
                      textAlign: 'left',
                      backgroundColor: '#f2f1ed',
                      borderRadius: '10px',
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'space-between',
                      marginTop: '20px',
                    }}
                  >
                    {type === 'option2' && (
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={12}>
                          <TextField
                            fullWidth
                            multiline
                            id="loadbalancer-create-ip-address"
                            label="Vui lòng nhập nội dung lời nhắn bằng tiếng Anh hoặc tiếng Việt"
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                alignItems: 'baseline',
                              },
                              backgroundColor: '#ffffff',
                            }}
                            customvalue={textComment}
                            customsetvalue={setTextComment}
                          />
                        </Grid>
                      </Grid>
                    )}
                  </Grid>
                  <Grid
                    sx={{
                      textAlign: 'left',
                      backgroundColor: '#f2f1ed',
                      borderRadius: '10px',
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'space-between',
                      marginTop: '20px',
                    }}
                  >
                    {type === 'option1' && (
                      <FormGroup
                        sx={{
                          alignItems: 'center',
                          borderRadius: '10px',
                          display: 'flex',
                          flexWrap: 'wrap',
                          justifyContent: 'space-between',
                          padding: '1rem',
                        }}
                      >
                        <Grid container spacing={2}>
                          <Grid item xs={12} sm={4}>
                            <TextField
                              id="additionalText1"
                              label="Họ và tên"
                              fullWidth
                              sx={{
                                mt: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                marginBottom: '20px',
                                backgroundColor: '#ffffff',
                              }}
                            />
                          </Grid>
                          <Grid item xs={12} sm={4}>
                            <TextField
                              id="additionalText1"
                              label="Giới tính"
                              fullWidth
                              sx={{
                                mt: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                marginBottom: '20px',
                                backgroundColor: '#ffffff',
                              }}
                            />
                          </Grid>
                          <Grid item xs={12} sm={4}>
                            <TextField
                              label="Ngày sinh"
                              type="datetime-local"
                              value={birthDate}
                              onChange={handleBirthDateChange}
                              InputLabelProps={{
                                shrink: true,
                              }}
                              sx={{
                                mt: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                marginBottom: '20px',
                                backgroundColor: '#ffffff',
                              }}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              id="sdt"
                              label="Số điện thoại"
                              fullWidth
                              sx={{
                                mt: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                marginBottom: '20px',
                                backgroundColor: '#ffffff',
                              }}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              id="additionalText4"
                              label="Địa chỉ"
                              fullWidth
                              sx={{
                                mt: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                marginBottom: '20px',
                                backgroundColor: '#ffffff',
                              }}
                            />
                          </Grid>

                          <Grid item xs={12} sm={12}>
                            <TextField
                              fullWidth
                              multiline
                              id="loadbalancer-create-ip-address"
                              label="Vui lòng nhập nội dung lời nhắn bằng tiếng Anh hoặc tiếng Việt"
                              sx={{
                                '& .MuiOutlinedInput-root': {
                                  alignItems: 'baseline',
                                },
                                backgroundColor: '#ffffff',
                              }}
                              customvalue={textComment}
                              customsetvalue={setTextComment}
                            />
                          </Grid>
                        </Grid>
                      </FormGroup>
                    )}
                  </Grid>
                </Grid>
                <Grid item md={4} xs={12} className="right">
                  <Grid
                    sx={{
                      textAlign: 'left',
                      backgroundColor: '#f2f1ed',
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        marginBottom: '33px',
                        marginTop: '45px',
                        fontSize: '20px',
                        lineHeight: '40px',
                        fontWeight: '700',
                        color: '#2d4271',
                        width: '100%',
                        paddingLeft: '20px',
                      }}
                    >
                      Tóm tắt chuyến đi
                    </Typography>
                    <Grid item xs={12} sm={12} sx={{ textAlign: 'left' }}>
                      <CardMedia
                        component="img"
                        image={tourItem?.imgSrc}
                        alt="Live from space album cover"
                        sx={{
                          borderRadius: '10px 0px 0px 10px',
                          paddingLeft: '20px',
                          paddingRight: '20px',
                          marginBottom: '20px',
                        }}
                      />
                    </Grid>
                    <Typography
                      sx={{
                        marginBottom: '8px',
                        fontFamily: 'Arial',
                        fontSize: '15px',
                        color: '#000000',
                        paddingLeft: '20px',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <EventIcon sx={{ marginRight: '8px' }} />
                      <span style={{ marginRight: '7px', color: '#2d4271' }}>
                        {' '}
                        Ngày bắt đầu:
                      </span>
                      <b>{tourItem.start_time}</b>
                    </Typography>
                    <Typography
                      sx={{
                        marginBottom: '8px',
                        fontFamily: 'Arial',
                        fontSize: '15px',
                        color: '#000000',
                        paddingLeft: '20px',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <EventIcon sx={{ marginRight: '8px' }} />
                      <span style={{ marginRight: '7px', color: '#2d4271' }}>
                        Ngày kết thúc:
                      </span>{' '}
                      <b>{tourItem.end_time}</b>
                    </Typography>
                    <Typography
                      sx={{
                        marginBottom: '8px',
                        fontFamily: 'Arial',
                        fontSize: '15px',
                        color: '#000000',
                        paddingLeft: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        paddingTop: '10px',
                      }}
                    >
                      <span>
                        <GroupsIcon sx={{ marginRight: '8px' }} />
                        <b style={{ marginRight: '30px', color: '#2d4271' }}>
                          Hành khách:
                        </b>
                      </span>
                      <b style={{ marginLeft: 'auto', paddingRight: '20px' }}>
                        {numberPeople} x {formatPrice(tourItem.price)}
                      </b>
                    </Typography>

                    <Typography
                      sx={{
                        marginBottom: '8px',
                        fontFamily: 'Arial',
                        fontSize: '15px',
                        color: '#000000',
                        paddingLeft: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        paddingTop: '10px',
                      }}
                    >
                      <b style={{ marginRight: '30px', color: '#2d4271' }}>
                        Chi phí{' '}
                      </b>
                      <b style={{ marginLeft: 'auto', paddingRight: '20px' }}>
                        {formatPrice(
                          calculateTotalCost(tourItem.price, numberPeople)
                        )}
                      </b>
                    </Typography>

                    <Divider />
                    <Typography
                      sx={{
                        marginBottom: '8px',
                        fontFamily: 'Arial',
                        fontSize: '18px',
                        color: '#000000',
                        paddingLeft: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        paddingTop: '10px',
                      }}
                    >
                      <b style={{ color: '#2d4271' }}>Tổng Thanh Toán</b>
                      <b
                        style={{
                          color: 'red',
                          fontSize: '25px',
                          marginLeft: 'auto',
                          paddingRight: '20px',
                        }}
                      >
                        {formatPrice(
                          calculateTotalCost(tourItem.price, numberPeople)
                        )}
                      </b>
                    </Typography>
                    <Divider />
                    <Button
                      style={{
                        background:
                          'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                        border: 0,
                        borderRadius: 10,
                        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                        color: 'white',
                        height: 48,
                        marginTop: '20px',
                        marginBottom: '20px',
                        width: '100%', // Set width to 100% for full width
                        paddingX: '20px',
                      }}
                    >
                      Đăng kí ngay
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
};
export default BookingTour;
