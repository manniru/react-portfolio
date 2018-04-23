import React, {Component} from "react";
import "./Contact.css";

class Contact extends Component{
	render(){
		return(
			<section id="contact" className="section section-contact scrollspy">
				<div className="container">
					<div className="row">
						<div className="col s12 m6">
							<div className="card-panel grey lighten-3">
								<div className="row no-margin">
									<div className="col s12">
										<h5>Contact Me via this form</h5>
									</div>
								</div>
								<div className="row no-margin">
									<form action="https://formspree.io/jonmpan@gmail.com"
									method="POST" className="col s12 no-padding">
										<div className="row no-margin">
											<div class="input-field col s12">
												<i class="material-icons prefix">account_circle</i>
												<input id="name" type="text" class="validate" name="name" />
												<label for="name">First Name</label>
											</div>
										</div>
										<div className="row no-margin">
											<div className="input-field col s12">
												<i className="material-icons prefix">mail</i>
												<input id="email" type="email" className="validate" name="_replyto" />
												<label for="email">Email</label>
											</div>
										</div>
										<div className="row no-margin">
											<div className="input-field col s12">
												<i className="material-icons prefix">comment</i>
												<textarea id="comment" type="email" className="materialize-textarea" name="comment" data-length="200"></textarea>
												<label for="comment">Comment</label>
											</div>
										</div>
										<div className="row no-margin">
											<div className="col s12 right-align">
												<button class="btn waves-effect waves-light" type="submit" name="action">
													Submit
													<i class="material-icons right">send</i>
												</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div className="col s12 m6">
							<div className="card-panel teal white-text center">
								<i className="material-icons large">email</i>
								<h5>Or you can email me directly at:</h5>
								<h6>jonmpan@gmail.com</h6>
							</div>
						</div>
						
					</div>
				</div>
			</section>
		)
	}
}

export default Contact;

									// <input type="text" name="name" />
									// <input type="email" name="_replyto" />
									// <input type="text" name="comment" />
									// <input type="submit" value="Send" />