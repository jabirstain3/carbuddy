
// const Footer = () => {
//     return (
//         <footer className="border footer px-2 py-10 lg:py-20">
//             <aside>
//                 <div className="border rounded-lg">
//                     <img src="../../src/assets/logo/carbuddyLight.png" alt="CarBuddy logo" className="w-52 rounded-lg dark:hidden" />

//                     <img src="../../src/assets/logo/carbuddyDark.png" alt="CarBuddy logo" className="w-52 hidden rounded-lg dark:inline" />
//                 </div>
//                 <p>CARBUDDY Industries Ltd.<br />Providing reliable services since 1992</p>
//             </aside>

//             <nav className="text-based dark:text-base font-medium text-lg">
//                 <h6 className="footer-title font-semibold text-xl">Services</h6>

//                 <a className="link link-hover hover:text-scnd active:text-scnd" href="#">Car rental</a>
//                 <a className="link link-hover hover:text-scnd active:text-scnd" href="#">Car with Driver</a>
//                 <a className="link link-hover hover:text-scnd active:text-scnd" href="#">luxury Car</a>
//                 <a className="link link-hover hover:text-scnd active:text-scnd" href="#">Route planing</a>
//             </nav>
            
//             <nav className="text-based dark:text-base font-medium text-lg">
//                 <h6 className="footer-title font-semibold text-xl">Company</h6>

//                 <a className="link link-hover hover:text-scnd active:text-scnd" href="#">About Us</a>
//                 <a className="link link-hover hover:text-scnd active:text-scnd" href="#">Cars</a>
//                 <a className="link link-hover hover:text-scnd active:text-scnd" href="#">Bookings</a>
//                 <a className="link link-hover hover:text-scnd active:text-scnd" href="#">Contact Us</a>
//             </nav>

//             <nav className="text-based dark:text-base font-medium text-lg">
//                 <h6 className="footer-title font-semibold text-xl">Legal</h6>

//                 <a className="link link-hover hover:text-scnd active:text-scnd" href="#">Terms of use</a>
//                 <a className="link link-hover hover:text-scnd active:text-scnd" href="#">Privacy policy</a>
//                 <a className="link link-hover hover:text-scnd active:text-scnd" href="#">Cookie policy</a>
//             </nav>
//         </footer>
//     );
// };

// export default Footer;

const Footer = () => {
    return (
        <footer className="border footer px-2 py-10 lg:py-20 ">
            <aside>
                <div className="border rounded-lg">
                    <img src="../../src/assets/logo/carbuddyLight.png" alt="CarBuddy logo" className="w-52 rounded-lg dark:hidden" />

                    <img src="../../src/assets/logo/carbuddyDark.png" alt="CarBuddy logo" className="w-52 hidden rounded-lg dark:inline" />
                </div>
                <p>CARBUDDY Industries Ltd.<br />Providing reliable services since 1992</p>
            </aside>

            <nav className="text-based dark:text-base font-medium text-lg">
                <h6 className="footer-title font-semibold text-xl">Services</h6>

                <a className="link link-hover hover:text-scnd active:text-scnd" href="#">Car rental</a>
                <a className="link link-hover hover:text-scnd active:text-scnd" href="#">Car with Driver</a>
                <a className="link link-hover hover:text-scnd active:text-scnd" href="#">luxury Car</a>
                <a className="link link-hover hover:text-scnd active:text-scnd" href="#">Route planing</a>
            </nav>
            
            <nav className="text-based dark:text-base font-medium text-lg">
                <h6 className="footer-title font-semibold text-xl">Company</h6>

                <a className="link link-hover hover:text-scnd active:text-scnd" href="#">About Us</a>
                <a className="link link-hover hover:text-scnd active:text-scnd" href="#">Cars</a>
                <a className="link link-hover hover:text-scnd active:text-scnd" href="#">Bookings</a>
                <a className="link link-hover hover:text-scnd active:text-scnd" href="#">Contact Us</a>
            </nav>

            <nav className="text-based dark:text-base font-medium text-lg">
                <h6 className="footer-title font-semibold text-xl">Legal</h6>

                <a className="link link-hover hover:text-scnd active:text-scnd" href="#">Terms of use</a>
                <a className="link link-hover hover:text-scnd active:text-scnd" href="#">Privacy policy</a>
                <a className="link link-hover hover:text-scnd active:text-scnd" href="#">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;