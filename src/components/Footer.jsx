const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div>
        <img src={"/logo.png"} alt="" className="max-w-[80px] rounded-xl" />
        <p>
         House Rental Ltd.
          <br />
          Providing perfect home since 2014
        </p>
        <p className="mt-6">Copyright all right reserved</p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a href="/search-house" className="link link-hover">Renting</a>
        <a href="/search-house" className="link link-hover">Finding</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;
