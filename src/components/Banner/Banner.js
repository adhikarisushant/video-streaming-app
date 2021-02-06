import React from 'react'
import BannerImg from '../../assets/banner.jpg'
import './Banner.css'

const Banner = () => { 

    function truncate(string, n) {
            return string?.length > n ? string.substr(n, n - 1) + '...' : string
    }
    return (
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: `url(${BannerImg})`,
            backgroundPosition: "center center",
        }}>
            <div className="banner_contents">
                <h1 className="banner_title">
                    Gone Girl
                </h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_description">
                    {truncate(`Magic of David Fincher.`, 150)}
                    </h1>
            </div>
            <div>
            </div>
            <div className="banner_fadeBottom" />
        </header>
    )
}

export default Banner
