import {
  CardMedia,
  Container,
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
import { number } from 'prop-types';
import { useState } from 'react';

const tour = [
  {
    id: 1,
    imgSrc: img,
    destTitle:
      'Đông Bắc: Hà Nội - Hà Giang - Lũng Cú - Đồng Văn - Mã Pí Lèng - Mèo Vạc - Cao Bằng - Thác Bản Giốc - Hồ Ba Bể',
    type: 'NDSGN307-008-080224VU-F',
    start_time: '31/1/2024',
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
  const [numberPeople, setNumberPeople] = useState(1)

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
                  <Grid sx={{ textAlign: 'left', backgroundColor: '#f2f1ed', borderRadius: '10px', }}>
                    <FormGroup
                      sx={{
                        alignItems: 'center',
                        borderRadius: '10px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        padding:"1rem"
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
                              backgroundColor: '#ffffff'
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
                              backgroundColor: '#ffffff'
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
                              backgroundColor: '#ffffff'
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
                              backgroundColor: '#ffffff'
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
                      id='number-people'
                      label='Số lượng hành khách'
                      placeholder='1'
                      type='number'
                      onKeyDown={e => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault()}
                      InputProps={{
                        inputProps: {
                          min: 1,
                          max:tourItem.number
                        }
                      }}
                      customvalue={numberPeople}
                      customsetvalue={setNumberPeople}
                    />
                </Grid>
                <Grid item md={4} xs={12} className="right">
                  <Grid sx={{ textAlign: 'left', backgroundColor: '#f2f1ed', borderRadius: '10px', }}>
                    
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
                    Tóm tắt chuyến đi
                  </Typography>
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
