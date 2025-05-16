import React from 'react'
import EditProfil from '../components/EditProfil'
import { useSelector } from 'react-redux';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Transactions from '../components/Transactions';

export default function Profil() {

    const { data } = useSelector((state) => state.user);
    const { token } = useSelector((state) => state.auth);

  return (
    <div>
        <Nav />
            <main className="main bg-dark-profile">
                <div className="header">
                    <h1 className="first-title">Welcome back</h1>
                    {data ? 
                    <EditProfil data={data} token={token} /> : 
                    <p>Loading user...</p>
                    }
                </div>
                <h2 className="sr-only">Accounts</h2>
                <Transactions
                title={"Argent Bank Checking (x8349)"}
                amount={"$2,082.79"}
                description={"Available Balance"}
                button={"View transactions"}
                />
                <Transactions
                title={"Argent Bank Savings (x6712)"}
                amount={"$10,928.42"}
                description={"Available Balance"}
                button={"View transactions"}
                />
                <Transactions
                title={"Argent Bank Credit Card (x8349)"}
                amount={"$184.30"}
                description={"Current Balance"}
                button={"View transactions"}
                />
            </main>
        <Footer />
    </div>
  )
}
