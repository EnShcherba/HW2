import React from 'react';
import { HomeSection } from './components/homeSection';
import { Product } from './components/product';
import { Employee } from './components/employee';
import { PhoneNumber } from './components/phoneNumber';
import { NavBar } from './components/navbar';
import './navbar.css'


function App() {
	return (
		<div className="goto-here">
			<div className="py-1 bg-primary">
				<div className="container">
					<div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
						<div className="col-lg-12 d-block">
							<div className="row d-flex">
								<div className="col-md pr-4 d-flex topper align-items-center">
									<div className="icon mr-2 d-flex justify-content-center align-items-center"><span className="icon-phone2"></span></div>
									<span className="text">+ 1235 2355 98</span>
								</div>
								<div className="col-md pr-4 d-flex topper align-items-center">
									<div className="icon mr-2 d-flex justify-content-center align-items-center"><span className="icon-paper-plane"></span></div>
									<span className="text">youremail@email.com</span>
								</div>
								<div className="col-md-5 pr-4 d-flex topper align-items-center text-lg-right">
									<span className="text">3-5 Business days delivery &amp; Free Returns</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
				<div className="container">
					<a className="navbar-brand" href="index.html">Vegefoods</a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="oi oi-menu"></span> Menu
	      </button>

					<div className="collapse navbar-collapse" id="ftco-nav">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item active"><a href="index.html" className="nav-link">Home</a></li>
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shop</a>
								<div className="dropdown-menu" aria-labelledby="dropdown04">
									<a className="dropdown-item" href="shop.html">Shop</a>
									<a className="dropdown-item" href="wishlist.html">Wishlist</a>
									<a className="dropdown-item" href="product-single.html">Single Product</a>
									<a className="dropdown-item" href="cart.html">Cart</a>
									<a className="dropdown-item" href="checkout.html">Checkout</a>
								</div>
							</li>
							<li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
							<li className="nav-item"><a href="blog.html" className="nav-link">Blog</a></li>
							<li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
							<li className="nav-item cta cta-colored"><a href="cart.html" className="nav-link"><span className="icon-shopping_cart"></span>[0]</a></li>

						</ul>
					</div>
				</div>
			</nav>

			<HomeSection />
			<NavBar items={['Home', 'Search', 'About']} initialActiveItemId="Home" />

			<section className="ftco-section">
				<div className="container">
					<div className="row no-gutters ftco-services">
						<div className="col-md-3 text-center d-flex align-self-stretch ">
							<div className="media block-6 services mb-md-0 mb-4">
								<div className="icon bg-color-1 active d-flex justify-content-center align-items-center mb-2">
									<span className="flaticon-shipped"></span>
								</div>
								<div className="media-body">
									<h3 className="heading">Free Shipping</h3>
									<span>On order over $100</span>
								</div>
							</div>
						</div>
						<div className="col-md-3 text-center d-flex align-self-stretch ">
							<div className="media block-6 services mb-md-0 mb-4">
								<div className="icon bg-color-2 d-flex justify-content-center align-items-center mb-2">
									<span className="flaticon-diet"></span>
								</div>
								<div className="media-body">
									<h3 className="heading">Always Fresh</h3>
									<span>Product well package</span>
								</div>
							</div>
						</div>
						<div className="col-md-3 text-center d-flex align-self-stretch ">
							<div className="media block-6 services mb-md-0 mb-4">
								<div className="icon bg-color-3 d-flex justify-content-center align-items-center mb-2">
									<span className="flaticon-award"></span>
								</div>
								<div className="media-body">
									<h3 className="heading">Superior Quality</h3>
									<span>Quality Products</span>
								</div>
							</div>
						</div>
						<div className="col-md-3 text-center d-flex align-self-stretch ">
							<div className="media block-6 services mb-md-0 mb-4">
								<div className="icon bg-color-4 d-flex justify-content-center align-items-center mb-2">
									<span className="flaticon-customer-service"></span>
								</div>
								<div className="media-body">
									<h3 className="heading">Support</h3>
									<span>24/7 Support</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="ftco-section ftco-category ftco-no-pt">
				<div className="container">
					<div className="row">
						<div className="col-md-8">
							<div className="row">
								<div className="col-md-6 order-md-last align-items-stretch d-flex">
									<div className="category-wrap-2  img align-self-stretch d-flex" style={{ backgroundImage: 'url(images/category.jpg)' }}>
										<div className="text text-center">
											<h2>Vegetables</h2>
											<p>Protect the health of every home</p>
											<p><a href="#" className="btn btn-primary">Shop now</a></p>
										</div>
									</div>
								</div>
								<div className="col-md-6">
									<div className="category-wrap  img mb-4 d-flex align-items-end" style={{ backgroundImage: 'url(images/category-1.jpg)' }}>
										<div className="text px-3 py-1">
											<h2 className="mb-0"><a href="#">Fruits</a></h2>
										</div>
									</div>
									<div className="category-wrap  img d-flex align-items-end" style={{ backgroundImage: 'url(images/category-2.jpg)' }}>
										<div className="text px-3 py-1">
											<h2 className="mb-0"><a href="#">Vegetables</a></h2>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-md-4">
							<div className="category-wrap  img mb-4 d-flex align-items-end" style={{ backgroundImage: 'url(images/category-3.jpg)' }}>
								<div className="text px-3 py-1">
									<h2 className="mb-0"><a href="#">Juices</a></h2>
								</div>
							</div>
							<div className="category-wrap  img d-flex align-items-end" style={{ backgroundImage: 'url(images/category-4.jpg)' }}>
								<div className="text px-3 py-1">
									<h2 className="mb-0"><a href="#">Dried</a></h2>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="ftco-section">
				<div className="container">
					<div className="row justify-content-center mb-3 pb-3">
						<div className="col-md-12 heading-section text-center ">
							<span className="subheading">Featured Products</span>
							<h2 className="mb-4">Our Products</h2>
							<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-md-6 col-lg-3 ">
							<Product productImg="images/product-1.jpg" productStatus='30%' productName='Bell Pepper' oldPrice='$120.00' price='$80.00' />
						</div>
						<div className="col-md-6 col-lg-3 ">
							<Product productImg="images/product-2.jpg" productName='Strawberry' price='$120.00' />
						</div>
						<div className="col-md-6 col-lg-3 ">
							<Product productImg="images/product-3.jpg" productName='Green Beans' price='$120.00' />
						</div>
						<div className="col-md-6 col-lg-3 ">
							<Product productImg="images/product-4.jpg" productName='Purple Cabbage' price='$120.00' />
						</div>
						<div className="col-md-6 col-lg-3 ">
							<Product productImg="images/product-5.jpg" productStatus='30%' productName='Tomatoe' oldPrice='$120.00' price='$80.00' />
						</div>
						<div className="col-md-6 col-lg-3 ">
							<Product productImg="images/product-6.jpg" productName='Brocolli' price='$120.00' />
						</div>
						<div className="col-md-6 col-lg-3 ">
							<Product productImg="images/product-7.jpg" productName='Carrots' price='$120.00' />
						</div>
						<div className="col-md-6 col-lg-3 ">
							<Product productImg="images/product-8.jpg" productName='Fruit Juice' price='$120.00' />
						</div>
					</div>
				</div>
			</section>
			<section className="ftco-section img" style={{ backgroundImage: 'url(images/bg_3.jpg)' }}>
				<div className="container">
					<div className="row justify-content-end">
						<div className="col-md-6 heading-section  deal-of-the-day ">
							<span className="subheading">Best Price For You</span>
							<h2 className="mb-4">Deal of the day</h2>
							<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
							<h3><a href="#">Spinach</a></h3>
							<span className="price">$10 <a href="#">now $5 only</a></span>
							<div id="timer" className="d-flex mt-5">
								<div className="time" id="days"></div>
								<div className="time pl-3" id="hours"></div>
								<div className="time pl-3" id="minutes"></div>
								<div className="time pl-3" id="seconds"></div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="ftco-section testimony-section">
				<div className="container">
					<div className="row justify-content-center mb-5 pb-3">
						<div className="col-md-7 heading-section  text-center">
							<span className="subheading">Testimony</span>
							<h2 className="mb-4">Our satisfied customer says</h2>
							<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
						</div>
					</div>
					<div className="row ">
						<div className="col-md-12">
							<div className="carousel-testimony owl-carousel">
								<Employee backgroundImage="images/person_1.jpg" position='Marketing Manager' />
								<Employee backgroundImage="images/person_2.jpg" position='Interface Designer' />
								<Employee backgroundImage="images/person_3.jpg" position='UI Designer' />
								<Employee backgroundImage="images/person_1.jpg" position='Web Developer' />
								<Employee backgroundImage="images/person_1.jpg" position='System Analyst' />

							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="ftco-section ftco-partner">
				<div className="container">
					<div className="row">
						<div className="col-sm ">
							<a href="#" className="partner"><img src="images/partner-1.png" className="img-fluid" alt="Colorlib Template" /></a>
						</div>
						<div className="col-sm ">
							<a href="#" className="partner"><img src="images/partner-2.png" className="img-fluid" alt="Colorlib Template" /></a>
						</div>
						<div className="col-sm ">
							<a href="#" className="partner"><img src="images/partner-3.png" className="img-fluid" alt="Colorlib Template" /></a>
						</div>
						<div className="col-sm ">
							<a href="#" className="partner"><img src="images/partner-4.png" className="img-fluid" alt="Colorlib Template" /></a>
						</div>
						<div className="col-sm ">
							<a href="#" className="partner"><img src="images/partner-5.png" className="img-fluid" alt="Colorlib Template" /></a>
						</div>
					</div>
				</div>
			</section>

			<section className="ftco-section ftco-no-pt ftco-no-pb py-5 bg-light">
				<div className="container py-4">
					<div className="row d-flex justify-content-center py-5">
						<div className="col-md-6">
							<h2 style={{ fontSize: '22px' }} className="mb-0">Subcribe to our Newsletter</h2>
							<span>Get e-mail updates about our latest shops and special offers</span>
						</div>
						<div className="col-md-6 d-flex align-items-center">
							<form action="#" className="subscribe-form">
								<div className="form-group d-flex">
									<input type="text" className="form-control" placeholder="Enter email address" />
									<PhoneNumber/>
									<input type="submit" value="Subscribe" className="submit px-3" />
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
			<footer className="ftco-footer ftco-section">
				<div className="container">
					<div className="row">
						<div className="mouse">
							<a href="#" className="mouse-icon">
								<div className="mouse-wheel"><span className="ion-ios-arrow-up"></span></div>
							</a>
						</div>
					</div>
					<div className="row mb-5">
						<div className="col-md">
							<div className="ftco-footer-widget mb-4">
								<h2 className="ftco-heading-2">Vegefoods</h2>
								<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
								<ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
									<li className=""><a href="#"><span className="icon-twitter"></span></a></li>
									<li className=""><a href="#"><span className="icon-facebook"></span></a></li>
									<li className=""><a href="#"><span className="icon-instagram"></span></a></li>
								</ul>
							</div>
						</div>
						<div className="col-md">
							<div className="ftco-footer-widget mb-4 ml-md-5">
								<h2 className="ftco-heading-2">Menu</h2>
								<ul className="list-unstyled">
									<li><a href="#" className="py-2 d-block">Shop</a></li>
									<li><a href="#" className="py-2 d-block">About</a></li>
									<li><a href="#" className="py-2 d-block">Journal</a></li>
									<li><a href="#" className="py-2 d-block">Contact Us</a></li>
								</ul>
							</div>
						</div>
						<div className="col-md-4">
							<div className="ftco-footer-widget mb-4">
								<h2 className="ftco-heading-2">Help</h2>
								<div className="d-flex">
									<ul className="list-unstyled mr-l-5 pr-l-3 mr-4">
										<li><a href="#" className="py-2 d-block">Shipping Information</a></li>
										<li><a href="#" className="py-2 d-block">Returns &amp; Exchange</a></li>
										<li><a href="#" className="py-2 d-block">Terms &amp; Conditions</a></li>
										<li><a href="#" className="py-2 d-block">Privacy Policy</a></li>
									</ul>
									<ul className="list-unstyled">
										<li><a href="#" className="py-2 d-block">FAQs</a></li>
										<li><a href="#" className="py-2 d-block">Contact</a></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-md">
							<div className="ftco-footer-widget mb-4">
								<h2 className="ftco-heading-2">Have a Questions?</h2>
								<div className="block-23 mb-3">
									<ul>
										<li><span className="icon icon-map-marker"></span><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
										<li><a href="#"><span className="icon icon-phone"></span><span className="text">+2 392 3929 210</span></a></li>
										<li><a href="#"><span className="icon icon-envelope"></span><span className="text">info@yourdomain.com</span></a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12 text-center">

						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default App;
