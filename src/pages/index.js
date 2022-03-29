import React from 'react';

const Index = () => {
  return (
    <div className="login-page">
        <div className="hero-main">
            <div className="hero-content">
                <h1>Films, séries TV et bien plus en illimité.</h1>
                <h4>Où que vous soyez. Annulez à tout moment.</h4>
                <p>Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous abonner ou réactiver votre abonnement.</p>
                <div className="input-group">
                    <input type="text" className="input" placeholder="Adresse e-mail" />
                    <button type="button" className="button button-red">Commencer</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Index;
