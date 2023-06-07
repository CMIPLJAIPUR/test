import React, { useState, useEffect } from "react";
import "./homepage.css";
// import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";
import Notification from "../../components/notification/Notification";
import HomeBanner from "../../components/homebanner/HomeBanner";
import RecentItems from "../../components/recentitems/RecentItems";
import TodayItems from "../../components/recentitems/TodayItems";
import HomeFooter from "../../components/homefooter/HomeFooter";
import iphoneimg from "../../assets/home-banner-img/iPhoneHomeBanner.png";
import sofaimg from "../../assets/home-banner-img/Sofa.png";
import bicycleimg from "../../assets/home-banner-img/Bicycle.png";
import fashionimg from "../../assets/home-banner-img/Fashion.png";
import toysimg from "../../assets/home-banner-img/Toys.png";
import productimg from "../../assets/home-deal-img/product-1.jpg";
import left from "../../assets/home-deal-img/arrow-left.png";
import right from "../../assets/home-deal-img/arrow-right.png";
import banner1 from "../../assets/home-banner-img/pngwing-1.png";
import banner2 from "../../assets/home-banner-img/pngwing-2.png";
import banner3 from "../../assets/home-banner-img/pngwing-3.png";
import banner4 from "../../assets/home-banner-img/pngwing-4.png";
import banner5 from "../../assets/home-banner-img/pngwing-5.png";
import { useSelector } from "react-redux";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function HomePage() {
    const showNotif = useSelector((state) => state.showNotif);
    // const dispatch = useDispatch();

    const banner = [
        {
            title: "Looking for Electronics?",
            subtitle: "Shop Electronics",
            description:
                "Find everything you are looking for, with great deals",
            bannerimg: iphoneimg,
            banneralt: "iPhone banner",
            gradient: "electronics",
        },
        {
            title: "Create your dream home",
            subtitle: "Shop Home & Garden",
            description:
                "Find everything you are looking for, with great deals ",
            bannerimg: sofaimg,
            banneralt: "Home banner",
            gradient: "home-garden",
        },
        {
            title: "Sporting and enjoy",
            subtitle: "Shop Sports & Outdoors",
            description:
                "Find everything you are looking for, with great deals ",
            bannerimg: bicycleimg,
            banneralt: "Sports banner",
            gradient: "sports",
        },
        {
            title: "Live in style",
            subtitle: "Shop Fashion",
            description:
                "Find everything you are looking for, with great deals ",
            bannerimg: fashionimg,
            banneralt: "Fashion banner",
            gradient: "fashion",
        },
        {
            title: "Live in style",
            subtitle: "Shop Fashion",
            description:
                "Find everything you are looking for, with great deals ",
            bannerimg: fashionimg,
            banneralt: "Fashion banner",
            gradient: "fashion",
        },
        {
            title: "It's time for fun",
            subtitle: "Shop Toys & Games",
            description:
                "Find everything you are looking for, with great deals ",
            bannerimg: toysimg,
            banneralt: "Toys banner",
            gradient: "toys",
        },
        {
            title: "Looking for Electronics?",
            subtitle: "Shop Electronics",
            description:
                "Find everything you are looking for, with great deals",
            bannerimg: iphoneimg,
            banneralt: "iPhone banner",
            gradient: "electronics",
        },
    ];

    const [seconds, setSeconds] = useState(0);

    if (seconds === 6) {
        setSeconds(0);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((seconds) => seconds + 1);
        }, 7000);
        return () => clearInterval(interval);
    }, []);

    const optionsFeature = {
        loop: true,
        margin: 60,
        nav: true,
        dots: false,
        // autoplay: true,
        // autoplayTimeout: 2000,
        navText: [`<img src=${right}>`, `<img src=${left}>`],
        responsive: {
            0: {
                items: 1,
            },
            991: {
                items: 3,
            },
            1024: {
                items: 4,
            },
            1280: {
                items: 5,
            },
            1440: {
                items: 6,
            },
        },
    };

    return (
        <div className="home-page">
            {/* <Header /> */}
            <Menu />
            {showNotif ? (
                <Notification
                    color="green"
                    title="aaaaa"
                    description="adadadadad"
                />
            ) : null}
            {/* <HomeBanner
                title={banner[seconds].title}
                subtitle={banner[seconds].subtitle}
                description={banner[seconds].description}
                bannerimg={banner[seconds].bannerimg}
                banneralt={banner[seconds].banneralt}
                gradient={banner[seconds].gradient}
            /> */}

            <div className="main-slider">
                <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item first active">
                            <div className="carousel-caption">
                                <div className="banner-content">
                                    <div className="content">
                                        <h3>Sporting and enjoy</h3>
                                        <p>Find everything you are looking for, with great deals </p>
                                        <a className="theme-btn" href="#">Shop Now <i className="fas fa-arrow-right"></i></a>
                                    </div>
                                    <div className="img">
                                        <div className="inner">
                                            <img src={banner1} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item second">
                            <div className="carousel-caption">
                                <div className="banner-content">
                                    <div className="content">
                                        <h3>It's time for fun</h3>
                                        <p>Find everything you are looking for, with great deals </p>
                                        <a className="theme-btn" href="#">Shop Now <i className="fas fa-arrow-right"></i></a>
                                    </div>
                                    <div className="img">
                                        <div className="inner">
                                            <img src={banner2} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item third">
                            <div className="carousel-caption">
                                <div className="banner-content">
                                    <div className="content">
                                        <h3>Live in style</h3>
                                        <p>Find everything you are looking for, with great deals </p>
                                        <a className="theme-btn" href="#">Shop Now <i className="fas fa-arrow-right"></i></a>
                                    </div>
                                    <div className="img">
                                        <div className="inner">
                                            <img src={banner3} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item fourth">
                            <div className="carousel-caption">
                                <div className="banner-content">
                                    <div className="content">
                                        <h3>It's time for fun</h3>
                                        <p>Find everything you are looking for, with great deals </p>
                                        <a className="theme-btn" href="#">Shop Now <i className="fas fa-arrow-right"></i></a>
                                    </div>
                                    <div className="img">
                                        <div className="inner">
                                            <img src={banner4} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item five">
                            <div className="carousel-caption">
                                <div className="banner-content last">
                                    <div className="content">
                                        <h3>Looking for Electronics?</h3>
                                        <p>Find everything you are looking for, with great deals </p>
                                        <a className="theme-btn" href="#">Shop Now <i className="fas fa-arrow-right"></i></a>
                                    </div>
                                    <div className="img">
                                        <div className="inner">
                                            <img src={banner5} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="cat-slider recent-view mt-5 mb-5">
                <div className="container-ns">
                    <div className="row align-items-center">
                        <div className="col-md-6 col-8">
                            <h3>Your Recently Viewed Items</h3>
                        </div>
                        <div className="col-md-6 col-4">
                            <div className="see-btn text-right">
                                <a href="#">See All <i className="fas fa-chevron-right"></i></a>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="inner-slide d-none d-lg-block">
                                <OwlCarousel className='owl-theme' loop margin={10} nav {...optionsFeature}>
                                    <div className='item'>
                                        <div className="img-box">
                                            <a href="#">
                                                <img src={productimg} />
                                            </a>
                                        </div>
                                        <div className="content">
                                            <div className="price">
                                                <del>$123.45</del>
                                                <span>12% OFF</span>
                                            </div>
                                            <div className="main-price">
                                                $109.19
                                            </div>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <div className="img-box">
                                            <a href="#">
                                                <img src={productimg} />
                                            </a>
                                        </div>
                                        <div className="content">
                                            <div className="price">
                                                <del>$123.45</del>
                                                <span>12% OFF</span>
                                            </div>
                                            <div className="main-price">
                                                $109.19
                                            </div>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <div className="img-box">
                                            <a href="#">
                                                <img src={productimg} />
                                            </a>
                                        </div>
                                        <div className="content">
                                            <div className="price">
                                                <del>$123.45</del>
                                                <span>12% OFF</span>
                                            </div>
                                            <div className="main-price">
                                                $109.19
                                            </div>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <div className="img-box">
                                            <a href="#">
                                                <img src={productimg} />
                                            </a>
                                        </div>
                                        <div className="content">
                                            <div className="price">
                                                <del>$123.45</del>
                                                <span>12% OFF</span>
                                            </div>
                                            <div className="main-price">
                                                $109.19
                                            </div>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <div className="img-box">
                                            <a href="#">
                                                <img src={productimg} />
                                            </a>
                                        </div>
                                        <div className="content">
                                            <div className="price">
                                                <del>$123.45</del>
                                                <span>12% OFF</span>
                                            </div>
                                            <div className="main-price">
                                                $109.19
                                            </div>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <div className="img-box">
                                            <a href="#">
                                                <img src={productimg} />
                                            </a>
                                        </div>
                                        <div className="content">
                                            <div className="price">
                                                <del>$123.45</del>
                                                <span>12% OFF</span>
                                            </div>
                                            <div className="main-price">
                                                $109.19
                                            </div>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <div className="img-box">
                                            <a href="#">
                                                <img src={productimg} />
                                            </a>
                                        </div>
                                        <div className="content">
                                            <div className="price">
                                                <del>$123.45</del>
                                                <span>12% OFF</span>
                                            </div>
                                            <div className="main-price">
                                                $109.19
                                            </div>
                                        </div>
                                    </div>
                                </OwlCarousel>
                            </div>
                            <div className="slide-grid d-flex d-lg-none">
                                <div className="inner">
                                    <div className="img-box">
                                        <a href="#">
                                            <img src={productimg} />
                                        </a>
                                    </div>
                                    <div className="content">
                                        <div className="price">
                                            <del>$123.45</del>
                                            <span>12% OFF</span>
                                        </div>
                                        <div className="main-price">
                                            $109.19
                                        </div>
                                    </div>
                                </div>
                                <div className="inner">
                                    <div className="img-box">
                                        <a href="#">
                                            <img src={productimg} />
                                        </a>
                                    </div>
                                    <div className="content">
                                        <div className="price">
                                            <del>$123.45</del>
                                            <span>12% OFF</span>
                                        </div>
                                        <div className="main-price">
                                            $109.19
                                        </div>
                                    </div>
                                </div>
                                <div className="inner">
                                    <div className="img-box">
                                        <a href="#">
                                            <img src={productimg} />
                                        </a>
                                    </div>
                                    <div className="content">
                                        <div className="price">
                                            <del>$123.45</del>
                                            <span>12% OFF</span>
                                        </div>
                                        <div className="main-price">
                                            $109.19
                                        </div>
                                    </div>
                                </div>
                                <div className="inner">
                                    <div className="img-box">
                                        <a href="#">
                                            <img src={productimg} />
                                        </a>
                                    </div>
                                    <div className="content">
                                        <div className="price">
                                            <del>$123.45</del>
                                            <span>12% OFF</span>
                                        </div>
                                        <div className="main-price">
                                            $109.19
                                        </div>
                                    </div>
                                </div>
                                <div className="inner">
                                    <div className="img-box">
                                        <a href="#">
                                            <img src={productimg} />
                                        </a>
                                    </div>
                                    <div className="content">
                                        <div className="price">
                                            <del>$123.45</del>
                                            <span>12% OFF</span>
                                        </div>
                                        <div className="main-price">
                                            $109.19
                                        </div>
                                    </div>
                                </div>
                                <div className="inner">
                                    <div className="img-box">
                                        <a href="#">
                                            <img src={productimg} />
                                        </a>
                                    </div>
                                    <div className="content">
                                        <div className="price">
                                            <del>$123.45</del>
                                            <span>12% OFF</span>
                                        </div>
                                        <div className="main-price">
                                            $109.19
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cat-slider watch-item mt-5 mb-5">
                <div className="container-ns">
                    <div className="row align-items-center">
                        <div className="col-md-6 col-8">
                            <h3>Your Watched Items</h3>
                        </div>
                        <div className="col-md-6 col-4">
                            <div className="see-btn text-right">
                                <a href="#">See All <i className="fas fa-chevron-right"></i></a>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="inner-slide d-none d-lg-block">
                                <OwlCarousel className='owl-theme' loop margin={10} nav {...optionsFeature}>
                                    <div className='item'>
                                        <div className="img-box">
                                            <a href="#">
                                                <img src={productimg} />
                                            </a>
                                        </div>
                                        <div className="content">
                                            <div className="price">
                                                <del>$123.45</del>
                                                <span>12% OFF</span>
                                            </div>
                                            <div className="main-price">
                                                $109.19
                                            </div>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <div className="img-box">
                                            <a href="#">
                                                <img src={productimg} />
                                            </a>
                                        </div>
                                        <div className="content">
                                            <div className="price">
                                                <del>$123.45</del>
                                                <span>12% OFF</span>
                                            </div>
                                            <div className="main-price">
                                                $109.19
                                            </div>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <div className="img-box">
                                            <a href="#">
                                                <img src={productimg} />
                                            </a>
                                        </div>
                                        <div className="content">
                                            <div className="price">
                                                <del>$123.45</del>
                                                <span>12% OFF</span>
                                            </div>
                                            <div className="main-price">
                                                $109.19
                                            </div>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <div className="img-box">
                                            <a href="#">
                                                <img src={productimg} />
                                            </a>
                                        </div>
                                        <div className="content">
                                            <div className="price">
                                                <del>$123.45</del>
                                                <span>12% OFF</span>
                                            </div>
                                            <div className="main-price">
                                                $109.19
                                            </div>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <div className="img-box">
                                            <a href="#">
                                                <img src={productimg} />
                                            </a>
                                        </div>
                                        <div className="content">
                                            <div className="price">
                                                <del>$123.45</del>
                                                <span>12% OFF</span>
                                            </div>
                                            <div className="main-price">
                                                $109.19
                                            </div>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <div className="img-box">
                                            <a href="#">
                                                <img src={productimg} />
                                            </a>
                                        </div>
                                        <div className="content">
                                            <div className="price">
                                                <del>$123.45</del>
                                                <span>12% OFF</span>
                                            </div>
                                            <div className="main-price">
                                                $109.19
                                            </div>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <div className="img-box">
                                            <a href="#">
                                                <img src={productimg} />
                                            </a>
                                        </div>
                                        <div className="content">
                                            <div className="price">
                                                <del>$123.45</del>
                                                <span>12% OFF</span>
                                            </div>
                                            <div className="main-price">
                                                $109.19
                                            </div>
                                        </div>
                                    </div>
                                </OwlCarousel>
                            </div>
                            <div className="slide-grid d-flex d-lg-none">
                                <div className="inner">
                                    <div className="img-box">
                                        <a href="#">
                                            <img src={productimg} />
                                        </a>
                                    </div>
                                    <div className="content">
                                        <div className="price">
                                            <del>$123.45</del>
                                            <span>12% OFF</span>
                                        </div>
                                        <div className="main-price">
                                            $109.19
                                        </div>
                                    </div>
                                </div>
                                <div className="inner">
                                    <div className="img-box">
                                        <a href="#">
                                            <img src={productimg} />
                                        </a>
                                    </div>
                                    <div className="content">
                                        <div className="price">
                                            <del>$123.45</del>
                                            <span>12% OFF</span>
                                        </div>
                                        <div className="main-price">
                                            $109.19
                                        </div>
                                    </div>
                                </div>
                                <div className="inner">
                                    <div className="img-box">
                                        <a href="#">
                                            <img src={productimg} />
                                        </a>
                                    </div>
                                    <div className="content">
                                        <div className="price">
                                            <del>$123.45</del>
                                            <span>12% OFF</span>
                                        </div>
                                        <div className="main-price">
                                            $109.19
                                        </div>
                                    </div>
                                </div>
                                <div className="inner">
                                    <div className="img-box">
                                        <a href="#">
                                            <img src={productimg} />
                                        </a>
                                    </div>
                                    <div className="content">
                                        <div className="price">
                                            <del>$123.45</del>
                                            <span>12% OFF</span>
                                        </div>
                                        <div className="main-price">
                                            $109.19
                                        </div>
                                    </div>
                                </div>
                                <div className="inner">
                                    <div className="img-box">
                                        <a href="#">
                                            <img src={productimg} />
                                        </a>
                                    </div>
                                    <div className="content">
                                        <div className="price">
                                            <del>$123.45</del>
                                            <span>12% OFF</span>
                                        </div>
                                        <div className="main-price">
                                            $109.19
                                        </div>
                                    </div>
                                </div>
                                <div className="inner">
                                    <div className="img-box">
                                        <a href="#">
                                            <img src={productimg} />
                                        </a>
                                    </div>
                                    <div className="content">
                                        <div className="price">
                                            <del>$123.45</del>
                                            <span>12% OFF</span>
                                        </div>
                                        <div className="main-price">
                                            $109.19
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cat-slider total-deal mt-5 mb-5">
                <div className="container-ns">
                    <div className="row align-items-center">
                        <div className="col-md-6 col-8">
                            <h3>Today’s Deals</h3>
                        </div>
                        <div className="col-md-6 col-4">
                            <div className="see-btn text-right">
                                <a href="#">See All <i className="fas fa-chevron-right"></i></a>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="inner-slide d-none d-lg-block">
                                <OwlCarousel className='owl-theme' loop margin={10} nav {...optionsFeature}>
                                    <div className='item'>
                                        <div className="img-box">
                                            <a href="#">
                                                <img src={productimg} />
                                            </a>
                                        </div>
                                        <div className="content">
                                            <div className="price">
                                                <del>$123.45</del>
                                                <span>12% OFF</span>
                                            </div>
                                            <div className="main-price">
                                                $109.19
                                            </div>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <div className="img-box">
                                            <a href="#">
                                                <img src={productimg} />
                                            </a>
                                        </div>
                                        <div className="content">
                                            <div className="price">
                                                <del>$123.45</del>
                                                <span>12% OFF</span>
                                            </div>
                                            <div className="main-price">
                                                $109.19
                                            </div>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <div className="img-box">
                                            <a href="#">
                                                <img src={productimg} />
                                            </a>
                                        </div>
                                        <div className="content">
                                            <div className="price">
                                                <del>$123.45</del>
                                                <span>12% OFF</span>
                                            </div>
                                            <div className="main-price">
                                                $109.19
                                            </div>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <div className="img-box">
                                            <a href="#">
                                                <img src={productimg} />
                                            </a>
                                        </div>
                                        <div className="content">
                                            <div className="price">
                                                <del>$123.45</del>
                                                <span>12% OFF</span>
                                            </div>
                                            <div className="main-price">
                                                $109.19
                                            </div>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <div className="img-box">
                                            <a href="#">
                                                <img src={productimg} />
                                            </a>
                                        </div>
                                        <div className="content">
                                            <div className="price">
                                                <del>$123.45</del>
                                                <span>12% OFF</span>
                                            </div>
                                            <div className="main-price">
                                                $109.19
                                            </div>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <div className="img-box">
                                            <a href="#">
                                                <img src={productimg} />
                                            </a>
                                        </div>
                                        <div className="content">
                                            <div className="price">
                                                <del>$123.45</del>
                                                <span>12% OFF</span>
                                            </div>
                                            <div className="main-price">
                                                $109.19
                                            </div>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <div className="img-box">
                                            <a href="#">
                                                <img src={productimg} />
                                            </a>
                                        </div>
                                        <div className="content">
                                            <div className="price">
                                                <del>$123.45</del>
                                                <span>12% OFF</span>
                                            </div>
                                            <div className="main-price">
                                                $109.19
                                            </div>
                                        </div>
                                    </div>
                                </OwlCarousel>
                            </div>
                            <div className="slide-grid d-flex d-lg-none">
                                <div className="inner">
                                    <div className="img-box">
                                        <a href="#">
                                            <img src={productimg} />
                                        </a>
                                    </div>
                                    <div className="content">
                                        <div className="price">
                                            <del>$123.45</del>
                                            <span>12% OFF</span>
                                        </div>
                                        <div className="main-price">
                                            $109.19
                                        </div>
                                    </div>
                                </div>
                                <div className="inner">
                                    <div className="img-box">
                                        <a href="#">
                                            <img src={productimg} />
                                        </a>
                                    </div>
                                    <div className="content">
                                        <div className="price">
                                            <del>$123.45</del>
                                            <span>12% OFF</span>
                                        </div>
                                        <div className="main-price">
                                            $109.19
                                        </div>
                                    </div>
                                </div>
                                <div className="inner">
                                    <div className="img-box">
                                        <a href="#">
                                            <img src={productimg} />
                                        </a>
                                    </div>
                                    <div className="content">
                                        <div className="price">
                                            <del>$123.45</del>
                                            <span>12% OFF</span>
                                        </div>
                                        <div className="main-price">
                                            $109.19
                                        </div>
                                    </div>
                                </div>
                                <div className="inner">
                                    <div className="img-box">
                                        <a href="#">
                                            <img src={productimg} />
                                        </a>
                                    </div>
                                    <div className="content">
                                        <div className="price">
                                            <del>$123.45</del>
                                            <span>12% OFF</span>
                                        </div>
                                        <div className="main-price">
                                            $109.19
                                        </div>
                                    </div>
                                </div>
                                <div className="inner">
                                    <div className="img-box">
                                        <a href="#">
                                            <img src={productimg} />
                                        </a>
                                    </div>
                                    <div className="content">
                                        <div className="price">
                                            <del>$123.45</del>
                                            <span>12% OFF</span>
                                        </div>
                                        <div className="main-price">
                                            $109.19
                                        </div>
                                    </div>
                                </div>
                                <div className="inner">
                                    <div className="img-box">
                                        <a href="#">
                                            <img src={productimg} />
                                        </a>
                                    </div>
                                    <div className="content">
                                        <div className="price">
                                            <del>$123.45</del>
                                            <span>12% OFF</span>
                                        </div>
                                        <div className="main-price">
                                            $109.19
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* <RecentItems />
            <TodayItems /> */}
            <HomeFooter />
        </div>
    );
}

export default HomePage;
