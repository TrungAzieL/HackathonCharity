"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlug } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";

export default function NavComponent () {
    return (
        <>
            <nav className="navbar navbar-expand-lg shadow-sm">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-bold">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/">All Charities</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/">Contact</Link>
                            </li>
                        </ul>
                        {/*<div className="d-flex">*/}
                        {/*    <button className="btn btn-outline-success" style={{padding: '5px 10px 5px 10px'}}><FontAwesomeIcon icon={faPlug} /> Sign-in with Solana</button>*/}
                        {/*</div>*/}

                    </div>
                    <button type="submit" className="btn btn-danger navbar-btn position-absolute fw-bold" style={{top: '8px', right:'10px'}}><FontAwesomeIcon icon={faPlug} />&nbsp;&nbsp; Connect your wallet</button>
                </div>
            </nav>
        </>
    )
}