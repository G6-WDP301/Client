import React, { useState, useEffect } from 'react'
import './Navbar.scss'
import { SiYourtraveldottv } from 'react-icons/si'
import { AiFillCloseCircle } from 'react-icons/ai'
import { TbGridDots } from 'react-icons/tb'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Navbar = () => {

  //

  // const isLoggedIn = useSelector((state) => state.isAuthenticated);

  // const [user, setUser] = useState([]);

  // const [token, setToken] = useState(localStorage.getItem("token"));

  // useEffect(() => {
  //   axios
  //     .get("https://api.realworld.io/api/user", {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then((response) => {
  //       const userData = response.data.user;
  //       setUser({
  //         username: userData.username,
  //         email: userData.email,
  //       });
  //       console.log(userData);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching user data:", error);
  //     });


  //   axios.get('https://api.realworld.io/api/user', {
  //     headers: {
  //       Authorization: `Token ${token}`,
  //     },
  //   })

    //

    const navigate = useNavigate();

    const notify = () => toast("Feature being updated, please come back later!");

    // toggle show navbar
    const [active, setActive] = useState('navBar')

    const showNav = () => {
      setActive('navBar activeNavbar')
    }

    // close navBar 
    const closeNav = () => {
      setActive('navBar')
    }

    // add background color to the header
    const [transparent, setTransparent] = useState('header')
    const addBg = () => {
      if (window.scrollY >= 10) {
        setTransparent('header activeHeader')
      }
      else {
        setTransparent('header')
      }
    }
    // window.addEventListener('scroll', addBg)

    useEffect(() => {
      window.addEventListener('scroll', addBg);
      return () => {
        window.removeEventListener('scroll', addBg);
      };
    }, []);

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth >= 769) {
          // Hide elements with classes closeNavbar and toggleNavbar
          document.querySelector('.closeNavbar').style.display = 'none';
          document.querySelector('.toggleNavbar').style.display = 'none';
        } else {
          // Show elements with classes closeNavbar and toggleNavbar
          document.querySelector('.closeNavbar').style.display = 'block';
          document.querySelector('.toggleNavbar').style.display = 'block';
        }
      };

      // Initial check on component mount
      handleResize();

      // Event listener for window resize
      window.addEventListener('resize', handleResize);

      // Cleanup on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
        <div className='logoDiv'>
          <a href="#" className='logo'>
            <h1 className='flex font-bold text-xl'><SiYourtraveldottv className='icon'/> 
              TripGo
            </h1>
          </a>
        </div>

    return (
      <section className='navBarSection'>
        <div className={transparent}>

          <div className='logoDiv'>
            <a href="#" className='logo'>
              <h1 className='flex font-bold text-xl'><SiYourtraveldottv className='icon' />
                TripGo
              </h1>
            </a>
          </div>

          <div className={active}>
            <ul className="navLists flex">

              <li className="navItem">
                <a href="#" className="navLink" onClick={() => navigate("/")}>Home</a>
              </li>

              <li className="navItem">
                <a href="#" className="navLink" onClick={() => {navigate("/list-tour")}}>List Tour</a>
              </li>

              <li className="navItem">
                <a href="#" className="navLink" onClick={() => navigate("/gallery")}>Gallery</a>
              </li>

              <li className="navItem">
                <a href="#" className="navLink" onClick={() => navigate("/News")}>News</a>
              </li>

              <li className="navItem">
                <a href="#" className="navLink" onClick={() => navigate("/AboutUs")}>About Us</a>
              </li>

              <div className="headerBtns flex">
                <button className='btn loginBtn' onClick={() => navigate("/login")}>
                  <a href="#">Login</a>
                </button>
                <button className='btn' onClick={() => navigate("/sign-up")}>
                  <a href="#">Sign Up</a>
                </button>
              </div>

            </ul>

            <div onClick={closeNav} className='closeNavbar'>
              <AiFillCloseCircle className='icon' />
            </div>

          </div>

          <div onClick={showNav} className="toggleNavbar">
            <TbGridDots className='icon' />
          </div>

        </div>
      </section>
    )
  }

export default Navbar
