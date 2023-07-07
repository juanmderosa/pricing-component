
export const PriceContainer = ({plans, period}) => {
  return (
    <section className="plans-main-container">
        {plans.map((plan, index)=>(
            <article className={`plan-option-container ${index === 1 ? 'second-plan' : ''}`} key={index}>
            <h3 className="plan-name">{plan.name}</h3>
            <h2 className="plan-price">${!period ? plan.monthlyPrice : plan.anualPrice}</h2>
            <div className="plan-details-container">
                <p className="plan-detail">{plan.storage}</p>
                <p className="plan-detail">{plan.users}</p>
                <p className="plan-detail">{plan.transfer}</p>
            </div>
            <button className="btn-learnMore">Learn More</button>
        </article>
        ))}
    </section>
  )
}
