import React from 'react'
import LoginForm from '../components/LoginForm'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Login() {
  return (
	<div>
		<Nav />
		<main className="main bg-dark">
			<section className="sign-in-content">
				<i className="fa fa-user-circle sign-in-icon"></i>
				<h1>Sign In</h1>
				<LoginForm />
			</section>
		</main>
		<Footer />
	</div>
  )
}
