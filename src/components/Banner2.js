import React from 'react'
import image1 from "../images/image1.webp"
export default function Banner2() {
    return (
        <div>
            <div className='bannerm'>
                <div className='div1'>
                    <div className='content'>
                        <h1 className='heading1'>Trello brings all your tasks, teammates, and tools together</h1>
                        <p className='para1'>Keep everything in the same place-even if your team isn’t.</p>
                        <div className='section1'>
                            <input type="text" placeholder='Email' style={{ height: 40, width: 200 }} className='input1' />
                            <button className='button1' style={{ height: 45, width: 200 }}>Sign up it's free</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                        <a className='link1' data-uuid="2Wmphdxwx9KTtdIcn3RFYb" href="#video"><span>Watch video</span>&nbsp;&nbsp;<svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 5h14v14h-14z"></path><path clip-rule="evenodd" d="m10.0138 16.3878c-.83597.4912-1.5138.105-1.5138-.8645v-7.04491c0-.97008.6755-1.358 1.5138-.86566l6.465 3.79747c.5548.3261.5589.8517 0 1.1801z" fill="currentColor" fill-rule="evenodd"></path><circle cx="12" cy="12" r="11.5" stroke="currentColor"></circle></svg></a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <img className='image1' src={image1} style={{ width: 500, height: 500 }} alt="" />
                </div>

            </div>
        </div>
    )
}
