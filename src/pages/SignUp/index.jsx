import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import BadgeIcon from '@mui/icons-material/Badge';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { InputLabel } from '@mui/material';
import { useState } from 'react';

const defaultTheme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  const [isFocused, setFocused] = useState(false);

  const buttonStyle = {
    alignItems: 'center',
    backgroundImage: 'linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB)',
    border: '0',
    borderRadius: '5px',
    boxShadow: 'rgba(151, 65, 252, 0.2) 0 15px 30px -5px',
    boxSizing: 'border-box',
    color: '#FFFFFF',
    display: 'flex',
    fontFamily: 'Phantomsans, sans-serif',
    fontSize: '10px',
    justifyContent: 'center',
    lineHeight: '1em',
    maxWidth: '100%',
    minWidth: '140px',
    padding: '1px',
    textDecoration: 'none',
    userSelect: 'none',
    WebkitUserSelect: 'none',
    touchAction: 'manipulation',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    width: '100%',
    marginTop: '10px',
    marginBottom: '10px',
  };

  const spanStyle = {
    backgroundColor: 'rgb(5, 6, 45)',
    padding: '16px 24px',
    borderRadius: '6px',
    width: '100%',
    height: '100%',
    transition: '300ms',
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light'
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 2, bgcolor: 'secondary.main' }}>
              <BadgeIcon style={{ fontSize: '20px' }} />
            </Avatar>
            <Typography component="h1" variant="h5">
              REGISTER
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Your Name"
                name="name"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="dob"
                label="Date of Birth"
                type="date"
                InputLabelProps={{ shrink: true }}
                id="dob"
              />
              <div className={`custom-select ${isFocused ? 'focused' : ''}`}>
                <InputLabel
                  id="gender-label"
                  style={{ fontSize: '7px', marginLeft: '11px' }}
                >
                  Select Gender
                </InputLabel>
                <Select
                  label="Select Gender"
                  labelId="gender-label"
                  id="gender"
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  displayEmpty
                  style={{ width: '100%' }}
                  autoComplete="Gender"
                >
                  <MenuItem value="" disabled>
                    Select Gender
                  </MenuItem>
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </div>
              <TextField
                placeholder="Your phone number"
                margin="normal"
                required
                fullWidth
                name="phone"
                label="Phone Number"
                type="number"
                InputLabelProps={{ shrink: true }}
                id="phone"
              />
              <TextField
                placeholder="Your address"
                margin="normal"
                required
                fullWidth
                name="address"
                label="Your address"
                type="text"
                InputLabelProps={{ shrink: true }}
                id="address"
              />
              <TextField
                placeholder="Description about you ~"
                margin="normal"
                required
                fullWidth
                name="description"
                label="Description"
                type="text"
                InputLabelProps={{ shrink: true }}
                id="description"
              />
              <Button className="button-64" style={buttonStyle}>
                <span style={spanStyle}>Sign Up</span>
              </Button>

              <Grid container>
                <Grid item>
                  <Link
                    href="/login"
                    style={{ color: '#669966', textDecoration: 'none' }}
                  >
                    {'Do you have an account? Log in to your account'}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
