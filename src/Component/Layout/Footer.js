import React from 'react';
import { bgheader, bgtext } from '../utility/color';

const Footer = () => {
    return (
        <>
            <div className="flex justify-between p-2" style={{ backgroundColor: bgheader, color: bgtext }}>
                <div className="px-2 flex gap-5">
                    <p>Terms and Conditions</p>
                    <p>Responsible Gaming</p>
                </div>
                <div className="font-bold px-3 flex gap-5">
                    <p>24X7 Support</p>
                </div>
                <div></div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-between items-center p-4">
                <div className="flex justify-start gap-5 text-center sm:text-left">
                    <img src="https://wver.sprintstaticdata.com/v3/static/front/img/ssl.png" alt="" className="w-[100px] h-[50px]" />
                    <p className="font-bold">
                        100% SAFE <br />
                        Protected connection and encrypted data
                    </p>
                </div>
                <div className="flex justify-center sm:justify-end gap-3 mt-3 sm:mt-0">
                    <img src="https://versionobj.ecoassetsservice.com/v25/static/front/img/18plus.png" className="w-[35px]" alt="" />
                    <img src="https://versionobj.ecoassetsservice.com/v25/static/front/img/gamecare.png" className="w-[35px]" alt="" />
                    <img src="https://versionobj.ecoassetsservice.com/v25/static/front/img/gt.png" className="w-[35px]" alt="" />
                </div>
            </div>

            <p className="text-center py-4">© Copyright 2024. All Rights Reserved. Powered by GOEXCH9.</p>
        </>
    );
};

export default Footer;
