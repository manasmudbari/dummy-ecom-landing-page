import { useState } from "react";
import styles from "../styles/Home.module.scss";
const Welcome = () => {
	const [modal, setModal] = useState(false);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [response, setResponse] = useState(false);
	const [sub, setSub] = useState(true);
	const [confrim, setConfrim] = useState(false);
	const [show, setShow] = useState(false);
	const ss = sub ? "yes" : "no";
	const jsons = {
		cashback_type: "percentage",
		cashback: 12.5,
		expiry_date: "03/25/2022",
		activation_url: "https://sandbox.rewardsapp.com/amex/rewards-activation/",
	};
	const send = (e) => {
		e.preventDefault();
		fetch(
			"https://sheet.best/api/sheets/55a61fcf-339e-41c3-a4a6-31e2ae8401c9",
			{
				method: "POST",
				headers: { "Content-Type": "Application/json" },
				body: JSON.stringify({
					Full_Name: name,
					Company_Email: email,
					Subscribed: ss,
				}),
			}
		)
			.then((res) => res.json())
			.then((d) => {
				if (d[0].Full_Name) {
					setConfrim(true);
				}
			});
	};
	const handleres = () => {
		setShow(true);
		setTimeout(() => {
			setShow(false);
			setResponse(true);
		}, 800);
	};
	const showanime = show ? { display: "block" } : { display: "none" };
	return (
		<div className={styles.blackBackground}>
			<div className={styles.redBackGround}>
				{modal && (
					<div className={styles.popup}>
						{confrim ? (
							<div className={styles.confrim}>
								<span>
									Thank you for requesting access. Someone from our team will
									contact you soon.
								</span>
								<button onClick={() => setModal(false)}>ok</button>
							</div>
						) : (
							<form onSubmit={(e) => send(e)} className={styles.form}>
								<div className={styles.close}>
									<span onClick={() => setModal(false)}>x</span>
								</div>
								<div className={styles.wraper}>
									<label>Full Name</label>
									<input
										type='text'
										onChange={(e) => setName(e.target.value)}
										required
									/>
								</div>
								<div className={styles.wraper}>
									<label>Company Email</label>
									<input
										type='email'
										onChange={(e) => setEmail(e.target.value)}
										required
									/>
								</div>
								<div className={styles.wrap}>
									<input
										type='checkbox'
										onChange={(e) => setSub(e.target.checked)}
										checked={sub}
									/>
									<label>Also subscribe me to your newsletter.</label>
								</div>
								<div className={styles.submit}>
									<button type='submit' className={styles.button}>
										Request
									</button>
								</div>
							</form>
						)}
					</div>
				)}
				<img
					className={styles.background}
					src='Background.png'
					alt='backgound'
				/>
				<img
					className={styles.backgroundm}
					src='Backgroundm.png'
					alt='backgound red curve'
				/>
				<div className={styles.container}>
					<div className={styles.logo}>
						<span>LAKHE</span>
					</div>
					<h1 className={styles.heading}>Offer Cashback at Checkout</h1>
					<p className={styles.description}>
						Engage consumers through credit card cashback rewards activation at
						checkout.
					</p>
					<div>
						<div onClick={() => setModal(true)} className={styles.actionButton}>
							Request a Demo
						</div>
					</div>
					<img className={styles.laptop} src='Screen.png' alt='webpage view' />
					<h1 className={styles.feature}>FEATURES</h1>
					<p className={styles.description2}>
						Realtime cashback rewards and activation syncing between merchant
						and credit card issuers.
					</p>
					<div className={styles.features}>
						<div className={styles.code}>
							{!response ? (
								<>
									<div>
										curl -X POST https://sandbox.rewardsapp.com/transactions/get
										\
									</div>
									<div>-H &#39;Content-Type: application/json&#39; \</div>
									<div> -d &#39;&#10100;</div>
									<div className={styles.props}>
										&#34;merchant_id&#34;<span className={styles.token}>:</span>
										<span className={styles.value}>
											&#34;Dummy_Commerce&#34;,
										</span>
									</div>
									<div className={styles.props}>
										&#34;credit_card&#34;<span className={styles.token}>:</span>
										<span className={styles.value}>
											&#34;3759 876543 21001&#34;,
										</span>
									</div>
									<div className={styles.props}>
										&#34;access_token&#34;
										<span className={styles.token}>:</span>
										<span className={styles.value}>
											&#34;MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3&#34;
										</span>
									</div>
									<div className={styles.rightbracs}>&#10101;&#39;</div>
									<div style={showanime} className={styles.animation}></div>
									<div onClick={() => handleres()} className={styles.button}>
										RUN
									</div>
								</>
							) : (
								<div className={styles.pre}>
									<div>&#10100;</div>
									<div className={styles.props}>
										&#34;cashback_type&#34;
										<span className={styles.token}>:</span>
										<span className={styles.value}>&#34;percentage&#34;,</span>
									</div>
									<div className={styles.props}>
										&#34;cashback&#34;<span className={styles.token}>:</span>
										<span className={styles.value}>12.5,</span>
									</div>
									<div className={styles.props}>
										&#34;expiry_date&#34;<span className={styles.token}>:</span>
										<span className={styles.value}>&#34;03/25/2022&#34;,</span>
									</div>
									<div className={styles.props}>
										&#34;activation_url&#34;
										<span className={styles.token}>:</span>
										<span className={styles.value}>
											&#34;https://sandbox.rewardsapp.com/amex/rewards-activation/&#34;
										</span>
									</div>
									<div>&#10101;</div>
								</div>
							)}
						</div>

						<div className={styles.points}>
							<div className={styles.point}>
								<div className={styles.top}>
									<img src='redcart.svg' alt='icon' />
									<h2>Prevent Cart Abandonment </h2>
								</div>
								<p className={styles.bottom}>
									Help your customer offset total cost through cashback rewards
									info during checkout.
								</p>
							</div>
							<div className={styles.point}>
								<div className={styles.top}>
									<img src='infinite.svg' alt='icon' />
									<h2>Automated Syncing</h2>
								</div>
								<p className={styles.bottom}>
									Realtime syncing between your platform and credit card
									issuer’s database.
								</p>
							</div>
							<div className={styles.point}>
								<div className={styles.top}>
									<img src='switch.svg' alt='icon' />
									<h2>Frictionless Activation</h2>
								</div>
								<p className={styles.bottom}>
									Works with any checkout system, wallet or payment gateway.
								</p>
							</div>
						</div>
					</div>
					<div className={styles.footer}>
						<div className={styles.title}>
							<h1>Subscribe to our newsletter</h1>
						</div>

						<iframe
							className={styles.iframe}
							src='https://lakhe.substack.com/embed'
							height='320'
							style={{ border: "1px solid #EEE", background: "white" }}
							frameBorder='0'
							scrolling='no'
						></iframe>
					</div>
				</div>
			</div>
			<p className={styles.copyr}>© 2022 Lakhe. All Rights Reserved.</p>
		</div>
	);
};

export default Welcome;
