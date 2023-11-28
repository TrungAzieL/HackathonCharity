"use client"
import moment from 'moment'
export default function ListContributor({price, address, time}:any) {
    let shortAddress = address
    if (address.length > 10){
        shortAddress = address.slice(0, 4)+"..."+address.slice((address.length-4), address.length)
    }

    return (
        <>
            <div style={{boxSizing: 'border-box', outline: 'rgb(0, 0, 0) none 0px', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', display: 'block', textDecoration: 'none solid rgb(0, 0, 0)', color: 'rgb(0, 0, 0)', backgroundColor: 'rgb(255, 255, 255)', borderRadius: '4px', boxShadow: 'rgba(0, 0, 0, 0.05) 0px 1px 3px 0px, rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px', padding: '20px'}}>
                <div style={{boxSizing: 'border-box', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', color: 'rgb(0, 0, 0)', fontSize: '20px', lineHeight: '31px', textDecoration: 'none solid rgb(0, 0, 0)', fontWeight: 700, marginBottom: '12px'}}>{price} SOL</div>
                <div role="separator" style={{boxSizing: 'border-box', borderWidth: '1px 0px 0px', borderRightStyle: 'none', borderBottomStyle: 'none', borderLeftStyle: 'none', borderRightColor: 'rgb(0, 0, 0)', borderBottomColor: 'rgb(0, 0, 0)', borderLeftColor: 'rgb(0, 0, 0)', borderImage: 'none', borderTopColor: 'rgb(206, 212, 218)', borderTopStyle: 'solid', margin: '0px', paddingTop: '12px', paddingBottom: '12px'}}></div>
                <div style={{boxSizing: 'border-box', display: 'flex', flexFlow: 'row wrap', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'justify', justifyContent: 'space-between', gap: '24px'}}><a href={`https://solana.fm/address/${address}`} style={{boxSizing: 'border-box', background: 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box', WebkitBoxFlex: 0, flexGrow: 0, fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', color: 'rgb(247, 103, 7)', fontSize: '16px', lineHeight: '24.8px', textDecoration: 'none solid rgb(247, 103, 7)', backgroundColor: 'rgba(0, 0, 0, 0)', cursor: 'pointer', padding: '0px', border: '0px none rgb(247, 103, 7)'}}>
                    <div style={{boxSizing: 'border-box', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', color: 'rgb(134, 142, 150)', fontSize: '18px', lineHeight: '27.9px', textDecoration: 'none solid rgb(134, 142, 150)'}}>{shortAddress}</div>
                </a>
                    <div style={{boxSizing: 'border-box', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', color: 'rgb(134, 142, 150)', fontSize: '14px', lineHeight: '21.7px', textDecoration: 'none solid rgb(134, 142, 150)', WebkitBoxFlex: 0, flexGrow: 0}}>{(moment.unix(time).format('YYYY/MM/DD HH:mm:ss'))}</div>
                </div>
            </div>
        </>
    )
}