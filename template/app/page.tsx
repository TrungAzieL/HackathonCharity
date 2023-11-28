"use client"
import Image from 'next/image'
import NavComponent from "@/app/components/navComponent";
import BannerComponent from "@/app/components/bannerComponent";
import CardCharities from "@/app/components/cardCharities";
// import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <BannerComponent />
      <div className="m-4 m-lg-5">
        <div style={{opacity: 1, transform: 'matrix(1, 0, 0, 1, 0, 0)', animation: '1.5s ease-in-out 0s 1 normal forwards running Transitions_fadeInUp__zJpr3', boxSizing: 'border-box'}}>
          <h1 style={{boxSizing: 'border-box', fontSize: '28px', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', color: 'rgb(0, 0, 0)', textDecoration: 'none solid rgb(0, 0, 0)', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"', fontWeight: 600, lineHeight: '49.4px', margin: '0px'}}>📈 Top Charities</h1>
        </div>
        <div className="row container">
          <div className="col-lg-3 col-sm-12 mt-5">
            <CardCharities />
          </div>
          <div className="col-lg-3 col-sm-12 mt-5">
            <CardCharities />
          </div>
          <div className="col-lg-3 col-sm-12 mt-5">
            <CardCharities />
          </div>
        </div>
      </div>
    </>
  )
}

