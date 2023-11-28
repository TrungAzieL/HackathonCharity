"use client"
import ProgressBarComponents from "@/app/components/progressBarComponents";

export default function CharitieForm(){
    return (
        <>
            <div style={{boxSizing: 'border-box', paddingLeft: '16px', paddingRight: '16px', maxWidth: '100%', marginLeft: 'auto', marginRight: 'auto'}}>
                <div style={{boxSizing: 'border-box', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"', fontSize: '13px', height: '26px', lineHeight: '24px', textDecoration: 'none solid rgb(64, 192, 87)', padding: '0px 13.3333px', display: 'inline-flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', width: 'auto', textTransform: 'uppercase', borderRadius: '4px', fontWeight: 700, letterSpacing: '0.25px', cursor: 'auto', textOverflow: 'ellipsis', overflow: 'hidden', background: 'rgb(235, 251, 238) none repeat scroll 0% 0% / auto padding-box border-box', color: 'rgb(64, 192, 87)', border: '1px solid rgba(0, 0, 0, 0)', marginTop: '24px'}}><span style={{boxSizing: 'border-box', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>charity</span></div>
                <h1 style={{boxSizing: 'border-box', fontSize: '48px', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', color: 'rgb(0, 0, 0)', textDecoration: 'none solid rgb(0, 0, 0)', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"', fontWeight: 700, lineHeight: '62.4px', margin: '5px 0px 0px'}}>Rainforest Foundation</h1>
                <div className="p-2" style={{boxSizing: 'border-box', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', color: 'rgb(134, 142, 150)', fontSize: '17px', lineHeight: '31px', textDecoration: 'none solid rgb(134, 142, 150)', marginTop: '6px'}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur, ea eligendi enim est illum magni maiores molestias, nesciunt nulla porro quod recusandae sit velit voluptate! Architecto labore officiis vel?
                </div>
                <div style={{boxSizing: 'border-box', outline: 'rgb(0, 0, 0) none 0px', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', display: 'block', textDecoration: 'none solid rgb(0, 0, 0)', color: 'rgb(0, 0, 0)', borderRadius: '8px', boxShadow: 'none', border: '1px solid rgb(222, 226, 230)', position: 'relative', overflow: 'hidden', backgroundColor: 'rgb(255, 255, 255)', padding: '24px'}}>
                    <div style={{boxSizing: 'border-box', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', color: 'rgb(134, 142, 150)', fontSize: '14px', lineHeight: '21.7px', textDecoration: 'none solid rgb(134, 142, 150)', fontWeight: 700, textTransform: 'uppercase'}}>Total Raised</div>
                    <div style={{boxSizing: 'border-box', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', color: 'rgb(0, 0, 0)', fontSize: '20px', lineHeight: '31px', textDecoration: 'none solid rgb(0, 0, 0)', fontWeight: 500}}>◎ 1.4 / ◎ 200</div>
                    {/*<div style={{boxSizing: 'border-box', position: 'relative', height: '12px', backgroundColor: 'rgb(233, 236, 239)', borderRadius: '32px', overflow: 'hidden', marginTop: '16px'}}>*/}
                    {/*    <div role="progressbar" aria-valuemax="100" aria-valuemin="0" aria-valuenow="0.7" style={{width: '0.7%', boxSizing: 'border-box', borderTopLeftRadius: '32px', borderBottomLeftRadius: '32px', borderTopRightRadius: '32px', borderBottomRightRadius: '32px', position: 'absolute', top: '0px', bottom: '0px', left: '0px', height: '12px', display: 'flex', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(253, 126, 20)', transition: 'width 0.1s linear 0s', animation: '1s linear 0s infinite normal none running animation-1mos065', backgroundSize: '20px 20px', backgroundImage: 'linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 0) 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0))'}}></div>*/}
                    {/*</div>*/}
                    <ProgressBarComponents rate="1.4" />
                    <div style={{boxSizing: 'border-box', width: '0px', minWidth: '0px', height: '12px', minHeight: '12px'}}></div>
                    <div style={{boxSizing: 'border-box', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', color: 'rgb(134, 142, 150)', fontSize: '12px', lineHeight: '18.6px', textDecoration: 'none solid rgb(134, 142, 150)', fontWeight: 600}}>Total Contributions: 5</div>
                </div>
                <div style={{boxSizing: 'border-box', paddingLeft: '16px', paddingRight: '16px', maxWidth: '100%', marginLeft: 'auto', marginRight: 'auto', marginTop: '30px'}}>
                    <div style={{boxSizing: 'border-box', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', color: 'rgb(134, 142, 150)', fontSize: '16px', lineHeight: '24.8px', textDecoration: 'none solid rgb(134, 142, 150)', fontWeight: 700, marginBottom: '12px', textTransform: 'uppercase'}}>Deployer</div>
                    <div style={{boxSizing: 'border-box', display: 'flex', flexFlow: 'row wrap', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'start', justifyContent: 'flex-start', gap: '16px'}}>
                        <div style={{boxSizing: 'border-box', display: 'flex', flexFlow: 'row wrap', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'start', justifyContent: 'flex-start', gap: '16px', maxWidth: '100%', WebkitBoxFlex: 1, flexGrow: 1}}>
                            <div style={{boxSizing: 'border-box', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', position: 'relative', display: 'block', userSelect: 'none', overflow: 'hidden', width: '38px', minWidth: '38px', height: '38px', borderRadius: '16px', textDecoration: 'none solid rgb(0, 0, 0)', border: '0px none rgb(0, 0, 0)', backgroundColor: 'rgba(0, 0, 0, 0)', padding: '0px', WebkitBoxFlex: 0, flexGrow: 0}}><img src="https://gravatar.com/avatar/c46cc1644a0b138c29e0513cd2ba7405?s=400&amp;d=robohash&amp;r=x" alt="Creator Avatar" style={{boxSizing: 'border-box', borderStyle: 'none', verticalAlign: 'middle', objectFit: 'cover', width: '100%', height: '38px', display: 'block'}} /></div><a href="/user/undefined" style={{boxSizing: 'border-box', background: 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', color: 'rgb(247, 103, 7)', fontSize: '16px', lineHeight: '24.8px', textDecoration: 'none solid rgb(247, 103, 7)', backgroundColor: 'rgba(0, 0, 0, 0)', cursor: 'pointer', padding: '0px', border: '0px none rgb(247, 103, 7)', WebkitBoxFlex: 0, flexGrow: 0}}>
                            <div style={{boxSizing: 'border-box', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', color: 'rgb(68,168,15)', fontSize: '18px', lineHeight: '27.9px', textDecoration: 'none solid rgb(247, 103, 7)', fontWeight: 700}}>savetherainforest</div>
                        </a>
                        </div>
                    </div>
                </div><button type="button" data-button="true" style={{boxSizing: 'border-box', appearance: 'none', textTransform: 'none', overflow: 'visible', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"', fontSize: '18px', lineHeight: '18px', margin: '30px 0px 0px', padding: '0px 26px 0px 17.3333px', backgroundColor: 'rgba(0, 0, 0, 0)', textAlign: 'left', textDecoration: 'none solid rgb(255, 255, 255)', height: '50px', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', display: 'block', width: '100%', borderRadius: '16px', fontWeight: 600, position: 'relative', userSelect: 'none', cursor: 'pointer', border: '0px none rgb(255, 255, 255)', backgroundImage: 'linear-gradient(45deg, #37bc58 0%, #45ce7c 100%)', color: 'rgb(255, 255, 255)', marginTop: '30px'}}>
                <div style={{boxSizing: 'border-box', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', height: '50px', overflow: 'visible'}}><span style={{boxSizing: 'border-box', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', marginRight: '10px'}}><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{boxSizing: 'border-box', overflow: 'hidden'}}>
                    <path d="M0 405.3V448c0 35.3 86 64 192 64s192-28.7 192-64v-42.7C342.7 434.4 267.2 448 192 448S41.3 434.4 0 405.3zM320 128c106 0 192-28.7 192-64S426 0 320 0 128 28.7 128 64s86 64 192 64zM0 300.4V352c0 35.3 86 64 192 64s192-28.7 192-64v-51.6c-41.3 34-116.9 51.6-192 51.6S41.3 334.4 0 300.4zm416 11c57.3-11.1 96-31.7 96-55.4v-42.7c-23.2 16.4-57.3 27.6-96 34.5v63.6zM192 160C86 160 0 195.8 0 240s86 80 192 80 192-35.8 192-80-86-80-192-80zm219.3 56.3c60-10.8 100.7-32 100.7-56.3v-42.7c-35.5 25.1-96.5 38.6-160.7 41.8 29.5 14.3 51.2 33.5 60 57.2z" style={{boxSizing: 'border-box'}}></path>
                </svg></span><span style={{boxSizing: 'border-box', whiteSpace: 'nowrap', height: '50px', overflow: 'hidden', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center'}}>Contribute</span></div>
            </button>
                <div className="mt-3" style={{boxSizing: 'border-box', display: 'flex', flexFlow: 'row wrap', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'justify', justifyContent: 'space-between', gap: '16px', width: '100%'}}>
                    <div style={{boxSizing: 'border-box', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', color: 'rgb(134, 142, 150)', fontSize: '14px', lineHeight: '21.7px', textDecoration: 'none solid rgb(134, 142, 150)', fontWeight: 600, WebkitBoxFlex: 0, flexGrow: 0}}>Created: 03/17/2023</div>
                    <div style={{boxSizing: 'border-box', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', color: 'rgb(134, 142, 150)', fontSize: '14px', lineHeight: '21.7px', textDecoration: 'none solid rgb(134, 142, 150)', fontWeight: 600, WebkitBoxFlex: 0, flexGrow: 0}}>Updated: 03/17/2023</div>
                </div>
            </div>
        </>
    )
}